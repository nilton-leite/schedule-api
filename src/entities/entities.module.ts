import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from './entities/doctor.entity';
import { DoctorInsurance } from './entities/doctorInsurance.entity';
import { DoctorSpecialty } from './entities/doctorSpecialty.entity';
import { HealthInsurance } from './entities/healthInsurance.entity';
import { Patient } from './entities/patient.entity';
import { Queries } from './entities/query.entity';
import { Schedule } from './entities/schedule.entity';
import { Specialty } from './entities/specialty.entity';

@Module({
   imports: [Specialty, Doctor, DoctorSpecialty, DoctorInsurance, HealthInsurance, Patient, Queries, Schedule],
   exports: [TypeOrmModule],
})
export class EntitiesModule {}
