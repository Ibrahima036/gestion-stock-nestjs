import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreatedProductDto } from './dto/createdProduct.dto';
import { Product } from 'databases/entity/Product.entity';
import { Public } from 'src/auth/public.route.decorator';
import { UpdateProductDto } from './dto/updateProduct.dto';

@Controller('product')
@Public()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreatedProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Get()
  async findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOnById(@Param('id', ParseIntPipe) id: number) {
    return this.productService.find0neById(id);
  }

  @Put(':id')
  async updater(
    @Body() updateProductDto: UpdateProductDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.productService.update(id, updateProductDto);
  }
}
