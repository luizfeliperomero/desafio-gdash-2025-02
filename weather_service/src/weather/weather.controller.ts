import { Controller, Post, Body, Get } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Post()
  create(@Body() body: any) {
    return this.weatherService.create(body);
  }

  @Post("/insight")
  getInsight(@Body() body: any) {
	return this.weatherService.getInsight(body.latitude, body.longitude);
  }

  @Get()
  getAll() {
    return this.weatherService.findAll();
  }
}

