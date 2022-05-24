// import e from "express";
import "./styles/style.css";

function WeatherHome(props) {
  const {
    // weather,
    search,
    // setSearch,
    // SearchWeatherLocation,
    currentLocation,
    setCurrentLocation,
    // currentCity,
    setCurrentCity,
  } = props;

  function handleSubmit(event) {
    event.preventDefault();
    setCurrentCity(currentLocation);
  }

  console.log(search);

  let searchData = null;

  if (search !== null) {
    searchData = (
      <>
        <div className="location-box">
          <li className="location">
            city: {search.name}, {search.sys.country}
          </li>
        </div>
        <div className="location-box">
          <li className="location">Temperature: {search.main.temp}</li>
          <li className="location">Max Temperature: {search.main.temp_max}</li>
          <li className="location">Max Temperature: {search.main.temp_max}</li>
        </div>
      </>
    );
  }

  return (
    <header>
      <div>
        <div className="search-box">
          <h1> The Mr.Weather App </h1>
        </div>
        <div className="search-box">
          <h2>Today's Weather</h2>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="search-box">
              <input
                type="text"
                placeholder="Find Your City"
                className="search-bar"
                onChange={(searchEvent) =>
                  setCurrentLocation(searchEvent.target.value)
                }
                value={currentLocation}
                // onKeyPress={SearchWeatherLocation(search)}
              />
            </div>
            <button type="submit">
              <span>SUBMIT</span>
            </button>
          </form>
        </div>
        <div className="container">
          <ul>
            {searchData}
            {/* {search !== null && <li>{search.name}</li>} */}
            {/* {<li>MaxTemperature: {search.main.temp_max} </li>} */}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default WeatherHome;
