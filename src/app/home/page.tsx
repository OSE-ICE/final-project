import React from "react";
import "../globals.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import hamburger from "../assets/hamburger.jpg";
import steak from "../assets/steak.jpg";
import pizza from "../assets/pizza.jpg";

export default function HomePage() {
  return (
    <div>
      <div className="container-wrapper">
        <div className="container">
          <Carousel>
            <div>
              <img src={hamburger.src} />
              <p className="legend">Hamburger</p>
            </div>
            <div>
              <img src={steak.src} />
              <p className="legend">Steak</p>
            </div>
            <div>
              <img src={pizza.src} />
              <p className="legend">Pizza</p>
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
