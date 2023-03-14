import { Column, Entity } from 'typeorm';

import { BaseEntity } from '../common';

@Entity('user')
export class User extends BaseEntity {
  @Column({ length: 60, name: 'user_name' })
  username: string;

  @Column({ length: 30, name: 'email', unique: true })
  email: string;

  @Column({ length: 72, name: 'password', select: false })
  password: string;
}
