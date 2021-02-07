import { Grid, LinearProgress } from "@material-ui/core";
import React, { useCallback, useEffect } from "react";
import { useQuery } from "react-query";
import Item from "../../components/Item/Item";
import { useCart } from "../../contexts/CartContext";

const ItemsDisplay = () => {
  const { updateCart } = useCart();

  const getItems = useCallback(async () => {
    try {
      const items = await fetch("https://fakestoreapi.com/products");
      const itemsJson: Item[] = await items.json();

      return itemsJson;
    } catch (error) {
      throw new Error(error);
    }
  }, []);
  const { data: items, isLoading, error } = useQuery<Item[]>(
    "products",
    getItems
  );

  if (isLoading) {
    return <LinearProgress />;
  }
  if (error) {
    return <div>Something went wrong when loading items!</div>;
  }

  return (
    <Grid container spacing={3}>
      {items?.map((item) => (
        <Grid item key={item.id} xs={12} sm={4}>
          <Item item={item} handleAddToCart={updateCart} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemsDisplay;
