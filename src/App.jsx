import { Boton1, Boton2, Boton3 } from "./components/Botones";
import ProgressBar from "./components/ProgressBar";
import Card from './components/Card';
import Celdas from "./components/Celdas";
import TextInput from "./components/TextInput";
import Badge from "./components/Badges";
import Header from './components/Header'
import Footer from './components/Footer'
import Calendario from "./components/Calendario";


function App() {
  return (
    <div
      style={{
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      // Boton tipo 1
      <Boton1 tipo="ButtonsDefault" />
      <Boton1 tipo="ButtonsSelected" txt="Aceptar" />
      <Boton1 tipo="ButtonsHover" />
      <Boton1 tipo="ButtonsDesactivated" />
      <Boton1 tipo="ButtonsDefaultDark" />
      // Boton tipo 2
      <Boton2 tipo="Default" />
      <Boton2 tipo="Selected" txt="Guardar" />
      <Boton2 tipo="Hover" />
      <Boton2 tipo="Desactivated" />
      <Boton2 tipo="DefaultDark" />
      // Boton tipo 3 - home
      <div style={{ display: "flex", gap: "12px" }}>
        <Boton3 tipo="Selected" ico="home" />
        <Boton3 tipo="Hover" ico="home" />
        <Boton3 tipo="Default" ico="home" />
        <Boton3 tipo="Desactivated" ico="home" />
        <Boton3 tipo="DefaultDark" ico="home" />
      </div>
      // Boton tipo 3 - menu
      <div style={{ display: "flex", gap: "12px" }}>
        <Boton3 tipo="Selected" ico="menu" />
        <Boton3 tipo="Hover" ico="menu" />
        <Boton3 tipo="Default" ico="menu" />
        <Boton3 tipo="Desactivated" ico="menu" />
        <Boton3 tipo="DefaultDark" ico="menu" />
      </div>
      // Boton tipo 3 - close
      <div style={{ display: "flex", gap: "12px" }}>
        <Boton3 tipo="Selected" ico="close" />
        <Boton3 tipo="Hover" ico="close" />
        <Boton3 tipo="Default" ico="close" />
        <Boton3 tipo="Desactivated" ico="close" />
        <Boton3 tipo="DefaultDark" ico="close" />
      </div>
      // Boton tipo 3 - search
      <div style={{ display: "flex", gap: "12px" }}>
        <Boton3 tipo="Selected" ico="search" />
        <Boton3 tipo="Hover" ico="search" />
        <Boton3 tipo="Default" ico="search" />
        <Boton3 tipo="Desactivated" ico="search" />
        <Boton3 tipo="DefaultDark" ico="search" />
      </div>
      // Boton tipo 3 - user
      <div style={{ display: "flex", gap: "12px" }}>
        <Boton3 tipo="Selected" ico="user" />
        <Boton3 tipo="Hover" ico="user" />
        <Boton3 tipo="Default" ico="user" />
        <Boton3 tipo="Desactivated" ico="user" />
        <Boton3 tipo="DefaultDark" ico="user" />
      </div>
      // Boton tipo 3 - settings
      <div style={{ display: "flex", gap: "12px" }}>
        <Boton3 tipo="Selected" ico="settings" />
        <Boton3 tipo="Hover" ico="settings" />
        <Boton3 tipo="Default" ico="settings" />
        <Boton3 tipo="Desactivated" ico="settings" />
        <Boton3 tipo="DefaultDark" ico="settings" />
      </div>
      // Boton tipo 3 - arrow
      <div style={{ display: "flex", gap: "12px" }}>
        <Boton3 tipo="Selected" ico="arrow" />
        <Boton3 tipo="Hover" ico="arrow" />
        <Boton3 tipo="Default" ico="arrow" />
        <Boton3 tipo="Desactivated" ico="arrow" />
        <Boton3 tipo="DefaultDark" ico="arrow" />
      </div>
      // Boton tipo 3 - check
      <div style={{ display: "flex", gap: "12px" }}>
        <Boton3 tipo="Selected" ico="check" />
        <Boton3 tipo="Hover" ico="check" />
        <Boton3 tipo="Default" ico="check" />
        <Boton3 tipo="Desactivated" ico="check" />
        <Boton3 tipo="DefaultDark" ico="check" />
      </div>
      // Badge modo light
      <Badge variant="exito" mode="light" txt="Badge" />
      <Badge variant="azul" mode="light" txt="Badge" />
      <Badge variant="warning" mode="light" txt="Badge" />
      <Badge variant="error" mode="light" txt="Badge" />
      // Badge modo dark
      <Badge variant="exito" mode="dark" txt="Badge" />
      <Badge variant="azul" mode="dark" txt="Badge" />
      <Badge variant="warning" mode="dark" txt="Badge" />
      <Badge variant="error" mode="dark" txt="Badge" />
      //Text input modo light
      <TextInput placeholder="Ingrese su texto aquí" />
      //Celdas modo light
      <Celdas property1="Table" property2="White" />
      <Celdas property1="Texto" property2="White" />
      <Celdas property1="Dates" property2="White" />
      <Celdas property1="DeleteModify" property2="White" />
      //Celdas modo gray
      <Celdas property1="Table" property2="Gray" />
      <Celdas property1="Texto" property2="Gray" />
      <Celdas property1="Dates" property2="Gray" />
      <Celdas property1="DeleteModify" property2="Gray" />
      //Celdas modo black
      <Celdas property1="Table" property2="Black" />
      <Celdas property1="Texto" property2="Black" />
      <Celdas property1="Dates" property2="Black" />
      <Celdas property1="DeleteModify" property2="Black" />
      // ProgressBar modo light
      <ProgressBar
        pct={25}
        etiqueta="Tu Progreso"
        titulo="Progreso del semestre"
        modo="light"
        puntos={4}
      />
      // ProgressBar modo dark
      <ProgressBar
        pct={75}
        etiqueta="Tu Progreso"
        titulo="Progreso del semestre"
        modo="dark"
        puntos={4}
      />
      // Modo dark con menú de tres puntos
      <Card titulo="Titulo" texto="Texto" modo="dark" menu={true} />
      // Con texto largo
      <Card
        titulo="Mi tarjeta"
        texto="Este es un texto más largo para probar cómo se ve el componente Card con más contenido. Debería adaptarse bien al diseño y mantener la legibilidad."
        modo="light"
      />
      // Sin extras
      <Card/>
      // Header
      <Header
        onBuscar={() => console.log('buscar')}
        onMenu={() => console.log('menu')}
        onUsuario={() => console.log('usuario')}
      />
      // Footer
      <Footer
        onInicio={() => console.log('inicio')}
        onCheck={() => console.log('check')}
        onUsuario={() => console.log('usuario')}
      />
      // Calendario modo light
      <Calendario modo="light"></Calendario>
      // Calendario modo dark
      <Calendario modo="dark"></Calendario>
      // Calendario modo default (light)
      

    </div>
  );
}

export default App;