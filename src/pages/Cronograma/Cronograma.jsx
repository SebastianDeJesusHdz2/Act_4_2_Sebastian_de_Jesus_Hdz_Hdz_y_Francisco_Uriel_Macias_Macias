import Celdas from "../../components/Celdas";
import Calendario from "../../components/Calendario";
import { Boton1 } from "../../components/Botones";
import "./Cronograma.css";
export default function Cronograma() {
  // Renderiza UI
  return (
    <div className="cronograma">
      <div className="cronograma-filtros">
        <div className="filtro-wrapper">
          <Celdas property1="Table" property2="White" txt="Materia" />
        </div>
        <div className="filtro-wrapper">
          <Celdas property1="Table" property2="White" txt="Grupo" />
        </div>
        <div className="filtro-wrapper">
          <Celdas
            property1="Table"
            property2="White"
            txt="Semestre a Importar"
          />
        </div>
      </div>
      <div className="cronograma-calendario">
        <Calendario modo="light" />
      </div>
      <div className="cronograma-acciones">
        <div className="acciones-top">
          <Boton1 tipo="ButtonsDefault" txt="Añadir día Inhábil" />
        </div>
        <div className="acciones-bottom">
          <Boton1 tipo="ButtonsDefault" txt="Aprobar Cronograma" />
        </div>
      </div>
    </div>
  );
}
