import { SpecialtiesModule } from './modules/specialties/specialties.module';
import { Module } from '@nestjs/common';
import configTypeORM from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';

@Module({
   imports: [
      ConfigModule.forRoot({ isGlobal: true }),
      TypeOrmModule.forRootAsync(new DataSource(configTypeORM)),
      SpecialtiesModule,
   ],
   controllers: [],
   providers: [],
})
export class AppModule {
   constructor(private dataSource: DataSource) {}
}
