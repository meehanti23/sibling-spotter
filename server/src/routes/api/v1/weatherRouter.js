import express from 'express';
import axios from 'axios';

const weatherRouter = new express.Router();

weatherRouter.get("/weather", async (req, res) => {
    const { q } = req.query
    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=0df629ef6dde42a7bc2220147231307&q=${q}&aqi=no`)
        const weatherData = response.data.current
        console.log(weatherData, "this is the weather data")
        res.status(200).json(weatherData);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ errors: error });
    }
});

weatherRouter.get("/jeremyWeather", async (req, res) => {
    const { q } = req.query
    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=0df629ef6dde42a7bc2220147231307&q=${q}&aqi=no`)
        const weatherData = response.data.current
        console.log(weatherData, "this is the weather data")
        console.log(weatherData, "this is the weather data")
        res.status(200).json(weatherData);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ errors: error });
    }
});

export default weatherRouter;