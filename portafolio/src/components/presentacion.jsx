import React from "react";
import { motion } from "framer-motion";
import "../css/Presentation.css";

export default function Presentacion({ lang }) {
  const writtinganimation = {
    offScreen: {
      opacity: 0,
      scale: 0,
      y: 50,
    },
    onScreen: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.01,
      },
    },
  };

  const logosanimation = {
    offScreen: {
      opacity: 0,
      scale: 0,
      x: 300,
    },
    onScreen: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div className="Presentacion">
      <motion.h3
        initial="offScreen"
        animate="onScreen"
        transition={{
          staggerChildren: 0.08,
        }}
      >
        {lang === "en"
          ? "Hi, my name is"
          : "Hola, mi nombre es".split("").map((letter, i) => {
              return (
                <motion.span
                  key={letter + "-" + i}
                  variants={writtinganimation}
                >
                  {letter}
                </motion.span>
              );
            })}
      </motion.h3>
      <motion.h1
        className="Name"
        initial="offScreen"
        animate="onScreen"
        transition={{
          staggerChildren: 0.08,
          delayChildren: 1.2,
        }}
      >
        {"Gregory Pérez F.".split("").map((letter, i) => {
          return (
            <motion.span key={letter + "-" + i} variants={writtinganimation}>
              {letter}
            </motion.span>
          );
        })}
      </motion.h1>
      <motion.h1
        initial="offScreen"
        animate="onScreen"
        transition={{
          staggerChildren: 0.08,
          delayChildren: 2.8,
        }}
      >
        {lang === "en"
          ? "Software Engineer"
          : "Ingeniero de Software".split("").map((letter, i) => {
              return (
                <motion.span
                  key={letter + "-" + i}
                  variants={writtinganimation}
                >
                  {letter}
                </motion.span>
              );
            })}
      </motion.h1>
      <motion.p
        initial="offScreen"
        animate="onScreen"
        transition={{
          staggerChildren: 0.05,
          delayChildren: 4.5,
        }}
      >
        {lang === "en"
          ? "Im a recently graduated software engineer web development oriented and passioned for the internet of things"
          : "Soy un estudiante recien egresado de la carrera de ingenieria de software orientado al desarrollo web fullstack y apasionado por el internet de las cosas (IOT)"
              .split("")
              .map((letter, i) => {
                return (
                  <motion.span
                    key={letter + "-" + i}
                    variants={writtinganimation}
                  >
                    {letter}
                  </motion.span>
                );
              })}
      </motion.p>
      <motion.div
        className="contacts"
        initial="offScreen"
        animate="onScreen"
        transition={{
          staggerChildren: 0.2,
          delayChildren: 9.8,
        }}
      >
        <motion.img
          className="contact"
          variants={logosanimation}
          src="https://cdn-icons-png.flaticon.com/512/3800/3800073.png"
          alt=""
        />
        <motion.img
          className="contact"
          variants={logosanimation}
          src="https://cdn-icons-png.flaticon.com/512/1240/1240971.png"
          alt=""
        />
        <motion.img
          className="contact"
          variants={logosanimation}
          src="https://cdn-icons-png.flaticon.com/128/1944/1944250.png"
          alt=""
        />
      </motion.div>
    </motion.div>
  );
}
