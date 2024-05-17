"use client";
import Link from "next/link";
import { useContext } from "react";
import "../globals.css";
import React, { useState, useEffect } from "react";
import { OrderContext } from "../components/OrderContext"; // Import the context
import axios from "axios";
import { useRouter } from "next/navigation";

export default function OrdersPage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState(1);
  const [email, setEmail] = useState("");
  const { order, setOrder } = useContext(OrderContext); // Access the order from the context
  const router = useRouter();

  useEffect(() => {
    // Get the order from local storage when the component mounts
    const storedOrder = localStorage.getItem("order");
    if (storedOrder) {
      setOrder(JSON.parse(storedOrder));
    }
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Update the order with the current state
    const updatedOrder = {
      ...order,
      date: new Date(date), // Convert the date string to a Date object
      time,
      people,
      email,
    };
    setOrder(updatedOrder);

    // Update the order in local storage
    localStorage.setItem("order", JSON.stringify(updatedOrder));

    // Send the order to the server
    try {
      const response = await axios.post(
        "http://localhost:3001/api/create-order",
        updatedOrder
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

    setTimeout(() => {
      router.push("../receipts");
    }, 2000);
  };

  console.log(order);

  return (
    <div>
      <div className="container-wrapper">
        <div className="container">
          <form>
            <label>
              Date:
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
            <br />
            <br />
            <label>
              Time:
              <input
                type="time"
                min="16:00"
                max="23:00"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </label>
            <br />
            <br />
            <label>
              People:
              <input
                type="number"
                min="1"
                max="10"
                value={people}
                onChange={(e) => setPeople(Number(e.target.value))}
              />
            </label>
            <br />
            <br />
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <br />
            <Link href="../receipts">
              <button onClick={handleSubmit} className="button">
                Confirm Order
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
