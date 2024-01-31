"use client";

// Libs
import { useEffect, useState } from "react";

// Services
import { weatherServices } from "@services/weather-services";
import { countryServices } from "@services/country-services";

// Partials
import WeatherConditions from "./_partials/WeatherConditions";
import TodayForecast from "./_partials/TodayForecast";
import WeeklyForecast from "./_partials/WeeklyForecast";

// Components
import { SelectOption } from "@components/select";
import SearchSelect from "@components/search-select";
import { Box, Flex } from "@radix-ui/themes";
import Image from "next/image";



export default function Weather() {

  // Variables
  let api_key = "";

  // States
  const [cities, setCities] = useState<SelectOption[]>([]);
  const [weather, setWeather] = useState<any>(null);

  if (typeof window !== "undefined") {
    api_key = sessionStorage.getItem("api_key") as string;
  }

  // Functions
  const getWeather = async (
    { lat, lon }: { lat: number; lon: number }
  ) => {
    const data = await weatherServices.getWeather(lat, lon, api_key);
    setWeather(data);
  };

  const getCities = async () => {
    const res = await countryServices.getCities();

    // Şehirleri seçeneklere ekliyoruz.
    const options = res?.data?.map((i: any) => {
      return {
        value: i.ID.toString(),
        label: i.TEXT
      }
    });

    // Şehirleri state'e atıyoruz.
    setCities(options);
  };

  const handleChangeCity = async (value: any) => {
    const city = cities.find(i => i.value === value)?.label as string;
    const res = await weatherServices.getCoordinatesByLocationName(city, api_key)
    const lat = res?.data[0]?.lat;
    const lon = res?.data[0]?.lon;

    await getWeather({
      lat,
      lon,
    });
  }

  // Effects
  useEffect(() => {
    getCities();
  }, []);

  // Render
  return (
    <div className="container py-8">
      <Flex direction={"column"} align={"center"}>
        {/* SEARCH SELECT */}
        <SearchSelect
          disabled={cities.length === 0}
          defaultValue={"34"}
          options={cities}
          block
          placeholder={"Select a city"}
          onChange={
            handleChangeCity
          }
        />

        {/* CITY AND CHANCHES */}
        <div className="flex flex-col items-center my-10">
          <h1 className="text-5xl font-semibold">Istanbul</h1>
          <h5 className="text-base">Chance of rain: 0%</h5>
        </div>


        {/* WEATHER IMAGE */}
        <Image src={"/images/sunny.png"} width={200} height={200} alt="weather" />

        <h1 className="text-5xl my-10">31°</h1>

        <Flex direction={"column"} width={"100%"} className="gap-6" >
          <TodayForecast weather={weather}/>
          <WeeklyForecast weather={weather}/>
          <WeatherConditions weather={weather}/>
        </Flex>

      </Flex>



    </div>
  )
}
