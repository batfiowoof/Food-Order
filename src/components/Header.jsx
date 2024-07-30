import { useContext } from "react";

import CartContext from "../store/CartContext";

import Button from "./Button";

export default function Header({ onCartButtonClick }) {
  const cartCtx = useContext(CartContext);

  const totalItems = cartCtx.items.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <header id="main-header">
      <div id="title">
        <h1>ReactMeals</h1>
        <img src="/logo.jpg" alt="" id="title" />
      </div>
      <nav>
        <Button textOnly={true} onClick={onCartButtonClick}>
          Cart ({totalItems})
        </Button>
      </nav>
    </header>
  );
}
