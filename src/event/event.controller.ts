import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from '../event/schema/event.schema';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  // Get all events
  async getAllEvents(): Promise<Event[]> {
    return await this.eventRepository.find();
  }

  // Get a single event by ID
  async getEvent(id: number): Promise<Event> {
    return await this.eventRepository.findOneOrFail({
      where: { eventId: id },
    });
  }

  // Create a new event
  async createEvent(eventData: Partial<Event>): Promise<Event> {
    const event = this.eventRepository.create(eventData);
    return await this.eventRepository.save(event);
  }

  // Update an event
  async updateEvent(id: number, eventData: Partial<Event>): Promise<Event> {
    const event = await this.getEvent(id);
    Object.assign(event, eventData);
    return await this.eventRepository.save(event);
  }

  // Delete an event
  async deleteEvent(id: number): Promise<void> {
    const event = await this.getEvent(id);
    await this.eventRepository.remove(event);
  }
}
