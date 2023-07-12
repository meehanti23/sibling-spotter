import React, { useState, useEffect } from 'react';
import axios from "axios";

const Tim = (props) => {
    const [longitude, setlongitude] = useState(null);
    const [latitude, setlatitude] = useState(null);
    
    const fetchTimCoordinates = async () => {
        try {
          const response = await axios.get("/api/v1/locationRouter/tim");
          setlongitude(response.data.lon);
          setlatitude(response.data.lat);
        } catch (error) {
          console.log(error);
        }
    };

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
