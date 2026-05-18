import { useState } from "react";
import "./Header.css";
import Icon from "../icons/icon";
import { Boton3 } from "./Botones";
import TextInput from "./TextInput";
function Header({ onBuscar, onMenu, onUsuario }) {
  // Define estado
  const [showSearch, setShowSearch] = useState(false);
  const handleBuscar = () => {
    setShowSearch(!showSearch);
    if (onBuscar) onBuscar();
  };
  // Renderiza UI
  return (
    <header className="header-contenedor">
      <div
        className="header-izq"
        style={{ display: "flex", alignItems: "center", gap: "8px" }}
      >
        <button className="header-btn-icono" onClick={handleBuscar}>
          <Icon name="search" />
        </button>
        <button className="header-btn-icono" onClick={onMenu}>
          <Icon name="menu" />
        </button>
        {showSearch && (
          <div style={{ marginLeft: "8px", width: "200px" }}>
            <TextInput placeholder="Buscar..." />
          </div>
        )}
      </div>
      <Boton3 tipo="Selected" ico="user" click={onUsuario} />
    </header>
  );
}
export default Header;
