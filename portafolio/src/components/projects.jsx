import React from "react";
import { motion } from "framer-motion";
import Technology from "./technology";
import "../css/Projects.css";

export default function Projects() {
  return (
    <motion.div className="Projects">
      <h1>Proyectos</h1>
      <div className="Project">
        <h2>Pokedex</h2>
        <p>
          Como parte del BootCamp LaunchX de Innovaccion y Microsoft, completé
          un proyecto que simula un artilugio de la famosa serie Pokemon que
          guardaba información sobre los Pokemones.
        </p>
        <div className="Technologies">
          <Technology
            source="https://img.icons8.com/ultraviolet/2x/react--v2.png"
            tech="React"
          />
        </div>
        <div className="Links">
          <a
            href="https://github.com/gregory10182/Practica-React"
            target="_blank"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1240/1240971.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="Project">
        <h2>Recetario</h2>
        <p>
          Desarrollé un recetario digital para ayudarme a organizar y ajustar
          mis recetas de cocina y panadería. El recetario cuenta con una
          interfaz intuitiva y funciones útiles como el ajuste automático de
          ingredientes.
          {/* I developed a digital recipe book to help me organize and
          adjust my cooking and baking recipes. The recipe book has an intuitive
          interface and useful features such as automatic ingredient adjustment */}
        </p>
        
        <div className="Technologies">
          <Technology
            source="https://img.icons8.com/ultraviolet/2x/react--v2.png"
            tech="React"
          />
          <Technology
            source="https://reactrouter.com/_brand/react-router-mark-color.png"
            tech="React-Router"
          />
          <Technology
            source="https://img.icons8.com/office/2x/express-js.png"
            tech="Express"
          />
          <Technology
            source="https://img.icons8.com/external-tal-revivo-color-tal-revivo/2x/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png"
            tech="MongoDB"
          />
        </div>
        <div className="Links">
          <a
            href="https://github.com/gregory10182/Recetario-React"
            target="_blank"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1240/1240971.png"
              alt=""
            />
          </a>

          <a href="https://recetario.gregorypf.site/" target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/512/455/455590.png"
              alt=""
            />
          </a>
        </div>
      </div>

      <div className="Project">
        <h2>Seguimiento de venta</h2>
        <p>
          Estoy en el desarrollo de una aplicación web para el seguimiento de
          ventas diarias de un local comercial. La aplicación permite monitorear
          datos como la meta del mes, la venta del día y el progreso hacia el
          cumplimiento de la meta
        </p>
        <div className="Technologies">
          <Technology
            source="https://img.icons8.com/ultraviolet/2x/react--v2.png"
            tech="React"
          />
          <Technology
            source="https://img.icons8.com/office/2x/express-js.png"
            tech="Express.JS"
          />
          <Technology
            source="https://img.icons8.com/external-tal-revivo-color-tal-revivo/2x/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png"
            tech="React"
          />
        </div>
        <div className="Links">
          <a href="https://github.com/gregory10182/App-DSC/tree/master/src" target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1240/1240971.png"
              alt=""
            />
          </a>

          <a href="https://ornate-sawine-60e96d.netlify.app/" target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/512/455/455590.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
