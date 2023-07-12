import React from "react";

const Homepage = () => {
    return (
        <div className="homepage-box">
            <ul className="homepage-list grid-x">
            <div className="homepage-tile small-3"><a href="/tim">
                <li className="home-button small-3">Tim
                <img src="https://images.template.net/76758/Beach-Cartoon-Illustration-JPEG-1.jpg" className="tile-picture" alt="desert" />
                </li>
            </a>
            </div>
            <div className="homepage-tile small-3"><a href="/cameron">
                <li className="home-button small-3">Cameron
                <img src="https://cdn.vectorstock.com/i/1000x1000/20/25/cartoon-of-a-desert-background-vector-4052025.webp" className="tile-picture" alt="desert" />
                </li>
            </a>
            </div>
            <div className="homepage-tile small-3"><a href="/jeremy">
                <li className="home-button small-3">Jeremy
                <img src="https://media.istockphoto.com/id/1153217446/vector/cartoon-city.jpg?s=1024x1024&w=is&k=20&c=FQ7vTSMDM7vFX-oTDsL0tVPWnJ2likHjLZfGHTM0T8A=" className="tile-picture" alt="desert" />
                </li>
            </a>
            </div>
            </ul>
        </div>
    );
}

export default Homepage;