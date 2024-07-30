import data from "../../backend/data/available-meals.json";

import Button from "./Button";

export default function Products() {
  return (
    <div id="meals">
      {data.map((meal, index) => (
        <div className="meal-item" key={index}>
          <article>
            <img
              src={`http://localhost:3000/${meal.image}`}
              alt={`Image of ${meal.name}`}
            />
            <h3>{meal.name}</h3>
            <p className="meal-item-description">{meal.description}</p>
            <div className="meal-item-actions">
              <Button>Add to Cart</Button>
            </div>
            <p className="meal-item-price">Price: ${meal.price}</p>
          </article>
        </div>
      ))}
    </div>
  );
}
