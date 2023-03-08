import { AuthModule } from './auth/auth.module';
import { ImagesModule } from './images/images.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

export const APP_MODULES = [ImagesModule, ProductsModule, UsersModule, AuthModule];
