import { Controller, Injectable } from '@nestjs/common';
import { Supplier } from 'databases/entity/Supplier.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class SupplierRepository extends Repository<Supplier> {
  constructor(private readonly dataSource: DataSource) {
    super(Supplier, dataSource.createEntityManager());
  }
}
