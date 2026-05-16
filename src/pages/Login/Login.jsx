import "./Login.css";
import TextInput from "../../components/TextInput";
import  Card  from "../../components/Card";
import { Boton1 } from "../../components/Botones";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        
        {/* Logo + título */}
        <div className="login-header">
          <div className="login-logo" />
          <h2>UASLP Portal</h2>
          <span>Login</span>
        </div>

        {/* Formulario */}
        <div className="login-form">
          <label>ID Profesor</label>
          <TextInput placeholder="ID profesor" />

          <label>Contraseña</label>
          <TextInput placeholder="Contraseña" />

          <div onClick={handleLogin}>
            <Boton1 tipo="ButtonsSelected" txt="Iniciar sesión" />
          </div>
        </div>

      </div>
    </div>
  );
};