import { CartList } from "./components/CartList";
import { ProductList } from "./components/ProductList";
import { ThemeProvider } from "./providers/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="h-full flex flex-col gap-5 p-5">
        <div className="flex justify-center gap-5">
          <ProductList />
        </div>
        <CartList />
      </div>
    </ThemeProvider>
  );
}

export default App;
