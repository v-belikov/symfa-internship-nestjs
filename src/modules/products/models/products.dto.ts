import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsEnum, IsOptional } from 'class-validator';

import { Size } from '@models/enum';

export class ProductsDto {
  @IsArray()
  @IsOptional()
  @IsEnum(Size, { each: true })
  @ApiPropertyOptional({ enum: Size, name: 'sizes[]', isArray: true })
  sizes: Size[];
}
