import React, { useState, useEffect } from "react";
import "../../Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="nav-container">
        <div className="logo">Juan David Sarmiento</div>
        <ul className="nav-links">
          <li className="nav-li">
            <a href="libros">Libros</a>
          </li>
          <li className="nav-li">
            <a href="bio">Biografía</a>
          </li>
          <li className="nav-li">
            <a href="contacto">Contácto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
