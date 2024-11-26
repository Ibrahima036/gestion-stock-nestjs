import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Supplier } from './Supplier.entity';
import { Generate } from './Generate.entity';

enum OrderEnum {
  Inprogress = 'En cours',
  Delivered = 'Delivré',
  Cancelled = 'Annulé',
}

@Entity()
export class Order extends Generate {
  @CreateDateColumn({ type: 'date', nullable: false })
  orderDate: Date;
  @Column({ type: 'date', nullable: false })
  expectedDelivery: Date;
  @Column({
    type: 'enum',
    enum: OrderEnum,
    default: OrderEnum.Inprogress,
    nullable: false,
  })
  orderStatus: OrderEnum;

  @ManyToOne(() => Supplier, (supplier) => supplier.orders)
  supplier: Supplier;
}
