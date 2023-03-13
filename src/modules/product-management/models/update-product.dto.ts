import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto {
  @ApiProperty()
  id: string;

  @ApiProperty({ example: '14/15 s/nº' })
  description: string;

  @ApiProperty({ example: 10.9 })
  price: number;

  @ApiProperty({ example: 'White T-shirt' })
  style: string;

  @ApiProperty({ example: 'Cropped Stay Groovy off white' })
  title: string;
}
