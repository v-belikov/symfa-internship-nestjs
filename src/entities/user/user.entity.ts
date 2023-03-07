import { Column, Entity } from 'typeorm';

import { BaseEntity } from "@entities/common";

import { Role } from '@shared/user/role.enum';

export interface Users {
    userName: string;
    email: string;
    password: string;
    roles: Role[];
}

@Entity('user')
export class User extends BaseEntity {
    @Column({ length: 60, name: 'user_name' })
    userName: string;

    @Column({ length: 30, name: 'email' })
    email: string;

    @Column({ length: 16, name: 'password', select: false })
    password: string;
}