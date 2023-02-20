import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('agreement')
export class Agreement {
   @PrimaryGeneratedColumn({
      type: 'integer',
      name: 'agreementId',
   })
   agreementId: number;

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
}
