import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './Product.entity';
import { Order } from './Order.entity';
import { Generate } from './Generate.entity';

@Entity()
export class Supplier extends Generate {
  @Column({ nullable: false })
  fullname: string;

  @Column()
  address: string;

  @Column()
  contact: string;

  @Column({ unique: true, nullable: false })
  phone: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @OneToMany(() => Product, (product) => product.supplier)
  products: Product[];

  @OneToMany(() => Order, (order) => order.supplier)
  orders: Order[];
}
