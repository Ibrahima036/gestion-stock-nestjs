import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './Product.entity';
import { Generate } from './Generate.entity';

@Entity()
export class Category extends Generate {
  @Column({ unique: true, nullable: false })
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
