import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoryRepository } from 'databases/repositories/category.repository';
import { CreateCategoryDto } from './dto/createCategory.dto';
import { Category } from 'databases/entity/Category.entity';
import { UpdateCategoryDto } from './dto/UpdateCategory.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async createCategory({
    name,
    description,
  }: CreateCategoryDto): Promise<Category> {
    const newCategory = this.categoryRepository.create({ name, description });
    this.categoryRepository.save(newCategory);
    return newCategory;
  }

  async findOnById(categoryId: number): Promise<Category> {
    const category = await this.categoryRepository.findOneOrFail({
      where: { id: categoryId },
    });

    if (!category) {
      throw new NotFoundException('category non trouvé');
    }
    return category;
  }

  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  async update(
    id: number,
    updateCategory: UpdateCategoryDto,
  ): Promise<Category> {
    let category = await this.categoryRepository.findOneOrFail({
      where: { id: id },
    });
    category.description = updateCategory.description;
    category.name = updateCategory.name;
    return await this.categoryRepository.save(category);
  }

  async delete(id: number): Promise<String> {
    let category = await this.categoryRepository.findOneOrFail({
      where: { id: id },
    });
    await this.categoryRepository.delete(category);
    return 'Catégorie supprimée !.';
  }
}
