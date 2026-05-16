import Celdas from "../../components/Celdas";
import "./Registro.css";

export default function RegistroAvance() {
  const temas = [
    "Tema 1",
    "Tema 2",
    "Tema 3",
    "Tarea",
    "Examen",
  ];

  return (
    <div className="registro">

      {/* FECHA */}
      <div className="registro-fecha">
        <Celdas property1="Dates" property2="Gray" />
      </div>

      {/* LISTADO */}
      <div className="registro-listado">
        {temas.map((tema) => (
          <Celdas
            key={tema}
            property1="Texto"
            property2="Gray"
            label={tema}
          />
        ))}
      </div>

      {/* CONTROLES */}
      <div className="registro-controles">
        <button className="btn-icon">◀</button>
        <button className="btn-icon">▶</button>
      </div>

      {/* ESTADO */}
      <div className="registro-estado">
        <span className="estado-guardado">
          ● Guardado Automático
        </span>
      </div>

    </div>
  );
}