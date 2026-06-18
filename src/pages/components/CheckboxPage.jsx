import { useState } from 'react'
import ComponentDemo from '../../components/docs/ComponentDemo.jsx'
import PropsTable from '../../components/docs/PropsTable.jsx'
import Checkbox from '../../components/ui/Checkbox.jsx'

const basicCode = `<Checkbox label="Accept terms and conditions" checked={checked} onChange={e => setChecked(e.target.checked)} />`
const statesCode = `<Checkbox label="Unchecked" checked={false} onChange={() => {}} />
<Checkbox label="Checked" checked={true} onChange={() => {}} />
<Checkbox label="Indeterminate" indeterminate checked={false} onChange={() => {}} />
<Checkbox label="Disabled" disabled checked={false} onChange={() => {}} />`

const props = [
  { prop: 'label',         type: 'string',   default: '—',     description: 'Label text' },
  { prop: 'checked',       type: 'boolean',  default: 'false', description: 'Controlled checked state' },
  { prop: 'onChange',      type: 'function', default: '—',     description: 'Change handler' },
  { prop: 'disabled',      type: 'boolean',  default: 'false', description: 'Prevents interaction' },
  { prop: 'indeterminate', type: 'boolean',  default: 'false', description: 'Shows a dash — useful for "select all" parents' },
  { prop: 'helperText',    type: 'string',   default: '—',     description: 'Hint below the checkbox' },
]

export default function CheckboxPage() {
  const [checked, setChecked] = useState(false)
  return (
    <>
      <h1 className="page-title">Checkbox</h1>
      <p className="page-description">
        Binary selection. Use for independent options that can each be toggled on or off.
        For mutually exclusive choices, use Radio instead.
      </p>

      <h2 className="section-title">Basic</h2>
      <ComponentDemo code={basicCode} preview={
        <Checkbox label="Accept terms and conditions" checked={checked} onChange={e => setChecked(e.target.checked)} />
      } />

      <h2 className="section-title">States</h2>
      <ComponentDemo code={statesCode} preview={
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Checkbox label="Unchecked" checked={false} onChange={() => {}} />
          <Checkbox label="Checked" checked={true} onChange={() => {}} />
          <Checkbox label="Indeterminate" indeterminate checked={false} onChange={() => {}} />
          <Checkbox label="Disabled" disabled checked={false} onChange={() => {}} />
        </div>
      } />

      <h2 className="section-title">Props</h2>
      <PropsTable rows={props} />
    </>
  )
}
