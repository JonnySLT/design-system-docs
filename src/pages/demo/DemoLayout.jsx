import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../../components/ui/Navbar.jsx'
import './demo.css'

const NAV_SECTIONS = [
  {
    items: [
      { label: 'Dashboard', href: '#/demo' },
      { label: 'Projects', badge: 4, href: '#' },
      { label: 'Analytics', href: '#' },
      { label: 'Messages', badge: 12, href: '#' },
      { label: 'Files', href: '#' },
      { label: 'Calendar', href: '#' },
    ],
  },
  {
    label: 'Settings',
    items: [
      { label: 'Profile', href: '#/demo/settings' },
      { label: 'Security', href: '#' },
      { label: 'Notifications', href: '#' },
      { label: 'Billing', href: '#' },
      { label: 'Integrations', href: '#' },
      { label: 'Team', href: '#' },
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
