import React, { useEffect } from "react";
import { useState } from "react";

export default function Navbar() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    document.body.className = (darkTheme && "Dark") || "Light";
    console.log(darkTheme);
  }, [darkTheme]);

  useEffect(() => {
    console.log(visible);
  }, [visible]);

  return (
    <div className={visible === true ? "NavbarActive" : "Navbar" }>
      <h2>Portafolio</h2>
      
      
      <div className="MenuResponsive" onClick={()=>{
        setVisible(!visible)
      }}>
        <span className="MenuLine"></span>
        <span className="MenuLine"></span>
        <span className="MenuLine"></span>
      </div>
      
      <div className="Navigation">
        <a href="#">About</a>
        <a href="#">Experience</a>
        <a href="#">Work</a>
        <a href="#">
          <p>Contact</p>
        </a>
        <button
          onClick={() => {
            setDarkTheme(!darkTheme);
          }}
        >
          <img
            className="themeIcon"
            src="https://cdn-icons-png.flaticon.com/512/2710/2710646.png"
          ></img>
        </button>
      </div>
      
      
    </div>
  );
}
