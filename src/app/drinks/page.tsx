"use client";
import React, { useEffect, useState } from "react";
import "../globals.css";
import Link from "next/link";
import { Dish, Drink, OrderType } from "../api";
import { OrderContext } from "../components/OrderContext";
import { useContext } from "react";

type TempDrink = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

export default function DrinksPage() {
  const [drinks, setDrinks] = useState<TempDrink[]>([]);
  const [selectedDrinks, setSelectedDrinks] = useState<Drink[]>([]);
  const { order, setOrder } = useContext(OrderContext);

  useEffect(() => {
    const storedOrder = JSON.parse(localStorage.getItem("order") || "{}");

    if (Object.keys(order).length === 0 && storedOrder.dish) {
      setOrder(storedOrder);
    }

    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((response) => response.json())
      .then((data) => setDrinks(data.drinks))
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleOrderClick = () => {
    // Merge the selected drinks with the existing drinks in the order
    const newOrder: OrderType = {
      ...order,
      drinks: [...(order.drinks || []), ...selectedDrinks],
    };

    // Update the order in the context
    setOrder(newOrder);

    // Update the order in local storage
    localStorage.setItem("order", JSON.stringify(newOrder));
  };

  console.log(order);

  return (
    <div>
      <div className="container-wrapper">
        <div className="container">
          {drinks.length > 0 ? (
            <div className="drinks-grid">
              {drinks.map((drink, index) => (
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
                      if (e.target.checked) {
                        setSelectedDrinks([
                          ...selectedDrinks,
                          {
                            // fix ID
                            id: drink.idDrink,
                            name: drink.strDrink,
                            imageSource: drink.strDrinkThumb,
                            price: 5,
                            category: "drink",
                            brewer: "unknown",
                            description: "unknown",
                          },
                        ]);
                      } else {
                        setSelectedDrinks(
                          selectedDrinks.filter((d) => d.id !== drink.idDrink)
                        );
                      }
                    }}
                  />
                </div>
              ))}
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
