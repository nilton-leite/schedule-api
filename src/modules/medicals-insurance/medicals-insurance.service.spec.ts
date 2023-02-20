import { Test, TestingModule } from '@nestjs/testing';
import { MedicalsInsuranceService } from './medicals-insurance.service';

describe('MedicalsInsuranceService', () => {
  let service: MedicalsInsuranceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalsInsuranceService],
    }).compile();

    service = module.get<MedicalsInsuranceService>(MedicalsInsuranceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
