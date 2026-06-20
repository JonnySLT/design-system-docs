import { useState } from 'react'
import ComponentDemo from '../../components/docs/ComponentDemo.jsx'
import PropsTable from '../../components/docs/PropsTable.jsx'
import Guidelines from '../../components/docs/Guidelines.jsx'
import Select from '../../components/ui/Select.jsx'

const basicCode = `<Select
  label="Country"
  placeholder="Select a country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'gb', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
  ]}
  value={val}
  onChange={e => setVal(e.target.value)}
/>`

const statesCode = `<Select label="Role" value="admin" onChange={() => {}} options={[{ value: 'admin', label: 'Admin' }]} />
<Select label="Disabled" value="" disabled options={[]} placeholder="Nothing here" />
<Select label="Error" value="" error="Please select a plan." options={[{ value: 'pro', label: 'Pro' }]} />`

const props = [
  { prop: 'label',       type: 'string',   default: '—',     description: 'Label above the select' },
  { prop: 'options',     type: 'Array<{value, label}>', default: '[]', description: 'Options list' },
  { prop: 'value',       type: 'string',   default: '—',     description: 'Controlled value' },
  { prop: 'onChange',    type: 'function', default: '—',     description: 'Change handler' },
  { prop: 'placeholder', type: 'string',   default: '—',     description: 'Empty/placeholder option label' },
  { prop: 'error',       type: 'string',   default: '—',     description: 'Error message' },
  { prop: 'disabled',    type: 'boolean',  default: 'false', description: 'Prevents interaction' },
  { prop: 'required',    type: 'boolean',  default: 'false', description: 'Marks field as required' },
]

const countries = [
  { value: 'us', label: 'United States' },
  { value: 'gb', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
]

export default function SelectPage() {
  const [val, setVal] = useState('')
  return (
    <>
      <h1 className="page-title">Select</h1>
      <p className="page-description">
        Dropdown for choosing one value from a predefined list. Use when there are 5+ options
        and a Radio group would take too much space.
      </p>

      <h2 className="section-title">Basic</h2>
      <ComponentDemo code={basicCode} preview={
        <div style={{ maxWidth: 280 }}>
          <Select label="Country" placeholder="Select a country" options={countries} value={val} onChange={e => setVal(e.target.value)} />
        </div>
      } />

      <h2 className="section-title">States</h2>
      <ComponentDemo code={statesCode} preview={
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 280 }}>
          <Select label="Role" value="admin" onChange={() => {}} options={[{ value: 'admin', label: 'Administrator' }, { value: 'member', label: 'Member' }]} />
          <Select label="Disabled" value="" disabled onChange={() => {}} options={[]} placeholder="Nothing here" />
          <Select label="Error" value="" onChange={() => {}} error="Please select a plan." options={[{ value: 'pro', label: 'Pro' }]} placeholder="Choose plan" />
        </div>
      } />

      <Guidelines
        accessibility={[
          'Always pair the select with a visible label.',
          'Keyboard: open with Enter/Space/Arrows, move with arrows, choose with Enter, dismiss with Escape.',
          'Convey errors with the error prop (message + styling), not color alone.',
        ]}
        dos={[
          'Use for picking one option from a longer list (≈6+).',
          'Order options predictably — alphabetical or by frequency.',
        ]}
        donts={[
          'Don’t use a select for 2–4 options — radios are faster to scan.',
          'Don’t rely on the placeholder as the label.',
        ]}
      />

      <h2 className="section-title">Props</h2>
      <PropsTable rows={props} />
    </>
  )
}
