import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [ConfigModule.forRoot(), WeatherModule, MongooseModule.forRoot(process.env.DB_URL_PROD as string)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
