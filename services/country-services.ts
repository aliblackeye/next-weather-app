import axios from "axios";

const BASE_URL = "https://api.kadircolak.com/Konum/JSON/API/ShowAllCity";

const getCities = async () => {
  try {
    const res = await axios.get(`${BASE_URL}`);

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const countryServices = {
  getCities,
};
