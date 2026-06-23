import DemoLayout from './DemoLayout.jsx'
import Badge from '../../components/ui/Badge.jsx'
import Button from '../../components/ui/Button.jsx'
import Tabs from '../../components/ui/Tabs.jsx'
import './demo.css'

const STATS = [
  { label: 'Total Revenue', value: '$48,295', change: '+12.5%', up: true },
  { label: 'Active Users', value: '3,847', change: '+4.2%', up: true },
  { label: 'Tasks Completed', value: '1,204', change: '+8.1%', up: true },
  { label: 'Pending Reviews', value: '23', change: '-3 this week', up: false },
]

const ACTIVITY = [
  { initials: 'SC', name: 'Sarah Chen', text: 'Submitted Q4 financial report for review', status: 'Pending', variant: 'warning', time: '2 min ago', color: '#7c3aed' },
  { initials: 'MW', name: 'Marcus Webb', text: 'Completed onboarding for 3 new team members', status: 'Done', variant: 'success', time: '1 hour ago', color: '#0ea5e9' },
  { initials: 'PP', name: 'Priya Patel', text: 'Updated design tokens in the component library', status: 'In Progress', variant: 'primary', time: '3 hours ago', color: '#16a34a' },
  { initials: 'JO', name: 'James Okafor', text: 'Resolved 8 critical bugs in the dashboard module', status: 'Done', variant: 'success', time: 'Yesterday', color: '#ea580c' },
]

function ActivityList() {
  return (
    <ul className="demo-activity-list">
      {ACTIVITY.map((a, i) => (
        <li className="demo-activity-item" key={i}>
          <div className="demo-activity-avatar" style={{ background: a.color }}>
            {a.initials}
          </div>
          <div className="demo-activity-body">
            <p className="demo-activity-name">{a.name}</p>
            <p className="demo-activity-text">{a.text}</p>
          </div>
          <Badge variant={a.variant} size="sm">{a.status}</Badge>
          <span className="demo-activity-time">{a.time}</span>
        </li>
      ))}
    </ul>
  )
}

const TABS = [
  { label: 'Active users', content: <ActivityList /> },
  { label: 'Sessions', content: <ActivityList /> },
  { label: 'Page views', content: <ActivityList /> },
  { label: 'Events', content: <ActivityList /> },
]

export default function Dashboard() {
  return (
    <DemoLayout activeItem="Dashboard">
      <div className="demo-page">
        <div className="demo-page-header">
          <div>
            <h1 className="demo-page-title">Dashboard</h1>
            <p className="demo-page-subtitle">Welcome back, Sarah. Here's what's happening today.</p>
          </div>
          <Button variant="primary" size="md">New Report</Button>
        </div>

        <div className="demo-stats">
          {STATS.map(s => (
            <div className="demo-stat-card" key={s.label}>
              <p className="demo-stat-label">{s.label}</p>
              <p className="demo-stat-value">{s.value}</p>
              <p className={`demo-stat-change ${s.up ? 'demo-stat-change--up' : 'demo-stat-change--down'}`}>{s.change}</p>
            </div>
          ))}
        </div>

        <div className="demo-card">
          <div className="demo-card-header">
            <h2 className="demo-card-title">Recent Activity</h2>
            <a href="#" className="demo-card-link">View all</a>
          </div>
          <Tabs tabs={TABS} />
        </div>
      </div>
    </DemoLayout>
  )
}
