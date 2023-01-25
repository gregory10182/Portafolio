import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Technology({ source, tech }) {

  const [hover, sethover] = useState(false)

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
        scale: 1.1,
        rotate: 360,
        borderRadius: "20%",
      }}
      transition={{
        duration: 0.7,
        ease: "easeInOut",
      }}
    >
      <motion.img 
        src={source}
        variants={{
          hover:{
            scale: 1.1,
            rotate: -360
          },
          nothover:{
            scale: 1,
            rotate: 0
          }
        }}
        animate={hover ? "hover" : "nothover"}
        transition={{
          duration: 0.7,
          ease: "easeInOut"
        }}
      />
      <motion.p
        variants={{
          hover:{
            visibility: "visible",
            opacity: 1,
            y: -5
          },
          nothover:{
            visibility: "hidden",
            opacity: 0,
          }
        }}
        animate={hover ? "hover" : "nothover"}
        transition={{
          delay: hover ? 0.6 : 0,
          duration: 0.3,
          ease: "easeInOut"
        }}
      >{tech}</motion.p>
    </motion.div>
  );
}
