import React, { useState, useEffect } from "react";
import axios from "axios";

const Homepage = (props) => {
  const [timImage, setTimImage] = useState(null);
  const [timLongitude, setTimLongitude] = useState(null);
  const [timLatitude, setTimLatitude] = useState(null);
  const [cameronImage, setCameronImage] = useState(null);
  const [cameronLongitude, setCameronLongitude] = useState(null);
  const [cameronLatitude, setCameronLatitude] = useState(null);  

  const fetchTimCoordinates = async () => {
    try {
      const response = await axios.get("/api/v1/locationRouter/tim");
      setTimLongitude(response.data.lon);
      setTimLatitude(response.data.lat);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCameronCoordinates = async () => {
    try {
        const response = await axios.get("/api/v1/locationRouter/cameron");
        setCameronLongitude(response.data.lon);
        setCameronLatitude(response.data.lat);
    } catch (error) {
        console.log(error);
    }
  };

  // Jeremy PNGs
  const chicagoSkylinePNG = "https://siblingspotter.s3.amazonaws.com/ChicagoSkyline.png"
  const washingtonPNG = "https://siblingspotter.s3.amazonaws.com/washingtonPNG.png"

  // Tim PNGs
  const timHousePNG = "https://siblingspotter.s3.amazonaws.com/House1PNG-PhotoRoom.png-PhotoRoom.png"
  const charlestonPNG = "https://siblingspotter.s3.amazonaws.com/%E2%80%94Pngtree%E2%80%94city+seaside+seaside+city+coastal_3923151.png"
  const swampPNG = "https://siblingspotter.s3.amazonaws.com/SwampPic-PhotoRoom.png"
  const beachPNG = "https://siblingspotter.s3.amazonaws.com/Beach-PhotoRoom.png"
  

  // Cam PNGs
  const camOfficePNG = "https://siblingspotter.s3.amazonaws.com/camOffice-PhotoRoom.png-PhotoRoom.png"
  const desertPNG = "https://siblingspotter.s3.amazonaws.com/cartoon-desert1-PhotoRoom.png-PhotoRoom.png"
  const mexicoPNG = "https://siblingspotter.s3.amazonaws.com/Mexico-PhotoRoom.png"
  const phoenixPNG = "https://siblingspotter.s3.amazonaws.com/MainPhoenix-PhotoRoom.png"
  const tucsonPNG = "https://siblingspotter.s3.amazonaws.com/Tucson-PhotoRoom.png"
  const camHousePNG = "https://siblingspotter.s3.amazonaws.com/CamHouse-PhotoRoom.png-PhotoRoom.png"
  const camUniversityPNG = "https://siblingspotter.s3.amazonaws.com/%E2%80%94Pngtree%E2%80%94school+building+cartoon+classroom+school_5701074.png"
  
  // Misc PNGs
  const airplanePNG = "https://siblingspotter.s3.amazonaws.com/AirplanePhotoRoom.png"
  const newHampshirePNG = "https://siblingspotter.s3.amazonaws.com/pngwing.com+(1).png"

  useEffect(() => {
    fetchCameronCoordinates();
    fetchTimCoordinates();
    // const camSchool = 32.2331235 -110.9520875

    const timLonApprox = timLongitude ? timLongitude.toFixed(2) : null;
    const timLatApprox = timLatitude ? timLatitude.toFixed(2) : null;
    const camLonApprox = cameronLongitude ? cameronLongitude.toFixed(2) : null;
    const camLatApprox = cameronLatitude ? cameronLatitude.toFixed(2) : null;

    if ((timLonApprox >= -80.02 && timLonApprox <= -80.01) && (timLatApprox >= 33 && timLatApprox <= 33.02)) {
      setTimImage(timHousePNG);
    } else if ((timLonApprox <= -79.91 && timLonApprox >= -80) && (timLatApprox >= 32.76 && timLatApprox <= 32.9)) {
      setTimImage(charlestonPNG);
    } else if (timLonApprox > -79.6 && timLonApprox < -60) {
      setTimImage(beachPNG)
    } else {
      setTimImage(timHousePNG)
    }  

    if ((camLonApprox <= -112.08 && camLonApprox >= -112.13) && (camLatApprox >= 33.55 && camLatApprox <= 33.6)) {
      setCameronImage(camOfficePNG);
    } else if ((camLonApprox >= -111.01 && camLonApprox <= -111) && (camLatApprox >= 32.2 && camLatApprox <= 32.3)) {
      setCameronImage(camHousePNG);
    } else if ((camLonApprox >= -110.94 && camLonApprox <= -110.96) && (camLatApprox >= 32.23 && camLatApprox <= 32.24)) {
      setCameronImage(camUniversityPNG);
    } else if ((camLonApprox >= -111.32 && camLonApprox <= -110.82) && (camLatApprox >= 32.11 && camLatApprox <= 32.43)) {
      setCameronImage(tucsonPNG);
    } else if (camLatApprox > 15 && camLatApprox < 31.4) {
      setCameronImage(mexicoPNG);
    } else if ((camLonApprox >= -112.55 && camLonApprox <= -111.6) && (camLatApprox >= 33.1 && camLatApprox <= 33.9)) {
      setCameronImage(phoenixPNG);
    } else {
      setCameronImage(desertPNG);
    } 
  }, [timLatitude, timLongitude, timImage, cameronLatitude, cameronLongitude, cameronImage]);

  
  return (
    <div className="homepage-container">
        <div className="homepage-box">
            <ul className="homepage-list grid-x">
                <div className="homepage-tile small-3">
                    <a href="/tim">
                        <li className="home-button small-3 brother-name">
                        Tim
                        <img
                            src={timImage}
                            className="tile-picture"
                            alt="desert"
                        />
                        </li>
                    </a>
                </div>
                <div className="homepage-tile small-3">
                    <a href="/cameron">
                        <li className="home-button small-3 brother-name">
                        Cameron
                        <img
                            src={cameronImage}
                            className="tile-picture"
                            alt="desert"
                        />
                        </li>
                    </a>
                </div>
                <div className="homepage-tile small-3">
                    <a href="/jeremy">
                        <li className="home-button small-3 brother-name">
                        Jeremy
                        <img
                            src={chicagoSkylinePNG}
                            className="tile-picture"
                            alt="desert"
                        />
                        </li>
                    </a>
                </div>
            </ul>
        </div>
    </div>
  );
};

export default Homepage;
