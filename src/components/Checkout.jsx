import { useContext, useState } from "react";
import {
  validateName,
  validateStreet,
  validatePostal,
  validateCity,
  validateEmail,
} from "../util/validation";

import Input from "./Input";
import Modal from "./Modal";
import Button from "./Button";

import UserProgressContext from "../store/UserProgress";

export default function Checkout() {
  const userProgressCtx = useContext(UserProgressContext);

  const [formData, setFormData] = useState({
    name: "",
    street: "",
    postal: "",
    city: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    street: "",
    postal: "",
    city: "",
    email: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const validateForm = () => {
    const errors = {
      name: validateName(formData.name),
      street: validateStreet(formData.street),
      postal: validatePostal(formData.postal),
      city: validateCity(formData.city),
      email: validateEmail(formData.email),
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => error === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form data
      console.log("Form submitted", formData);
    }
  };

  return (
    <Modal open={userProgressCtx.progress === "checkout"} className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        {formErrors.name && <p className="error">{formErrors.name}</p>}
        <Input
          label="Street"
          type="text"
          id="street"
          value={formData.street}
          onChange={handleChange}
        />
        {formErrors.street && <p className="error">{formErrors.street}</p>}
        <Input
          label="Postal Code"
          type="text"
          id="postal"
          value={formData.postal}
          onChange={handleChange}
        />
        {formErrors.postal && <p className="error">{formErrors.postal}</p>}
        <Input
          label="City"
          type="text"
          id="city"
          value={formData.city}
          onChange={handleChange}
        />
        {formErrors.city && <p className="error">{formErrors.city}</p>}
        <Input
          label="Email"
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        {formErrors.email && <p className="error">{formErrors.email}</p>}
        <div className="form-actions">
          <Button type="submit" classes="green-button">
            Order
          </Button>
          <Button
            onClick={userProgressCtx.hideCheckout}
            classes="red-button"
            margin="0 1rem"
          >
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
}
