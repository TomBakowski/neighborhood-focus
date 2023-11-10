interface MeteoHourlyData {
  id: number;
  timestamp: string | null; // 'timestamp with time zone' can be represented as a string (ISO format)
  neighbourhood_id: number | null;
  wind_speed: number | null;
  wind_direction: number | null;
  wind_gusts: number | null;
  temperature: number | null;
  msl_pressure: number | null;
  precipitation: number | null;
  weather_symbol: number | null;
  uv_index: number | null;
}

export default MeteoHourlyData;
