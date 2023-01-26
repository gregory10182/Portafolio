import React, { useEffect } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.body.className = (darkTheme && "Dark") || "Light";
    console.log(darkTheme);
  }, [darkTheme]);

  useEffect(() => {
    console.log(visible);
  }, [visible]);

  return (
    <div
      // className={visible === true ? "NavbarActive" : "Navbar"}
      className="Navbar"
    >
      <div
        className="MenuResponsive"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        <motion.span
          className="MenuLine"
          variants={{
            open: {
              rotate: 48,
              transformOrigin: "left"
            },
            closed: {
              rotate: 0,
              transformOrigin: "left"
            },
          }}
          animate={visible ? "open" : "closed"}
          transition={{
            duration: 0.2,
          }}
        />

        <motion.span
          className="MenuLine"
          variants={{
            open: {
              scaleX: 0,
              transformOrigin: "left"
            },
            closed: {
              scaleX: 1,
              transformOrigin: "left"
            },
          }}
          animate={visible ? "open" : "closed"}
          transition={{
            duration: visible ? 0.1 : 0.4,
            
          }}
        />

        <motion.span
          className="MenuLine"
          variants={{
            open: {
              rotate: -48,
              transformOrigin: "left"
            },
            closed: {
              rotate: 0,
              transformOrigin: "left"
            },
          }}
          animate={visible ? "open" : "closed"}
          transition={{
            duration: 0.2,
          }}
        />
      </div>
      <AnimatePresence>
        {visible && (
          <motion.div
            className="Navigation"
            variants={{
              open: {
                x: 0,
                opacity: 1,
              },
              closed: {
                x: 140,
                opacity: 0,
              },
            }}
            key="sideNavBar"
            initial={{ x: -140 }}
            animate={"open"}
            exit={{ x: -140, opacity: 0}}
            transition={{
              duration: 0.5,
              // delay: visible ? 0.4 : 0,
            }}
          >
            <nav>
              <a href="#">About</a>
              <a href="#">Experience</a>
              <a href="#">Work</a>
              <a href="#">Contact</a>
            </nav>
            
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
