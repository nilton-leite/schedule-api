import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DoctorInsurance } from './doctorInsurance.entity';
import { Patient } from './patient.entity';
import { Schedule } from './schedule.entity';

@Entity('healthInsurance')
export class HealthInsurance {
   @PrimaryGeneratedColumn({
      type: 'integer',
      name: 'healthInsuranceId',
   })
   healthInsuranceId: number;

   @Column({
      name: 'uuid',
   })
   uuid: string;

   @Column({
      name: 'name',
   })
   name: string;

   @Column({
      name: 'status',
   })
   status: number;

   @OneToMany(() => DoctorInsurance, (doc) => doc.healthInsurance)
   doctorHealthInsurance: DoctorInsurance[];

   @OneToMany(() => Patient, (pat) => pat.patient)
   patient: Patient[];

   @OneToMany(() => Schedule, (pat) => pat.schedule)
   schedule: Schedule[];
}
