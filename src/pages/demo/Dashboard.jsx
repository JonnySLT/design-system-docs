import DemoLayout from './DemoLayout.jsx'
import Badge from '../../components/ui/Badge.jsx'
import './demo.css'

const STATS = [
  { label: 'Total Revenue', value: '$48,295', change: '+12% from last month', up: true },
  { label: 'Active Projects', value: '24', change: '+3 this week', up: true },
  { label: 'Team Members', value: '18', change: '2 pending invites', up: false },
  { label: 'Tasks Completed', value: '341', change: '+28 today', up: true },
]

const ACTIVITY = [
  { initials: 'SC', text: 'Sarah Chen updated the design tokens', time: '2 minutes ago', color: '#7c3aed' },
  { initials: 'MR', text: 'Marcus Rodriguez merged a component PR', time: '18 minutes ago', color: '#0ea5e9' },
  { initials: 'AL', text: 'Aisha Lee left a comment on Dashboard spec', time: '1 hour ago', color: '#16a34a' },
  { initials: 'TK', text: 'Tom Kim created project "Q3 Rebrand"', time: '3 hours ago', color: '#ea580c' },
  { initials: 'SC', text: 'Sarah Chen exported updated icon set', time: 'Yesterday', color: '#7c3aed' },
]

const PROJECTS = [
  { name: 'Design System v2', pct: 78 },
  { name: 'Mobile App Redesign', pct: 54 },
  { name: 'Q3 Rebrand', pct: 22 },
  { name: 'Component Library Docs', pct: 91 },
]

export default function Dashboard() {
  return (
    <DemoLayout activeItem="Dashboard">
      <div className="demo-page">
        <div className="demo-page-header">
          <h1 className="demo-page-title">Dashboard</h1>
          <p className="demo-page-subtitle">Welcome back, John. Here's what's happening.</p>
        </div>

        <div className="demo-stats">
          {STATS.map(s => (
            <div className="demo-stat-card" key={s.label}>
              <p className="demo-stat-label">{s.label}</p>
              <p className="demo-stat-value">{s.value}</p>
              <p className={`demo-stat-change ${s.up ? 'demo-stat-change--up' : ''}`}>{s.change}</p>
            </div>
          ))}
        </div>

        <div className="demo-grid-2">
          <div className="demo-card">
            <h2 className="demo-card-title">Recent Activity</h2>
            <ul className="demo-activity-list">
              {ACTIVITY.map((a, i) => (
                <li className="demo-activity-item" key={i}>
                  <div className="demo-activity-avatar" style={{ background: a.color }}>
                    {a.initials}
                  </div>
                  <div className="demo-activity-body">
                    <p className="demo-activity-text">{a.text}</p>
                    <p className="demo-activity-time">{a.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="demo-card">
            <h2 className="demo-card-title">Project Progress</h2>
            <div className="demo-project-list">
              {PROJECTS.map(p => (
                <div className="demo-project-row" key={p.name}>
                  <span className="demo-project-name">{p.name}</span>
                  <div className="demo-project-bar-track">
                    <div className="demo-project-bar-fill" style={{ width: `${p.pct}%` }} />
                  </div>
                  <span className="demo-project-pct">{p.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DemoLayout>
  )
}
