import { DeepPartial } from 'typeorm';

import { ImagePreview } from '@entities/images';
import { EnvironmentType } from '@models/enum';

// eslint-disable-next-line no-restricted-imports
import { AbstractLoader, IRelationsOptions } from '../../../abstract-loader';
import { IMAGE_PREVIEW_FIXTURES } from '../../data/images';

export class ImagePreviewLoader extends AbstractLoader<ImagePreview> {
  entity: new () => ImagePreview = ImagePreview;

  data: DeepPartial<ImagePreview>[] = IMAGE_PREVIEW_FIXTURES;

  environments: EnvironmentType[] = [EnvironmentType.Development];

  relations: IRelationsOptions[] = [];
}
