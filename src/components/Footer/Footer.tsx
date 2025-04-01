// src/components/Footer/Footer.tsx
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p>© {currentYear} Urban Market</p>
        <p>
          Created by{" "}
          <a href="https://github.com/sashaivanovaPro" target="_blank">
            Sasha Ivanova
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
