// BOTON
import './Botones.css'

export function Boton1({
  tipo = 'ButtonsDefault',
  txt = 'Limpiar Filtros',
  click
}) {
  const des = tipo === 'ButtonsDesactivated'
  const cls = `btn-base boton1-${tipo}`

  return (
    <button
      className={cls}
      disabled={des}
      onClick={!des ? click : undefined}
    >
      {txt}
    </button>
  )
}

export function Boton2({
  tipo = 'Default',
  txt = 'Button text',
  ico = '⌂',
  click
}) {
  const des = tipo === 'Desactivated'
  const cls = `btn-base boton2-${tipo}`

  return (
    <button
      className={cls}
      disabled={des}
      onClick={!des ? click : undefined}
    >
      <span>{ico}</span>
      <span>{txt}</span>
    </button>
  )
}

export function Boton3({
  tipo = 'Default',
  ico = '⌂',
  click
}) {
  const des = tipo === 'Desactivated'
  const cls = `btn-icono boton3-${tipo}`

  return (
    <button
      className={cls}
      disabled={des}
      onClick={!des ? click : undefined}
    >
      <span>{ico}</span>
    </button>
  )
}
