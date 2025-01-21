import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  getAllEvents() {
    return this.eventRepository.findOneOrFail;
  }

  getEvent(){
    return "event";
  }
  
}
