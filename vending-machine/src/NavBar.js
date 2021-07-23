import React from "react";

import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    
    return (
        <div className="NavBar">
            <NavLink to="/chips">Chips</NavLink>
            <hr></hr>
            <NavLink to="/soda">Soda</NavLink>
            <hr></hr>
            <NavLink to="/sardines">Sardines</NavLink>
        </div>
        
    )
}

export default NavBar;