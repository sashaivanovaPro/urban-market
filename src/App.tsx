import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import ProductList from "./components/ProductList/ProductList";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <h1>Urban Market</h1>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/create-product" element={<CreateProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
