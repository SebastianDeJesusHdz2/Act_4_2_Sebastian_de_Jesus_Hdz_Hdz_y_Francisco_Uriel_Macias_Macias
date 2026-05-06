import { Boton1, Boton2, Boton3 } from './components/Botones'
import Badge from './components/Badges'
import Celdas from './components/Celdas'

function App() {
  
  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Boton1 tipo="ButtonsDefault" />
      <Boton1 tipo="ButtonsSelected" txt="Aceptar" />
      <Boton1 tipo="ButtonsHover" />
      <Boton1 tipo="ButtonsDesactivated" />
      <Boton1 tipo="ButtonsDefaultDark" />

      <Boton2 tipo="Default" />
      <Boton2 tipo="Selected" txt="Guardar" />
      <Boton2 tipo="Hover" />
      <Boton2 tipo="Desactivated" />
      <Boton2 tipo="DefaultDark" />

      <div style={{ display: 'flex', gap: '12px' }}>
        <Boton3 tipo="Selected" />
        <Boton3 tipo="Hover" />
        <Boton3 tipo="Default" />
        <Boton3 tipo="Desactivated" />
        <Boton3 tipo="DefaultDark" />
      </div>

      <Badge variant="default" text="Badge" />
      <Badge variant="blue" text="Badge" />
      <Badge variant="yellow" text="Badge" />
      <Badge variant="red" text="Badge" />

      <Celdas property1="Table" property2="White" />
      <Celdas property1="Texto" property2="White" />
      <Celdas property1="Dates" property2="White" />
      <Celdas property1="DeleteModify" property2="White" />

      <Celdas property1="Table" property2="Gray" />
      <Celdas property1="Texto" property2="Gray" />
      <Celdas property1="Dates" property2="Gray" />
      <Celdas property1="DeleteModify" property2="Gray" />

      <Celdas property1="Table" property2="Black" />
      <Celdas property1="Texto" property2="Black" />
      <Celdas property1="Dates" property2="Black" />
      <Celdas property1="DeleteModify" property2="Black" />

    </div>
    
  )
}

export default App
