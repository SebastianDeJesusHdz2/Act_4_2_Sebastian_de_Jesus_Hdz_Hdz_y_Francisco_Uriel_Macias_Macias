import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Card from "../../components/Card";
import ProgressBar from "../../components/ProgressBar";
import { Boton1 } from "../../components/Botones";
import Badge from "../../components/Badges";
const Dashboard = () => {
  const navigate = useNavigate();
  // Define estado
  const [modalType, setModalType] = useState(null);
  const [selectedCards, setSelectedCards] = useState([]);
  const handleOpenModal = (type) => {
    setModalType(type);
    setSelectedCards([]);
  };
  const toggleSelection = (id) => {
    setSelectedCards((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };
  const modalOptions = [
    { id: 1, title: "Proyectos computacionales I" },
    { id: 2, title: "Proyectos computacionales II" },
    { id: 3, title: "Proyectos computacionales III" },
    { id: 4, title: "Diseño de interfaces" },
    { id: 5, title: "Arte de videojuegos" },
    { id: 6, title: "Estructuras de datos I" },
  ];
  // Renderiza UI
  return (
    <div className="dashboard-layout">
      <main className="dashboard-main">
        <div className="dashboard-top">
          <div className="top-card-wrapper">
            <Card
              titulo="Horas Registradas"
              texto={
                <span
                  style={{
                    color: "var(--color-exito, #4caf50)",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                >
                  30 HRS
                </span>
              }
              menu={true}
            />
          </div>
          <div className="top-progress-wrapper">
            <ProgressBar
              pct={25}
              etiqueta=""
              titulo="Progreso del general"
              modo="light"
              puntos={0}
            />
          </div>
          <div className="top-card-wrapper">
            <Card
              titulo="Incidencias"
              texto={<Badge variant="error" mode="light" txt="1 Materias" />}
              menu={true}
            />
          </div>
        </div>
        <div className="dashboard-grid">
          {[
            { id: 1, title: "Proyectos computacionales I" },
            { id: 2, title: "Proyectos computacionales II" },
            { id: 3, title: "Proyectos computacionales III" },
            { id: 4, title: "Diseño de interfaces" },
            { id: 5, title: "Arte de videojuegos" },
            { id: 6, title: "Estructuras de datos I" },
          ].map((item) => (
            <div className="curso-card" key={item.id}>
              <Card
                titulo={item.title}
                texto={
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                      height: "100%",
                    }}
                  >
                    <span
                      className="card-desc"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        minHeight: "4.5em",
                        wordBreak: "break-all",
                      }}
                    >
                      Sample text
                      asdaasdasdasdaasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    </span>
                    <div
                      onClick={() => navigate("/materias")}
                      style={{ display: "inline-block", cursor: "pointer" }}
                    >
                      <Boton1 tipo="ButtonsDefault" txt="Entrar al curso" />
                    </div>
                  </div>
                }
              />
            </div>
          ))}
        </div>
        <div className="dashboard-actions">
          <div className="left">
            <div
              onClick={() => navigate("/registro-avance")}
              style={{
                display: "inline-block",
                cursor: "pointer",
                width: "100%",
              }}
            >
              <Boton1 tipo="ButtonsDefault" txt="Registrar Avance Diario" />
            </div>
          </div>
          <div className="right">
            <div
              onClick={() => navigate("/cronograma")}
              style={{
                display: "inline-block",
                cursor: "pointer",
                width: "100%",
              }}
            >
              <Boton1 tipo="ButtonsDefault" txt="Crear Nuevo Cronograma" />
            </div>
            <div onClick={() => handleOpenModal("export")}>
              <Boton1 tipo="ButtonsDefault" txt="Exportar a PDF (AAAE01)" />
            </div>
            <div onClick={() => handleOpenModal("import")}>
              <Boton1 tipo="ButtonsDefault" txt="Importar desde Excel" />
            </div>
          </div>
        </div>
      </main>
      {modalType && (
        <div className="dashboard-overlay" onClick={() => setModalType(null)}>
          <div className="dashboard-modal" onClick={(e) => e.stopPropagation()}>
            <Card
              titulo={
                modalType === "export"
                  ? "Exportar a PDF"
                  : "Importar desde Excel"
              }
              texto="Seleccione las materias o cronogramas que desea incluir:"
            >
              <div className="modal-options-grid">
                {modalOptions.map((opt) => {
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
                <div onClick={() => setModalType(null)}>
                  <Boton1 tipo="ButtonsDefault" txt="Cancelar" />
                </div>
                <div
                  onClick={() => selectedCards.length > 0 && setModalType(null)}
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
};
export default Dashboard;
