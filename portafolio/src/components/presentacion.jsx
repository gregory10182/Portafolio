import React from "react";
import { animate, delay, motion } from "framer-motion";

export default function Presentacion() {
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
        duration: 0.7
      },
    },
  };

  return (
    <motion.div className="Presentacion">
      <motion.h3
        // variants={staggeranimation}
        initial="offScreen"
        animate="onScreen"
        transition={{
          staggerChildren: 0.1
        }}
      >
        {"Hi, my name is".split("").map((letter, i) => {
          return (
            <motion.span key={letter + "-" + i} variants={writtinganimation}>
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
          staggerChildren: 0.1,
          delayChildren: 1.5,
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
          staggerChildren: 0.1,
          delayChildren: 3.2,
        }}
      >
        {"Software Engineer".split("").map((letter, i) => {
          return (
            <motion.span key={letter + "-" + i} variants={writtinganimation}>
              {letter}
            </motion.span>
          );
        })}
      </motion.h1>
      <motion.p
        initial="offScreen"
        animate="onScreen"
        transition={{
          staggerChildren: 0.08,
          delayChildren: 5,
        }}
      >
        {"Im a recently graduated software engineer web development oriented and passioned for the internet of things"
          .split("")
          .map((letter, i) => {
            return (
              <motion.span key={letter + "-" + i} variants={writtinganimation}>
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
          delayChildren: 13.5
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
