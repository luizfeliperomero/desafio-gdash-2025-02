import { Weather } from '@/models/weather.interface';

export const mockWeatherData: Weather[] = [
  {
    latitude: -23.55,
    longitude: -46.63,
    generationtime_ms: 0.48,
    utc_offset_seconds: -10800,
    timezone: "America/Sao_Paulo",
    timezone_abbreviation: "BRT",
    elevation: 760,
    current_units: {
      time: "iso8601",
      interval: "1h",
      temperature_2m: "°C",
      relative_humidity_2m: "%",
      precipitation: "mm",
      weather_code: "code",
      wind_speed_10m: "km/h",
      is_day: "0/1"
    },
    current: {
      time: "2025-12-01T00:00",
      interval: 1,
      temperature_2m: 22.1,
      relative_humidity_2m: 86,
      precipitation: 0.0,
      weather_code: 0,   // clear
      wind_speed_10m: 8,
      is_day: 0
    }
  },
  {
    latitude: -23.55,
    longitude: -46.63,
    generationtime_ms: 0.47,
    utc_offset_seconds: -10800,
    timezone: "America/Sao_Paulo",
    timezone_abbreviation: "BRT",
    elevation: 760,
    current_units: {
      time: "iso8601",
      interval: "1h",
      temperature_2m: "°C",
      relative_humidity_2m: "%",
      precipitation: "mm",
      weather_code: "code",
      wind_speed_10m: "km/h",
      is_day: "0/1"
    },
    current: {
      time: "2025-12-01T01:00",
      interval: 1,
      temperature_2m: 21.6,
      relative_humidity_2m: 88,
      precipitation: 0.0,
      weather_code: 0,
      wind_speed_10m: 7,
      is_day: 0
    }
  },
  {
    latitude: -23.55,
    longitude: -46.63,
    generationtime_ms: 0.46,
    utc_offset_seconds: -10800,
    timezone: "America/Sao_Paulo",
    timezone_abbreviation: "BRT",
    elevation: 760,
    current_units: {
      time: "iso8601",
      interval: "1h",
      temperature_2m: "°C",
      relative_humidity_2m: "%",
      precipitation: "mm",
      weather_code: "code",
      wind_speed_10m: "km/h",
      is_day: "0/1"
    },
    current: {
      time: "2025-12-01T02:00",
      interval: 1,
      temperature_2m: 21.0,
      relative_humidity_2m: 90,
      precipitation: 0.0,
      weather_code: 1,   // mostly clear / few clouds
      wind_speed_10m: 6,
      is_day: 0
    }
  },
  {
    latitude: -23.55,
    longitude: -46.63,
    generationtime_ms: 0.46,
    utc_offset_seconds: -10800,
    timezone: "America/Sao_Paulo",
    timezone_abbreviation: "BRT",
    elevation: 760,
    current_units: {
      time: "iso8601",
      interval: "1h",
      temperature_2m: "°C",
      relative_humidity_2m: "%",
      precipitation: "mm",
      weather_code: "code",
      wind_speed_10m: "km/h",
      is_day: "0/1"
    },
    current: {
      time: "2025-12-01T03:00",
      interval: 1,
      temperature_2m: 20.8,
      relative_humidity_2m: 91,
      precipitation: 0.0,
      weather_code: 2,   // partly cloudy
      wind_speed_10m: 6,
      is_day: 0
    }
  },
  {
    latitude: -23.55,
    longitude: -46.63,
    generationtime_ms: 0.45,
    utc_offset_seconds: -10800,
    timezone: "America/Sao_Paulo",
    timezone_abbreviation: "BRT",
    elevation: 760,
    current_units: {
      time: "iso8601",
      interval: "1h",
      temperature_2m: "°C",
      relative_humidity_2m: "%",
      precipitation: "mm",
      weather_code: "code",
      wind_speed_10m: "km/h",
      is_day: "0/1"
    },
    current: {
      time: "2025-12-01T04:00",
      interval: 1,
      temperature_2m: 20.6,
      relative_humidity_2m: 92,
      precipitation: 0.0,
      weather_code: 3,   // overcast
      wind_speed_10m: 6,
      is_day: 0
    }
  },
  {
    latitude: -23.55,
    longitude: -46.63,
    generationtime_ms: 0.45,
    utc_offset_seconds: -10800,
    timezone: "America/Sao_Paulo",
    timezone_abbreviation: "BRT",
    elevation: 760,
    current_units: {
      time: "iso8601",
      interval: "1h",
      temperature_2m: "°C",
      relative_humidity_2m: "%",
      precipitation: "mm",
      weather_code: "code",
      wind_speed_10m: "km/h",
      is_day: "0/1"
    },
    current: {
      time: "2025-12-01T05:00",
      interval: 1,
      temperature_2m: 20.9,
      relative_humidity_2m: 91,
      precipitation: 0.2,
      weather_code: 61,  // light rain
      wind_speed_10m: 8,
      is_day: 0
    }
  },
  {
    latitude: -23.55,
    longitude: -46.63,
    generationtime_ms: 0.46,
    utc_offset_seconds: -10800,
    timezone: "America/Sao_Paulo",
    timezone_abbreviation: "BRT",
    elevation: 760,
    current_units: {
      time: "iso8601",
      interval: "1h",
      temperature_2m: "°C",
      relative_humidity_2m: "%",
      precipitation: "mm",
      weather_code: "code",
      wind_speed_10m: "km/h",
      is_day: "0/1"
    },
    current: {
      time: "2025-12-01T06:00",
      interval: 1,
      temperature_2m: 21.8,
      relative_humidity_2m: 89,
      precipitation: 0.8,
      weather_code: 63,  // moderate rain
      wind_speed_10m: 12,
      is_day: 0
    }
  },
  {
    latitude: -23.55,
    longitude: -46.63,
    generationtime_ms: 0.49,
    utc_offset_seconds: -10800,
    timezone: "America/Sao_Paulo",
    timezone_abbreviation: "BRT",
    elevation: 760,
    current_units: {
      time: "iso8601",
      interval: "1h",
      temperature_2m: "°C",
      relative_humidity_2m: "%",
      precipitation: "mm",
      weather_code: "code",
      wind_speed_10m: "km/h",
      is_day: "0/1"
    },
    current: {
      time: "2025-12-01T07:00",
      interval: 1,
      temperature_2m: 23.0,
      relative_humidity_2m: 85,
      precipitation: 1.5,
      weather_code: 63,
      wind_speed_10m: 14,
      is_day: 1
    }
  },
  {
    latitude: -23.55,
    longitude: -46.63,
    generationtime_ms: 0.50,
    utc_offset_seconds: -10800,
    timezone: "America/Sao_Paulo",
    timezone_abbreviation: "BRT",
    elevation: 760,
    current_units: {
      time: "iso8601",
      interval: "1h",
      temperature_2m: "°C",
      relative_humidity_2m: "%",
      precipitation: "mm",
      weather_code: "code",
      wind_speed_10m: "km/h",
      is_day: "0/1"
    },
    current: {
      time: "2025-12-01T08:00",
      interval: 1,
      temperature_2m: 24.5,
      relative_humidity_2m: 78,
      precipitation: 0.6,
      weather_code: 80,  // drizzle
      wind_speed_10m: 16,
      is_day: 1
    }
  },
  {
    latitude: -23.55,
    longitude: -46.63,
    generationtime_ms: 0.52,
    utc_offset_seconds: -10800,
    timezone: "America/Sao_Paulo",
    timezone_abbreviation: "BRT",
    elevation: 760,
    current_units: {
      time: "iso8601",
      interval: "1h",
      temperature_2m: "°C",
      relative_humidity_2m: "%",
      precipitation: "mm",
      weather_code: "code",
      wind_speed_10m: "km/h",
      is_day: "0/1"
    },
    current: {
      time: "2025-12-01T09:00",
      interval: 1,
      temperature_2m: 26.0,
      relative_humidity_2m: 72,
      precipitation: 0.0,
      weather_code: 1,
      wind_speed_10m: 18,
      is_day: 1
    }
  },
  {
    latitude: -23.55,
    longitude: -46.63,
    generationtime_ms: 0.55,
    utc_offset_seconds: -10800,
    timezone: "America/Sao_Paulo",
    timezone_abbreviation: "BRT",
    elevation: 760,
    current_units: {
      time: "iso8601",
      interval: "1h",
      temperature_2m: "°C",
      relative_humidity_2m: "%",
      precipitation: "mm",
      weather_code: "code",
      wind_speed_10m: "km/h",
      is_day: "0/1"
    },
    current: {
      time: "2025-12-01T10:00",
      interval: 1,
      temperature_2m: 27.4,
      relative_humidity_2m: 65,
      precipitation: 0.0,
      weather_code: 0,
      wind_speed_10m: 20,
      is_day: 1
    }
  },
  {
    latitude: -23.55,
    longitude: -46.63,
    generationtime_ms: 0.57,
    utc_offset_seconds: -10800,
    timezone: "America/Sao_Paulo",
    timezone_abbreviation: "BRT",
    elevation: 760,
    current_units: {
      time: "iso8601",
      interval: "1h",
      temperature_2m: "°C",
      relative_humidity_2m: "%",
      precipitation: "mm",
      weather_code: "code",
      wind_speed_10m: "km/h",
      is_day: "0/1"
    },
    current: {
      time: "2025-12-01T11:00",
      interval: 1,
      temperature_2m: 28.6,
      relative_humidity_2m: 60,
      precipitation: 0.0,
      weather_code: 0,
      wind_speed_10m: 22,
      is_day: 1
    }
  },
  {
    latitude: -23.55,
    longitude: -46.63,
    generationtime_ms: 0.60,
    utc_offset_seconds: -10800,
    timezone: "America/Sao_Paulo",
    timezone_abbreviation: "BRT",
    elevation: 760,
    current_units: {
      time: "iso8601",
      interval: "1h",
      temperature_2m: "°C",
      relative_humidity_2m: "%",
      precipitation: "mm",
      weather_code: "code",
      wind_speed_10m: "km/h",
      is_day: "0/1"
    },
    current: {
      time: "2025-12-01T12:00",
      interval: 1,
      temperature_2m: 29.2,
      relative_humidity_2m: 58,
      precipitation: 0.0,
      weather_code: 1,
      wind_speed_10m: 20,
      is_day: 1
    }
  },
  {
    latitude: -23.55,
    longitude: -46.63,
    generationtime_ms: 0.62,
    utc_offset_seconds: -10800,
    timezone: "America/Sao_Paulo",
    timezone_abbreviation: "BRT",
    elevation: 760,
    current_units: {
      time: "iso8601",
      interval: "1h",
      temperature_2m: "°C",
      relative_humidity_2m: "%",
      precipitation: "mm",
      weather_code: "code",
      wind_speed_10m: "km/h",
      is_day: "0/1"
    },
    current: {
      time: "2025-12-01T13:00",
      interval: 1,
      temperature_2m: 29.8,
      relative_humidity_2m: 55,
      precipitation: 0.0,
      weather_code: 1,
      wind_speed_10m: 18,
      is_day: 1
    }
  },
  {
    latitude: -23.55,
    longitude: -46.63,
    generationtime_ms: 0.65,
    utc_offset_seconds: -10800,
    timezone: "America/Sao_Paulo",
    timezone_abbreviation: "BRT",
    elevation: 760,
    current_units: {
      time: "iso8601",
      interval: "1h",
      temperature_2m: "°C",
      relative_humidity_2m: "%",
      precipitation: "mm",
      weather_code: "code",
      wind_speed_10m: "km/h",
      is_day: "0/1"
    },
    current: {
      time: "2025-12-01T14:00",
      interval: 1,
      temperature_2m: 30.0,
      relative_humidity_2m: 54,
      precipitation: 0.0,
      weather_code: 2,
      wind_speed_10m: 16,
      is_day: 1
    }
  },
  {
    latitude: -23.55,
    longitude: -46.63,
    generationtime_ms: 0.68,
    utc_offset_seconds: -10800,
    timezone: "America/Sao_Paulo",
    timezone_abbreviation: "BRT",
    elevation: 760,
    current_units: {
      time: "iso8601",
      interval: "1h",
      temperature_2m: "°C",
      relative_humidity_2m: "%",
      precipitation: "mm",
      weather_code: "code",
      wind_speed_10m: "km/h",
      is_day: "0/1"
    },
    current: {
      time: "2025-12-01T15:00",
      interval: 1,
      temperature_2m: 29.7,
      relative_humidity_2m: 56,
      precipitation: 0.0,
      weather_code: 2,
      wind_speed_10m: 14,
      is_day: 1
    }
  },
  {
    latitude: -23.55,
    longitude: -46.63,
    generationtime_ms: 0.70,
    utc_offset_seconds: -10800,
    timezone: "America/Sao_Paulo",
    timezone_abbreviation: "BRT",
    elevation: 760,
    current_units: {
      time: "iso8601",
      interval: "1h",
      temperature_2m: "°C",
      relative_humidity_2m: "%",
      precipitation: "mm",
      weather_code: "code",
      wind_speed_10m: "km/h",
      is_day: "0/1"
    },
    current: {
      time: "2025-12-01T16:00",
      interval: 1,
      temperature_2m: 28.9,
      relative_humidity_2m: 60,
      precipitation: 0.0,
      weather_code: 3,
      wind_speed_10m: 12,
      is_day: 1
    }
  },
  {
    latitude: -23.55,
    longitude: -46.63,
    generationtime_ms: 0.72,
    utc_offset_seconds: -10800,
    timezone: "America/Sao_Paulo",
    timezone_abbreviation: "BRT",
    elevation: 760,
    current_units: {
      time: "iso8601",
      interval: "1h",
      temperature_2m: "°C",
      relative_humidity_2m: "%",
      precipitation: "mm",
      weather_code: "code",
      wind_speed_10m: "km/h",
      is_day: "0/1"
    },
    current: {
      time: "2025-12-01T17:00",
      interval: 1,
      temperature_2m: 27.3,
      relative_humidity_2m: 66,
      precipitation: 0.3,
      weather_code: 61,
      wind_speed_10m: 10,
      is_day: 1
    }
  },
  {
    latitude: -23.55,
    longitude: -46.63,
    generationtime_ms: 0.74,
    utc_offset_seconds: -10800,
    timezone: "America/Sao_Paulo",
    timezone_abbreviation: "BRT",
    elevation: 760,
    current_units: {
      time: "iso8601",
      interval: "1h",
      temperature_2m: "°C",
      relative_humidity_2m: "%",
      precipitation: "mm",
      weather_code: "code",
      wind_speed_10m: "km/h",
      is_day: "0/1"
    },
    current: {
      time: "2025-12-01T18:00",
      interval: 1,
      temperature_2m: 26.0,
      relative_humidity_2m: 72,
      precipitation: 2.4,
      weather_code: 63,
      wind_speed_10m: 14,
      is_day: 1
    }
  },
  {
    latitude: -23.55,
    longitude: -46.63,
    generationtime_ms: 0.75,
    utc_offset_seconds: -10800,
    timezone: "America/Sao_Paulo",
    timezone_abbreviation: "BRT",
    elevation: 760,
    current_units: {
      time: "iso8601",
      interval: "1h",
      temperature_2m: "°C",
      relative_humidity_2m: "%",
      precipitation: "mm",
      weather_code: "code",
      wind_speed_10m: "km/h",
      is_day: "0/1"
    },
    current: {
      time: "2025-12-01T19:00",
      interval: 1,
      temperature_2m: 24.8,
      relative_humidity_2m: 78,
      precipitation: 3.6,
      weather_code: 95, // thunderstorm
      wind_speed_10m: 20,
      is_day: 1
    }
  },
  {
    latitude: -23.55,
    longitude: -46.63,
    generationtime_ms: 0.77,
    utc_offset_seconds: -10800,
    timezone: "America/Sao_Paulo",
    timezone_abbreviation: "BRT",
    elevation: 760,
    current_units: {
      time: "iso8601",
      interval: "1h",
      temperature_2m: "°C",
      relative_humidity_2m: "%",
      precipitation: "mm",
      weather_code: "code",
      wind_speed_10m: "km/h",
      is_day: "0/1"
    },
    current: {
      time: "2025-12-01T20:00",
      interval: 1,
      temperature_2m: 23.5,
      relative_humidity_2m: 82,
      precipitation: 1.1,
      weather_code: 63,
      wind_speed_10m: 16,
      is_day: 0
    }
  },
  {
    latitude: -23.55,
    longitude: -46.63,
    generationtime_ms: 0.79,
    utc_offset_seconds: -10800,
    timezone: "America/Sao_Paulo",
    timezone_abbreviation: "BRT",
    elevation: 760,
    current_units: {
      time: "iso8601",
      interval: "1h",
      temperature_2m: "°C",
      relative_humidity_2m: "%",
      precipitation: "mm",
      weather_code: "code",
      wind_speed_10m: "km/h",
      is_day: "0/1"
    },
    current: {
      time: "2025-12-01T21:00",
      interval: 1,
      temperature_2m: 22.5,
      relative_humidity_2m: 85,
      precipitation: 0.0,
      weather_code: 2,
      wind_speed_10m: 12,
      is_day: 0
    }
  },
  {
    latitude: -23.55,
    longitude: -46.63,
    generationtime_ms: 0.80,
    utc_offset_seconds: -10800,
    timezone: "America/Sao_Paulo",
    timezone_abbreviation: "BRT",
    elevation: 760,
    current_units: {
      time: "iso8601",
      interval: "1h",
      temperature_2m: "°C",
      relative_humidity_2m: "%",
      precipitation: "mm",
      weather_code: "code",
      wind_speed_10m: "km/h",
      is_day: "0/1"
    },
    current: {
      time: "2025-12-01T22:00",
      interval: 1,
      temperature_2m: 22.0,
      relative_humidity_2m: 87,
      precipitation: 0.0,
      weather_code: 1,
      wind_speed_10m: 10,
      is_day: 0
    }
  },
  {
    latitude: -23.55,
    longitude: -46.63,
    generationtime_ms: 0.82,
    utc_offset_seconds: -10800,
    timezone: "America/Sao_Paulo",
    timezone_abbreviation: "BRT",
    elevation: 760,
    current_units: {
      time: "iso8601",
      interval: "1h",
      temperature_2m: "°C",
      relative_humidity_2m: "%",
      precipitation: "mm",
      weather_code: "code",
      wind_speed_10m: "km/h",
      is_day: "0/1"
    },
    current: {
      time: "2025-12-01T23:00",
      interval: 1,
      temperature_2m: 21.7,
      relative_humidity_2m: 89,
      precipitation: 0.0,
      weather_code: 0,
      wind_speed_10m: 8,
      is_day: 0
    }
  }
];
