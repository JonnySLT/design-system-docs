import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../../components/ui/Navbar.jsx'
import './demo.css'

const NAV_SECTIONS = [
  {
    items: [
      { label: 'Dashboard', icon: 'home', href: '#/demo' },
      { label: 'Projects', icon: 'folder', badge: 4, href: '#' },
      { label: 'Analytics', icon: 'bar-chart', href: '#' },
      { label: 'Messages', icon: 'message-circle', badge: 12, href: '#' },
      { label: 'Files', icon: 'file', href: '#' },
      { label: 'Calendar', icon: 'calendar', href: '#' },
    ],
  },
  {
    label: 'Settings',
    items: [
      { label: 'Profile', icon: 'user', href: '#/demo/settings' },
      { label: 'Security', icon: 'lock', href: '#' },
      { label: 'Notifications', icon: 'bell', href: '#' },
      { label: 'Billing', icon: 'credit-card', href: '#' },
      { label: 'Integrations', icon: 'zap', href: '#' },
      { label: 'Team', icon: 'users', href: '#' },
    ],
  },
]

const USER = { name: 'John Smith', email: 'john@example.com', initials: 'JS' }

export default function DemoLayout({ children, activeItem }) {
  const sections = NAV_SECTIONS.map(section => ({
    ...section,
    items: section.items.map(item => ({
      ...item,
      active: item.label === activeItem,
    })),
  }))

  return (
    <div className="demo-shell">
      <Navbar
        brand={{ initial: 'A', name: 'Acme Corp' }}
        sections={sections}
        user={USER}
      />
      <main className="demo-content">
        {children}
      </main>
    </div>
  )
}
