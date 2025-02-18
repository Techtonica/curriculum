import React, { useState } from 'react';

const Weather = () => {
 const [city, setCity] = useState('');
 const [weatherData, setWeatherData] = useState(null);

 const fetchData = async () => {
 };

 const handleInputChange = (event) => {
   // capture and handle city input value 
 };

 const handleSubmit = (event) => {
 };

 return (


  // Add a form input that fetches weather data based on the city name entered by the user
  // Display the city's weather details on your page (description, wind speed, humidity, temperature, etc)
  // [Bonus] handle errors gracefully and consider edge cases, such as invalid input or issues with the API request
    <div>
      {weatherData ? (
        <>
          <h2>{weatherData.name}</h2>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}


    </div>
 );
};

export default Weather;