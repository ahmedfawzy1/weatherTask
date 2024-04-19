import React, { useContext } from "react";
import style from "./Home.module.css";
import { WeatherContext } from "../../Context/WeatherContext";

export default function Home() {
  let { current } = useContext(WeatherContext);
  console.log(current);
  console.log(current.last_updated);

  return (
    <section className={`${style.hero} pt-4`}>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="head d-flex gap-3">
              <div className="col-md-6">
                <div className="current bg-main px-4 py-3 d-flex flex-column align-items-start">
                  <div className={`${style.time} text-center mb-4`}>
                    <p>Current Weather</p>
                    <span className="fw-medium">{current.last_updated}</span>
                  </div>
                  <div className={`${style.weather} text-center d-flex gap-2 justify-content-center align-items-center`}>
                    <img src={current.condition.icon} alt="icon" />
                    <p className="fw-medium fs-3">{current.temp_c}°C</p>
                    <span className={`${style.status}`}>{current.condition.text}</span>
                  </div>
                  <div className={`${style.conclution} mt-3`}>
                    <p>
                      There will be mostly {current.condition.text}. The high will be {current.temp_c}°C{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={`${style.tomorrow} bg-main px-4 py-3`}>
                  <div className={`${style.head} d-flex gap-4 pb-2`}>
                    <p className="fw-medium">New York</p>
                    <p>HongKong</p>
                    <p>Tokyo</p>
                  </div>
                  <div className={`${style.body} d-flex justify-content-between align-items-center pt-4`}>
                    <div className="box text-center">
                      <div className={`${style.day}`}>
                        <p className="fw-medium">Today(Sun)</p>
                        <span>Mar 6</span>
                      </div>
                      <div className="icon">
                        <i className="fa-solid fa-sun"></i>
                      </div>
                      <div className={`${style.info}`}>
                        <p className="fw-medium">Sunny</p>
                        <span>15-20℃</span>
                        <span>AQI 67</span>
                      </div>
                    </div>
                    <div className="box text-center">
                      <div className={`${style.day}`}>
                        <p className="fw-medium">Today(Sun)</p>
                        <span>Mar 6</span>
                      </div>
                      <div className="icon">
                        <i className="fa-solid fa-sun"></i>
                      </div>
                      <div className={`${style.info}`}>
                        <p className="fw-medium">Sunny</p>
                        <span>15-20℃</span>
                        <span>AQI 67</span>
                      </div>
                    </div>
                    <div className="box text-center">
                      <div className={`${style.day}`}>
                        <p className="fw-medium">Today(Sun)</p>
                        <span>Mar 6</span>
                      </div>
                      <div className="icon">
                        <i className="fa-solid fa-sun"></i>
                      </div>
                      <div className={`${style.info}`}>
                        <p className="fw-medium">Sunny</p>
                        <span>15-20℃</span>
                        <span>AQI 67</span>
                      </div>
                    </div>
                    <div className="box text-center">
                      <div className={`${style.day}`}>
                        <p className="fw-medium">Today(Sun)</p>
                        <span>Mar 6</span>
                      </div>
                      <div className="icon">
                        <i className="fa-solid fa-sun"></i>
                      </div>
                      <div className={`${style.info}`}>
                        <p className="fw-medium">Sunny</p>
                        <span>15-20℃</span>
                        <span>AQI 67</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="body mt-4">
              <div className="forcecast bg-main p-4 d-flex align-items-center gap-2">
                <i className="fa-solid fa-clock"></i>
                <p>24-hour forecast</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box bg-main p-3">
              <div className="head d-flex justify-content-between">
                <div className="box text-center">
                  <p>SUN</p>
                  <i className="fa-solid fa-sun"></i>
                </div>
                <div className="box text-center">
                  <p>SUN</p>
                  <i className="fa-solid fa-sun"></i>
                </div>
                <div className="box text-center">
                  <p>SUN</p>
                  <i className="fa-solid fa-sun"></i>
                </div>
                <div className="box text-center">
                  <p>SUN</p>
                  <i className="fa-solid fa-sun"></i>
                </div>
                <div className="box text-center">
                  <p>SUN</p>
                  <i className="fa-solid fa-sun"></i>
                </div>
              </div>
              <div className="middle d-flex justify-content-center align-items-center gap-3 py-3">
                <i className="fa-solid fa-clock"></i>
                <p className="fw-medium">3:00PM</p>
              </div>
              <div className="foot">
                <p className="fw-medium">AIR CONDITIONS</p>
                <div className="box d-flex gap-2 mb-3">
                  <div className="icon">
                    <i className="fa-solid fa-sun"></i>
                  </div>
                  <div className="info">
                    <span>Real Feel</span>
                    <p>30°</p>
                  </div>
                </div>
                <div className="box d-flex gap-2 mb-3">
                  <div className="icon">
                    <i className="fa-solid fa-sun"></i>
                  </div>
                  <div className="info">
                    <span>Real Feel</span>
                    <p>30°</p>
                  </div>
                </div>
                <div className="box d-flex gap-2 mb-3">
                  <div className="icon">
                    <i className="fa-solid fa-sun"></i>
                  </div>
                  <div className="info">
                    <span>Real Feel</span>
                    <p>30°</p>
                  </div>
                </div>
                <div className="box d-flex gap-2 mb-3">
                  <div className="icon">
                    <i className="fa-solid fa-sun"></i>
                  </div>
                  <div className="info">
                    <span>Real Feel</span>
                    <p>30°</p>
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
