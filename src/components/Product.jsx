import { useContext } from "react";

import Button from "./Button";

import CartContext from "../store/CartContext";

export default function Product({ meal }) {
  const Cartctx = useContext(CartContext);

  function handleAddProductToCart() {
    Cartctx.addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img
          src={`http://localhost:3000/${meal.image}`}
          alt={`Image of ${meal.name}`}
        />
        <h3>{meal.name}</h3>
        <p className="meal-item-description">{meal.description}</p>
        <p className="meal-item-actions">
          <Button onClick={handleAddProductToCart}>Add to Cart</Button>
        </p>
        <p className="meal-item-price">Price: ${meal.price}</p>
      </article>
    </li>
  );
}
