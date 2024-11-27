import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './Product.entity';
import { Generate } from './Generate.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Category extends Generate {
  @ApiProperty()
  @Column({ unique: true, nullable: false })
  name: string;
  @ApiProperty()
  @Column()
  description: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
