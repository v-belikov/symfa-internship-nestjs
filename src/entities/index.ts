import { IMAGE_ENTITIES } from './images';
import { Order } from './order';
import { Product } from './product';
import { User } from './user';

export const ENTITIES = [...IMAGE_ENTITIES, Product, Order, User];

export const SUBSCRIBERS = [];
