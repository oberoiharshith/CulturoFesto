import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { LoginButton } from "./LoginButton";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            CulturoFesto
            <i class="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Festivals
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Registration
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Payment
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/feedback"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Feedback
              </Link>
            </li>

            <li>
              <Link to="/sign-up" className="nav-links-mobile">
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/login" className="nav-links-mobile">
                Login
              </Link>
            </li>
          </ul>

          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}

          {button && (
            <LoginButton buttonStyle="btn--outline">LOGIN</LoginButton>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
//onClick={closeMobileMenu}
