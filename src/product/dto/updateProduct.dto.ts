import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  unitPrice: number;

  @IsNumber()
  @IsNotEmpty()
  quantiyStock: number;

  @IsNumber()
  @IsNotEmpty()
  supplierId: number;

  @IsNumber()
  @IsNotEmpty()
  categoryId: number;
}
