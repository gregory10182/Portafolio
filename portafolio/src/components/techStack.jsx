import React from "react";
import Technology from "./technology";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function TechStack() {

  const [selected, setSelected] = useState("frontend")

  const MotionTechnology = motion(Technology)

  const select = {
    notSelected: {
      color: "#CED1DF",
      borderBottom: "2px solid #CED1DF"
    },
    selected: {
      color: "#00E0D9",
      borderBottom: "5px solid #00E0D9"
    },
    transition: {
      duration: 0.4,
      type: "tween"
    }
  }

  const staggerTech = {
    offScreen:{
      opacity: 0,
      x: 100,
    },
    onScreen:{
      opacity: 1,
      x: 0,
      transition:{
        duration: 0.5
      }
    }
  }

  return (
    <div className="TechStack">

      <div className="Selector">
        <motion.button 
          className="selection"
          variants={select}
          animate={ selected === "frontend" ? "selected" : "notSelected"}
          transition={"transition"}
          onClick={() => {
            setSelected("frontend")
          }}
        >
          FrontEnd
        </motion.button>
        <motion.button 
          className="selection"
          variants={select}
          animate={ selected === "backend" ? "selected" : "notSelected"}
          transition={"transition"}
          onClick={() => {
            setSelected("backend")
          }}
        >
          BackEnd
        </motion.button>
        <motion.button 
          className="selection"
          variants={select}
          animate={ selected === "otros" ? "selected" : "notSelected"}
          transition={"transition"}
          onClick={() => {
            setSelected("otros")
          }}
        >
          Otros
        </motion.button>
      </div>

      
      {selected === 'frontend' && (
        <AnimatePresence>
          <motion.div 
            className="Stack"
            initial="offScreen"
            animate="onScreen"
            transition={{
              staggerChildren: 0.5
            }}
          >
            <Technology
              source="https://img.icons8.com/color/2x/html-5.png"
              tech="HTML5"
              variants={staggerTech}
            />
            <Technology
              source="https://img.icons8.com/color/2x/css3.png"
              tech="CSS3"
              variants={staggerTech}
            />
            <Technology
              source="https://img.icons8.com/color/2x/javascript--v2.png"
              tech="JavaScript"
              variants={staggerTech}
            />
            <Technology
              source="https://img.icons8.com/ultraviolet/2x/react--v2.png"
              tech="React"
              variants={staggerTech}
            />            
          </motion.div>
        </AnimatePresence>
      )}

      {selected === 'backend' && (
        <AnimatePresence>
          <motion.div 
            className="Stack"
            initial="offScreen"
            animate="onScreen"
            transition={{
              staggerChildren: 0.5
            }}
          >
            <Technology
              source="https://img.icons8.com/fluency/2x/node-js.png"
              tech="NodeJS"
              variants={staggerTech}
            />
            <Technology
              source="https://img.icons8.com/office/2x/express-js.png"
              tech="ExpressJS"
              variants={staggerTech}
            />
            <Technology
              source="https://img.icons8.com/external-tal-revivo-color-tal-revivo/2x/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png"
              tech="MongoDB"
              variants={staggerTech}
            />            
          </motion.div>
        </AnimatePresence>
      )}

      {selected === 'otros' && (
        <AnimatePresence>
          <motion.div 
            className="Stack"
            initial="offScreen"
            animate="onScreen"
            transition={{
              staggerChildren: 0.5
            }}
          >
            <Technology
              source="https://img.icons8.com/color/2x/git.png"
              tech="Git"
              variants={staggerTech}
            />
            <Technology
              source="https://img.icons8.com/ios-filled/2x/console.png"
              tech="Terminal"
              variants={staggerTech}
            />            
          </motion.div>
        </AnimatePresence>
      )}
      
      
    </div>
  );
}
