import { ApiProperty } from '@nestjs/swagger';

import { ImagePreview } from '@entities/images';

export class ApiGetProductModel {
  @ApiProperty({ example: '5' })
  id: string;

  @ApiProperty({ example: ['X', 'L', 'XL', 'XXL'] })
  availableSizes: Array<string>;

  @ApiProperty({ example: '$' })
  currencyFormat: string;

  @ApiProperty({ example: 'USD' })
  currencyId: string;

  @ApiProperty({ example: '14/15 s/nº' })
  description: string;

  @ApiProperty({ example: 9 })
  installments: number;

  @ApiProperty({ example: true })
  isFreeShipping: boolean;

  @ApiProperty({ example: 10.9 })
  price: number;

  @ApiProperty({ example: 'White T-shirt' })
  style: string;

  @ApiProperty({ example: 'Cropped Stay Groovy off white' })
  title: string;

  @ApiProperty({ example: '48866931-544d-4f54-9825-1fdee26d4225' })
  images: ImagePreview[];
}
