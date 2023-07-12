import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tim = () => {
    const [longitude, setLongitude] = useState(null);
    const [latitude, setLatitude] = useState(null);

    const fetchTimCoordinates = async () => {
        try {
            const response = await axios.get("/api/v1/locationRouter/tim");
            setLongitude(response.data.lon);
            setLatitude(response.data.lat);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchTimCoordinates();
    }, []);

    return (
        <div>
            <h1>Tim</h1>
            <h2>Longitude: {longitude}</h2>
            <h2>Latitude: {latitude}</h2>
        </div>
    )
}

export default Tim;
