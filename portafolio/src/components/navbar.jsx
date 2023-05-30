import React, { useEffect } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/Navbar.css";

export default function Navbar({ setTheme, setLanguage }) {
  const [darkTheme, setDarkTheme] = useState();
  const [visible, setVisible] = useState(false);
  const [lang, setLang] = useState();

  useEffect(() => {
    const ThemeState = localStorage.getItem("theme") === "true";
    setDarkTheme(ThemeState);

    const language = localStorage.getItem("lang");

    if (!language) {
      setLang("en");
      localStorage.setItem("lang", "en");
    } else {
      setLang(language);
    }
  }, []);

  useEffect(() => {
    document.body.className = darkTheme ? "Dark" : "Light";
    setTheme(darkTheme);
  }, [darkTheme]);

  useEffect(() => {
    setLanguage(lang);
  }, [lang]);

  return (
    <div className="Navbar">
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
              transformOrigin: "left",
            },
            closed: {
              rotate: 0,
              transformOrigin: "left",
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
              transformOrigin: "left",
            },
            closed: {
              scaleX: 1,
              transformOrigin: "left",
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
              transformOrigin: "left",
            },
            closed: {
              rotate: 0,
              transformOrigin: "left",
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
            exit={{ x: -140, opacity: 0 }}
            transition={{
              duration: 0.5,
              // delay: visible ? 0.4 : 0,
            }}
          >
            <nav>
              <a href="#aboutMe">{lang === "en" ? "About" : "Sobre Mi"}</a>
              <a href="#TechStack">{lang === "en" ? "Technologies" : "Tecnologias"}</a>
              <a href="#Projects">{lang === "en" ? "Projects" : "Proyectos"}</a>
            </nav>

            <button
              onClick={() => {
                setDarkTheme(!darkTheme);
                localStorage.setItem("theme", !darkTheme);
              }}
            >
              <img
                className="themeIcon"
                src={
                  darkTheme
                    ? "https://cdn-icons-png.flaticon.com/512/66/66275.png"
                    : "https://cdn-icons-png.flaticon.com/512/4489/4489231.png"
                }
              ></img>
            </button>

            <button
              onClick={() => {
                if (lang === "en") {
                  setLang("es");
                  localStorage.setItem("lang", "es");
                } else {
                  setLang("en");
                  localStorage.setItem("lang", "en");
                }
              }}
            >
              {lang === "en" ? "es" : "en"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
