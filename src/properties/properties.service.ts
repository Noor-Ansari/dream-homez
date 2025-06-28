import { InjectModel } from '@nestjs/mongoose';
import { CreatePropertyDto } from './dtos/create-property.dto';
import { Property, PropertyDocument } from './schemas/property.schema';
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { UpdatePropertyDto } from './dtos/update-property.dto';
import { PropertyQueryDto } from './dtos/query-property.dto';

@Injectable()
export class PropertiesService {
  constructor(
    @InjectModel(Property.name) private propertyModel: Model<PropertyDocument>,
  ) {}

  create(createDto: CreatePropertyDto, userId: string) {
    const created = new this.propertyModel({ ...createDto, owner: userId });
    return created.save();
  }

  findAll(query: PropertyQueryDto) {
    const {
      location,
      minPrice,
      maxPrice,
      bedrooms,
      currency,
      page = 1,
      limit = 10,
    } = query;
    const filter: any = {};
    if (location) filter.location = location;
    if (bedrooms) filter.bedrooms = +bedrooms;
    if (currency) filter.currency = currency;
    if (minPrice || maxPrice)
      filter.price = {
        ...(minPrice && { $gte: +minPrice }),
        ...(maxPrice && { $lte: +maxPrice }),
      };

    return this.propertyModel
      .find(filter)
      .skip((+page - 1) * +limit)
      .limit(+limit);
  }

  findOne(id: string) {
    return this.propertyModel.findById(id);
  }

  async update(id: string, updateDto: UpdatePropertyDto, userId: string) {
    await this.checkPropertyAndOwner(id, userId);

    return this.propertyModel.findByIdAndUpdate(id, updateDto, { new: true });
  }

  async remove(id: string, userId: string) {
    await this.checkPropertyAndOwner(id, userId);

    return this.propertyModel.findByIdAndDelete(id);
  }

  findByUser(userId: string) {
    return this.propertyModel.find({ owner: userId });
  }

  async checkPropertyAndOwner(id: string, ownerId: string) {
    const property = await this.propertyModel.findById(id);
    if (!property) throw new NotFoundException('Property not found');
    if (property.owner !== ownerId) throw new ForbiddenException('Not allowed');
  }
}
