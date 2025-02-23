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
            <a href=" ">Home</a>
          </li>
          <li className="nav-li">
            <a href="About">Libros</a>
          </li>
          <li className="nav-li">
            <a href="Services">Biografía</a>
          </li>
          <li className="nav-li">
            <a href="Contact">Contácto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
