import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

import { ChangeOrderDto } from './change-order.dto';

export class UploadProductDto extends ChangeOrderDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'products/path' })
  path: string;
}
