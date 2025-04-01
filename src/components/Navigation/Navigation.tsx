import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/create-product">Create new product</NavLink>
    </nav>
  );
};

export default Navigation;
