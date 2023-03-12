import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
// import { DoctorInsurance } from 'src/entities/entities/doctorInsurance.entity';
// import { HealthInsurance } from 'src/entities/entities/healthInsurance.entity';
// import { Doctor } from 'src/entities/entities/doctor.entity';
// import { Patient } from 'src/entities/entities/patient.entity';
// import { Queries } from 'src/entities/entities/query.entity';
// import { Schedule } from 'src/entities/entities/schedule.entity';
// import { Specialty } from 'src/entities/entities/specialty.entity';
// import { DoctorSpecialty } from 'src/entities/entities/doctorSpecialty.entity';

config();

const configService = new ConfigService();

export const dataSourceOptions: DataSourceOptions = {
   type: 'postgres',
   host: configService.get('POSTGRES_HOST'),
   port: configService.get('POSTGRES_PORT'),
   username: configService.get('POSTGRES_USER'),
   password: configService.get('POSTGRES_PASSWORD'),
   database: configService.get('POSTGRES_DB'),
   entities: ['dist/src/entities/entities/*.entity.{js,ts}'],
   // entities: [Specialty, Doctor, DoctorSpecialty, DoctorInsurance, HealthInsurance, Patient, Queries, Schedule],
   migrations: ['dist/src/migrations/*-migration.{js,ts}'], //dist\src\migrations\1678657046688-migration.js
   logging: true,
   synchronize: true,
   migrationsRun: true,
};
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
