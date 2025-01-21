import { Registration } from 'src/registrations/schema/Registration';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn()
  eventId: string;

  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @Column({ type: 'date', nullable: false })
  eventDate: Date;

  @Column({ type: 'number', nullable: false })
  capacity: number;

  @Column({ type: 'varchar', nullable: false })
  location: string;

  @OneToMany(()=>Registration,(registration)=>registration.eventId)
  eventRegistrations:Registration[];
}
