import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctor } from 'src/entities/entities/doctor.entity';
import { Repository } from 'typeorm';
import { CreateDoctorDto } from './dto/create-doctor.dto';
// import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class DoctorsService {
   constructor(
      @InjectRepository(Doctor)
      private doctorsRepository: Repository<Doctor>,
   ) {}

   async create(createDoctorDto: CreateDoctorDto): Promise<Doctor> {
      return await this.doctorsRepository.save({ uuid: uuidv4, ...createDoctorDto });
   }

   async findAll(): Promise<Doctor[]> {
      return await this.doctorsRepository.find();
   }

   async findOne(uuid: string): Promise<Doctor> {
      return await this.doctorsRepository.findOneBy({ uuid });
   }

   // async update(uuid: string, updateDoctorDto: UpdateDoctorDto): Promise<Doctor> {
   //    return await this.doctorsRepository.update(updateDoctorDto, { uuid });
   // }

   async remove(uuid: string): Promise<void> {
      await this.doctorsRepository.delete({ uuid });
   }
}
