import {
  IsString,
  IsOptional,
  IsNumber,
  IsArray,
  Min,
  IsIn,
} from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  @IsIn(['AED', 'USD', 'EUR', 'INR', 'GBP'])
  currency?: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  bedrooms?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  bathrooms?: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];
}
