import Cart from "./Cart/Cart";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import { useState } from "react";

function App() {
  const [showCartModal, setShowCartModal] = useState(false);

  const openCartHandler = () => {
    setShowCartModal(true);
  };

  const closeCartHandler = () => {
    setShowCartModal(false);
  };
  return (
    <div>
      {showCartModal && <Cart onClick={closeCartHandler} />}
      <Header onClick={openCartHandler} />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
