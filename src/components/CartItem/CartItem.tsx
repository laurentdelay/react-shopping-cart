import { Grid } from "@material-ui/core";
import {
  AddCircle,
  DeleteForeverOutlined,
  RemoveCircle,
} from "@material-ui/icons";
import { useCart } from "../../contexts/CartContext";
import {
  CartItemBody,
  CartItemButtons,
  CartItemCard,
  CartItemDelete,
  CartItemPicture,
  CartItemTitle,
  CartItemValue,
  QuantityButton,
} from "./CartItem.style";

type CartItemProps = {
  cartItem: CartItemType;
};

const CartItem = ({
  cartItem: {
    item: { id, title, image, price },
    count,
  },
}: CartItemProps) => {
  const { updateCart } = useCart();
  return (
    <CartItemCard>
      <Grid container>
        <Grid item xs={2}>
          <CartItemPicture src={image} alt={title} />
        </Grid>

        <Grid item xs={8}>
          <CartItemBody>
            <CartItemTitle>{title}</CartItemTitle>

            <CartItemButtons>
              <QuantityButton
                onClick={() =>
                  updateCart({ type: "REMOVE_1_ITEM", payload: id })
                }
              >
                <RemoveCircle />
              </QuantityButton>
              {count}
              <QuantityButton
                onClick={() => updateCart({ type: "ADD_1_ITEM", payload: id })}
              >
                <AddCircle />
              </QuantityButton>
            </CartItemButtons>
          </CartItemBody>
        </Grid>

        <Grid item xs={2} direction={"column-reverse"}>
          <CartItemValue>{(count * price).toFixed(2)}€</CartItemValue>
        </Grid>
      </Grid>
      <CartItemDelete
        onClick={() => {
          updateCart({ type: "REMOVE_ITEM", payload: id });
        }}
      >
        <DeleteForeverOutlined />
      </CartItemDelete>
    </CartItemCard>
  );
};

export default CartItem;
