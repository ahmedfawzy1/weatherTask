import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/css/all.min.css";
import UserContextProvider from "./Context/UserContext";
import WeatherContextProvider from "./Context/WeatherContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <WeatherContextProvider>
        <App />
      </WeatherContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);

reportWebVitals();
