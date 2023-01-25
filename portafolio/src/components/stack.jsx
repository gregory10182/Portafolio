import React from "react";
import Technology from "./technology"
import { motion, AnimatePresence } from "framer-motion"


export default function Stack({area}) {

  const staggerTech = {
    offScreen:{
      opacity: 0,
      x: 100,
    },
    onScreen:{
      opacity: 1,
      x: 0,
      transition:{
        duration: 1
      }
    }
  }
  
    if(area === 'frontend'){
        return(
          <AnimatePresence>
            <motion.div 
              className="Stack"
              variants={staggerTech}
              initial="offScreen"
              animate="onScreen"
            >
              <Technology
                source="https://img.icons8.com/color/2x/html-5.png"
                tech="HTML5"
              />
              <Technology
                source="https://img.icons8.com/color/2x/css3.png"
                tech="CSS3"
              />
              <Technology
                source="https://img.icons8.com/color/2x/javascript--v2.png"
                tech="JavaScript"
              />
              <Technology
                source="https://img.icons8.com/ultraviolet/2x/react--v2.png"
                tech="React"
              />            
            </motion.div>
          </AnimatePresence>
          
           
        )
    }

    if(area === 'backend'){
      return(
        <AnimatePresence>
          <motion.div 
            className="Stack"
            variants={staggerTech}
            initial="offScreen"
            animate="onScreen"
            transition={{
              type: "tween"
            }}
          >
            <Technology
              source="https://img.icons8.com/fluency/2x/node-js.png"
              tech="NodeJS"
            />
            <Technology
              source="https://img.icons8.com/office/2x/express-js.png"
              tech="ExpressJS"
            />
            <Technology
              source="https://img.icons8.com/external-tal-revivo-color-tal-revivo/2x/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png"
              tech="MongoDB"
            />            
          </motion.div>
        </AnimatePresence> 

        
         
      )
    }

    if(area === 'otros'){
      return(
        <motion.div 
            className="Stack"
            variants={staggerTech}
            initial="offScreen"
            whileInView="onScreen"
            transition={{
              type: "tween"
            }}
        >
          <Technology
            source="https://img.icons8.com/color/2x/git.png"
            tech="Git"
          />
          <Technology
            source="https://img.icons8.com/ios-filled/2x/console.png"
            tech="Terminal"
          />            
        </motion.div>
         
      )
    }

}