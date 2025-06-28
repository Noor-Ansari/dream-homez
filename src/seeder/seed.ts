import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { UsersService } from '../users/users.service';
import { PropertiesService } from '../properties/properties.service';
import * as bcrypt from 'bcrypt';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const usersService = app.get(UsersService);
  const propertyService = app.get(PropertiesService);

  await propertyService['propertyModel'].deleteMany({});
  await usersService['userModel'].deleteMany({});

  const admin = await usersService.create(
    'admin@example.com',
    await bcrypt.hash('Admin@123', 10),
    'admin',
  );

  const user = await usersService.create(
    'user@example.com',
    await bcrypt.hash('User@123', 10),
    'user',
  );

  const dummyData = [
    {
      title: 'Luxury Villa in Palm Jumeirah',
      description: '5 BHK waterfront with private beach',
      price: 5000000,
      location: 'Palm Jumeirah, Dubai',
      bedrooms: 5,
      bathrooms: 6,
      images: ['https://via.placeholder.com/600x400'],
      currency: 'AED',
      userId: admin._id as string,
    },
    {
      title: 'Affordable Studio in Bur Dubai',
      price: 75000,
      location: 'Bur Dubai',
      bedrooms: 1,
      bathrooms: 1,
      currency: 'AED',
      userId: user._id as string,
    },
    {
      title: 'Modern Apartment in Downtown',
      price: 350000,
      location: 'Downtown Dubai',
      bedrooms: 2,
      bathrooms: 2,
      currency: 'AED',
      userId: user._id as string,
    },
  ];

  for (const data of dummyData) {
    await propertyService.create(data, data.userId);
    console.log(`Seeded: ${data.title}`);
  }

  await app.close();
}
bootstrap();
