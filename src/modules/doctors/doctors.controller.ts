import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@Controller('doctors')
export class DoctorsController {
   constructor(private readonly doctorsService: DoctorsService) {}

   @Post()
   create(@Body() createDoctorDto: CreateDoctorDto) {
      return this.doctorsService.create(createDoctorDto);
   }

   @Get()
   findAll() {
      return this.doctorsService.findAll();
   }

   @Get(':uuid')
   findOne(@Param('uuid') uuid: string) {
      return this.doctorsService.findOne(uuid);
   }

   @Patch(':uuid')
   update(@Param('uuid') uuid: string, @Body() updateDoctorDto: UpdateDoctorDto) {
      return this.doctorsService.update(uuid, updateDoctorDto);
   }

   @Delete(':uuid')
   remove(@Param('uuid') uuid: string) {
      return this.doctorsService.remove(uuid);
   }
}
