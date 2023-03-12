import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Doctor } from './doctor.entity';
import { HealthInsurance } from './healthInsurance.entity';

@Entity('doctorInsurance')
export class DoctorInsurance {
   @PrimaryGeneratedColumn({
      type: 'integer',
      name: 'doctorInsuranceId',
   })
   doctorInsuranceId: number;

   @ManyToOne(() => Doctor, (doc) => doc.doctorHealthInsurance)
   @JoinColumn({ name: 'doctorId' })
   doctors: Doctor[];

   @ManyToOne(() => HealthInsurance, (heal) => heal.doctorHealthInsurance)
   @JoinColumn({ name: 'healthInsuranceId' })
   healthInsurance: HealthInsurance[];
}
