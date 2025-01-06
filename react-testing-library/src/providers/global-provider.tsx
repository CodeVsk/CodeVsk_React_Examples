import { CartProvider } from "@/contexts/cart";
import { ThemeProvider } from "./theme-provider";

function GlobalProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <CartProvider>{children}</CartProvider>
    </ThemeProvider>
  );
}

export { GlobalProvider };
