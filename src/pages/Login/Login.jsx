import "./Login.css";
import TextInput from "../../components/TextInput";
import  Card  from "../../components/Card";
import { Boton1 } from "../../components/Botones";

export const Login = () => {
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
          <TextInput placeholder="Ingrese su ID" />

          <label>Contraseña</label>
          <TextInput placeholder="Ingrese su contraseña" />

          <Boton1 tipo="ButtonsDefault" txt="Iniciar sesión" />
        </div>

      </div>
    </div>
  );
};