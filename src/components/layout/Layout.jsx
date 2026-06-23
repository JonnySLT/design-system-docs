import { useLocation } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'
import Header from './Header.jsx'

export default function Layout({ children }) {
  const { pathname } = useLocation()
  const isDemo = pathname.startsWith('/demo')

  if (isDemo) {
    return <>{children}</>
  }

  return (
    <div className="docs-layout">
      <Sidebar />
      <div className="docs-main">
        <Header />
        <main className="docs-content">
          {children}
        </main>
      </div>
    </div>
  )
}
