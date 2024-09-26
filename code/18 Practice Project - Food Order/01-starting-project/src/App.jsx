import Header from "./components/Header.jsx";
import MealList from "./components/MealList.jsx";
import {CartContextProvider} from "./components/store/CartContext.jsx";

function App() {
  return (
    <CartContextProvider>
      <main>
        <Header />
        <MealList />
      </main>
    </CartContextProvider>
  );
}

export default App;
