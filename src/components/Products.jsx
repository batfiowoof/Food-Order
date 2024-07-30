import { useContext, useEffect, useState } from "react";

import Product from "./Product";

export default function Products() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  function handleAddItemToCart() {
    Cartctx.addItem(meal);
    console.log("Added item to cart");
  }

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      setLoadedMeals(responseData);
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.length === 0 ? (
        <p>No meals available.</p>
      ) : (
        loadedMeals.map((meal) => <Product key={meal.id} meal={meal} />)
      )}
    </ul>
  );
}
