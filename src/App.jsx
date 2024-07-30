import { useState } from "react";

import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { CartContextProvider } from "./store/CartContext";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <>
      <CartContextProvider>
        <Header onCartButtonClick={openCart} />
        {isCartOpen && <Cart onCloseCart={closeCart} />}
        <Products />
      </CartContextProvider>
    </>
  );
}

export default App;
