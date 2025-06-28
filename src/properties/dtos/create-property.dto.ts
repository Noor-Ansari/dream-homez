import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsNumber,
  IsArray,
  Min,
  IsIn,
} from 'class-validator';

export class CreatePropertyDto {
  @ApiProperty({ example: 'Luxury Villa in Palm Jumeirah' })
  @IsString()
  title: string;

  @ApiProperty({ example: '5 BHK villa with private beach access' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    example: 'AED',
    description: 'Currency code (e.g., AED, USD)',
  })
  @IsString()
  @IsIn(['AED', 'USD', 'EUR', 'INR', 'GBP'])
  currency?: string;

  @ApiProperty({ example: 5000000 })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({ example: 'Palm Jumeirah, Dubai' })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiProperty({ example: 5 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  bedrooms?: number;

  @ApiProperty({ example: 6 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  bathrooms?: number;

  @ApiProperty({
    example: 'AED',
    description: 'Currency code (e.g., AED, USD)',
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];
}
