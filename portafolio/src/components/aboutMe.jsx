import React from "react";
import "../css/AboutMe.css";

export default function AboutMe({ lang }) {


    return (
    <div className="aboutMe" id="aboutMe">
      <h1>{lang === "en" ? "About me" : "Acerca de Mi"}</h1>
      <p>
        {lang === "en"
          ? "I am a web development enthusiast with a desire to learn and improve my skills. I studied software engineering at the Universidad Politécnico Grancolombiano and since then I have been exploring the different tools and languages that are used to create attractive and functional websites. Some of the ones I have used are HTML, CSS, JavaScript and React for the frontend, and node.js, python, mongodb and sql for the backend. I also have knowledge of the internet of things and 3D printing, and I master Linux and Windows as operating systems."
          : "Soy un entusiasta del desarrollo web con ganas de aprender y mejorar mis habilidades. Estudié ingenieria de software en la Universidad Politécnico Grancolombiano y desde entonces he estado explorando las diferentes herramientas y lenguajes que se usan para crear sitios web atractivos y funcionales. Algunos de los que he usado son HTML, CSS, JavaScript y React para el frontend, y node.js, python, mongodb y sql para el backend. También tengo conocimientos en internet de las cosas e impresión 3D, y domino Linux y Windows como sistemas operativos."}
      </p>
      <p>
        {lang === "en"
          ? "In addition to my academic training, I have participated in training programs such as the Microsoft LaunchX Latam bootcamp and the Oracle ONE program from Oracle. I have also taken technology courses at Platzi to expand my knowledge. In my free time, I enjoy soccer, motor racing, cooking and video games."
          : "Además de mi formación académica, he participado en programas de capacitación como el bootcamp de Microsoft LaunchX Latam y actualmente el programa Oracle ONE de Oracle. También he tomado cursos de tecnología en Platzi para ampliar mis conocimientos. En mi tiempo libre, disfruto del fútbol, el automovilismo, la cocina y los videojuegos."}
      </p>
      <button className="CV">
        {lang === "en" ? "Download CV" : "Descargar CV"}
      </button>
    </div>
  );
}
