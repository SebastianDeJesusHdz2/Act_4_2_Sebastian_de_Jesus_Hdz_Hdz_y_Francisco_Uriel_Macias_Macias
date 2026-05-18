import { useState } from "react";
import Celdas from "../../components/Celdas";
import Badge from "../../components/Badges";
import Icon from "../../icons/icon";
import Card from "../../components/Card";
import "./Registro.css";
export default function RegistroAvance() {
  // Define estado
  const [selectedTema, setSelectedTema] = useState(null);
  const temas = [
    { id: 1, nombre: "Tema 1", variant: "azul", badgeTxt: "TEMA" },
    { id: 2, nombre: "Tema 2", variant: "azul", badgeTxt: "TEMA" },
    { id: 3, nombre: "Tema 3", variant: "azul", badgeTxt: "TEMA" },
    { id: 4, nombre: "Tarea", variant: "exito", badgeTxt: "TAREA" },
    { id: 5, nombre: "Examen", variant: "error", badgeTxt: "EXAMEN" },
  ];
  // Renderiza UI
  return (
    <div className="registro">
      <div className="registro-filtros">
        <div className="filtro-item filter-dropdown-icon">
          <Celdas property1="Dates" property2="White" />
          <Icon name="arrow" />
        </div>
        <div className="filtro-separador" />
        <div className="filtro-item">
          <Celdas property1="Table" property2="White" txt="Materia" />
        </div>
      </div>
      <div className="registro-listado">
        {temas.map((tema) => (
          <div
            key={tema.id}
            className="registro-fila"
            onClick={() => setSelectedTema(tema)}
          >
            <div className="registro-fila-izq">
              <input
                type="checkbox"
                className="registro-checkbox"
                onClick={(e) => e.stopPropagation()}
              />
              <span className="registro-texto">{tema.nombre}</span>
            </div>
            <div className="registro-fila-der">
              <div className="registro-acciones desktop-only">
                <button className="accion-btn">
                  <Icon name="pencil" />
                </button>
                <button className="accion-btn">
                  <Icon name="trash" />
                </button>
              </div>
              <div className="registro-acciones mobile-only">
                <button className="accion-btn">
                  <Icon name="treePoints" />
                </button>
              </div>
              <Badge variant={tema.variant} mode="light" txt={tema.badgeTxt} />
            </div>
          </div>
        ))}
      </div>
      <div className="registro-footer-container">
        <div className="registro-controles">
          <button className="btn-icon left-arrow-btn">
            <Icon name="arrow" />
          </button>
          <button className="btn-icon right-arrow-btn">
            <Icon name="arrow" />
          </button>
        </div>
        <div className="registro-estado">
          <span className="estado-guardado">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              style={{ marginRight: 6 }}
            >
              <circle cx="8" cy="8" r="6" fill="#16a34a" />
              <path
                d="M5 8L7 10L11 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Guardado Automatico
          </span>
        </div>
      </div>
      {selectedTema && (
        <div className="registro-overlay" onClick={() => setSelectedTema(null)}>
          <div className="registro-modal" onClick={(e) => e.stopPropagation()}>
            <Card titulo={selectedTema.nombre} texto="Explicación del tema" />
          </div>
        </div>
      )}
    </div>
  );
}
