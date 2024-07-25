import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";
function MainNav() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src="https://speedlinkng.com/wp-content/uploads/2023/06/1-223x93.png" />
        </Link>
        <ul className="hidden md:flex nav-items">
          {navItems.map((item) => {
            if (item.title === "Products") {
              return (
                <li
                  key={item.id}
                  className={`${item.cName} hover:border-b-2 hover:border-b-red-600 `}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
    
      </nav>
    </>
  );
}

export default MainNav;
