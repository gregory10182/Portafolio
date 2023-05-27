import React from "react";
import "../css/AboutMe.css";

export default function AboutMe({ lang }) {
  return (
    <div className="aboutMe">
      <h1>{lang === "en" ? "About me" : "Acerca de Mi"}</h1>
      <p>
        {lang === "en"
          ? "Recently graduated software engineer focused in full stack web development"
          : "Hola, Mi nombre completo es Gregory José Pérez Fernández, soy de Barranquilla, Colombia y actualmente vivo en Chile, tengo 21 años, soy ingeniero de software graduado en la universidad Politecnico Grancolombiano"}
      </p>
      <button className="CV">
        {lang === "en" ? "Download CV" : "Descargar CV"}
      </button>
    </div>
  );
}
