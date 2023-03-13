import { UserEntity } from '@entities/user';

export type UserType = Omit<UserEntity, 'hashPassword'>;
