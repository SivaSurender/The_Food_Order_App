import Cart from "./Cart/Cart";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCartModal, setShowCartModal] = useState(false);

  const openCartHandler = () => {
    setShowCartModal(true);
  };

  const closeCartHandler = () => {
    setShowCartModal(false);
  };
  console.log(CartProvider);

  return (
    <CartProvider>
      {showCartModal && <Cart onClick={closeCartHandler} />}
      <Header onClick={openCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
