import Cart from "./Cart/Cart";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";

function App() {
  return (
    <div>
      <Header />
      <Cart />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
