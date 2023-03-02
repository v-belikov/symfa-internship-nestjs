import { DynamicModule, Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Config } from '@core/config';
import { ENTITIES } from '@entities/index';

@Global()
@Module({})
export class SharedModule {
  static share(): DynamicModule {
    const sharedModules = [TypeOrmModule.forRoot(Config.get.typeORMOptions), TypeOrmModule.forFeature(ENTITIES)];

    return {
      module: SharedModule,
      imports: sharedModules,
      exports: sharedModules,
    };
  }
}
