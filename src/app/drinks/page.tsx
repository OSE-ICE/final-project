"use client";
import React, { useEffect, useState } from "react";
import "../globals.css";
import Link from "next/link";

export default function DrinksPage() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((response) => response.json())
      .then((data) => setDrinks(data.drinks))
      .catch((error) => console.error("Error:", error));
  }, []);

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
            <button className="button">Orders</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
