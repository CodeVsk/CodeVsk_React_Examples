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
import { useCart } from "@/contexts/cart";

export function CartList() {
  const cart = useCart();

  const handleRemoveFromCart = (id: number) => {
    cart.removeFromCart(id);
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
        {cart.items.map((item) => (
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
          <TableCell>R${cart.totalPrice}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
