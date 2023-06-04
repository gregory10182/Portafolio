import React from "react";
import { useState, useEffect} from "react";
import { motion } from "framer-motion";

export default function Technology({ source, tech, variants}) {

  const [hover, sethover] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {

    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize);

    return() => {
      window.removeEventListener('resize', handleResize)
    }


  })
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

      {width < 1024 ? (
        <p className="Techname">{tech}</p>
      )
    :
    (
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
    )}
    </motion.div>
  );
}
