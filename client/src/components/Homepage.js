import React, { useState, useEffect } from "react";
import axios from "axios";
import Tim from "./brotherPages/Tim";

const Homepage = (props) => {
  const [timImage, setTimImage] = useState(null);
  const [timLongitude, setTimLongitude] = useState(null);
  const [timLatitude, setTimLatitude] = useState(null);

  useEffect(() => {
    const fetchTimCoordinates = async () => {
      try {
        const response = await axios.get("/api/v1/locationRouter/tim");
        setTimLongitude(response.data.lon);
        setTimLatitude(response.data.lat);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTimCoordinates();

    const timLonApprox = timLongitude ? timLongitude.toFixed(2) : null;
    const timLatApprox = timLatitude ? timLatitude.toFixed(2) : null;

    if (timLonApprox === "-80.02" && timLatApprox === "33.01") {
      setTimImage("https://siblingspotter.s3.amazonaws.com/House1PNG-PhotoRoom.png-PhotoRoom.png");
    } else {
      setTimImage("https://siblingspotter.s3.amazonaws.com/cartoon-desert1-PhotoRoom.png-PhotoRoom.png");
    }
  }, [timLatitude, timLongitude, timImage]);

  
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
                src="https://siblingspotter.s3.amazonaws.com/cartoon-desert1-PhotoRoom.png-PhotoRoom.png"
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
                src="https://media.istockphoto.com/id/1153217446/vector/cartoon-city.jpg?s=1024x1024&w=is&k=20&c=FQ7vTSMDM7vFX-oTDsL0tVPWnJ2likHjLZfGHTM0T8A="
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
