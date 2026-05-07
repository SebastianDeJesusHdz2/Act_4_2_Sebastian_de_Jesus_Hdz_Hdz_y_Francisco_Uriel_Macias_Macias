// CARD
import './Card.css'

function Card({
  titulo = 'Titulo',
  texto = 'Texto',
  modo = 'light',
  menu = false
}) {
  const esDark = modo === 'dark'

  return (
    <div className={`card-contenedor ${esDark ? 'card-dark' : 'card-light'}`}>
      <div className="card-encabezado">
        <h3 className="card-titulo">{titulo}</h3>
        {menu && (
          <button className="card-menu">···</button>
        )}
      </div>
      <p className="card-texto">{texto}</p>
    </div>
  )
}

export default Card