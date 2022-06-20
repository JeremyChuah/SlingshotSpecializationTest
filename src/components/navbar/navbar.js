import React, { useState } from "react";

import logo from "./matterport.svg";
import searchIcon from "./search.svg";
import MenuItems from "./MenuItems";
import "./navbar.css";

import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="flex flex-row w-full justfy-center items-center mt-10">
      <div className=" sm:w-4/5 w-72 m-auto items-center flex flex-row justify-between shadow-2xl rounded-xl">
        <div>
          <img src={logo} />
        </div>

        <ul className="hidden menu-list sm:flex sm:flex-row mr-5 sm:mr-0">
          <li className="menu-list-item sm:px-7 md:px-16">
            <Link to="/" className=" hover:font-semibold">
              Home
            </Link>
          </li>
          <li className="menu-list-item sm:px-7 md:px-16">
            <Link to="/Industries" className=" hover:font-semibold">
              Industries
            </Link>
          </li>
          <li className="menu-list-item sm:px-7 md:px-16">
            <Link to="/Capture" className=" hover:font-semibold">
              Capture
            </Link>
          </li>
          <li className="menu-list-item sm:px-7 md:px-16">
            <Link to="/Resources" className=" hover:font-semibold">
              Resources
            </Link>
          </li>
        </ul>
        <div className={active ? "hidden" : "flex md:hidden"}>
          <MenuIcon onClick={showMenu} />
        </div>
        <MenuItems showMenu={showMenu} active={active} />

        <div className="hidden lg:flex mr-5 relative items-center">
          <img src={searchIcon} className="px-2 absolute" />
          <input
            placeholder="Search"
            type="text"
            className="pl-10 py-2 text-black rounded-2xl border-2 outline-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
