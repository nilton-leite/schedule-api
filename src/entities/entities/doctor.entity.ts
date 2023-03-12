import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { DoctorInsurance } from './doctorInsurance.entity';
import { DoctorSpecialty } from './doctorSpecialty.entity';
export class Days {
   readonly seg: boolean;
   readonly ter: boolean;
   readonly quar: boolean;
   readonly quin: boolean;
   readonly sex: boolean;
   readonly sab: boolean;
   readonly dom: boolean;
}
@Entity('doctor')
export class Doctor {
   @PrimaryGeneratedColumn({
      type: 'integer',
      name: 'doctorId',
   })
   doctorId: number;

   @Column({
      name: 'uuid',
   })
   uuid: string;

   @Column({
      name: 'name',
   })
   name: string;

   @Column({
      name: 'dateBirth',
   })
   dateBirth: Date;

   @Column({
      name: 'document',
   })
   document: string;

   @Column({
      name: 'phone',
   })
   phone: string;

   @Column({
      name: 'timeSendConfirmation',
   })
   timeSendConfirmation: number;

   @Column({
      name: 'workDays',
      type: 'json',
   })
   workDays: Days;

   @Column({
      name: 'status',
   })
   status: number;

   @OneToMany(() => DoctorSpecialty, (doc) => doc.doctors)
   doctorsScpecialties: DoctorSpecialty[];

   @OneToMany(() => DoctorInsurance, (doc) => doc.doctors)
   doctorHealthInsurance: DoctorInsurance[];
}
