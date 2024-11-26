import { Module } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { SupplierController } from './supplier.controller';
import { SupplierRepository } from 'databases/repositories/supplier.repository';

@Module({
  providers: [SupplierService, SupplierRepository],
  controllers: [SupplierController],
  exports: [SupplierService],
})
export class SupplierModule {}
