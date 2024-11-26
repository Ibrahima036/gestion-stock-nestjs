import { CategoryRepository } from './../../databases/repositories/category.repository';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ProductRepository } from 'databases/repositories/product.repository';
import { CreatedProductDto } from './dto/createdProduct.dto';
import { Product } from 'databases/entity/Product.entity';
import { CategoryService } from 'src/category/category.service';
import { SupplierService } from 'src/supplier/supplier.service';
import { UpdateCategoryDto } from 'src/category/dto/UpdateCategory.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';

@Injectable()
export class ProductService {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly categoryService: CategoryService,
    private readonly supplierService: SupplierService,
  ) {}

  async create({
    categoryId,
    supplierId,
    ...rest
  }: CreatedProductDto): Promise<Product> {
    const category = await this.categoryService.findOnById(categoryId);

    const supplier = await this.supplierService.findById(supplierId);

    const product = this.productRepository.create({
      ...rest,
      category,
      supplier,
    });

    return await this.productRepository.save(product);
  }

  async findAll(): Promise<{ data: Product[] }> {
    const products = await this.productRepository.find({
      relations: { category: true, supplier: true },
    });

    return { data: products };
  }

  async find0neById(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { id },
      relations: { category: true, supplier: true },
    });

    if (!product) throw new BadRequestException('Produit introuvable !!');
    return product;
  }

  async update(
    id: number,
    { categoryId, supplierId, ...rest }: UpdateProductDto,
  ) {
    const product = await this.find0neById(id);
    const category = await this.categoryService.findOnById(categoryId);
    const supplier = await this.supplierService.findById(supplierId);
    product.category = category;
    product.supplier = supplier;
    product.name = rest.name;
    product.quantiyStock = rest.quantiyStock;
    product.name = rest.name;

    return await this.productRepository.save(product);
  }
}
