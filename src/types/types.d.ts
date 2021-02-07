type Item = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

type CartItemType = {
  item: Item;
  count: number;
};

type AppProps = {
  children: ReactNode;
};
