import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from '../event/schema/event.schema';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  
  async getAllEvents(): Promise<Event[]> {
    return await this.eventRepository.find();
  }

  // Get a single event by ID
  async getEvent(id: number): Promise<Event> {
    const event = await this.eventRepository.findOne({ where: { eventId: id } });
    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }
    return event;
  }

  // Create a new event
  async createEvent(eventData: Partial<Event>): Promise<Event> {
    const event = this.eventRepository.create(eventData);
    return await this.eventRepository.save(event);
  }

  // Update an event by ID
  async updateEvent(id: number, eventData: Partial<Event>): Promise<Event> {
    const existingEvent = await this.getEvent(id);
    Object.assign(existingEvent, eventData);
    return await this.eventRepository.save(existingEvent);
  }

  // Delete an event by ID
  async deleteEvent(id: number): Promise<boolean> {
    const event = await this.getEvent(id);
    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }
    await this.eventRepository.remove(event);
    return true;
  }

  // Find events by a specific field (e.g., title or date)
  async findEventsByField(field: keyof Event, value: any): Promise<Event[]> {
    return await this.eventRepository.find({ where: { [field]: value } });
  }

  // Count the total number of events
  async countEvents(): Promise<number> {
    return await this.eventRepository.count();
  }

  // Check if an event exists by ID
  async eventExists(id: number): Promise<boolean> {
    const count = await this.eventRepository.count({ where: { eventId: id } });
    return count > 0;
  }
}
