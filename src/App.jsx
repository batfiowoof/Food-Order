import { useState } from "react";

import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgress";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);

  return (
    <>
      <CartContextProvider>
        <UserProgressContextProvider>
          <Header onCartButtonClick={openCart} />
          <Cart />
          <Checkout />
          <Products />
        </UserProgressContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
