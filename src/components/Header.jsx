import { NavLink } from "react-router-dom";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isBigScreen, setIsBigScreen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleMediaChange = (e) => {
    setIsBigScreen(e.matches);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 900px)");

    setIsBigScreen(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <div className="header">
      <div className="nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={handleMenuToggle}
          className="toggle"
        />

        {(menuOpen || isBigScreen) && (
          <div className="menu">
            <ul className="nav">
              <li>
                <NavLink to="/" className="navLink">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="navLink">
                  Articles
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="navLink">
                  About Us
                </NavLink>
              </li>
            </ul>
            <NavLink to="/" className="navProfile">
              <img src="https://placehold.co/60" alt="" className="profile" />
            </NavLink>
          </div>
        )}
      </div>

      <img src="https://placehold.co/150x60" alt="logo" className="logo" />

      <a href="/" className="profilePic">
        <img src="https://placehold.co/60" alt="" className="profile" />
      </a>
    </div>
  );
};

export default Header;
