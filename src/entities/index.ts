import { USER_ENTITIES } from './user/index';
import { IMAGE_ENTITIES } from './images';
import { PRODUCT_ENTITIES } from './products';

export const ENTITIES = [...IMAGE_ENTITIES, ...PRODUCT_ENTITIES, ...USER_ENTITIES];

export const SUBSCRIBERS = [];
