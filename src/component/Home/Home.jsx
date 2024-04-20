import React, { useContext, useEffect, useState } from "react";
import style from "./Home.module.css";
import { WeatherContext } from "../../Context/WeatherContext";
import axios from "axios";
import chart from "../../images/chart.png";

export default function Home() {
  let { current, forecast } = useContext(WeatherContext);
  const [activeCity, setActiveCity] = useState("New York");
  const [citysDetails, setCitysDetails] = useState([]);

  async function getCitysDetails() {
    let url = `https://api.weatherapi.com/v1/forecast.json?key=b21c7bbd22f64a6392180654240201&q=${activeCity}&days=3`;
    let data = await axios.get(url);
    if (data.status == 200) {
      setCitysDetails(data?.data.forecast.forecastday);
    }
  }

  const handleCityClick = (city) => {
    setActiveCity(city);
  };

  useEffect(() => {
    getCitysDetails();
  }, [activeCity]);

  return (
    <section className={`${style.hero} py-4`}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mb-3">
            <div className={`${style.mainHead} d-flex gap-3`}>
              <div className="col-md-6">
                <div className="current bg-main px-4 py-3 d-flex flex-column align-items-start">
                  <div className={`${style.time} text-center mb-4`}>
                    <p>Current Weather</p>
                    <span className="fw-medium">{current.last_updated}</span>
                  </div>
                  <div className={`${style.weather} text-center d-flex gap-2 justify-content-center align-items-center`}>
                    {current.condition && <img className={style.weatherIcon} src={current.condition.icon} alt="icon" />}
                    <p className="fw-medium fs-3">{current.temp_c}°C</p>
                    {current.condition && <span className={`${style.status}`}>{current.condition.text}</span>}
                  </div>
                  <div className={`${style.conclution} mt-3`}>
                    {current.condition && (
                      <p className="fw-medium">
                        There will be mostly {current.condition.text}. The high will be {current.temp_c}°C{" "}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={`${style.tomorrow} bg-main px-4 py-3`}>
                  <div className={`${style.head} d-flex gap-4 pb-2`}>
                    <button className={`btn font-sm ${activeCity === "New York" ? "fw-medium" : ""}`} onClick={() => handleCityClick("New York")}>
                      New York
                    </button>
                    <button className={`btn font-sm ${activeCity === "HongKong" ? "fw-medium" : ""}`} onClick={() => handleCityClick("HongKong")}>
                      Hong Kong
                    </button>
                    <button className={`btn font-sm ${activeCity === "Tokyo" ? "fw-medium" : ""}`} onClick={() => handleCityClick("Tokyo")}>
                      Tokyo
                    </button>
                  </div>
                  <div className="state d-flex justify-content-between align-items-center">
                    {citysDetails.map((item, index) => (
                      <div key={index} className={`${style.body} d-flex justify-content-between align-items-center pt-4`}>
                        <div className="box text-center">
                          <div className={`${style.day}`}>
                            {/* Api Don't return day */}
                            <p className="fw-medium">Sun</p>
                            <span>{item.date}</span>
                          </div>
                          <div className="icon">{citysDetails && <img className={style.weatherIcon} src={item.day.condition.icon} alt="icon" />}</div>
                          <div className={`${style.info}`}>
                            <p className="fw-medium">{item.day.condition.text}</p>
                            <span>
                              {item.day.mintemp_c}-{item.day.maxtemp_c} ℃
                            </span>
                            <span>AQI {item.day.maxtemp_f}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="body mt-4">
              <div className="forcecast bg-main p-4 d-flex flex-column gap-2">
                <div className="intro d-flex align-items-center gap-2 mb-3">
                  <i className="fa-solid fa-clock"></i>
                  <p>24-hour forecast</p>
                </div>
                <div className="image">
                  {/* Api Dosn't Support Chart */}
                  <img className="w-100" src={chart} alt="chart" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box bg-main p-3">
              <div className="head d-flex justify-content-between">
                {forecast.map((item, index) => (
                  <div key={index} className="box text-center">
                    <p>{item.date}</p>
                    {current.condition && <img className={style.weatherIcon} src={item.day.condition.icon} alt="icon" />}
                  </div>
                ))}
              </div>
              <div className="middle d-flex justify-content-center align-items-center gap-3 py-3">
                <i className="fa-solid fa-clock"></i>
                <p className="fw-medium">{current.last_updated}</p>
              </div>
              <div className="foot">
                <p className="fw-medium">AIR CONDITIONS</p>
                <div className="box d-flex gap-2 mb-3">
                  <div className="icon">
                    <i className="fa-solid fa-temperature-three-quarters"></i>
                  </div>
                  <div className={`${style.info}`}>
                    <span>Real Feel</span>
                    <p className="fw-bold">{current.feelslike_c}</p>
                  </div>
                </div>
                <div className="box d-flex gap-2 mb-3">
                  <div className="icon">
                    <i className="fa-solid fa-wind"></i>
                  </div>
                  <div className={`${style.info}`}>
                    <span>Wind</span>
                    <p className="fw-bold">{current.wind_kph} km/hr</p>
                  </div>
                </div>
                <div className="box d-flex gap-2 mb-3">
                  <div className="icon">
                    <i className="fa-solid fa-cloud-moon-rain"></i>
                  </div>
                  <div className={`${style.info}`}>
                    <span>Chance of rain</span>
                    <p className="fw-bold">{current.humidity}%</p>
                  </div>
                </div>
                <div className="box d-flex gap-2 mb-3">
                  <div className="icon">
                    <i className="fa-regular fa-sun"></i>
                  </div>
                  <div className={`${style.info}`}>
                    <span>UV Index</span>
                    <p className="fw-bold">{current.uv}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
