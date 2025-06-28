import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PropertiesModule } from './properties/properties.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI ?? ''),
    PropertiesModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
