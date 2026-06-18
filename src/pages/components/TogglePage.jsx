import { useState } from 'react'
import ComponentDemo from '../../components/docs/ComponentDemo.jsx'
import PropsTable from '../../components/docs/PropsTable.jsx'
import Toggle from '../../components/ui/Toggle.jsx'

const basicCode = `<Toggle label="Enable notifications" checked={on} onChange={e => setOn(e.target.checked)} />`
const sizesCode = `<Toggle label="Small"  size="sm" checked={true} onChange={() => {}} />
<Toggle label="Medium" size="md" checked={true} onChange={() => {}} />
<Toggle label="Large"  size="lg" checked={true} onChange={() => {}} />`
const disabledCode = `<Toggle label="Disabled off" disabled checked={false} onChange={() => {}} />
<Toggle label="Disabled on"  disabled checked={true}  onChange={() => {}} />`

const props = [
  { prop: 'label',    type: 'string',            default: '—',     description: 'Label beside the toggle' },
  { prop: 'checked',  type: 'boolean',           default: 'false', description: 'Controlled on/off state' },
  { prop: 'onChange', type: 'function',          default: '—',     description: 'Change handler' },
  { prop: 'size',     type: '"sm" | "md" | "lg"', default: '"md"', description: 'Track size' },
  { prop: 'disabled', type: 'boolean',           default: 'false', description: 'Prevents interaction' },
]

export default function TogglePage() {
  const [on, setOn] = useState(false)
  return (
    <>
      <h1 className="page-title">Toggle</h1>
      <p className="page-description">
        Immediately applies an on/off setting without needing a submit button.
        Use for settings that take effect right away.
      </p>

      <h2 className="section-title">Basic</h2>
      <ComponentDemo code={basicCode} preview={
        <Toggle label={on ? 'Notifications on' : 'Notifications off'} checked={on} onChange={e => setOn(e.target.checked)} />
      } />

      <h2 className="section-title">Sizes</h2>
      <ComponentDemo code={sizesCode} preview={
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Toggle label="Small"  size="sm" checked={true} onChange={() => {}} />
          <Toggle label="Medium" size="md" checked={true} onChange={() => {}} />
          <Toggle label="Large"  size="lg" checked={true} onChange={() => {}} />
        </div>
      } />

      <h2 className="section-title">Disabled</h2>
      <ComponentDemo code={disabledCode} preview={
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Toggle label="Disabled off" disabled checked={false} onChange={() => {}} />
          <Toggle label="Disabled on"  disabled checked={true}  onChange={() => {}} />
        </div>
      } />

      <h2 className="section-title">Props</h2>
      <PropsTable rows={props} />
    </>
  )
}
