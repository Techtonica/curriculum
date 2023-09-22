import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(null);
  const [city, setCity] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const params = new URLSearchParams({ cityName: city });
    fetch(`/weather?${params}`)
      .then((res) => res.json())
      .then((data) => setResult(data));

    setCity("");
  };

  return (
    <div className="App">
      <div className="weather">
        <h1 className="App-header">Weather forecast</h1>
        <form onSubmit={handleSubmit}>
          <input
            id="city-name"
            type="text"
            placeholder="Please enter the city name"
            name="city"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            required
          />
          <input type="submit" value="Submit" onClick={handleSubmit} />
        </form>
      </div>
      {result ? (
        result.data.cod === "404" ? (
          `The city ${city} is not valid: Enter a valid city`
        ) : (
          <div className="result">
            {/* <p>{JSON.stringify(result.data)}</p> */}
            <p>
              {" "}
              City:{" "}
              <span className="data">
                {result.data.name}, {result.data.sys.country}{" "}
              </span>
            </p>
            <p>
              Description:{" "}
              <span className="data">
                {result.data.weather[0].description}{" "}
              </span>{" "}
            </p>
            <p>
              Temperature:{" "}
              <span className="data">
                {" "}
                {result.data.main.temp}
                <sup>o</sup>F
              </span>{" "}
            </p>
            <p>
              Feels like:{" "}
              <span className="data">
                {" "}
                {result.data.main.feels_like}
                <sup>o</sup>F{" "}
              </span>{" "}
            </p>
            <p>
              Maximum temperature:{" "}
              <span className="data">
                {result.data.main.temp_min} <sup>o</sup>F
              </span>{" "}
            </p>
            <p>
              Minimum temperature:{" "}
              <span className="data">
                {result.data.main.temp_max}
                <sup>o</sup>F{" "}
              </span>{" "}
            </p>
            <p>
              Humidity:{" "}
              <span className="data">{result.data.main.humidity}% </span>{" "}
            </p>
            <p>
              Sunrise:
              <span className="data">
                {" "}
                {new Date(result.data.sys.sunrise * 1000).toLocaleString()}
              </span>
            </p>
            <p>
              Sunset:{" "}
              <span className="data">
                {" "}
                {new Date(result.data.sys.sunset * 1000).toLocaleString()}{" "}
              </span>
            </p>
          </div>
        )
      ) : (
        <p>Please enter the a city name</p>
      )}
    </div>
  );
}

export default App;
