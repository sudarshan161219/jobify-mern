import links from "../utils/links";
import { NavLink } from "react-router-dom";

import React from 'react'

const Navlinks = ({ toggleSidebar}) => {
  return (
    <div className="nav-links">
    {links.map((item) => {
      const { id, text, path, icon } = item;
      return (
        <NavLink
        end
          to={path}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          key={id}
          onClick={toggleSidebar}
        >
          <span className="icon">{icon}</span>
          {text}
        </NavLink>
      );
    })}
  </div>
  )
}

export default Navlinks