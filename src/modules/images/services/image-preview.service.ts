import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ImagePreview } from '@entities/images';
import { ApiGetImagePreviewModel, UploadImageDto } from '@modules/images/models';

@Injectable()
export class ImagePreviewService {
  constructor(
    @InjectRepository(ImagePreview)
    private readonly _imagesPreviewRepository: Repository<ImagePreview>,
  ) {}

  async getAll(): Promise<ApiGetImagePreviewModel[]> {
    return this._imagesPreviewRepository.find({
      order: {
        path: 'asc',
        order: 'asc',
      },
    });
  }

  async getPreviewImageById(id: string): Promise<ApiGetImagePreviewModel> {
    const image = await this._imagesPreviewRepository.findOneBy({ id });

    if (!image) {
      throw new NotFoundException('Image not found');
    }

    return image;
  }

  async uploadPreviewImage({ path, order }: UploadImageDto): Promise<string> {
    const image = this._imagesPreviewRepository.create({
      order,
      path,
    });

    const uploadedImage = await this._imagesPreviewRepository.save(image);

    return uploadedImage.id;
  }

  async changeOrder(id: string, order: number): Promise<void> {
    await this._imagesPreviewRepository.update({ id }, { order });
  }

  async deleteImage(id: string): Promise<void> {
    await this._imagesPreviewRepository.delete({ id });
  }
}
