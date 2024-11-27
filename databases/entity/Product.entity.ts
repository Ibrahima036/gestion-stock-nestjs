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
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Product extends Generate {
  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  unitPrice: number;

  @ApiProperty()
  @Column()
  quantiyStock: number;

  @ApiProperty({
    type: Category,
    description: 'Les information de la catégorie',
  })
  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @ApiProperty({ description: "L'information du fournisseur ", type: Supplier })
  @ManyToOne(() => Supplier, (supplier) => supplier.products)
  supplier: Supplier;
}
