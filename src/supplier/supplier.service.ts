import { Supplier } from './../../databases/entity/Supplier.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { SupplierRepository } from 'databases/repositories/supplier.repository';
import { CreateSupplierDto } from './dto/create-supplier.dto';

import { UpdateSupplierDto } from './dto/update-supplier.dto copy';
import { NotFoundError } from 'rxjs';

@Injectable()
export class SupplierService {
  constructor(private readonly supplierRepository: SupplierRepository) {}

  async create(supplierDto: CreateSupplierDto): Promise<Supplier> {
    const supplier = this.supplierRepository.create(supplierDto);
    return await this.supplierRepository.save(supplier);
  }

  async update(
    id: number,
    supplierUpdateDto: UpdateSupplierDto,
  ): Promise<Supplier> {
    const supplier = await this.supplierRepository.findOne({
      where: { id: id },
    });
    if (supplier) {
      return await this.supplierRepository.save({ id, ...supplierUpdateDto });
    }

    throw new BadRequestException('Error updating supplier: ');
  }

  async findAll(): Promise<Supplier[]> {
    return await this.supplierRepository.find();
  }

  async findById(id: number): Promise<Supplier> {
    const supplier = this.supplierRepository.findOneOrFail({ where: { id } });

    return supplier;
  }
}
