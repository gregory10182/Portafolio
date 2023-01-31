import React from "react";
import { motion } from "framer-motion";
import Technology from "./technology"
import "../css/Projects.css";

export default function Projects() {
  return (
    <motion.div className="Projects">
      <h1>Proyectos</h1>
      <div className="Project">
        <h2>Recetario Diana Cocina</h2>
        <p>
          El recetario fue desarrollado como herramienta de ayuda para las
          personas que les gusta cocinar y con el cual pueden estandarizar,
          almacenar y ajustar las cantidades de los ingredientes segun la
          cantidad que se desee cocinar.
        </p>
        <div className="Technologies">
          <Technology
            source="https://img.icons8.com/ultraviolet/2x/react--v2.png"
            tech="React"
          />
          <Technology
            source="https://img.icons8.com/ultraviolet/2x/react--v2.png"
            tech="React"
          />
          <Technology
            source="https://img.icons8.com/ultraviolet/2x/react--v2.png"
            tech="React"
          />
          <Technology
            source="https://img.icons8.com/ultraviolet/2x/react--v2.png"
            tech="React"
          />
        </div>
        <div className="Links">
          <img src="https://cdn-icons-png.flaticon.com/512/1240/1240971.png" alt="" />
          <img src="https://cdn-icons-png.flaticon.com/512/455/455590.png" alt="" />
        </div>
      </div>
      <div className="Project">
        <h2>Recetario Diana Cocina</h2>
        <p>
          El recetario fue desarrollado como herramienta de ayuda para las
          personas que les gusta cocinar y con el cual pueden estandarizar,
          almacenar y ajustar las cantidades de los ingredientes segun la
          cantidad que se desee cocinar.
        </p>
        <div className="Technologies">
          <Technology
            source="https://img.icons8.com/ultraviolet/2x/react--v2.png"
            tech="React"
          />
          <Technology
            source="https://img.icons8.com/ultraviolet/2x/react--v2.png"
            tech="React"
          />
          <Technology
            source="https://img.icons8.com/ultraviolet/2x/react--v2.png"
            tech="React"
          />
          <Technology
            source="https://img.icons8.com/ultraviolet/2x/react--v2.png"
            tech="React"
          />
        </div>
        <div className="Links">
          <img src="https://cdn-icons-png.flaticon.com/512/1240/1240971.png" alt="" />
          <img src="https://cdn-icons-png.flaticon.com/512/455/455590.png" alt="" />
        </div>
      </div>
      <div className="Project">
        <h2>Recetario Diana Cocina</h2>
        <p>
          El recetario fue desarrollado como herramienta de ayuda para las
          personas que les gusta cocinar y con el cual pueden estandarizar,
          almacenar y ajustar las cantidades de los ingredientes segun la
          cantidad que se desee cocinar.
        </p>
        <div className="Technologies">
          <Technology
            source="https://img.icons8.com/ultraviolet/2x/react--v2.png"
            tech="React"
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
          <img src="https://cdn-icons-png.flaticon.com/512/1240/1240971.png" alt="" />
          <img src="https://cdn-icons-png.flaticon.com/512/455/455590.png" alt="" />
        </div>
      </div>
    </motion.div>
  );
}
