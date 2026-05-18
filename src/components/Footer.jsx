import "./Footer.css";
import { Boton3 } from "./Botones";
function Footer({ onInicio, onCheck, onUsuario }) {
  // Renderiza UI
  return (
    <footer className="footer-contenedor">
      <Boton3 tipo="Hover" ico="home" click={onInicio} />
      <Boton3 tipo="Hover" ico="check" click={onCheck} />
      <Boton3 tipo="Hover" ico="user" click={onUsuario} />
    </footer>
  );
}
export default Footer;
