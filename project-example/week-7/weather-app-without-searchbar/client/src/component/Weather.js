import { useEffect, useState } from "react";
function Weather() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller.signal;
    async function fetchWeather() {
      const response = await fetch("http://localhost:5000/api/weather", {
        signal
      });
      const fetchedWeather = await response.json(response);
      setData(fetchedWeather.data);
    }
    fetchWeather();
    return () => {
      // cleanup function
      // cancel the request before component unmounts
      controller.abort();
    };
  }, []);
  console.log(data);

  return (
    <>
      {data ? (
        <div>
          <h1>Weather forecast</h1>
          <img
            src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@4x.png`}
            alt={data.current.weather[0].description}
          />
          <p>TIMEZONE:{data.timezone}</p>
          <p>DESCRIPTION:{data.current.weather[0].description}</p>
          <p>
            SUNRISE:{" "}
            {new Date(data.current.sunrise * 1000).toLocaleString("en-US")}
          </p>
          <p>
            SUNSET:{" "}
            {new Date(data.current.sunset * 1000).toLocaleString("en-US")}
          </p>
          <p>TEMP:{data.current.temp}</p>
          <p>HUMIDITY:{data.current.humidity}</p>
          <p>LATITUDE:{data.lat}</p>
          <p>LONGITUDE:{data.lon}</p>
        </div>
      ) : (
        <h1>hi</h1>
      )}{" "}
    </>
  );
}

export default Weather;
