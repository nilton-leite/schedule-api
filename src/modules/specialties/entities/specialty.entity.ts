import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
