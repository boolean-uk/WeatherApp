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
        <div className="card">
          <div className="location-box">
            <li className="location">
              Location: {search.name}, {search.sys.country}
            </li>
          </div>
          <div className="location-box">
            <li className="location">Weather: {search.weather[0].main}</li>
            <li className="location">
              Weather Description: {search.weather[0].description}
            </li>
            <li className="location">Temperature: {search.main.temp}</li>
            <li className="location">
              Max Temperature: {search.main.temp_max}
            </li>
          </div>
        </div>
      </>
    );
  }

//   function coverChange() {
//     if (typeof search === null) {
//       return "cover default";
//     } else if (typeof search !== null) {
//       if (search.main > 10) {
//         return "cover warm";
//       } else return "cover";
//     }
//   }

//   let cover = coverChange();

  return (
    <header>
      <div
        className=
        // {
          //   typeof search === null
          //     ? search.main.temp > 40
          //       ? "cover warm"
          //       : "cover"
          //     : "cover"
          //   coverChange()
          //   cover
          "cover default"
        // }
      >
        <div className="space-box">
          <h1> The Mr.Weather App </h1>
        </div>
        <div className="space-box">
          <h2>Today's Weather</h2>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="space-box">
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
              SUBMIT
            </button>
          </form>
        </div>
        <div>
          <ul className="cards">
            {searchData}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default WeatherHome;
