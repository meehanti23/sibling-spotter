import express from 'express';
import axios from 'axios';

const weatherRouter = new express.Router();

weatherRouter.get("/weather", async (req, res) => {
    const { q } = req.query
    const apiKey = process.env.WEATHER_API_KEY
    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${q}&aqi=no`)
        const weatherData = response.data.current;
        res.status(200).json(weatherData);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ errors: error });
    }
});

weatherRouter.get("/jeremyWeather", async (req, res) => {
    const { q } = req.query
    const apiKey = process.env.WEATHER_API_KEY
    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${q}&aqi=no`)
        const weatherData = response.data.current;
        res.status(200).json(weatherData);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ errors: error });
    }
});

export default weatherRouter;