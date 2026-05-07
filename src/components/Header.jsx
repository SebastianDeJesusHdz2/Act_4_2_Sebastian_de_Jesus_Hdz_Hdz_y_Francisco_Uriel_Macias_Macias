// HEADER
import './Header.css'
import Icon from '../icons/icon'
import { Boton3 } from './Botones'

function Header({
  onBuscar,
  onMenu,
  onUsuario
}) {
  return (
    <header className="header-contenedor">
      <div className="header-izq">
        <button className="header-btn-icono" onClick={onBuscar}>
          <Icon name="search" />
        </button>
        <button className="header-btn-icono" onClick={onMenu}>
          <Icon name="menu" />
        </button>
      </div>
      <Boton3 tipo="Selected" ico="user" click={onUsuario} />
    </header>
  )
}

export default Header