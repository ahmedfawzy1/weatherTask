import React, { useState, useEffect } from "react";
import axios from "axios";

import { createContext } from "react";

export let WeatherContext = createContext();

export default function WeatherContextProvider(props) {
  const [cityName, setCityName] = useState("egypt");
  const [location, setLocation] = useState([]);
  const [current, setCurrent] = useState([]);

  async function getWeatherDetails() {
    let url = `https://api.weatherapi.com/v1/forecast.json?key=b21c7bbd22f64a6392180654240201&q=${cityName}&days=3`;
    let data = await axios.get(url);
    // console.log(data);
    if (data.status == 200) {
      setLocation(data?.data.location);
      setCurrent(data?.data.current);
    }
  }

  useEffect(() => {
    getWeatherDetails();
  }, [cityName]);

  return <WeatherContext.Provider value={{ location, current }}>{props.children}</WeatherContext.Provider>;
}
