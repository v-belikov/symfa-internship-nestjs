import { DeepPartial } from 'typeorm';

import { ImagePreview } from '@entities/images';
import { ImageType } from '@models/enum';

import { pathByName } from './path-by-name.constant';

export const generateImagePreview = (
  uuids: string[],
  sku: number,
  productId: string,
): ReadonlyArray<DeepPartial<ImagePreview>> =>
  uuids.map((id: string, index: number) => ({
    id,
    order: index,
    imageType: ImageType.Preview,
    path: pathByName(`${sku}-${index + 1}-product.webp`),
    product: { id: productId },
  }));
