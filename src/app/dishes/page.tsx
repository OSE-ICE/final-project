"use client";
import React, { useEffect, useState } from "react";

export default function DishesPage() {
  const [dish, setDish] = useState(null);

  useEffect(() => {
    fetch("https://themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => setDish(data.meals[0]));
  }, []);

  return (
    <div>
      <div className="container-wrapper">
        <div className="container">
          {dish ? (
            <div>
              <h2>{dish.strMeal}</h2>
              <img src={dish.strMealThumb} alt={dish.strMeal} />
              <p>{dish.strInstructions}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="container">
          <p>Container 2</p>
        </div>
        <div className="container">
          <p>Container 3</p>
        </div>
      </div>
    </div>
  );
}
