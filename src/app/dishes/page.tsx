"use client";
import React, { useEffect, useState } from "react";
import "../globals.css";
import Link from "next/link";

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
            <button>Drinks</button>
          </Link>
        </div>
      </div>
      <button className="button" onClick={fetchDish}>
        New Dish
      </button>
    </div>
  );
}
