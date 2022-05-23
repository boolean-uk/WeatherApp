import "./styles/style.css";

function WeatherHome(props) {
  const {
    // weather,
    search,
    // setSearch,
    // SearchWeatherLocation,
    currentLocation,
    setCurrentLocation,
  } = props;

  return (
    <header>
      <div>
        <h1> The Mr.Weather App </h1>
        <h2>Today's Weather</h2>
        <form>
          <input
            type="text"
            placeholder="Find Your City"
            onChange={(searchEvent) =>
              setCurrentLocation(searchEvent.target.value)
            }
            value={currentLocation}
            // onKeyPress={SearchWeatherLocation(search)}
          />
          <button type="submit">SUBMIT</button>
        </form>
        <div className="container">
          <ul>
            {/* {search.map((EachWeatherDay, index) => {
              <li key={index}></li>;
            })} */}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default WeatherHome;
