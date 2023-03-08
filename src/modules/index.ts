import { AuthModule } from '@modules/auth/auth.module';
import { ProductsModule } from '@modules/products/products.module';
import { UsersModule } from '@shared/user';

import { ImagesModule } from './images/images.module';

export const APP_MODULES = [ImagesModule, ProductsModule, UsersModule, AuthModule];
