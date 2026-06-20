import { useState } from 'react'
import ComponentDemo from '../../components/docs/ComponentDemo.jsx'
import PropsTable from '../../components/docs/PropsTable.jsx'
import Guidelines from '../../components/docs/Guidelines.jsx'
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

      <Guidelines
        accessibility={[
          'Wrap a set in a group with a label/legend that describes the choice (RadioGroup does this).',
          'Arrow keys move between options; only the selected option stays in the tab order (roving focus).',
          'Each option’s label is tied to its input — clicking the label selects it.',
        ]}
        dos={[
          'Use radios for mutually exclusive choices where exactly one is selected.',
          'Show a sensible default selection where possible.',
        ]}
        donts={[
          'Don’t use radios when more than one option can be chosen — use Checkbox.',
          'Don’t use a radio group for long lists (≈6+) — use Select.',
        ]}
      />

      <h2 className="section-title">Props</h2>
      <PropsTable rows={props} />
    </>
  )
}
