import React, { useContext, useState } from "react";
import style from "./Navbar.module.css";
import { WeatherContext } from "../../Context/WeatherContext";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

export default function Navbar() {
  let { location, setCityName, error } = useContext(WeatherContext);
  let { userToken, setUserToken } = useContext(UserContext);

  const [searchItem, setSearchItem] = useState("");

  const handleSearchInputChange = (e) => {
    e.preventDefault();
    setCityName(searchItem);
  };

  let navigate = useNavigate();
  function logOut() {
    localStorage.removeItem("userToken");
    setUserToken(null);
    navigate("/");
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container bg-main px-4 py-3">
          <div className="about d-flex gap-5">
            <div className="status">
              <Link to={"/"}>
                <i className="fa-solid fa-bars me-2 text-black"></i>
                <span className="text-main">Sky Coast</span>
              </Link>
            </div>
            <div className="location">
              <i className="fa-solid fa-location-dot me-2 text-main"></i>
              <span className="fw-medium">
                {location.country}, {location.name}
              </span>
            </div>
          </div>
          <div className={`${style.details} d-flex align-items-center gap-5`}>
            <div className={`${style.search}`}>
              <form className="d-flex" role="search" onSubmit={handleSearchInputChange}>
                <input
                  className="form-control me-2 bg-transparent border-3 position-relative shadow-none"
                  type="search"
                  placeholder="Search Location"
                  aria-label="Search"
                  value={searchItem}
                  onChange={(e) => setSearchItem(e.target.value)}
                />
                <i className="fa-solid fa-magnifying-glass position-absolute"></i>
              </form>
              {error && <p className="text-danger">{error}</p>}
            </div>
            {!userToken ? (
              <div className="signup">
                <Link to={"signup"} type="button" className="btn btn-main">
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fa-solid fa-user"></i>
                      <span className="ps-2">Ahmed Mohamed</span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <button onClick={logOut} type="button" className="btn btn-dark w-100">
                          Log Out
                        </button>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
