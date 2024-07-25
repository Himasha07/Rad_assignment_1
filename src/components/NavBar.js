import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { useTheme } from "./ThemeContext"; // Import useTheme hook
import IconButton from "@mui/material/IconButton";
import { Brightness4} from "@mui/icons-material";
import './NavBarStyles.css';

const NavBar = () => {
  const [clicked, setClicked] = useState(false); 
  const { mode, toggleTheme } = useTheme(); 

  const handleClick = () => {
    setClicked(!clicked); // Toggle clicked state
  };

  return (
    <nav className="NavBarItems">
      <h1 className="NavBarLogo">TravelBuddy</h1>

      <div className="menuItems" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "NavMenu active" : "NavMenu"}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link className={item.cName} to={item.url}>
              <i className={item.icon}></i>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Theme toggle button */}
      <IconButton onClick={toggleTheme} style={{  backgroundColor: mode === "dark" ? "black" : "white", color: mode === "dark" ? "white" : "black" 
        }}>
        {mode === "light" ? <Brightness4 /> : <Brightness4/>}
      </IconButton>
    
    </nav>
  );
};

export default NavBar;
