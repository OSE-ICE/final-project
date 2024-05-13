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
            <ul>
              {drinks.map((drink: { strDrink: string }, index: number) => (
                <li key={index}>{drink.strDrink}</li>
              ))}
            </ul>
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
