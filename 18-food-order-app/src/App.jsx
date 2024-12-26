import Header from "./components/Header";
import MealItem from "./components/MealItem";
import CartContextProvider from "./store/cart-context";

function App() {
  return (
    <CartContextProvider>
      <Header />

      <MealItem />
    </CartContextProvider>
  );
}

export default App;
