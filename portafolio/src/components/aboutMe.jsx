import React from "react";
import "../css/AboutMe.css";

export default function AboutMe({ lang }) {


    return (
    <div className="aboutMe" id="aboutMe">
      <h1>{lang === "en" ? "About me" : "Acerca de Mi"}</h1>
      {/* <p>
        {lang === "en"
          ? "I am a web frontend developer with basic backend knowledge. I graduated from the Universidad Politécnico Grancolombiano and since then I have dedicated myself to learning and practicing the most used technologies to create dynamic and responsive websites. Some of the ones I master are HTML, CSS, JavaScript and React. I also know how to use node.js, python, mongodb and sql to develop complete web applications. Other areas that interest me are the internet of things and 3D printing. I have skill with Linux and Windows as operating systems."
          : "Programador web frontend con conocimientos básicos de backend. Egresado de la Universidad Politécnico Grancolombiano y desde entonces me he dedicado a aprender y practicar las tecnologías más usadas para crear sitios web dinámicos y responsivos. Algunas de las que domino son HTML, CSS, JavaScript y React. También sé usar node.js, python, mongodb y sql para desarrollar aplicaciones web completas. Otras áreas que me interesan son el internet de las cosas y la impresión 3D. Tengo habilidad con Linux y Windows como sistemas operativos."}
      </p> */}
      <p>
        {lang === "en"
          ? "I am a web development enthusiast with a desire to learn and improve my skills. I studied software engineering at the Universidad Politécnico Grancolombiano and since then I have been exploring the different tools and languages that are used to create attractive and functional websites. Some of the ones I have used are HTML, CSS, JavaScript and React for the frontend, and node.js, python, mongodb and sql for the backend. I also have knowledge of the internet of things and 3D printing, and I master Linux and Windows as operating systems."
          : "Soy un entusiasta del desarrollo web con ganas de aprender y mejorar mis habilidades. Estudié ingenieria de software en la Universidad Politécnico Grancolombiano y desde entonces he estado explorando las diferentes herramientas y lenguajes que se usan para crear sitios web atractivos y funcionales. Algunos de los que he usado son HTML, CSS, JavaScript y React para el frontend, y node.js, python, mongodb y sql para el backend. También tengo conocimientos el internet de las cosas y la impresión 3D, y domino Linux y Windows como sistemas operativos."}
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
