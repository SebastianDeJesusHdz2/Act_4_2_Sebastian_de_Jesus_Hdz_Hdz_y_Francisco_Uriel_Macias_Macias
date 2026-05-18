import { useState } from "react";
import "./TextInput.css";
export default function TextInput({
  placeholder = "Texto",
  valor = "",
  onChange,
  modo = "Light",
  disabled = false,
}) {
  // Define estado
  const [texto, setTexto] = useState(valor);
  function manejarCambio(e) {
    setTexto(e.target.value);
    if (onChange) onChange(e);
  }
  // Renderiza UI
  return (
    <div className="text-input-container">
      <input
        type="text"
        placeholder={placeholder}
        value={texto}
        onChange={manejarCambio}
        disabled={disabled}
        className="text-input-field"
      />
    </div>
  );
}
