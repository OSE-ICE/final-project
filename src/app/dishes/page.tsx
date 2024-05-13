"use client";
import React, { useEffect, useState } from "react";
import "../globals.css";
import Link from "next/link";
import { Dish, OrderType } from "../api";

export default function DishesPage() {
  const [dish, setDish] = useState(null);

  useEffect(() => {
    fetch("https://themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => setDish(data.meals[0]));
  }, []);

  const fetchDish = () => {
    fetch("https://themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => setDish(data.meals[0]));
  };

  const getIngredients = (dish: any) => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (dish[`strIngredient${i}`]) {
        ingredients.push(dish[`strIngredient${i}`]);
      }
    }
    return ingredients;
  };

  const handleSelectDrinksClick = async () => {
    if (dish) {
      try {
        const transformedDish: Dish = {
          id: (dish as any).idMeal,
          name: (dish as any).strMeal,
          description: "", // replace with actual description
          imageSource: (dish as any).strMealThumb,
          price: 0, // replace with actual price
          category: "", // replace with actual category
          cousine: "", // replace with actual cousine
        };

        const order: OrderType = {
          id: 0, // replace with actual id
          email: "john.doe@example.com", // replace with actual email
          dish: transformedDish,
          drinks: [], // replace with actual drinks
          count: 1, // replace with actual count
          date: new Date(), // replace with actual date
        };

        const response = await fetch("http://localhost:3001/api/create-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(order),
        });

        if (response.status === 200) {
          console.log("Dish added to order successfully");
        } else {
          console.log("Failed to add dish to order");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <div className="container-wrapper">
        <div className="container">
          {dish ? (
            <div>
              <h2>{(dish as any).strMeal}</h2>
              <img
                className="random-meal-img"
                src={(dish as any).strMealThumb}
                alt={(dish as any).strMeal}
              />
            </div>
          ) : (
            <p>Loading...</p>
          )}
          <button className="button" onClick={fetchDish}>
            New Dish
          </button>
        </div>
        <div className="container">
          {dish ? (
            <ul>
              {getIngredients(dish).map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="container">
          <h2>Continue to drinks order</h2>
          <Link href="../drinks">
            <button className="button" onClick={handleSelectDrinksClick}>
              Select Drinks
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
