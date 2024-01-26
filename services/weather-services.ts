import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeather = async (lat: string, lon: string, api_key: string) => {
  try {
    return await axios.get(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
    );
  } catch (error) {
    console.log(error);
  }
};

const checkApiKey = async (api_key: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather?lat=0&lon=0&appid=${api_key}`);
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
};

export const weatherServices = {
  getWeather,
  checkApiKey,
};
