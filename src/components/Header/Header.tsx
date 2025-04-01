import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <Link to="/" className="logo-link">
          <h1>Urban Market</h1>
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
