import { useState } from 'react'
import ComponentDemo from '../../components/docs/ComponentDemo.jsx'
import PropsTable from '../../components/docs/PropsTable.jsx'
import Modal from '../../components/ui/Modal.jsx'
import Button from '../../components/ui/Button.jsx'

const basicCode = `const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>Open modal</Button>

<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Delete project"
  footer={
    <>
      <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
      <Button variant="destructive">Delete</Button>
    </>
  }
>
  <p>Are you sure? This action cannot be undone. All data associated with this project will be permanently removed.</p>
</Modal>`

const props = [
  { prop: 'open',     type: 'boolean',   default: 'false', description: 'Controls visibility' },
  { prop: 'onClose',  type: 'function',  default: '—',     description: 'Called when Escape or the backdrop is clicked' },
  { prop: 'title',    type: 'string',    default: '—',     description: 'Modal heading' },
  { prop: 'children', type: 'ReactNode', default: '—',     description: 'Body content' },
  { prop: 'footer',   type: 'ReactNode', default: '—',     description: 'Action buttons rendered in the footer' },
  { prop: 'size',     type: '"sm" | "md" | "lg"', default: '"md"', description: 'Max-width of the modal panel' },
]

export default function ModalPage() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <h1 className="page-title">Modal</h1>
      <p className="page-description">
        A dialog that blocks the page and requires user action. Use sparingly — only for
        decisions that need immediate attention or workflows that must be completed in context.
        Closes on Escape and backdrop click.
      </p>

      <h2 className="section-title">Basic</h2>
      <ComponentDemo code={basicCode} preview={
        <div style={{ display: 'flex', gap: 12 }}>
          <Button onClick={() => setOpen(true)}>Open modal</Button>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            title="Delete project"
            footer={
              <>
                <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
                <Button variant="destructive" onClick={() => setOpen(false)}>Delete</Button>
              </>
            }
          >
            <p style={{ margin: 0 }}>Are you sure? This action cannot be undone. All data associated with this project will be permanently removed.</p>
          </Modal>
        </div>
      } />

      <h2 className="section-title">Props</h2>
      <PropsTable rows={props} />
    </>
  )
}
