import { ApiProperty } from '@nestjs/swagger';

import { ImageCart, ImagePreview } from '@entities/images';
import { Size } from '@models/enum';

export class ApiGetProductsPreviewModel {
  @ApiProperty()
  id: number;

  @ApiProperty({ type: [String] })
  availableSizes: Size[];

  @ApiProperty()
  currencyFormat: string;

  @ApiProperty()
  currencyId: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  installments: number;

  @ApiProperty()
  isFreeShipping: boolean;

  @ApiProperty()
  imageCart: ImageCart;

  @ApiProperty()
  imagePreview: ImagePreview;

  @ApiProperty()
  price: number;

  @ApiProperty()
  style: string;

  @ApiProperty()
  title: string;
}
