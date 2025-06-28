import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PropertyDocument = Property & Document;

@Schema({ timestamps: true })
export class Property {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  owner: string;

  @Prop({ required: true, default: 'AED' })
  currency: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  location: string;

  @Prop()
  bedrooms: number;

  @Prop()
  bathrooms: number;

  @Prop()
  images: string[];
}

export const PropertySchema = SchemaFactory.createForClass(Property);
