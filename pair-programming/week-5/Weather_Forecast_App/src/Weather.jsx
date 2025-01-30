import React, { useState } from 'react';

const Weather = () => {
 const [city, setCity] = useState('');
 const [weatherData, setWeatherData] = useState(null);

 const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid={YOUR_API_KEY}`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
 };

 const handleInputChange = (event) => {
   // capture and handle city input value 
 };

 const handleSubmit = (event) => {
   event.preventDefault();
    fetchData();
 };

 return (

    <div>
      weatherData ? (
        <>
          <h2>{weatherData.name}</h2>
        </>
      )
    </div>
 );
};

export default Weather;