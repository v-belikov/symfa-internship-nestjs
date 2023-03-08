import { Column, Entity } from 'typeorm';

import { BaseEntity } from '@entities/common';
import { RolesEnum } from '@shared/user/roles.enum';

@Entity('users')
export class UserEntity extends BaseEntity {
  @Column({ type: 'varchar', nullable: false })
  username: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false, select: false })
  password: string;

  @Column({ type: 'varchar', default: RolesEnum.User })
  role: string;
}
