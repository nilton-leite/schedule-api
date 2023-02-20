import { StatusEnum } from './../../../utils/enum/status.enum';
import { Type } from 'class-transformer';
import { IsEmpty, IsEnum, IsString } from 'class-validator';

export class CreateAgreementDto {
   @Type(() => String)
   @IsString()
   @IsEmpty()
   uuid!: string;

   @Type(() => String)
   @IsString()
   @IsEmpty()
   name!: string;

   @IsEnum(StatusEnum)
   @Type(() => Number)
   @IsEmpty()
   status!: StatusEnum;
}
