import { Module } from '@nestjs/common';
import { MedicalsInsuranceService } from './medicals-insurance.service';
import { MedicalsInsuranceController } from './medicals-insurance.controller';

@Module({
  controllers: [MedicalsInsuranceController],
  providers: [MedicalsInsuranceService]
})
export class MedicalsInsuranceModule {}
