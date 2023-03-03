import { Column, Entity, TableInheritance, Unique } from 'typeorm';

import { ImageType } from '@models/enum';

import { BaseEntity } from '../common';

@Entity('images')
@Unique(['path'])
@TableInheritance({
  column: { type: 'enum', enum: ImageType, name: 'imageType' },
})
export abstract class ImageParentEntity extends BaseEntity {
  @Column({ type: 'enum', name: 'image_type', enum: ImageType, select: false })
  imageType: ImageType;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  path: string;
}
