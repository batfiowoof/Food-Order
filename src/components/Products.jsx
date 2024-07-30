import { useContext, useEffect, useState } from "react";

import Product from "./Product";

export default function Products() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMeals() {
      setIsLoading(true);
      const response = await fetch("http://localhost:3000/meals");
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error("Error fetching meals. Please try again later.");
      }

      setLoadedMeals(responseData);
      setIsLoading(false);
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {isLoading ? (
        <p>Loading...</p>
      ) : loadedMeals.length === 0 ? (
        <p>No meals available.</p>
      ) : (
        loadedMeals.map((meal) => <Product key={meal.id} meal={meal} />)
      )}
    </ul>
  );
}
