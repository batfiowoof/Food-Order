import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgress";
import Modal from "./Modal";

import Button from "./Button";
export default function Cart({ onCloseCart }) {
  const { items, addItem, removeItem, removeAllItemsFromCart } =
    useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleOrder() {
    userProgressCtx.hideCart();
    removeAllItemsFromCart();
  }

  let totalPrice = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <Modal open={userProgressCtx.progress === "cart"} className="cart">
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="cart-item">
            <div>
              <strong>{item.name} - </strong>
              <span>
                {item.quantity} x ${item.price}
              </span>
            </div>
            <p className="cart-item-actions">
              <button onClick={removeItem.bind(null, item.id)}>-</button>
              <span>{item.quantity} </span>
              <button onClick={addItem.bind(null, item)}>+</button>
            </p>
          </li>
        ))}
      </ul>
      <p className="cart-total">${totalPrice.toFixed(2)}</p>
      <p className="modal-actions">
        <Button onClick={handleCloseCart} textOnly={true}>
          Close
        </Button>
        <Button onClick={handleOrder}>Order</Button>
      </p>
    </Modal>
  );
}
