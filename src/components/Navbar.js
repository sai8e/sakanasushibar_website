import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

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
          <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
            {/* <i class='fab fa-typo3' /> */}
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/menu"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/gallery"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/specials"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Specials
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <a
                href="tel:1-801-282-0670"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                <i class="fas fa-phone-alt" />
                (801) 282-0670
              </a>
            </li>

            <li className="nav-item">
              <a
                class="address nav-links-mobile"
                href="https://www.google.com/maps/place/Sakana+Sushi+Bar/@40.6126003,-111.9841577,17z/data=!3m1!5s0x87528eef2a844837:0xcf3555f805df5d85!4m5!3m4!1s0x87528ee922a216f3:0x3c4b23165d1bb37c!8m2!3d40.6126003!4d-111.981969"
                target="_blank"
                aria-label="Address"
                onClick={closeMobileMenu}
              >
                <i class="fa fa-map-marker-alt" /> Address
              </a>
            </li>

            <li className="nav-item">
              <a
                class="facebook nav-links-mobile"
                href="https://www.facebook.com/pg/sakanasushibarutah/posts/"
                target="_blank"
                aria-label="Facebook"
                onClick={closeMobileMenu}
              >
                <i class="fab fa-facebook-f" />
                acebook
              </a>
            </li>

            <li className="nav-item">
              <a
                class="instagram nav-links-mobile"
                href="https://www.yelp.ca/biz/sakana-sushi-bar-and-japanese-cuisine-west-jordan"
                target="_blank"
                aria-label="Instagram"
                onClick={closeMobileMenu}
              >
                Yelp
                <i class="fab fa-yelp" />
              </a>
            </li>
          </ul>
          {button && (
            <Button
              // class='social-icons'
              buttonStyle="btn--outline"
            >
              (801) 282-0670
            </Button>
          )}

          {button && (
            <a
              class="social-icon-link facebook"
              href="https://www.google.com/maps/place/Sakana+Sushi+Bar/@40.6126003,-111.9841577,17z/data=!3m1!5s0x87528eef2a844837:0xcf3555f805df5d85!4m5!3m4!1s0x87528ee922a216f3:0x3c4b23165d1bb37c!8m2!3d40.6126003!4d-111.981969"
              target="_blank"
              aria-label="Facebook"
              onClick={closeMobileMenu}
            >
              <i class="fas fa-map-marker-alt" />
            </a>
          )}
          {button && (
            <a
              class="social-icon-link facebook"
              href="https://www.facebook.com/pg/sakanasushibarutah/posts/"
              target="_blank"
              aria-label="Facebook"
              onClick={closeMobileMenu}
            >
              <i class="fab fa-facebook-f" />
            </a>
          )}
          {button && (
            <a
              class="social-icon-link yelp"
              href="https://www.yelp.ca/biz/sakana-sushi-bar-and-japanese-cuisine-west-jordan"
              target="_blank"
              aria-label="Facebook"
              onClick={closeMobileMenu}
            >
              <i class="fab fa-yelp" />
            </a>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
