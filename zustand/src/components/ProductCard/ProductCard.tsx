import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { Card } from "../ui/card";
import { Product } from "@/models/product";
import { useCartStore } from "@/store/cart";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const store = useCartStore();

  const handleAddToCart = () => {
    store.addToCart(product);
  };

  return (
    <Card className="w-[300px] group relative space-y-4 p-3">
      <figure>
        <img
          className="w-full rounded-lg aspect-square"
          src={product.img_url}
          width={300}
          height={500}
          alt={product.name}
        />
      </figure>
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg">
            <span aria-hidden="true" className=" inset-0" />
            {product.name}
          </h3>
        </div>
        <p className="text-lg font-semibold">{product.price}</p>
      </div>
      <div className="flex gap-4">
        <Button variant="outline" className="w-full" onClick={handleAddToCart}>
          <PlusIcon className="size-4 me-1" /> Add to Card
        </Button>
      </div>
    </Card>
  );
}
