import { IsString, IsOptional, IsNumber, Min, IsIn } from 'class-validator';

export class PropertyQueryDto {
  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsString()
  @IsIn(['AED', 'USD', 'EUR', 'INR', 'GBP'])
  currency: string;

  @IsOptional()
  @IsNumber()
  minPrice?: number;

  @IsOptional()
  @IsNumber()
  maxPrice?: number;

  @IsOptional()
  @IsNumber()
  bedrooms?: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  page?: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  limit?: number;
}
