import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateProductDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  unitPrice: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  quantiyStock: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  supplierId: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  categoryId: number;
}
