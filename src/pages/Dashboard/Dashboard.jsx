import "./Dashboard.css";

import  Card from "../../components/Card";
import ProgressBar from "../../components/ProgressBar";
import { Boton1 } from "../../components/Botones";

import Navegator from "../../components/Navegator";

const Dashboard = () => {
  return (
    <div className="dashboard-layout">

      {/* Main */}
      <main className="dashboard-main">

        {/* TOP SECTION */}
        <div className="dashboard-top">

          <Card
            titulo="Horas Registradas"
            texto="30 HRS"
          />

          <ProgressBar
            pct={25}
            etiqueta="Tu Progreso"
            titulo="Progreso del general"
            modo="light"
            puntos={4}
          />

          <Card
            titulo="Incidencias"
            texto="3 Materias"
          />

        </div>

        {/* GRID DE CURSOS */}
        <div className="dashboard-grid">

          {[1,2,3,4,5,6].map((item) => (
            <div className="curso-card" key={item}>
              <Card
                titulo={`Materia ${item}`}
                texto="Descripción de la materia..."
              />

              <Boton1
                tipo="ButtonsDefault"
                txt="Entrar al curso"
              />
            </div>
          ))}

        </div>

        {/* ACCIONES */}
        <div className="dashboard-actions">

          <div className="left">
            <Boton1 tipo="ButtonsDefault" txt="Registrar Avance Diario" />
          </div>

          <div className="right">
            <Boton1 tipo="ButtonsDefault" txt="Crear Nuevo Cronograma" />
            <Boton1 tipo="ButtonsDefault" txt="Exportar a PDF" />
            <Boton1 tipo="ButtonsDefault" txt="Importar desde Excel" />
          </div>

        </div>

      </main>
    </div>
  );
};

export default Dashboard;