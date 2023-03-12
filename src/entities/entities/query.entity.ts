import { Schedule } from './schedule.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Timestamp } from 'typeorm';
import { HealthInsurance } from './healthInsurance.entity';

@Entity('queries')
export class Queries {
   @PrimaryGeneratedColumn({
      type: 'integer',
      name: 'queryId',
   })
   scheduleId: number;

   @Column({
      name: 'uuid',
   })
   uuid: string;

   @Column({
      name: 'datetime',
      type: 'timestamptz',
   })
   datetime: Date;

   @Column('text', {
      name: 'obs',
   })
   obs: string;

   @ManyToOne(() => Schedule, (sc) => sc.queries)
   @JoinColumn({ name: 'scheduleId' })
   schedules: Schedule[];
}
