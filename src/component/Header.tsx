import { useEffect, useState } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <div className="container">
        <div className="header__content ">
          <nav className="header__menu-nav">
            <ul className="menu__nav-list">
              <li className="nav-list-active">
                <a href="/">Home</a>
              </li>
              <li className="nav-list-active">
                <a href="/about">About</a>
              </li>
              <li className="nav-list-active">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="header__logo">
            <a href="/">Landing</a>
          </div>
          <div className="header__button">
            <button className="header__button-btn">Buy Now</button>
          </div>
          <div className="header__mobile">
            <button className="header--mobile__menu" onClick={toggleMobileMenu}>
              &#9776;
            </button>
          </div>
        </div>

        <div
          className={`${
            isMobileMenuOpen
              ? "header__menu-mobile--open"
              : "header__menu-mobile "
          }`}
        >
          <nav className="menu__nav-mobile">
            <ul className="nav__mobile-list">
              <li className="nav-list-active">
                <a href="/">Home</a>
              </li>
              <li className="nav-list-active">
                <a href="/about">About</a>
              </li>
              <li className="nav-list-active">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
