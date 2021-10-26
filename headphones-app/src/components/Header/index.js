import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="grid-navbar">
      <nav className="nav">
        {/* <div className="menu"></div> */}
        <ul className="nav-list">
          <li>
            <Link to="/" className="list">HEADPHONES</Link>
          </li>
          <li>
            <Link to="/speakers" className="list">SPEAKERS</Link>
          </li>
          <li>
            <Link to="/outlet" className="list">OUTLET</Link>
          </li>
          <li>
            <Link to="/sale" className="list">SALE</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
