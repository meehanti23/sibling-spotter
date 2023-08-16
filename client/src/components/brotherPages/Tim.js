import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tim = (props) => {
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [weatherDescription, setWeatherDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [timPic, setTimPic] = useState(null);

  const fetchTimCoordinates = async () => {
    try {
      const response = await axios.get('/api/v1/locationRouter/tim');
      setLongitude(response.data.lon);
      setLatitude(response.data.lat);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTimCoordinates();
    getRandomTimPic();
  }, []);

  useEffect(() => {
    const fetchTimWeather = async () => {
      const q = `${latitude},${longitude}`;
      try {
        const response = await axios.get(`/api/v1/weatherRouter/weather?q=${q}`);
        const weatherData = response.data;
        setWeatherIcon(weatherData.condition.icon);
        setWeatherDescription(weatherData.condition.text);
        setHumidity(weatherData.humidity);
        setWindSpeed(weatherData.wind_mph);
        setTemperature(weatherData.temp_f);
        setFeelsLike(weatherData.feelslike_f);
      } catch (error) {
        console.log(error);
      }
    };

    if (latitude !== null && longitude !== null) {
      fetchTimWeather();
    }
  }, [longitude, latitude]);

  const timPictures = [
    'https://siblingspotter.s3.amazonaws.com/245D3C19-38DC-42A8-84C2-CB2D37AC95F9_1_105_c.jpeg',
    'https://i.ibb.co/9r6ndws/timandabbie.jpg',
    'https://i.ibb.co/MZTH47w/timandabbie22.jpg',
    'https://i.ibb.co/jVd7Wn9/timandthewomen.jpg',
    'https://i.ibb.co/JkPcb7K/timandmom.jpg',
    'https://siblingspotter.s3.amazonaws.com/teemBoat.jpeg',
    'https://siblingspotter.s3.amazonaws.com/teemEpcot.jpeg',
    'https://siblingspotter.s3.amazonaws.com/teemHiltonHead.jpeg',
    'https://i.ibb.co/2ycPBm5/allofus1.jpg',
    'https://siblingspotter.s3.amazonaws.com/brothersPilot.jpg'
  ]

  const getRandomTimPic = () => {
    const randomIndex = Math.floor(Math.random() * timPictures.length);
    setTimPic(timPictures[randomIndex]);
  }

  return (
    <div className='brother-box'>
      <div className='box-container'>
        <div className='weather-box'>
          <div className="icon-wrapper">
            <img src={weatherIcon} alt='weather icon' className='weather-icon' />
          </div>
          <h2 className="weather-info"><b>Weather:</b> {weatherDescription}</h2>
          <h2 className="weather-info"><b>Temperature:</b> {temperature}°F</h2>
          <h2 className="weather-info"><b>Feels Like:</b> {feelsLike}°F</h2>
          <h2 className="weather-info"><b>Humidity:</b> {humidity}%</h2>
          <h2 className="weather-info"><b>Wind Speed:</b> {windSpeed} mph</h2>
        </div>
      </div>
      <div className='box-container'>
        <a href="/">
          <div className='brother-picture'>
            <div className='brother-photo-container'>
              <img src={timPic} alt='Tim' className='brother-photo' />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
  
};

export default Tim;
