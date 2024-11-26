import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { Public } from 'src/auth/public.route.decorator';
import { UpdateSupplierDto } from './dto/update-supplier.dto copy';

@Controller('supplier')
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}

  @Public()
  @Get()
  async findAll() {
    return this.supplierService.findAll();
  }

  @Public()
  @Post()
  async create(@Body() supplierDto: CreateSupplierDto) {
    return this.supplierService.create(supplierDto);
  }
  @Public()
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() supplierDto: UpdateSupplierDto,
  ) {
    return this.supplierService.update(id, supplierDto);
  }
}
