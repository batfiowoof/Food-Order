import { useContext } from "react";

import Input from "./Input";
import Modal from "./Modal";
import Button from "./Button";

import UserProgressContext from "../store/UserProgress";
import CartContext from "../store/CartContext";

export default function Checkout() {
  const userProgressCtx = useContext(UserProgressContext);
  const CartCtx = useContext(CartContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const customerData = Object.fromEntries(formData.entries());

    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: { items: CartCtx.items, customer: customerData },
      }),
    });

    userProgressCtx.hideCheckout();
    CartCtx.removeAllItemsFromCart();
  };

  return (
    <Modal open={userProgressCtx.progress === "checkout"} className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <Input label="Name" type="text" name="name" id="name" />
        <Input label="Street" type="text" name="street" id="street" />
        <Input label="Postal Code" type="text" id="postal-code" />
        <Input label="City" type="text" name="city" id="city" />
        <Input label="Email" type="email" name="email" id="email" />
        <Button type="submit">Submit</Button>
        <Button
          onClick={userProgressCtx.hideCheckout}
          classes="red-button"
          margin="0 1rem"
        >
          Close
        </Button>
      </form>
    </Modal>
  );
}
