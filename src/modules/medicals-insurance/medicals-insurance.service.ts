import { Injectable } from '@nestjs/common';
import { CreateMedicalsInsuranceDto } from './dto/create-medicals-insurance.dto';
import { UpdateMedicalsInsuranceDto } from './dto/update-medicals-insurance.dto';

@Injectable()
export class MedicalsInsuranceService {
  create(createMedicalsInsuranceDto: CreateMedicalsInsuranceDto) {
    return 'This action adds a new medicalsInsurance';
  }

  findAll() {
    return `This action returns all medicalsInsurance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicalsInsurance`;
  }

  update(id: number, updateMedicalsInsuranceDto: UpdateMedicalsInsuranceDto) {
    return `This action updates a #${id} medicalsInsurance`;
  }

  remove(id: number) {
    return `This action removes a #${id} medicalsInsurance`;
  }
}
