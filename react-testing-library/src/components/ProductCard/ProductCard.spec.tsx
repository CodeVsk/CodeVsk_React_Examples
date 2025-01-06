import { Product } from "@/models/product";
import { ProductCard } from "./ProductCard";
import { render, screen } from "@testing-library/react";

describe("", () => {
  it("should show Product Card with product name is Motorola", () => {
    const product: Product = {
      id: 1,
      img_url: "#",
      name: "Motorola",
      price: 1.99,
    };

    render(<ProductCard product={product} />);

    screen.getByText("Motorola");
  });
});
