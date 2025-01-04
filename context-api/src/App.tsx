import { CartList } from "./components/CartList";
import { ProductList } from "./components/ProductList";
import { GlobalProvider } from "./providers/global-provider";

function App() {
  return (
    <GlobalProvider>
      <div className="h-full flex flex-col gap-5 p-5">
        <div className="flex justify-center gap-5">
          <ProductList />
        </div>
        <CartList />
      </div>
    </GlobalProvider>
  );
}

export default App;
