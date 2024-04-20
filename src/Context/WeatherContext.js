import React, { useState, useEffect } from "react";
import axios from "axios";

import { createContext } from "react";

export let WeatherContext = createContext();

export default function WeatherContextProvider(props) {
  const [cityName, setCityName] = useState("egypt");
  const [location, setLocation] = useState([]);
  const [current, setCurrent] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);

  async function getWeatherDetails() {
    try {
      let url = `https://api.weatherapi.com/v1/forecast.json?key=b21c7bbd22f64a6392180654240201&q=${cityName}&days=3`;
      let data = await axios.get(url);
      if (data.status == 200) {
        setLocation(data?.data.location);
        setCurrent(data?.data.current);
        setForecast(data?.data.forecast.forecastday);
        setError(null);
      }
    } catch (error) {
      setError("Invalid city name");
    }
  }

  useEffect(() => {
    getWeatherDetails();
  }, [cityName]);

  return <WeatherContext.Provider value={{ setCityName, location, current, forecast, error }}>{props.children}</WeatherContext.Provider>;
}
