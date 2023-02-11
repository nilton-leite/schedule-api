import { Specialty } from './../modules/specialties/entities/specialty.entity';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

const configTypeORM: any = {
   type: 'postgres',
   host: configService.get('POSTGRES_HOST'),
   port: configService.get('POSTGRES_PORT'),
   username: configService.get('POSTGRES_USER'),
   password: configService.get('POSTGRES_PASSWORD'),
   database: configService.get('POSTGRES_DB'),
   entities: [Specialty],
   autoLoadEntities: true,
};

export default configTypeORM;
