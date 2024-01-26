"use client";
import { useEffect, useState } from "react";

// Components
import Select, { SelectOption } from "@components/select";

// Services
import { weatherServices } from "@services/weather-services";
import { countryServices } from "@services/country-services";

export default function Index() {

  // Variables
  let api_key = "";



  // States
  const [weather, setWeather] = useState<any>(null);
  const [cities, setCities] = useState<SelectOption[]>([]);

  if (typeof window !== "undefined") {
    api_key = sessionStorage.getItem("api_key") as string;
  }

  // Functions
  const getWeather = async () => {
    const data = await weatherServices.getWeather("istanbul", "a", api_key);
    setWeather(data);
  };

  const getCities = async () => {
    const res = await countryServices.getCities();

    // Şehirleri seçeneklere ekliyoruz.
    const options = res?.data?.map((i: any) => {
      return {
        value: i.ID,
        label: i.TEXT
      }
    });

    // Şehirleri state'e atıyoruz.
    setCities(options);
  };

  // Effects
  useEffect(() => {
    getCities();
  }, []);

  // Render
  return (
    <main className="main container">
      {weather}
      <Select options={cities} placeholder="Bir şehir seçiniz." />

    </main>
  )
}
