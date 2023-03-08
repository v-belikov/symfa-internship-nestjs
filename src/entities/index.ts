import { PRODUCTS_ENTITIES } from '@entities/products';
import { USER_ENTITIES } from '@entities/users';

import { IMAGE_ENTITIES } from './images';

export const ENTITIES = [...IMAGE_ENTITIES, ...PRODUCTS_ENTITIES, ...USER_ENTITIES];

export const SUBSCRIBERS = [];
