import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";
import { IoMenuSharp } from "react-icons/io5";

function MainNav() {
  const [dropdown, setDropdown] = useState(false);
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <nav className="flex justify-between items-center">
        <Link to="/" className="p-2">
          <img src="https://speedlinkng.com/wp-content/uploads/2023/06/1-223x93.png" />
        </Link>
        <ul className="hidden md:flex justify-between items-center space-x-4 mx-5">
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

        <IoMenuSharp onClick={toggleMenu} className="md:hidden " />
      </nav>

      {/* menu */}

      <div
        className={
          menu ? "'lg:hidden fixed h-full w-full bg-black/40 right-0 top-0" : ""
        }
      >
        <div
          className={
            menu
              ? "fixed right-0 h-full w-[90%] bg-white top-0 ease-in duration-500"
              : "fixed right-[-100%] top-0 h-full w-full ease-in duration-500"
          }
        >
          <div className="flex justify-between items-center">
            <div className="w-1/2"></div>{" "}
            <FaTimes onClick={toggleMenu} className="md:hidden mx-4 my-5" />
          </div>

          <ul className="px-5">
            {navItems.map((item) => {
              if (item.title === "Products") {
                return (
                  <li
                    key={item.id}
                    className= "border hover:border-b-2 hover:border-b-red-600 "
                    onClick={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    <Link to={item.path}>{item.title}</Link>
                    {dropdown && <Dropdown />}
                  </li>
                );
              }
              return (
                <li key={item.id} className="border p-2 my-5 rounded-lg">
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default MainNav;
