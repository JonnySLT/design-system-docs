import ComponentDemo from '../../components/docs/ComponentDemo.jsx'
import PropsTable from '../../components/docs/PropsTable.jsx'
import Tabs from '../../components/ui/Tabs.jsx'

const basicCode = `<Tabs tabs={[
  { label: 'Overview',  content: <p>Overview content here.</p> },
  { label: 'Members',   content: <p>Members content here.</p> },
  { label: 'Settings',  content: <p>Settings content here.</p> },
]} />`

const props = [
  { prop: 'tabs',         type: 'Array<{label, content}>', default: '[]', description: 'Tab items — label shown in the tab bar, content rendered in the panel' },
  { prop: 'defaultIndex', type: 'number',                  default: '0',  description: 'Initially active tab index' },
]

export default function TabsPage() {
  return (
    <>
      <h1 className="page-title">Tabs</h1>
      <p className="page-description">
        Organises content into switchable panels. Use when related content can be meaningfully separated
        and the user needs to navigate between them without leaving the page.
      </p>

      <h2 className="section-title">Basic</h2>
      <ComponentDemo code={basicCode} preview={
        <Tabs tabs={[
          { label: 'Overview', content: <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: 14 }}>Project overview and recent activity are shown here.</p> },
          { label: 'Members',  content: <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: 14 }}>Manage team members and their permissions.</p> },
          { label: 'Settings', content: <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: 14 }}>Configure project settings and integrations.</p> },
          { label: 'Archive',  content: <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: 14 }}>View archived tasks and closed milestones.</p> },
        ]} />
      } />

      <h2 className="section-title">Props</h2>
      <PropsTable rows={props} />
    </>
  )
}
