import { EntitiesModule } from './entities/entities.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
// import { SpecialtiesModule } from './modules/specialties/specialties.module';
// import { DoctorsModule } from './modules/doctors/doctors.module';
// import { PatientsModule } from './modules/patients/patients.module';
// import { SchedulesModule } from './modules/schedules/schedules.module';
// import { QueriesModule } from './modules/queries/queries.module';
// import { MedicalsInsuranceModule } from './modules/medicals-insurance/medicals-insurance.module';
import { dataSourceOptions } from './config/dataSource';
// import { HealthInsurance } from './entities/entities/healthInsurance.entity';

@Module({
   imports: [
      ConfigModule.forRoot({ isGlobal: true }),
      TypeOrmModule.forRoot(dataSourceOptions),
      EntitiesModule,
      // SpecialtiesModule,
      // HealthInsurance,
      // DoctorsModule,
      // PatientsModule,
      // SchedulesModule,
      // QueriesModule,
      // MedicalsInsuranceModule,
   ],
   controllers: [],
   providers: [],
})
export class AppModule {}
