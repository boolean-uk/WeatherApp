import WeatherHome from "./components/WeatherHomeScreen";
import "./components/styles/style.css";
import { useEffect, useState } from "react";
// import { query } from "express";

export default function App() {
  //   const [weather, setWeather] = useState([]);
  const [search, setSearch] = useState(""); // this can go directly in the form for the search bar
  const [currentLocation, setCurrentLocation] = useState("");

  const api = {
    key: "cd51bfb08430241168a813edfe9e9d8f",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  // when the user types a new location, you use setLocation to store the state and present it to the user
  // when user presses enter or clicks the search button you call setCurrentLocation

  useEffect(() => {
    //   if currentLocation is not empty -> then do a fetch to the API
    console.log(search);
    if (currentLocation !== "") {
      // fetch
      const url = `${api.base}weather?q=${currentLocation}&units=metric&APPID=${api.key}`;
      console.log(url);
      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          setSearch(result);
          console.log(search);
          //   setSearch("");
        });
    }
  }, [currentLocation]);

  console.log(currentLocation);

  return (
    <>
      <WeatherHome
        // weather={weather}
        // setWeather={setWeather}
        search={search}
        // setSearch={setSearch}
        // SearchWeatherLocation={SearchWeatherLocation}
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
      />
      <main></main>
    </>
  );
}
