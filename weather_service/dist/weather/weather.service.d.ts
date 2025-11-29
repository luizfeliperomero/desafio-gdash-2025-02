import { Model } from 'mongoose';
import { Weather } from './weather.schema';
export declare class WeatherService {
    private weatherModel;
    constructor(weatherModel: Model<Weather>);
    create(data: Partial<Weather>): Promise<Weather>;
    getInsight(latitude: number, longitude: number): Promise<string>;
    findAll(): Promise<Weather[]>;
}
