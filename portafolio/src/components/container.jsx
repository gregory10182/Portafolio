import React, {useState} from "react";
import Navbar from "./navbar";
import Presentacion from "./presentacion";
import AboutMe from "./aboutMe";
import TechStack from "./techStack";




export default function Container(){

    const [Dark, setDark] = useState(true)

    const changeColor = (state) => {
        setDark(state)
    }

    return(
        <div  className="Container">
            <Navbar darkState={Dark} setState={changeColor} />
            <Presentacion/>
            <AboutMe/>
            <TechStack/>
        </div>
    )
}

