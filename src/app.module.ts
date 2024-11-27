import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'databases/entity/Category.entity';
import { Order } from 'databases/entity/Order.entity';
import { Product } from 'databases/entity/Product.entity';
import { Supplier } from 'databases/entity/Supplier.entity';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from 'databases/entity/User.entity';
import * as ejs from 'ejs';
import { SupplierModule } from './supplier/supplier.module';
import { MailerModule } from '@nestjs-modules/mailer';
import * as path from 'path';
import * as handlebars from 'handlebars';
import { EmailModule } from './email/email.module';
import { log } from 'console';

const entities = [Product, Category, Supplier, Order, User];

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'easy_stock',
      entities: [...entities],
      synchronize: true,
    }),
    ProductModule,
    CategoryModule,
    AuthModule,
    UsersModule,
    SupplierModule,
    EmailModule,
  ],
  providers: [],
})
export class AppModule {}
