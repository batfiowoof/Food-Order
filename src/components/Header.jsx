import { useContext } from "react";

import CartContext from "../store/CartContext";
import userProgressContext from "../store/UserProgress";

import Button from "./Button";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(userProgressContext);

  const totalItems = cartCtx.items.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <h1>ReactMeals</h1>
        <img src="/logo.jpg" alt="" id="title" />
      </div>
      <nav>
        <Button textOnly={true} onClick={handleShowCart}>
          Cart ({totalItems})
        </Button>
      </nav>
    </header>
  );
}
