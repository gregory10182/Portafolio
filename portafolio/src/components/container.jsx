import React, {useState} from "react";
import Navbar from "./navbar";
import Presentacion from "./presentacion";
import AboutMe from "./aboutMe";
import TechStack from "./techStack";
import Projects from "./projects";



export default function Container(){

    const [Dark, setDark] = useState(true);
    const [language, setLanguage] = useState();

    const changetheme = (state) => {
        setDark(state);
    }

    const languageState = (state) => {
        setLanguage(state);
    }

    return(
        <div  className="Container">
            <Navbar setTheme={changetheme} setLanguage={languageState}/>
            <Presentacion lang={language}/>
            <AboutMe lang={language}/>
            <TechStack theme={Dark} lang={language}/>
            <Projects lang={language}/>
        </div>
    )
}

