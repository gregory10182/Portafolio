import React from "react";
import { motion } from "framer-motion";
import "../css/Presentation.css";

export default function Presentacion({ lang }) {
  const Apresentation = {
    offScreen: {
      opacity: 0,
      x: -100,
    },
    onScreen: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const logosanimation = {
    offScreen: {
      opacity: 0,
      scale: 0,
      x: -100,
    },
    onScreen: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      className="Presentacion"
      id="presentacion"
      initial="offScreen"
      animate="onScreen"
      transition={{
        staggerChildren: 0.5,
      }}
    >
      <motion.h3 variants={Apresentation}>
        {lang === "en" ? "Hi, my name is" : "Hola, mi nombre es"}
      </motion.h3>
      <motion.h1 className="Name" variants={Apresentation}>
        Gregory Pérez F.
      </motion.h1>
      <motion.h1 className="Career" variants={Apresentation}>
        {lang === "en" ? "Software Engineer" : "Ingeniero de Software"}
      </motion.h1>
      <motion.p variants={Apresentation}>
        {lang === "en"
          ? "Recently graduated from the Universidad Politécnico Grancolombiano, I specialize in web frontend programming with backend knowledge. Eager to apply my skills and knowledge in challenging and exciting projects."
          : "Recien egresado de la Universidad Politécnico Grancolombiano, me especializo en programación web frontend con conocimientos de backend. Ansioso por aplicar mis habilidades y conocimientos en proyectos desafiantes y emocionantes."}
      </motion.p>
      <motion.div
        className="contacts"
        initial="offScreen"
        animate="onScreen"
        transition={{
          staggerChildren: 0.5,
          staggerDirection: -1,
          delayChildren: 1.7,
        }}
      >
        <a href="https://www.linkedin.com/in/gregory-jos%C3%A9-p%C3%A9rez-fern%C3%A1ndez-a509a8260/" target="_blank">
          <motion.img
            className="contact"
            variants={logosanimation}
            src="https://cdn-icons-png.flaticon.com/512/3800/3800073.png"
            alt=""
          />
        </a>

        <a href="https://github.com/gregory10182" target="_blank">
          <motion.img
            className="contact"
            variants={logosanimation}
            src="https://cdn-icons-png.flaticon.com/512/1240/1240971.png"
            alt=""
          />
        </a>

        <a href="mailto:Gregory10183@gmail.com" target="_blank">
          <motion.img
            className="contact"
            variants={logosanimation}
            src="https://cdn-icons-png.flaticon.com/128/1944/1944250.png"
            alt=""
          />
        </a>

      </motion.div>
    </motion.div>
  );
}
