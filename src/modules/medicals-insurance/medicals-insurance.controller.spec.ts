import { Test, TestingModule } from '@nestjs/testing';
import { MedicalsInsuranceController } from './medicals-insurance.controller';
import { MedicalsInsuranceService } from './medicals-insurance.service';

describe('MedicalsInsuranceController', () => {
  let controller: MedicalsInsuranceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalsInsuranceController],
      providers: [MedicalsInsuranceService],
    }).compile();

    controller = module.get<MedicalsInsuranceController>(MedicalsInsuranceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
