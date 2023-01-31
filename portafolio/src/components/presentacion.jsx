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
        duration: 1,
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
        duration: 1,
      },
    },
  };

  return (
    <motion.div 
      className="Presentacion"
      initial="offScreen"
      animate="onScreen"
      transition={{
        staggerChildren: 1,
      }}
    >
      <motion.h3
        variants={Apresentation}
      >
       {lang === 'en' ? "Hi, my name is" : "Hola, mi nombre es"}
      </motion.h3>
      <motion.h1
        className="Name"
        variants={Apresentation}
      >
       Gregory Pérez F.
      </motion.h1>
      <motion.h1
        variants={Apresentation}
      >
        {lang === 'en' ? "Software Engineer" : "Ingeniero de Software"}
      </motion.h1>
      <motion.p
        variants={Apresentation}
      >
        {lang === 'en' ? "Im a recently graduated software engineer web development oriented and passioned for the internet of things" : "Recien egresado de la carrera de ingenieria de software orientado al desarrollo web fullstack y apasionado por el internet de las cosas (IOT)"}
      </motion.p>
      <motion.div
        className="contacts"
        initial="offScreen"
        animate="onScreen"
        transition={{
          staggerChildren: 0.5,
          staggerDirection: -1,
          delayChildren: 3.5,
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

  // if (lang === "en") {
  //   return (
  //     <motion.div 
  //       className="Presentacion"
  //       initial="offScreen"
  //       whileInView="onScreen"
  //       transition={{
  //         staggerChildren: 1,
  //       }}
  //     >
  //       <motion.h3
  //         variants={Apresentation}
  //       >
  //         Hi, my name is
  //       </motion.h3>
  //       <motion.h1
  //         className="Name"
  //         variants={Apresentation}
  //       >
  //        Gregory Pérez F.
  //       </motion.h1>
  //       <motion.h1
  //         variants={Apresentation}
  //       >
  //         Software Engineer
  //       </motion.h1>
  //       <motion.p
  //         variants={Apresentation}
  //       >
  //         Im a recently graduated software engineer web development oriented and passioned for the internet of things
  //       </motion.p>
  //       <motion.div
  //         className="contacts"
  //         initial="offScreen"
  //         whileInView="onScreen"
  //         transition={{
  //           staggerChildren: 0.5,
  //           staggerDirection: -1,
  //           delayChildren: 3.5,
  //         }}
  //       >
  //         <motion.img
  //           className="contact"
  //           variants={logosanimation}
  //           src="https://cdn-icons-png.flaticon.com/512/3800/3800073.png"
  //           alt=""
  //         />
  //         <motion.img
  //           className="contact"
  //           variants={logosanimation}
  //           src="https://cdn-icons-png.flaticon.com/512/1240/1240971.png"
  //           alt=""
  //         />
  //         <motion.img
  //           className="contact"
  //           variants={logosanimation}
  //           src="https://cdn-icons-png.flaticon.com/128/1944/1944250.png"
  //           alt=""
  //         />
  //       </motion.div>
  //     </motion.div>
  //   );
  // }

  // if (lang === "es") {
  //   return (
  //     <motion.div 
  //       className="Presentacion"
  //       initial="offScreen"
  //       whileInView="onScreen"
  //       transition={{
  //         staggerChildren: 0.08,
  //       }}
  //     >
  //       <motion.h3
  //         variants={Apresentation}
  //       >
  //         Hola, mi nombre es
  //       </motion.h3>
  //       <motion.h1
  //         variants={Apresentation}
  //       >
  //         Gregory Pérez F.
  //       </motion.h1>
  //       <motion.h1
  //         variants={Apresentation}
  //       >
  //         Ingeniero de Software
  //       </motion.h1>
  //       <motion.p
  //         variants={Apresentation}
  //       >
  //         Recien egresado de la carrera de ingenieria de software orientado al desarrollo web fullstack y apasionado por el internet de las cosas (IOT)
  //       </motion.p>
  //       <motion.div
  //         className="contacts"
  //         initial="offScreen"
  //         animate="onScreen"
  //         transition={{
  //           staggerChildren: 0.2,
  //           delayChildren: 9.8,
  //         }}
  //       >
  //         <motion.img
  //           className="contact"
  //           variants={logosanimation}
  //           src="https://cdn-icons-png.flaticon.com/512/3800/3800073.png"
  //           alt=""
  //         />
  //         <motion.img
  //           className="contact"
  //           variants={logosanimation}
  //           src="https://cdn-icons-png.flaticon.com/512/1240/1240971.png"
  //           alt=""
  //         />
  //         <motion.img
  //           className="contact"
  //           variants={logosanimation}
  //           src="https://cdn-icons-png.flaticon.com/128/1944/1944250.png"
  //           alt=""
  //         />
  //       </motion.div>
  //     </motion.div>
  //   );
  // }
}
