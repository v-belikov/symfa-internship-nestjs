import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { Config } from '../../core/config/config';
import { BaseEntity } from '../common';

import { hash } from 'bcrypt';

@Entity('users')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  username: string;

  @Column({ type: 'varchar', length: 255, nullable: false, select: false })
  password: string;

  @Column({ type: 'varchar', length: 255, nullable: false, default: '' })
  email: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, Config.get.hashKeyForBcrypt);
  }
}
