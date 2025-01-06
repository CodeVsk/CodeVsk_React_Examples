import { Product } from "@/models/product";
import { createContext, useContext, useState } from "react";

type CartContextProps = {
  items: Product[];
  totalPrice: number;
  addToCart: (item: Product) => void;
  removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextProps>({} as CartContextProps);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItem] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const addToCart = (item: Product) => {
    setItem([...items, item]);
    setTotalPrice(totalPrice + item.price);
  };

  const removeFromCart = (id: number) => {
    const filteredItems = items.filter((item) => item.id !== id);

    setItem(filteredItems);
    setTotalPrice(
      filteredItems.reduce((total, currentItem) => total + currentItem.price, 0)
    );
  };

  return (
    <CartContext.Provider
      value={{ items, totalPrice, addToCart, removeFromCart }}
    >
      <>{children}</>
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);

  return context;
};

export { CartProvider, useCart };
