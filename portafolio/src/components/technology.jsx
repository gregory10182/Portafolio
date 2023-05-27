import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Technology({ source, tech, variants}) {

  const [hover, sethover] = useState(false)

  useEffect(() => {
    console.log(hover)
  }, [hover])

  return (
    <motion.div
      onHoverStart={() =>{
        sethover(true)
      }}
      onHoverEnd={() =>{
        sethover(false)
      }}      
      className="Technology"
      whileHover={{
        rotate: 360,
        borderRadius: "20%",
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      variants={variants}
    >
      <motion.img 
        src={source}
        variants={{
          hover:{
            rotate: -360
          },
          nothover:{
            rotate: 0
          }
        }}
        animate={hover ? "hover" : "nothover"}
        transition={{
          duration: 0.8,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="tooltip"
        variants={{
          hover:{
            opacity: 1,
            y: 0
          },
          nothover:{
            opacity: 0,
            y: 20
          }
        }}
        animate={hover ? "hover" : "nothover"}
        transition={{
          delay: hover ? 0.6 : 0,
          duration: 0.5,
          ease: "easeInOut"
        }}
      >
        <p>{tech}</p>
      
      </motion.div>
    </motion.div>
  );
}
