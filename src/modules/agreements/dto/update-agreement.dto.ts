import { PartialType } from '@nestjs/mapped-types';
import { CreateAgreementDto } from './create-agreement.dto';
import { StatusEnum } from './../../../utils/enum/status.enum';
import { Type } from 'class-transformer';
import { IsEmpty, IsEnum, IsString } from 'class-validator';

export class UpdateAgreementDto extends PartialType(CreateAgreementDto) {
   @Type(() => String)
   @IsString()
   @IsEmpty()
   name!: string;

   @IsEnum(StatusEnum)
   @Type(() => Number)
   @IsEmpty()
   status!: StatusEnum;
}
