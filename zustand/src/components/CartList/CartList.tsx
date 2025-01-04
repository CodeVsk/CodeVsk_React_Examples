import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import { useCartStore } from "@/store/cart";

export function CartList() {
  const store = useCartStore();

  const handleRemoveFromCart = (id: number) => {
    store.removeFromCart(id);
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {store.items.map((item) => (
          <TableRow key={item.id} className="">
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>
              <Button
                variant="outline"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                <Trash />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell>R${store.totalPrice}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
