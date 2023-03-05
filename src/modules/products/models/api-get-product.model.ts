import { ApiProperty } from '@nestjs/swagger';

import { ImageCart, ImagePreview } from '@entities/images';
import { AwareIdDto } from '@models/dto';

export class ApiGetProductModel extends AwareIdDto {
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
  imagesPreview: ImagePreview[];

  @ApiProperty({ example: '4afb3eee-e88c-43a2-80dc-215839a6562e' })
  imagesCart: ImageCart;
}
