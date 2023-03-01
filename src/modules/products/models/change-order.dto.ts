import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class ChangeOrderDto {
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({ example: 1 })
  order: number;
}
