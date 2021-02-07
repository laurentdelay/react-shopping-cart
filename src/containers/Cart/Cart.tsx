import { Badge, Drawer } from "@material-ui/core";
import { AddShoppingCart, Close } from "@material-ui/icons";
import React, { useState } from "react";
import CartItem from "../../components/CartItem/CartItem";
import { useCart } from "../../contexts/CartContext";
import { CartButton, CloseButton, CartContent, CartTotal } from "./Cart.style";

const Cart = () => {
  const { cart } = useCart();
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const getCartCount = (): number => {
    return cart.reduce<number>((sum, cartItem) => {
      return sum + cartItem.count;
    }, 0);
  };

  const getCartValue = (): number => {
    return cart.reduce<number>(
      (sum, cartItem) => sum + cartItem.count * cartItem.item.price,
      0
    );
  };

  const toggleCart = (): void => {
    setCartOpen((cartOpen) => !cartOpen);
  };
  return (
    <div>
      <CartButton onClick={toggleCart}>
        <Badge badgeContent={getCartCount()} color="error">
          <AddShoppingCart />
        </Badge>
      </CartButton>

      <Drawer anchor="right" open={cartOpen} onClose={toggleCart}>
        <div>
          <CloseButton onClick={toggleCart}>
            <Close />
          </CloseButton>
        </div>
        <CartContent>
          {!cart.length && <h4>Your cart is empty, start shopping!</h4>}
          {cart.map((cartItem) => (
            <CartItem key={cartItem.item.id} cartItem={cartItem} />
          ))}
          {!!cart.length && (
            <CartTotal>
              <h3>Total:</h3>
              <h3>{getCartValue().toFixed(2)}€</h3>
            </CartTotal>
          )}
        </CartContent>
      </Drawer>
    </div>
  );
};

export default Cart;
