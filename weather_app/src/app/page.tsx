/** @format */
"use client";
import { useQuery } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import axios from "axios";

// https://api.openweathermap.org/data/2.5/forecast?q=mangalore&appid=1f5c6b3a8bc88a7902c42484bd6c85f5&cnt=56

interface WeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: Weather[];
  city: City;
}

interface Weather {
  dt: number;
  main: Main;
  weather: WeatherDescription[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

interface WeatherDescription {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Clouds {
  all: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Sys {
  pod: string;
}

interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

interface Coord {
  lat: number;
  lon: number;
}

export default function Home() {
  const { isLoading, error, data } = useQuery<WeatherData>({
    queryKey: ["repoData"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=mangalore&appid=${process.env.WEATHER_API}&cnt=2`
      );
      // Return the actual data retrieved from the API
      return data;
    },
  });

  console.log(data);

  if (isLoading) return "Loading...";
  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar />
    </div>
  );
}
