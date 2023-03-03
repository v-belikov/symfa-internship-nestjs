import { ApiProperty } from '@nestjs/swagger';

import { ImageCart, ImagePreview } from '@entities/images';
import { Size } from '@models/enum';

export class ApiGetProductModel {
  @ApiProperty({ example: ['X', 'L', 'XL', 'XXL'] })
  availableSizes: Size[];

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

  @ApiProperty({
    example: {
      id: '8997b295-4bc8-4c3d-8c60-ea00dd1217bf',
      path: 'images/products/10547961582846888-1-cart.webp',
    },
  })
  imageCart: ImageCart;

  @ApiProperty({
    example: [
      {
        id: 'aa069b3c-4af1-47ca-99cb-f51351038f3f',
        path: 'images/products/10547961582846888-2-product.webp',
        order: 1,
      },
      {
        id: 'e372ad9e-43ca-4e08-aca1-d6acdabe8529',
        path: 'images/products/10547961582846888-1-product.webp',
        order: 0,
      },
    ],
  })
  imagePreview: ImagePreview[];
}
