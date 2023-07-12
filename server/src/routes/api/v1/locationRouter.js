import express from 'express';
import axios from 'axios';

const locationRouter = new express.Router();

locationRouter.get("/tim", async (req, res) => {
    console.log("this is the tim route");
    try {
        const response = await axios.get("https://dweet.io:443/get/dweets/for/timtimtimtest");
        const locationData = response.data.with[0].content
        const { lon, lat } = locationData
        res.status(200).json({ lon, lat });
    } catch (error) {
        console.log(error);
        res.status(500).json({ errors: error });
    }
});

export default locationRouter;
