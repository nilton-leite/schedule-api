import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicalsInsuranceService } from './medicals-insurance.service';
import { CreateMedicalsInsuranceDto } from './dto/create-medicals-insurance.dto';
import { UpdateMedicalsInsuranceDto } from './dto/update-medicals-insurance.dto';

@Controller('medicals-insurance')
export class MedicalsInsuranceController {
  constructor(private readonly medicalsInsuranceService: MedicalsInsuranceService) {}

  @Post()
  create(@Body() createMedicalsInsuranceDto: CreateMedicalsInsuranceDto) {
    return this.medicalsInsuranceService.create(createMedicalsInsuranceDto);
  }

  @Get()
  findAll() {
    return this.medicalsInsuranceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalsInsuranceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicalsInsuranceDto: UpdateMedicalsInsuranceDto) {
    return this.medicalsInsuranceService.update(+id, updateMedicalsInsuranceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalsInsuranceService.remove(+id);
  }
}
