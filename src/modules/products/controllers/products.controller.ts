import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ProductService } from '../services';

@Controller('products')
@ApiTags('products')
export class ProductsController {
  constructor(private readonly _ProductService: ProductService) {}
}
