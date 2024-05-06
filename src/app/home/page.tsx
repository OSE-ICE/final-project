import React from "react";
import "../globals.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import hamburger from "../assets/hamburger.jpg";
import steak from "../assets/steak.jpg";
import pizza from "../assets/pizza.jpg";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <div className="container-wrapper">
        <div className="container">
          <Carousel>
            <div>
              <img className="carousel-img" src={hamburger.src} />
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
        <div className="container">
          <h2>Start your order</h2>
          <Link href="../dishes">
            <button>Order</button>
          </Link>
        </div>
        <div className="container">
          <h2>Find your order</h2>
          <input type="email" placeholder="Enter your e-mail" />
          <button>Find</button>
        </div>
        <div className="container">
          <h2>Dish of the day</h2>
        </div>
      </div>
    </div>
  );
}
