import Header from "./components/Header.jsx";
import MealList from "./components/MealList.jsx";
import {CartContextProvider} from "./components/store/CartContext.jsx";
import {UserProgressContextProvider} from "./components/store/UserProgressContext.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  return (
    <UserProgressContextProvider>
    <CartContextProvider>
      <main>
        <Header />
        <MealList />
        <Cart />
      </main>
    </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
