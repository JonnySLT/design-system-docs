import { useState } from 'react'
import ComponentDemo from '../../components/docs/ComponentDemo.jsx'
import PropsTable from '../../components/docs/PropsTable.jsx'
import Radio, { RadioGroup } from '../../components/ui/Radio.jsx'

const basicCode = `<RadioGroup label="Notification frequency">
  <Radio id="daily"   label="Daily"   value="daily"   checked={val === 'daily'}   onChange={e => setVal(e.target.value)} />
  <Radio id="weekly"  label="Weekly"  value="weekly"  checked={val === 'weekly'}  onChange={e => setVal(e.target.value)} />
  <Radio id="monthly" label="Monthly" value="monthly" checked={val === 'monthly'} onChange={e => setVal(e.target.value)} />
</RadioGroup>`

const props = [
  { prop: 'label',    type: 'string',   default: '—',     description: 'Label text for the radio option' },
  { prop: 'value',    type: 'string',   default: '—',     description: 'Value submitted with the form' },
  { prop: 'checked',  type: 'boolean',  default: 'false', description: 'Whether this option is selected' },
  { prop: 'onChange', type: 'function', default: '—',     description: 'Change handler' },
  { prop: 'disabled', type: 'boolean',  default: 'false', description: 'Prevents interaction' },
]

export default function RadioPage() {
  const [val, setVal] = useState('weekly')
  return (
    <>
      <h1 className="page-title">Radio</h1>
      <p className="page-description">
        Mutually exclusive selection. Use when the user must pick exactly one option from a list.
        For independent toggles, use Checkbox instead.
      </p>

      <h2 className="section-title">Group</h2>
      <ComponentDemo code={basicCode} preview={
        <RadioGroup label="Notification frequency">
          <Radio id="daily"   label="Daily"   value="daily"   checked={val === 'daily'}   onChange={e => setVal(e.target.value)} />
          <Radio id="weekly"  label="Weekly"  value="weekly"  checked={val === 'weekly'}  onChange={e => setVal(e.target.value)} />
          <Radio id="monthly" label="Monthly" value="monthly" checked={val === 'monthly'} onChange={e => setVal(e.target.value)} />
          <Radio id="never"   label="Never"   value="never"   checked={val === 'never'}   onChange={e => setVal(e.target.value)} disabled />
        </RadioGroup>
      } />

      <h2 className="section-title">Props</h2>
      <PropsTable rows={props} />
    </>
  )
}
