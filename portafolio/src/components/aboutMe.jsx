import React from "react";
import "../css/AboutMe.css";

export default function AboutMe({ lang }) {


    return (
    <div className="aboutMe" id="aboutMe">
      <h1>{lang === "en" ? "About me" : "Acerca de Mi"}</h1>
      <p>
        {lang === "en"
          ? "I am a web frontend developer with basic backend knowledge. I graduated from the Universidad Politécnico Grancolombiano and since then I have dedicated myself to learning and practicing the most used technologies to create dynamic and responsive websites. Some of the ones I master are HTML, CSS, JavaScript and React. I also know how to use node.js, python, mongodb and sql to develop complete web applications. Other areas that interest me are the internet of things and 3D printing. I have skill with Linux and Windows as operating systems."
          : "Soy un programador web frontend con conocimientos básicos de backend. Me gradué de la Universidad Politécnico Grancolombiano y desde entonces me he dedicado a aprender y practicar las tecnologías más usadas para crear sitios web dinámicos y responsivos. Algunas de las que domino son HTML, CSS, JavaScript y React."}
      </p>
      <p>
        {lang === "en"
          ? "In addition to my academic training, I have participated in training programs such as the Microsoft LaunchX Latam bootcamp and the Oracle ONE program from Oracle. I have also taken technology courses at Platzi to expand my knowledge. In my free time, I enjoy soccer, motor racing, cooking and video games."
          : "También sé usar node.js, python, mongodb y sql para desarrollar aplicaciones web completas. Otras áreas que me interesan son el internet de las cosas y la impresión 3D. Tengo habilidad con Linux y Windows como sistemas operativos. Además de mi formación académica, he participado en programas de capacitación como el bootcamp de Microsoft LaunchX Latam y el programa Oracle ONE de Oracle. También he tomado cursos de tecnología en Platzi para ampliar mis conocimientos. En mi tiempo libre, disfruto del fútbol, el automovilismo, la cocina y los videojuegos."}
      </p>
      <button className="CV">
        {lang === "en" ? "Download CV" : "Descargar CV"}
      </button>
    </div>
  );
}
