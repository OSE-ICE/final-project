"use client";
import React, { useEffect, useState } from "react";
import "../globals.css";
import Link from "next/link";
import { Dish, Drink, OrderType } from "../api";
import { OrderContext } from "../components/OrderContext";
import { useContext } from "react";

export default function DrinksPage() {
  const [drinks, setDrinks] = useState([]);
  const [selectedDrinks, setSelectedDrinks] = useState<string[]>([]);
  const { order, setOrder } = useContext(OrderContext);

  // At the start of your DrinksPage component
  const storedOrder = JSON.parse(localStorage.getItem("order") || "{}");

  // If there's an order in local storage and the context is empty, use the order from local storage
  if (Object.keys(order).length === 0 && storedOrder.dish) {
    setOrder(storedOrder);
  }

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((response) => response.json())
      .then((data) => setDrinks(data.drinks))
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleOrderClick = async () => {
    try {
      const transformedDish = ""; // Replace with the actual value of transformedDish
      const order: OrderType = {
        id: 0, // replace with actual id
        email: "", // replace with actual email
        dish: transformedDish as unknown as Dish, // Cast transformedDish to type Dish
        drinks: selectedDrinks as unknown as Drink[], // Cast selectedDrinks to type Drink[]
        count: 1, // replace with actual count
        date: new Date(), // replace with actual date
      };

      setOrder({ ...order, drinks: selectedDrinks });
      localStorage.setItem("order", JSON.stringify(order));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  console.log(order);

  return (
    <div>
      <div className="container-wrapper">
        <div className="container">
          {drinks.length > 0 ? (
            <div className="drinks-grid">
              {drinks.map(
                (
                  drink: { strDrink: string; strDrinkThumb: string },
                  index: number
                ) => (
                  <div key={index} className="drink-item">
                    <img
                      className="img-thumb"
                      src={drink.strDrinkThumb}
                      alt={drink.strDrink}
                    />
                    <p>{drink.strDrink}</p>
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        const drinkName = drink.strDrink;
                        if (e.target.checked) {
                          setSelectedDrinks([...selectedDrinks, drinkName]);
                        } else {
                          setSelectedDrinks(
                            selectedDrinks.filter((d) => d !== drinkName)
                          );
                        }
                      }}
                    />
                  </div>
                )
              )}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="container">
          <h2>Continue to orders page</h2>
          <Link href="../orders">
            <button className="button" onClick={handleOrderClick}>
              Orders
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
