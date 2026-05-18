import { useState } from "react";
import "./Login.css";
import TextInput from "../../components/TextInput";
import Card from "../../components/Card";
import { Boton1 } from "../../components/Botones";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const navigate = useNavigate();
  // Define estado
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [modalConfig, setModalConfig] = useState(null);
  const handleLogin = () => {
    if (id.trim() === "" && password.trim() === "") {
      setModalConfig({
        titulo: "Campos vacíos",
        texto:
          "Por favor, ingrese su ID de profesor y contraseña para continuar.",
      });
      return;
    }
    if (id.trim() === "") {
      setModalConfig({
        titulo: "Falta ID de Profesor",
        texto: "Por favor, ingrese su ID de profesor para continuar.",
      });
      return;
    }
    if (password.trim() === "") {
      setModalConfig({
        titulo: "Falta contraseña",
        texto: "Por favor, ingrese su contraseña para continuar.",
      });
      return;
    }
    if (id !== "admin" || password !== "admin") {
      setModalConfig({
        titulo: "Credenciales incorrectas",
        texto:
          "El ID de profesor o la contraseña que ingresó no coinciden con nuestros registros. Por favor, verifique sus datos e intente nuevamente.",
      });
      return;
    }
    navigate("/dashboard");
  };
  // Renderiza UI
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo" />
          <h2>UASLP Portal</h2>
          <span>Login</span>
        </div>
        <div className="login-form">
          <label>ID Profesor</label>
          <TextInput
            placeholder="ID profesor"
            valor={id}
            onChange={(e) => setId(e.target.value)}
          />
          <label>Contraseña</label>
          <TextInput
            placeholder="Contraseña"
            valor={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div onClick={handleLogin}>
            <Boton1 tipo="ButtonsSelected" txt="Iniciar sesión" />
          </div>
        </div>
      </div>
      {modalConfig && (
        <div className="login-overlay" onClick={() => setModalConfig(null)}>
          <div className="login-modal" onClick={(e) => e.stopPropagation()}>
            <Card
              modo="error"
              titulo={modalConfig.titulo}
              texto={modalConfig.texto}
            >
              <div
                className="login-modal-btn"
                onClick={() => setModalConfig(null)}
              >
                <Boton1 tipo="ButtonsSelected" txt="Reintentar" />
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};
