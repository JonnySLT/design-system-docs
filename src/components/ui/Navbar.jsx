import './Navbar.css'
import NavItem from './NavItem.jsx'

export default function Navbar({ brand = { initial: 'A', name: 'Acme Corp' }, sections = [], user }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="navbar-logo-mark">{brand.initial}</span>
        <span className="navbar-brand">{brand.name}</span>
      </div>
      <div className="navbar-divider" />

      <div className="navbar-sections">
        {sections.map((section, i) => (
          <div className="navbar-section" key={section.label || `section-${i}`}>
            {section.label && <div className="navbar-section-label">{section.label}</div>}
            {section.items.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </div>
        ))}
      </div>

      {user && (
        <>
          <div className="navbar-spacer" />
          <div className="navbar-divider" />
          <div className="navbar-user">
            <span className="navbar-user-avatar">{user.initials}</span>
            <span className="navbar-user-info">
              <span className="navbar-user-name">{user.name}</span>
              <span className="navbar-user-email">{user.email}</span>
            </span>
          </div>
        </>
      )}
    </nav>
  )
}
