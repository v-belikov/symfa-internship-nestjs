import { Body, Delete, Get, HttpStatus, Param, ParseUUIDPipe, Patch, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { ImagesController as Controller } from '../decorators';
import { ApiGetImagePreviewModel, ChangeOrderDto, UploadImageDto } from '../models';
import { ImagePreviewService } from '../services';

@Controller('preview')
@ApiTags('images/preview')
export class ImagePreviewController {
  constructor(private readonly _imagePreviewService: ImagePreviewService) {}

  @Get()
  @ApiResponse({
    type: ApiGetImagePreviewModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  getAll(): Promise<ApiGetImagePreviewModel[]> {
    return this._imagePreviewService.getAll();
  }

  @Get(':id')
  @ApiResponse({
    type: ApiGetImagePreviewModel,
    status: HttpStatus.OK,
  })
  getPreviewImageById(@Param('id', ParseUUIDPipe) id: string): Promise<ApiGetImagePreviewModel> {
    return this._imagePreviewService.getPreviewImageById(id);
  }

  @Post()
  @ApiResponse({ status: HttpStatus.OK, type: 'string', description: 'uuid' })
  uploadPreviewImage(@Body() uploadedImage: UploadImageDto): Promise<string> {
    return this._imagePreviewService.uploadPreviewImage(uploadedImage);
  }

  @Patch()
  @ApiResponse({ status: HttpStatus.OK })
  changeOrder(@Query('imagePreviewId', ParseUUIDPipe) id: string, @Body() { order }: ChangeOrderDto) {
    return this._imagePreviewService.changeOrder(id, order);
  }

  @Delete(':id')
  @ApiResponse({ status: HttpStatus.OK })
  deleteImage(@Param('id', ParseUUIDPipe) id: string) {
    return this._imagePreviewService.deleteImage(id);
  }
}
