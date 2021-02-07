import { createContext, useContext, useReducer } from "react";

export type CART_ACTION =
  | { type: "ADD_ITEM"; payload: Item }
  | { type: "ADD_1_ITEM" | "REMOVE_ITEM" | "REMOVE_1_ITEM"; payload: number };

interface CartState {
  cart: CartItemType[];
}

interface CartContextType extends CartState {
  updateCart(action: CART_ACTION): void;
}

const initialState: CartState = {
  cart: [],
};

const ItemsContext = createContext<CartContextType>({
  ...initialState,
  updateCart: () => {},
});

const useCart = () => {
  const context = useContext(ItemsContext);

  if (context === undefined) {
    throw new Error("useItems must be used in ItemsProvider");
  }

  return context;
};

const itemsReducer = (state: typeof initialState, action: CART_ACTION) => {
  const { cart } = state;

  const getItemIndex = (cart: Array<CartItemType>, itemId: number): number => {
    return cart.findIndex((cartItem) => cartItem.item.id === itemId);
  };

  let itemIndex: number;

  switch (action.type) {
    case "ADD_ITEM":
      const newItem = action.payload;
      const foundItemIndex = cart.findIndex(
        (cartItem) => cartItem.item.id === newItem.id
      );

      if (foundItemIndex >= 0) {
        cart[foundItemIndex].count++;
      } else {
        cart.push({ item: newItem, count: 1 });
      }
      console.log(cart);
      return { ...state, cart };
    case "ADD_1_ITEM":
      itemIndex = getItemIndex(cart, action.payload);

      if (itemIndex === -1) {
        throw new Error();
      }

      cart[itemIndex].count++;

      return { ...state, cart };
    case "REMOVE_ITEM":
      itemIndex = getItemIndex(cart, action.payload);
      if (itemIndex === -1) {
        throw new Error();
      }

      cart.splice(itemIndex, 1);

      return { ...state, cart };
    case "REMOVE_1_ITEM":
      itemIndex = getItemIndex(cart, action.payload);

      if (itemIndex === -1) {
        throw new Error();
      }

      if (--cart[itemIndex].count <= 0) {
        cart.splice(itemIndex, 1);
      }

      return { ...state, cart };
    default:
      throw new Error();
  }
};

const CartProvider = ({ children }: AppProps) => {
  const [state, updateCart] = useReducer(itemsReducer, initialState);

  return (
    <ItemsContext.Provider value={{ ...state, updateCart }}>
      {children}
    </ItemsContext.Provider>
  );
};

export { useCart, CartProvider };
