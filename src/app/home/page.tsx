import React from "react";
import "../globals.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import hamburger from "../assets/hamburger.jpg";
import steak from "../assets/steak.jpg";
import pizza from "../assets/pizza.jpg";
import Link from "next/link";
import { useState, useContext } from "react";
import { OrderContext } from "../components/OrderContext";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const { order, setOrder } = useContext(OrderContext);
  const [email, setEmail] = useState("");

  const router = useRouter(); // Access the router

  const findOrder = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/order/${email}`
      );
      const order = response.data;
      if (order) {
        setOrder(order); // Update the order in the context
        localStorage.setItem("order", JSON.stringify(order)); // Update the order in local storage
        router.push("../dishes"); // Navigate to the dishes page
      } else {
        console.error(`Could not find order with email: ${email}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

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
              <img className="carousel-img" src={steak.src} />
              <p className="legend">Steak</p>
            </div>
            <div>
              <img className="carousel-img" src={pizza.src} />
              <p className="legend">Pizza</p>
            </div>
          </Carousel>
        </div>
        <div className="container">
          <h2>Start your order</h2>
          <Link href="../dishes">
            <button className="button">Order</button>
          </Link>
        </div>
        <div className="container">
          <h2>Find your order</h2>
          <input
            type="email"
            placeholder="Enter your e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <button className="button" onClick={findOrder}>
            Find
          </button>
        </div>
        <div className="container">
          <h2>Dish of the day</h2>
        </div>
      </div>
    </div>
  );
}
