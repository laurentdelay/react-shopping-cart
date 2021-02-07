import { CartProvider } from "../../contexts/CartContext";
import Cart from "../Cart/Cart";
import ItemsDisplay from "../ItemsDisplay/ItemsDisplay";
import { Wrapper } from "./App.style";

const App = () => {
  return (
    <Wrapper>
      <CartProvider>
        <ItemsDisplay />

        <Cart />
      </CartProvider>
    </Wrapper>
  );
};

export default App;
