import './Navegator.css'

const iconAccount = 'https://www.figma.com/api/mcp/asset/a9fd4eb2-b5c8-45bc-a11d-cd1e386fd146'
const iconDoc = 'https://www.figma.com/api/mcp/asset/5f8e7912-b3b0-4cc5-9306-59c88f4bc33e'
const iconNotifications = 'https://www.figma.com/api/mcp/asset/8a2e8ac2-836a-4980-b26d-ad5d5da15886'

function Navegator({ abierto }) {
  const topItems = [
    { icon: iconAccount, label: 'Account Configuration' },
    { icon: iconNotifications, label: 'Notifications' },
  ]

  const links = [
    { label: 'Dashboard' },
    { label: 'Cronogama' },
    { label: 'Registro de avance' },
    { label: 'Materias Colegiadas' },
  ]

  return (
    <aside className={`navegador ${abierto ? "open" : "closed"}`}>
      <div className="navegador-header">
        <h2 className="navegador-titulo">Sample text</h2>
        <p className="navegador-subtitulo">Profesor:</p>
      </div>

      <div className="navegador-top-section">
        {topItems.map((item) => (
          <div key={item.label} className="navegador-top-row">
            <img src={item.icon} alt="" className="navegador-top-icon" />
            <span className="navegador-top-text">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="navegador-divider" />

      <div className="navegador-link-list">
        {links.map((item) => (
          <div key={item.label} className="navegador-link-row">
            <img src={iconDoc} alt="" className="navegador-link-icon" />
            <span className="navegador-link-text">{item.label}</span>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default Navegator
