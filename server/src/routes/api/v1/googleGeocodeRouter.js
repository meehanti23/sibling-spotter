import express from 'express';
import axios from 'axios';

const googleGeocodeRouter = new express.Router();

googleGeocodeRouter.get("/", async (req, res) => {
    try {
        const { address } = req.query;
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_GEOCODING_API_KEY}`);
        res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ errors: error });
    }
    }
);

export default googleGeocodeRouter;