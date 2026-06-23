import { useEffect } from 'react'
import Navbar from '../../components/ui/Navbar.jsx'
import './demo.css'

// Only Dashboard and Profile are wired up; the rest are inert demo placeholders
const NAV_SECTIONS = [
  {
    items: [
      { label: 'Dashboard', href: '#/demo' },
      { label: 'Projects', badge: 4 },
      { label: 'Analytics' },
      { label: 'Messages', badge: 12 },
      { label: 'Files' },
      { label: 'Calendar' },
    ],
  },
  {
    label: 'Settings',
    items: [
      { label: 'Profile', href: '#/demo/settings' },
      { label: 'Security' },
      { label: 'Notifications' },
      { label: 'Billing' },
      { label: 'Integrations' },
      { label: 'Team' },
    ],
  },
]

const USER = { name: 'John Smith', email: 'john@example.com', initials: 'JS' }

export default function DemoLayout({ children, activeItem }) {
  useEffect(() => {
    const prev = document.title
    document.title = 'Live Demo'
    return () => { document.title = prev }
  }, [])

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
