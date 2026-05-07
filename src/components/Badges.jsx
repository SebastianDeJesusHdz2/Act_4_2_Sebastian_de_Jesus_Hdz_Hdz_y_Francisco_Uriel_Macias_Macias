import './Badges.css'
import Icon from '../icons/icon'

export default function Badge({
  variant = 'exito',
  mode = 'light',
  txt = 'Badge'
}) {
  const cls = [
    'badge-base',
    `badge-${variant}`,
    mode === 'dark' ? 'badge-dark' : 'badge-light'
  ].join(' ')

  return (
    <button className={cls} type="button">
      <span className="badge-icono">
        <Icon name="eye" />
      </span>
      <span className="badge-texto">{txt}</span>
      <span className="badge-icono">
        <Icon name="x" />
      </span>
    </button>
  )
}