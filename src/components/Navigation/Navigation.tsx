import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/products">Products</Link>
      <Link to="/create-product">Create new product</Link>
    </nav>
  );
};

export default Navigation;
