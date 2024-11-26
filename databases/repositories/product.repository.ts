import { Injectable } from '@nestjs/common';
import { Product } from 'databases/entity/Product.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ProductRepository extends Repository<Product> {
  constructor(private readonly dataSource: DataSource) {
    super(Product, dataSource.createEntityManager());
  }
}
