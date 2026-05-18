import "./Card.css";
function Card({
  titulo = "Titulo",
  texto = "Texto",
  modo = "light",
  menu = false,
  children,
}) {
  const esDark = modo === "dark";
  const esError = modo === "error";
  // Renderiza UI
  return (
    <div
      className={`card-contenedor ${esDark ? "card-dark" : esError ? "card-error" : "card-light"}`}
    >
      <div className="card-encabezado">
        <h3 className="card-titulo">{titulo}</h3>
        {menu && <button className="card-menu">···</button>}
      </div>
      <p className="card-texto">{texto}</p>
      {children}
    </div>
  );
}
export default Card;
