import React, { useEffect } from "react";
import facebook from "../images/face.png";
import link from "../images/in.png";
import twitter from "../images/Twicth.png";
import youtube from "../images/Youtube.png";
import inta from "../images/Instagram.png";

const Fotter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const backToTopButton = document.getElementById(
        "backToTop"
      ) as HTMLButtonElement;
      if (backToTopButton) {
        if (window.scrollY > 300) {
          backToTopButton.classList.add("show");
        } else {
          backToTopButton.classList.remove("show");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="responsive-container">
          <button id="backToTop" className="back-to-top" onClick={scrollToTop}>
            ↑
          </button>
          <div className="top-section">
            <p className="top-section__p">©2023 Yourcompany</p>
            <a className="top-section__a" href="/">
              Landing
            </a>
            <button className="top-section__button">Purchase now</button>
          </div>

          <div className="bottom-section">
            <div className="links">
              <ul className="links__list">
                <li>
                  <a href="/" className="links-active1">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="links-active2">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="links-active3">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="social-icons">
              <ul className="social-icons__list">
                <li>
                  <a href="face" target="_blank">
                    <img
                      className="icons-facebook"
                      src={facebook}
                      alt="Facebook"
                    />
                  </a>
                </li>
                <li>
                  <a href="linkedin" target="_blank">
                    <img className="icons-linkedin" src={link} alt="Link" />
                  </a>
                </li>
                <li>
                  <a href="twitter" target="_blank">
                    <img
                      className="icons-twitter"
                      src={twitter}
                      alt="Twitter"
                    />
                  </a>
                </li>
                <li>
                  <a href="youtube" target="_blank">
                    <img
                      className="icons-youtube"
                      src={youtube}
                      alt="Youtube"
                    />
                  </a>
                </li>
                <li>
                  <a href="instagram" target="_blank">
                    <img
                      className="icons-instagram"
                      src={inta}
                      alt="Instagram"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Fotter;
