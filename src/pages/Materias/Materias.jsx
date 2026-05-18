import { useState } from "react";
import Celdas from "../../components/Celdas";
import ProgressBar from "../../components/ProgressBar";
import Badge from "../../components/Badges";
import { Boton1 } from "../../components/Botones";
import Card from "../../components/Card";
import Icon from "../../icons/icon";
import "./Materias.css";
export default function Materias() {
  // Define estado
  const [modalType, setModalType] = useState(null);
  const [selectedMateria, setSelectedMateria] = useState(null);
  const [selectedCards, setSelectedCards] = useState([]);
  const handleOpenInfo = (materia) => {
    setSelectedMateria(materia);
    setModalType("info");
  };
  const handleOpenCorte = () => {
    setSelectedCards([]);
    setModalType("corte");
  };
  const toggleSelection = (id) => {
    setSelectedCards((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };
  const handleClose = () => {
    setModalType(null);
    setSelectedMateria(null);
    setSelectedCards([]);
  };
  const temasCorte = [
    { id: 1, title: "Tema 1: Introducción" },
    { id: 2, title: "Tema 2: Desarrollo" },
    { id: 3, title: "Tema 3: Conclusión" },
  ];
  const data = [
    {
      nombre: "Telles tellin",
      progreso: 75,
      estado: "exito",
      textoEstado: "ADELANTADO",
    },
    {
      nombre: "Manitas",
      progreso: 60,
      estado: "warning",
      textoEstado: "AL DÍA",
    },
    {
      nombre: "Paco",
      progreso: 50,
      estado: "error",
      textoEstado: "ATRASADO",
    },
  ];
  // Renderiza UI
  return (
    <div className="materias">
      <div className="materias-filtro-container">
        <Celdas
          property1="Table"
          property2="White"
          txt="Materia"
          checkbox={true}
          toggle={true}
        />
      </div>
      <div className="materias-lista">
        {data.map((item) => (
          <div
            key={item.nombre}
            className="materia-card"
            onClick={() => handleOpenInfo(item)}
          >
            <div className="materia-nombre">{item.nombre}</div>
            <div className="materia-progress">
              <ProgressBar
                pct={item.progreso}
                etiqueta="Tu Progreso"
                titulo="Progreso del semestre"
                modo="light"
                puntos={4}
              />
            </div>
            <div className="materia-badge">
              <Badge
                variant={item.estado}
                mode="light"
                txt={item.textoEstado}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="materias-acciones">
        <div onClick={handleOpenCorte}>
          <Boton1 tipo="ButtonsDefault" txt="Proponer punto de corte" />
        </div>
      </div>
      {modalType === "info" && selectedMateria && (
        <div className="materias-overlay" onClick={handleClose}>
          <div className="materias-modal" onClick={(e) => e.stopPropagation()}>
            <Card
              titulo={`Profesor: ${selectedMateria.nombre}`}
              texto="Explicacion del tema actual que lleva el profesor"
            />
          </div>
        </div>
      )}
      {modalType === "corte" && (
        <div className="materias-overlay" onClick={handleClose}>
          <div className="materias-modal" onClick={(e) => e.stopPropagation()}>
            <Card
              titulo="Proponer punto de corte"
              texto="Seleccione el tema del temario:"
            >
              <div className="modal-options-grid">
                {temasCorte.map((opt) => {
                  const isSelected = selectedCards.includes(opt.id);
                  // Renderiza UI
                  return (
                    <div
                      key={opt.id}
                      className={`modal-option-card ${isSelected ? "selected" : ""}`}
                      onClick={() => toggleSelection(opt.id)}
                    >
                      <Card titulo={opt.title} texto="" />
                      {isSelected && (
                        <div className="modal-option-check">✓</div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="modal-actions">
                <div onClick={handleClose}>
                  <Boton1 tipo="ButtonsDefault" txt="Cancelar" />
                </div>
                <div
                  onClick={() => selectedCards.length > 0 && handleClose()}
                  style={{
                    opacity: selectedCards.length > 0 ? 1 : 0.5,
                    cursor:
                      selectedCards.length > 0 ? "pointer" : "not-allowed",
                  }}
                >
                  <Boton1 tipo="ButtonsSelected" txt="Confirmar" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
