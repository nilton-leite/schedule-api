import { StatusEnum } from './../../../utils/enum/status.enum';
import { Transform, Type } from 'class-transformer';
import {
   IsBoolean,
   IsDate,
   IsEmpty,
   IsEnum,
   IsNotEmpty,
   IsNumber,
   IsObject,
   IsString,
   ValidateNested,
} from 'class-validator';

export class DaysDto {
   @IsBoolean()
   readonly seg: boolean;
   readonly ter: boolean;
   readonly quar: boolean;
   readonly quin: boolean;
   readonly sex: boolean;
   readonly sab: boolean;
   readonly dom: boolean;
}

export class CreateDoctorDto {
   @Type(() => String)
   @IsString()
   @IsNotEmpty()
   name!: string;

   @IsNotEmpty()
   @Transform(({ value }) => value && new Date(value))
   @Type(() => Date)
   @IsDate()
   dateBirth!: Date;

   @Type(() => String)
   @IsString()
   @IsNotEmpty()
   document!: string;

   @Type(() => String)
   @IsString()
   @IsNotEmpty()
   phone!: string;

   @Type(() => Number)
   @IsNumber()
   @IsNotEmpty()
   timeSendConfirmation!: number;

   @IsObject()
   @ValidateNested()
   @Type(() => DaysDto)
   readonly workDays: DaysDto;

   @IsEnum(StatusEnum)
   @Type(() => Number)
   @IsNotEmpty()
   status!: StatusEnum;
}
