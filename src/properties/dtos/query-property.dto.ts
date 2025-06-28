import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber, Min, IsIn } from 'class-validator';

export class PropertyQueryDto {
  @ApiPropertyOptional({ example: 'Dubai Marina' })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiPropertyOptional({ example: 'AED' })
  @IsOptional()
  @IsString()
  @IsIn(['AED', 'USD', 'EUR', 'INR', 'GBP'])
  currency: string;

  @ApiPropertyOptional({ example: 100000 })
  @IsOptional()
  @IsNumber()
  minPrice?: number;

  @ApiPropertyOptional({ example: 500000 })
  @IsOptional()
  @IsNumber()
  maxPrice?: number;

  @ApiPropertyOptional({ example: 2 })
  @IsOptional()
  @IsNumber()
  bedrooms?: number;

  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  page?: number;

  @ApiPropertyOptional({ example: 10 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  limit?: number;
}
