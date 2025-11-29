import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Weather } from './weather.schema';

@Injectable()
export class WeatherService {
  constructor(
    @InjectModel(Weather.name) private weatherModel: Model<Weather>,
  ) {}

  async create(data: Partial<Weather>): Promise<Weather> {
    const weather = new this.weatherModel(data);
    return weather.save();
  }

  async getInsight(latitude: number, longitude: number): Promise<string> {
	  return `This is the insight for ${latitude},${longitude}`;
  }

  async findAll(): Promise<Weather[]> {
    return this.weatherModel.find().exec();
  }
}
