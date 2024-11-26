import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './Category.entity';
import { Supplier } from './Supplier.entity';
import { Generate } from './Generate.entity';

@Entity()
export class Product extends Generate {
  @Column()
  name: string;

  @Column()
  unitPrice: number;

  @Column()
  quantiyStock: number;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @ManyToOne(() => Supplier, (supplier) => supplier.products)
  supplier: Supplier;
}
