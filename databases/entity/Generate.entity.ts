import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class Generate {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'date', nullable: false })
  createdAt: Date;
  @UpdateDateColumn({ type: 'date', nullable: false })
  updtedAt: Date;
}
