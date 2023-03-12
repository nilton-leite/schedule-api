import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { HealthInsurance } from './healthInsurance.entity';

@Entity('patient')
export class Patient {
   @PrimaryGeneratedColumn({
      type: 'integer',
      name: 'patientId',
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
      name: 'zipCode',
   })
   zipCode: string;

   @Column({
      name: 'street',
   })
   street: string;

   @Column({
      name: 'number',
   })
   number: string;

   @Column({
      name: 'complement',
   })
   complement: string;

   @Column({
      name: 'acceptedMessage',
   })
   acceptedMessage: boolean;

   @ManyToOne(() => HealthInsurance, (heal) => heal.patient)
   @JoinColumn({ name: 'healthInsuranceId' })
   patient: HealthInsurance;
}
