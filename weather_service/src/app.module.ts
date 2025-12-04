import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [ConfigModule.forRoot(), WeatherModule, MongooseModule.forRoot(process.env.DB_URL_PROD as string)],
  controllers: [],
  providers: [],
})
export class AppModule {}
