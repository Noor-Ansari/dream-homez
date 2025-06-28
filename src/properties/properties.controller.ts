import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Query,
  Body,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UpdatePropertyDto } from './dtos/update-property.dto';
import { PropertiesService } from './properties.service';
import { CreatePropertyDto } from './dtos/create-property.dto';
import { PropertyQueryDto } from './dtos/query-property.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Post()
  create(@Body() dto: CreatePropertyDto, @Req() req: any) {
    const userId = req.user.userId;
    return this.propertiesService.create(dto, userId);
  }

  @Get()
  findAll(@Query() query: PropertyQueryDto) {
    return this.propertiesService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertiesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdatePropertyDto,
    @Req() req: any,
  ) {
    const userId = req.user.userId;
    return this.propertiesService.update(id, dto, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: any) {
    const userId = req.user.userId;
    return this.propertiesService.remove(id, userId);
  }

  @Get('my')
  findMy(@Req() req: any) {
    return this.propertiesService.findByUser(req.user.userId);
  }
}
