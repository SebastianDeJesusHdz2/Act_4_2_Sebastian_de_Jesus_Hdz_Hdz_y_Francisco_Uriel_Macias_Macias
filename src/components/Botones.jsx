import "./Botones.css";
import Icon from "../icons/icon";
export function Boton1({
  tipo = "ButtonsDefault",
  txt = "Limpiar Filtros",
  click,
}) {
  const des = tipo === "ButtonsDesactivated";
  const cls = `btn-base boton1-${tipo}`;
  // Renderiza UI
  return (
    <button className={cls} disabled={des} onClick={!des ? click : undefined}>
      {txt}
    </button>
  );
}
export function Boton2({
  tipo = "Default",
  txt = "Button text",
  ico = "home",
  click,
}) {
  const des = tipo === "Desactivated";
  const cls = `btn-base boton2-${tipo}`;
  // Renderiza UI
  return (
    <button className={cls} disabled={des} onClick={!des ? click : undefined}>
      <span className="btn-ico-wrap">
        <Icon name={ico} />
      </span>
      <span>{txt}</span>
    </button>
  );
}
export function Boton3({ tipo = "Default", ico = "home", click }) {
  const des = tipo === "Desactivated";
  const cls = `btn-icono boton3-${tipo}`;
  // Renderiza UI
  return (
    <button className={cls} disabled={des} onClick={!des ? click : undefined}>
      <span className="btn-ico-wrap">
        <Icon name={ico} />
      </span>
    </button>
  );
}
