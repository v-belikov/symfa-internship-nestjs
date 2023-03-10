import { AuthModule } from '@modules/auth/auth.module';
import { ProductManagementModule } from '@modules/product-management/product-management.module';
import { ProductsModule } from '@modules/products/products.module';
import { UserManagementModule } from '@modules/user-management/user-management.module';
import { UsersModule } from '@shared/user';

import { ImagesModule } from './images/images.module';

export const APP_MODULES = [
  ImagesModule,
  ProductsModule,
  UsersModule,
  AuthModule,
  UserManagementModule,
  ProductManagementModule,
];
