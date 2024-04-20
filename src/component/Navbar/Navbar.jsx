import React, { useContext, useState } from "react";
import style from "./Navbar.module.css";
import { WeatherContext } from "../../Context/WeatherContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  let { location, setCityName } = useContext(WeatherContext);

  const [searchItem, setSearchItem] = useState("");

  const handleSearchInputChange = (e) => {
    // console.log(e.target.value);
    e.preventDefault();
    setCityName(searchItem);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container bg-main px-4 py-3">
          <div className="about d-flex gap-5">
            <div className="status">
              <i className="fa-solid fa-bars me-2"></i>
              <span className="text-main">Sky Coast</span>
            </div>
            <div className="location">
              <i className="fa-solid fa-location-dot me-2 text-main"></i>
              <span className="fw-medium">
                {location.country}, {location.name}
              </span>
            </div>
          </div>
          <div className={`${style.details} d-flex align-items-center gap-5`}>
            <div className="search">
              <form className="d-flex" role="search" onSubmit={handleSearchInputChange}>
                <input
                  className="form-control me-2 bg-transparent border-3 position-relative"
                  type="search"
                  placeholder="Search Location"
                  aria-label="Search"
                  value={searchItem}
                  onChange={(e) => setSearchItem(e.target.value)}
                />
                <i className="fa-solid fa-magnifying-glass position-absolute"></i>
              </form>
            </div>
            <div className="signup">
              <Link to={"signup"} type="button" className="btn btn-main">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
