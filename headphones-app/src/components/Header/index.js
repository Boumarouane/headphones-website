import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="grid-navbar">
      <nav className="nav">
        <div className="menu-hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className="nav-list">
          <li className="nav-links">
            <NavLink exact to="/" className="list" activeClassName="active">
              HEADPHONES
            </NavLink>
          </li>
          <li>
            <NavLink to="/speakers" className="list" activeClassName="active">
              SPEAKERS
            </NavLink>
          </li>
          <li>
            <NavLink to="/outlet" className="list" activeClassName="active">
              OUTLET
            </NavLink>
          </li>
          <li>
            <NavLink to="/sale" className="list" activeClassName="active">
              SALE
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
