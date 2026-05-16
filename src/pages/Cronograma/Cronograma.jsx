import Celdas from "../../components/Celdas";
import Calendario from "../../components/Calendario";
import  { Boton1 }  from "../../components/Botones";
import "./Cronograma.css";

export default function Cronograma() {
  return (
    <div className="cronograma">

      {/* FILTROS */}
      <div className="cronograma-filtros">
        <Celdas property1="Table" property2="Gray" />
        <Celdas property1="Table" property2="Gray" />
        <Celdas property1="Table" property2="Gray" />
      </div>

      {/* CALENDARIO */}
      <div className="cronograma-calendario">
        <Calendario modo="light" />
      </div>

      {/* BOTONES */}
      <div className="cronograma-acciones">
        <Boton1
                tipo="ButtonsDefault"
                txt="Añadir día inhabil"
              />

        <Boton1
                tipo="ButtonsDefault"
                txt="Aprobar Cronograma"
              />
      </div>

    </div>
  );
}