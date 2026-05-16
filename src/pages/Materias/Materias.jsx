import Celdas from "../../components/Celdas";
import ProgressBar from "../../components/ProgressBar";
import Badge from "../../components/Badges";
import { Boton1 } from "../../components/Botones";
import "./Materias.css";

export default function Materias() {
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
      estado: "warning",
      textoEstado: "AL DÍA",
    },
  ];

  return (
    <div className="materias">

      {/* FILTRO */}
      <div className="materias-filtro">
        <Celdas property1="Table" property2="Gray" />
      </div>

      {/* LISTA */}
      <div className="materias-lista">
        {data.map((item) => (
          <div key={item.nombre} className="materia-card">

            {/* NOMBRE */}
            <div className="materia-nombre">
              <Celdas
                property1="Texto"
                property2="Gray"
                label={item.nombre}
              />
            </div>

            {/* PROGRESS */}
            <div className="materia-progress">
              <ProgressBar
                pct={item.progreso}
                etiqueta="Tu Progreso"
                titulo="Progreso del semestre"
                modo="light"
                puntos={4}
              />
            </div>

            {/* BADGE */}
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

      {/* BOTÓN */}
      <div className="materias-acciones">
        <Boton1 tipo="ButtonsDefault" />
      </div>

    </div>
  );
}