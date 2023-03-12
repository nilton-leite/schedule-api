import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Doctor } from './doctor.entity';
import { Specialty } from './specialty.entity';

@Entity('doctorSpecialty')
export class DoctorSpecialty {
   @PrimaryGeneratedColumn({
      type: 'integer',
      name: 'doctorSpecialtyId',
   })
   doctorSpecialtyId: number;

   @ManyToOne(() => Doctor, (doc) => doc.doctorsScpecialties)
   @JoinColumn({ name: 'doctorId' })
   doctors: Doctor[];

   @ManyToOne(() => Specialty, (doc) => doc.doctorSpecialties)
   @JoinColumn({ name: 'specialtyId' })
   specialties: Doctor[];
}
