import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const MenuItems = ({ showMenu, active }) => {
  return (
    <ul
      className={
        active ? "flex-col flex items-center text-center md:hidden" : "hidden"
      }
    >
      <CloseIcon onClick={showMenu} />
      <li>
        <Link to="/" className="hover:text-blue-700 hover:font-semibold">
          Platform
        </Link>
      </li>
      <li>
        <Link
          to="/Industries"
          className="hover:text-blue-700 hover:font-semibold"
        >
          Industries
        </Link>
      </li>
      <li>
        <Link to="/Capture" className="hover:text-blue-700 hover:font-semibold">
          Capture
        </Link>
      </li>
      <li>
        <Link
          to="/Resources"
          className="hover:text-blue-700 hover:font-semibold"
        >
          Resources
        </Link>
      </li>
    </ul>
  );
};

export default MenuItems;
