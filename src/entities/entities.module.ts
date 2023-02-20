import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agreement } from './entities/agreement.entity';
import { Doctor } from './entities/doctor.entity';
import { MedicalsInsurance } from './entities/medicals-insurance.entity';
import { Patient } from './entities/patient.entity';
import { Query } from './entities/query.entity';
import { Schedule } from './entities/schedule.entity';
import { Specialty } from './entities/specialty.entity';

@Module({
   imports: [TypeOrmModule.forFeature([Agreement, Doctor, MedicalsInsurance, Patient, Query, Schedule, Specialty])],
   exports: [TypeOrmModule],
})
export class EntitiesModule {}
