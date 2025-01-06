import React from "react";
import { Product } from "../../models/product";
import { ProductCard } from "../ProductCard";

export const ProductList: React.FC = () => {
  const products_list: Product[] = [
    {
      id: 1,
      name: "Capybara",
      price: 2,
      img_url:
        "https://upload.wikimedia.org/wikipedia/commons/3/34/Hydrochoeris_hydrochaeris_in_Brazil_in_Petr%C3%B3polis%2C_Rio_de_Janeiro%2C_Brazil_09.jpg",
    },
    {
      id: 2,
      name: "Racoon",
      price: 4,
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROsVeeLJBtsTo3GMfAqtaHbWeAIxotR6OtuLjup9ZQdpCB9DewaHbhJ9JJ487hqzm3Zjk&usqp=CAU",
    },
    {
      id: 3,
      name: "Lama",
      price: 6,
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQviHCx82DOK0gJX0fY6iRFlQvvXhaTL9c5Mg&s",
    },
  ];

  return (
    <>
      {products_list.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};
