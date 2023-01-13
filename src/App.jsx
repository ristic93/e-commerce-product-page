import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div>
      <CartProvider>
        <Navbar />
        <Product />
      </CartProvider>
    </div>
  );
}

export default App;
