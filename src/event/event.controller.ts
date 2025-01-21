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


  async getAllEvents(): Promise<Event[]> {
    return await this.eventRepository.find();
  }


  async getEvent(id: number): Promise<Event> {
    return await this.eventRepository.findOneOrFail({
      where: { eventId: id },
    });
  }


  async createEvent(eventData: Partial<Event>): Promise<Event> {
    const event = this.eventRepository.create(eventData);
    return await this.eventRepository.save(event);
  }

  
  async updateEvent(id: number, eventData: Partial<Event>): Promise<Event> {
    const event = await this.getEvent(id);
    Object.assign(event, eventData);
    return await this.eventRepository.save(event);
  }

  
  async deleteEvent(id: number): Promise<void> {
    const event = await this.getEvent(id);
    await this.eventRepository.remove(event);
  }
}
