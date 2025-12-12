import React, { useState } from "react";

const Weather = () => {
  // what is useState used for
  // if there is time explore what useEffect is and how it's different from useState, you will need it in the future
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async () => {};

  const handleInputChange = (event) => {
    // capture and handle city input value
  };

  const handleSubmit = (event) => {};

  return {
    /* 
    
    Add a form input that fetches weather data based on the city name entered by the user
      for example: if data passed through show name otherwise load data
    Display the city's weather details on your page (description, wind speed, humidity, temperature, etc)
    [Bonus] handle errors gracefully and consider edge cases, such as invalid input or issues with the API request
    
    */
  };
};

export default Weather;
