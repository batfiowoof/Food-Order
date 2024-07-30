import React from "react";

export default function Cart({ onCloseCart }) {
  return (
    <dialog className="cart">
      <h2>Your Cart</h2>
      <ul>
        <li>
          <div className="cart-item">
            <p>Meal Name</p>
            <div className="cart-total">
              <span>Price</span>
              <span>x1</span>
            </div>
            <div className="cart-item-actions">
              <button>-</button>
              <button>+</button>
            </div>
          </div>
        </li>
      </ul>
    </dialog>
  );
}
