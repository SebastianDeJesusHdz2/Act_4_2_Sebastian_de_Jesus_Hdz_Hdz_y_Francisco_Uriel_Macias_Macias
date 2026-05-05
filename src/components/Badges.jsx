import './Badges.css'
import Icon from '../icons/icon';

export default function Badge({
  variant = 'default',
  text = 'Badge',
  disabled = false
}) {
  const cls = `
    badge-base 
    badge-${variant} 
    ${disabled ? "badge-disabled" : ""}
  `;

  return (
    <span className={cls}>
      <div className="badge-icon">
        <Icon name="eye" />
      </div>

      <span className="badge-text">{text}</span>

      <div className="badge-icon">
        <Icon name="x" />
      </div>
    </span>
  );
}