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

  const airplanePNG = "https://siblingspotter.s3.amazonaws.com/AirplanePhotoRoom.png"
  const timHousePNG = "https://siblingspotter.s3.amazonaws.com/House1PNG-PhotoRoom.png-PhotoRoom.png"
  const charlestonPNG = "https://siblingspotter.s3.amazonaws.com/%E2%80%94Pngtree%E2%80%94city+seaside+seaside+city+coastal_3923151.png"
  const camOfficePNG = "https://siblingspotter.s3.amazonaws.com/camOffice-PhotoRoom.png-PhotoRoom.png"
  const desertPNG = "https://siblingspotter.s3.amazonaws.com/cartoon-desert1-PhotoRoom.png-PhotoRoom.png"
  const swampPNG = "https://siblingspotter.s3.amazonaws.com/SwampPic-PhotoRoom.png"
  const beachPNG = "https://siblingspotter.s3.amazonaws.com/Beach-PhotoRoom.png"
  const mexicoPNG = "https://siblingspotter.s3.amazonaws.com/Mexico-PhotoRoom.png"
  const phoenixPNG = "https://siblingspotter.s3.amazonaws.com/Phoenix-PhotoRoom.png"
  const tucsonPNG = "https://siblingspotter.s3.amazonaws.com/Tucson-PhotoRoom.png"
  
  useEffect(() => {
    fetchCameronCoordinates();
    fetchTimCoordinates();

    const timLonApprox = timLongitude ? timLongitude.toFixed(2) : null;
    const timLatApprox = timLatitude ? timLatitude.toFixed(2) : null;
    const camLonApprox = cameronLongitude ? cameronLongitude.toFixed(2) : null;
    const camLatApprox = cameronLatitude ? cameronLatitude.toFixed(2) : null;

    if ((timLonApprox >= -80.02 && timLonApprox <= -80.01) && (timLatApprox >= 33 && timLatApprox <= 33.02)) {
      setTimImage(timHousePNG);
    } else if ((timLonApprox <= -79.6 && timLonApprox >= -80.4) && (timLatApprox <= 33.2 && timLatApprox >= 32.4)) {
      setTimImage(charlestonPNG);
    } else if (timLonApprox > -79.6 && timLonApprox < 60) {
      setTimImage(beachPNG)
    } else {
      setTimImage(swampPNG)
    }  

    if ((camLonApprox >= -112.08 && camLonApprox <= -112.12) && (camLatApprox >= 33.55 && camLatApprox <= 33.59 )) {
        setCameronImage(camOfficePNG);
    } else if ((camLonApprox >= -111.02 && camLonApprox <= -110.08) && (camLatApprox >= 32.2 && camLatApprox <= 32.4)) {
        setCameronImage(timHousePNG)
    } else if ((camLonApprox >= -111.32 && camLonApprox <= -110.82) && (camLatApprox >= 32.11 && camLatApprox <= 32.43)) {
        setCameronImage(tucsonPNG);
    } else if ((camLonApprox >= -112.55 && camLonApprox <= -111.6) && (camLatApprox >= 33.1 && camLatApprox <= 33.9)) {
        setCameronImage(phoenixPNG);
    } else if (camLonApprox > -111 && camLonApprox < -80) {
        setCameronImage(mexicoPNG);
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
                            src={airplanePNG}
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
