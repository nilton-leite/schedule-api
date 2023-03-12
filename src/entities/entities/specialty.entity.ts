import { DoctorSpecialty } from './doctorSpecialty.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Doctor } from './doctor.entity';

@Entity('specialty')
export class Specialty {
   @PrimaryGeneratedColumn({
      type: 'integer',
      name: 'specialtyId',
   })
   specialtyId: number;

   @Column({
      name: 'uuid',
   })
   uuid: string;

   @Column({
      name: 'name',
   })
   name: string;

   @Column({
      name: 'description',
   })
   description: string;

   @Column({
      name: 'timePerQuery',
   })
   timePerQuery: number;

   @OneToMany(() => DoctorSpecialty, (doc) => doc.specialties)
   doctorSpecialties: Doctor[];
}
