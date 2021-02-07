import { Button } from "@material-ui/core";
import { CART_ACTION } from "../../contexts/CartContext";
import { ItemBody, ItemCard, ItemPicture } from "./Item.style";

type ItemProps = {
  item: Item;
  handleAddToCart(action: CART_ACTION): void;
};

const Item = ({ item, handleAddToCart }: ItemProps) => {
  const { title, description, image, price } = item;
  return (
    <ItemCard>
      <ItemPicture src={image} alt={title} />
      <ItemBody>
        <h3>{title}</h3>
        <p>{description}</p>
        <h4>{price.toFixed(2)}€</h4>
      </ItemBody>
      <Button
        onClick={() => handleAddToCart({ type: "ADD_ITEM", payload: item })}
      >
        Add to cart
      </Button>
    </ItemCard>
  );
};

export default Item;
