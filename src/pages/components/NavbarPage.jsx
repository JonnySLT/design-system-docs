import ComponentDemo from '../../components/docs/ComponentDemo.jsx'
import PropsTable from '../../components/docs/PropsTable.jsx'
import Guidelines from '../../components/docs/Guidelines.jsx'
import Navbar from '../../components/ui/Navbar.jsx'

const code = `<Navbar
  brand={{ initial: 'A', name: 'Acme Corp' }}
  sections={[
    { items: [
      { label: 'Dashboard', icon: '📊', active: true },
      { label: 'Projects',  icon: '📁' },
      { label: 'Messages',  icon: '💬', badge: 3 },
    ]},
    { label: 'Settings', items: [
      { label: 'Profile', icon: '👤' },
      { label: 'Billing', icon: '💳' },
    ]},
  ]}
  user={{ initials: 'JS', name: 'John Smith', email: 'john@example.com' }}
/>`

const props = [
  { prop: 'brand',    type: '{ initial, name }',         default: '—',  description: 'Logo mark letter and brand name' },
  { prop: 'sections', type: '{ label?, items[] }[]',     default: '[]', description: 'Groups of NavItem props; optional uppercase section label' },
  { prop: 'user',     type: '{ initials, name, email }', default: '—',  description: 'User row pinned to the bottom' },
]

export default function NavbarPage() {
  return (
    <>
      <h1 className="page-title">Navbar</h1>
      <p className="page-description">
        A full vertical sidebar — brand, grouped navigation sections, and a user row pinned to the
        bottom. Composes <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>NavItem</code> for each link.
      </p>

      <h2 className="section-title">Example</h2>
      <ComponentDemo code={code} preview={
        <div style={{ height: 540, display: 'flex' }}>
          <Navbar
            brand={{ initial: 'A', name: 'Acme Corp' }}
            sections={[
              { items: [
                { label: 'Dashboard', icon: '📊', active: true },
                { label: 'Projects',  icon: '📁', onClick: () => {} },
                { label: 'Messages',  icon: '💬', badge: 3, onClick: () => {} },
                { label: 'Files',     icon: '📄', onClick: () => {} },
              ]},
              { label: 'Settings', items: [
                { label: 'Profile',  icon: '👤', onClick: () => {} },
                { label: 'Security', icon: '🔒', onClick: () => {} },
                { label: 'Billing',  icon: '💳', onClick: () => {} },
              ]},
            ]}
            user={{ initials: 'JS', name: 'John Smith', email: 'john@example.com' }}
          />
        </div>
      } />

      <Guidelines
        accessibility={[
          'Render inside a <nav> landmark; give it an aria-label when the page has more than one nav.',
          'Group destinations under section headings and mark the current item with aria-current.',
          'Ensure the whole sidebar is keyboard-navigable in a logical order.',
        ]}
        dos={[
          'Use for primary app navigation; group related destinations into sections.',
          'Keep primary nav at the top and the user/account row at the bottom.',
        ]}
        donts={[
          'Don’t overload it — keep each group focused (≈5–7 destinations).',
          'Don’t bury the active state; where the user is should be obvious.',
        ]}
      />

      <h2 className="section-title">Props</h2>
      <PropsTable rows={props} />
    </>
  )
}
