import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { HealthInsurance } from './healthInsurance.entity';
import { Queries } from './query.entity';

@Entity('schedule')
export class Schedule {
   @PrimaryGeneratedColumn({
      type: 'integer',
      name: 'scheduleId',
   })
   scheduleId: number;

   @Column({
      name: 'uuid',
   })
   uuid: string;

   @Column({
      name: 'data',
   })
   data: Date;

   @Column('time', {
      name: 'time',
   })
   time: Date;

   @Column({
      name: 'hasHealtInsurance',
   })
   hasHealtInsurance: boolean; // Possui convenio

   @Column({
      name: 'fisrtQuery',
   })
   fisrtQuery: boolean; // Primeira consulta

   @Column('text', {
      name: 'obs',
   })
   obs: string;

   @OneToMany(() => Queries, (que) => que.schedules)
   queries: Queries[];

   @ManyToOne(() => HealthInsurance, (heal) => heal.schedule)
   @JoinColumn({ name: 'healthInsuranceId' })
   schedule: HealthInsurance;
}
