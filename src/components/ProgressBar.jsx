import "./ProgressBar.css";
function ProgressBar({
  pct = 25,
  etiqueta = "Tu Progreso",
  titulo = "Progreso del semestre",
  modo = "light",
  puntos = 4,
}) {
  const val = Math.min(100, Math.max(0, pct));
  const esDark = modo === "dark";
  // Renderiza UI
  return (
    <div className={`prog-contenedor ${esDark ? "prog-dark" : ""}`}>
      <span className="prog-etiqueta">{etiqueta}</span>
      <span className="prog-titulo">
        {val}% {titulo}
      </span>
      <div className="prog-barra-fondo">
        <div className="prog-barra-relleno" style={{ width: `${val}%` }} />
        <div className="prog-puntos">
          {Array.from({ length: puntos }).map((_, i) => (
            <span key={i} className="prog-punto" />
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProgressBar;
