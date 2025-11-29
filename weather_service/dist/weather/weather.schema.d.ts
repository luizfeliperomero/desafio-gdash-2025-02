import { Document } from 'mongoose';
export declare class CurrentUnits {
    time: string;
    interval: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    precipitation: string;
    weather_code: string;
    wind_speed_10m: string;
    is_day: string;
}
export declare const CurrentUnitsSchema: import("mongoose").Schema<CurrentUnits, import("mongoose").Model<CurrentUnits, any, any, any, Document<unknown, any, CurrentUnits, any, {}> & CurrentUnits & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CurrentUnits, Document<unknown, {}, import("mongoose").FlatRecord<CurrentUnits>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<CurrentUnits> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class Current {
    time: string;
    interval: number;
    temperature_2m: number;
    relative_humidity_2m: number;
    precipitation: number;
    weather_code: number;
    wind_speed_10m: number;
    is_day: number;
}
export declare const CurrentSchema: import("mongoose").Schema<Current, import("mongoose").Model<Current, any, any, any, Document<unknown, any, Current, any, {}> & Current & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Current, Document<unknown, {}, import("mongoose").FlatRecord<Current>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Current> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class Weather extends Document {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current_units: CurrentUnits;
    current: Current;
}
export declare const WeatherSchema: import("mongoose").Schema<Weather, import("mongoose").Model<Weather, any, any, any, Document<unknown, any, Weather, any, {}> & Weather & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Weather, Document<unknown, {}, import("mongoose").FlatRecord<Weather>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Weather> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
