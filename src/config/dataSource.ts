import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { MedicalsInsurance } from 'src/entities/entities/medicals-insurance.entity';
import { Agreement } from 'src/entities/entities/agreement.entity';
import { Doctor } from 'src/entities/entities/doctor.entity';
import { Patient } from 'src/entities/entities/patient.entity';
import { Query } from 'src/entities/entities/query.entity';
import { Schedule } from 'src/entities/entities/schedule.entity';
import { Specialty } from 'src/entities/entities/specialty.entity';

config();

const configService = new ConfigService();

export const dataSourceOptions: DataSourceOptions = {
   type: 'postgres',
   host: configService.get('POSTGRES_HOST'),
   port: configService.get('POSTGRES_PORT'),
   username: configService.get('POSTGRES_USER'),
   password: configService.get('POSTGRES_PASSWORD'),
   database: configService.get('POSTGRES_DB'),
   entities: [Specialty, Agreement, Doctor, MedicalsInsurance, Patient, Query, Schedule],
};
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
