import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicalsInsuranceDto } from './create-medicals-insurance.dto';

export class UpdateMedicalsInsuranceDto extends PartialType(CreateMedicalsInsuranceDto) {}
