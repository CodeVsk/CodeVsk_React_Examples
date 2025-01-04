import { create } from "zustand";
import { Product } from "../models/product";

type State = {
  items: Product[];
  totalPrice: number;
};

type Actions = {
  addToCart: (item: Product) => void;
  removeFromCart: (id: number) => void;
};

export const useCartStore = create<State & Actions>()((set, get) => ({
  items: [],
  totalPrice: 0,
  addToCart: (item: Product) => {
    set({
      items: [...get().items, item],
      totalPrice:
        get().items.reduce(
          (total, currentItem) => total + currentItem.price,
          0
        ) + item.price,
    });
  },
  removeFromCart: (id: number) => {
    const filteredItems = get().items.filter((item) => item.id !== id);
    set({
      items: filteredItems,
      totalPrice: filteredItems.reduce(
        (total, currentItem) => total + currentItem.price,
        0
      ),
    });
  },
}));
