import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cameron = () => {
    const [longitude, setlongitude] = useState(null);
    const [latitude, setlatitude] = useState(null);

    const fetchCameronCoordinates = async () => {
        try {
            const response = await axios.get("/api/v1/locationRouter/cameron");
            setlongitude(response.data.lon);
            setlatitude(response.data.lat);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCameronCoordinates();
    }, []);

    return (
        <div>
        <h1 className='brother-header'>Cameron</h1>
        <h2>Longitude: {longitude}</h2>
        <h2>Latitude: {latitude}</h2>
        </div>
    )
}

export default Cameron;