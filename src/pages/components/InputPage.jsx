import { useState } from 'react'
import ComponentDemo from '../../components/docs/ComponentDemo.jsx'
import PropsTable from '../../components/docs/PropsTable.jsx'
import Input from '../../components/ui/Input.jsx'

const basicCode = `<Input label="Email address" placeholder="you@example.com" />`
const statesCode = `<Input label="Username" value="jonnybennett" onChange={() => {}} />
<Input label="Password" type="password" placeholder="••••••••" />
<Input label="Disabled" value="Cannot edit" disabled />
<Input label="With helper" placeholder="Enter value" helperText="This field is optional." />`
const errorCode = `<Input label="Email" value="not-an-email" error="Please enter a valid email address." />`
const requiredCode = `<Input label="Full name" placeholder="Jane Smith" required />`

const props = [
  { prop: 'label',       type: 'string',   default: '—',       description: 'Visible label above the field' },
  { prop: 'type',        type: 'string',   default: '"text"',  description: 'HTML input type (text, password, email, number…)' },
  { prop: 'placeholder', type: 'string',   default: '—',       description: 'Placeholder text shown when empty' },
  { prop: 'value',       type: 'string',   default: '—',       description: 'Controlled value' },
  { prop: 'onChange',    type: 'function', default: '—',       description: 'Change handler' },
  { prop: 'helperText',  type: 'string',   default: '—',       description: 'Hint text shown below the field' },
  { prop: 'error',       type: 'string',   default: '—',       description: 'Error message — sets error styling' },
  { prop: 'disabled',    type: 'boolean',  default: 'false',   description: 'Prevents interaction' },
  { prop: 'required',    type: 'boolean',  default: 'false',   description: 'Marks field as required with asterisk' },
]

export default function InputPage() {
  const [val, setVal] = useState('')
  return (
    <>
      <h1 className="page-title">Input</h1>
      <p className="page-description">
        Single-line text field with label, helper text, and error state. Always use a visible
        label — never rely on placeholder text alone.
      </p>

      <h2 className="section-title">Basic</h2>
      <ComponentDemo code={basicCode} preview={
        <div style={{ maxWidth: 320 }}>
          <Input label="Email address" placeholder="you@example.com" value={val} onChange={e => setVal(e.target.value)} />
        </div>
      } />

      <h2 className="section-title">States</h2>
      <ComponentDemo code={statesCode} preview={
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 320 }}>
          <Input label="Username" value="jonnybennett" onChange={() => {}} />
          <Input label="Password" type="password" placeholder="••••••••" />
          <Input label="Disabled" value="Cannot edit" disabled />
          <Input label="With helper" placeholder="Enter value" helperText="This field is optional." />
        </div>
      } />

      <h2 className="section-title">Error</h2>
      <ComponentDemo code={errorCode} preview={
        <div style={{ maxWidth: 320 }}>
          <Input label="Email" value="not-an-email" onChange={() => {}} error="Please enter a valid email address." />
        </div>
      } />

      <h2 className="section-title">Required</h2>
      <ComponentDemo code={requiredCode} preview={
        <div style={{ maxWidth: 320 }}>
          <Input label="Full name" placeholder="Jane Smith" required />
        </div>
      } />

      <h2 className="section-title">Props</h2>
      <PropsTable rows={props} />
    </>
  )
}
