import { useContext } from "react";

import Input from "./Input";
import Modal from "./Modal";
import Button from "./Button";

import UserProgressContext from "../store/UserProgress";

export default function Checkout() {
  const userProgressCtx = useContext(UserProgressContext);

  return (
    <Modal open={userProgressCtx.progress === "checkout"} className="checkout">
      <h2>Checkout</h2>
      <form>
        <Input label="Name" type="text" id="name" />
        <Input label="Street" type="text" id="street" />
        <Input label="Postal Code" type="text" id="postal" />
        <Input label="City" type="text" id="city" />
        <Input label="Email" type="email" id="email" />
        <div className="form-actions">
          <Button type="submit" classes="green-button">
            Order
          </Button>
        </div>
      </form>
    </Modal>
  );
}
