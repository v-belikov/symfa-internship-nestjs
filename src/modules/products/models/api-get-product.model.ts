import { ApiProperty } from '@nestjs/swagger';

export class ApiGetProductModel {
  @ApiProperty({ example: '48866931-544d-4f54-9825-1fdee26d4225' })
  id: string;

  @ApiProperty({ example: '/products/product' })
  path: string;

  @ApiProperty({ example: 1 })
  order: number;
}
