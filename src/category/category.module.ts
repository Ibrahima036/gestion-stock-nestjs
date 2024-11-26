import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'databases/entity/Category.entity';
import { CategoryRepository } from 'databases/repositories/category.repository';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepository],
  imports: [TypeOrmModule.forFeature([Category])],
  exports: [CategoryService],
})
export class CategoryModule {}
