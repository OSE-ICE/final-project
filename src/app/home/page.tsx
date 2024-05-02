import React from "react";
import "../globals.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HomePage() {
  return (
    <div>
      <div className="container-wrapper">
        <div className="container">
          <Carousel>
            <div>
              <img src="./assets/hamburger.JPG" />
              <p className="legend">Hamburger</p>
            </div>
            <div>
              <img src="./assets/image2.png" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="./assets/image3.png" />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>
        <div className="container">Content of container 2</div>
        <div className="container">Content of container 3</div>
        <div className="container">Content of container 4</div>
      </div>
    </div>
  );
}
