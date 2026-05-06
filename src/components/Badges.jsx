import './Badges.css'
import Icon from '../icons/icon'

export default function Badge({
  variant = 'default',
  mode = 'light',
  text = 'Badge'
}) {
  const isLight = mode === 'light'
  const isDark = mode === 'black'

  const cls = [
    'badge-base',
    `badge-${variant}`,
    isLight ? 'badge-light' : 'badge-dark'
  ]
    .filter(Boolean)
    .join(' ')

  const iconColor = isDark ? '#FFFFFF' : 'currentColor'

  return (
    <button className={cls} type="button">
      <span className="badge-icon badge-icon-left">
        <Icon name="eye" />
      </span>
      <span className="badge-text">{text}</span>
      <span className="badge-icon badge-icon-right">
        <Icon name="x" />
      </span>
    </button>
  )
}
