interface MeteoDailyData {
  id: number;
  timestamp: string | null;
  neighbourhood_id: number | null;
  date: string | null; // 'date' can be represented as a string
  max_temperature: number | null;
  min_temperature: number | null;
  wind_gusts_24h: number | null;
  precipitation_24h: number | null;
  weather_symbol_24h: number | null;
  sunrise: string | null; // 'time without time zone' as a string
  sunset: string | null;
}

export default MeteoDailyData;
