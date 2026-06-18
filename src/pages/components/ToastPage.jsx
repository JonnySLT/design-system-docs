import ComponentDemo from '../../components/docs/ComponentDemo.jsx'
import PropsTable from '../../components/docs/PropsTable.jsx'
import { ToastContainer, useToast } from '../../components/ui/Toast.jsx'
import Button from '../../components/ui/Button.jsx'

const basicCode = `const { toasts, dismiss, toast } = useToast()

<ToastContainer toasts={toasts} onDismiss={dismiss} />

<Button onClick={() => toast('Profile saved successfully.', 'success')}>
  Show toast
</Button>`

function ToastDemo() {
  const { toasts, dismiss, toast } = useToast()
  return (
    <>
      <ToastContainer toasts={toasts} onDismiss={dismiss} />
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Button size="sm" onClick={() => toast('Changes saved.', 'success')}>Success</Button>
        <Button size="sm" variant="secondary" onClick={() => toast('Something went wrong.', 'error')}>Error</Button>
        <Button size="sm" variant="secondary" onClick={() => toast('Storage is almost full.', 'warning')}>Warning</Button>
        <Button size="sm" variant="ghost" onClick={() => toast('New comment on your post.')}>Default</Button>
      </div>
    </>
  )
}

const props = [
  { prop: 'message',  type: 'string',                           default: '—',       description: 'Notification message text' },
  { prop: 'type',     type: '"default" | "success" | "error" | "warning"', default: '"default"', description: 'Sets icon and accent color' },
  { prop: 'duration', type: 'number',                           default: '3000',    description: 'Auto-dismiss delay in milliseconds' },
]

export default function ToastPage() {
  return (
    <>
      <h1 className="page-title">Toast</h1>
      <p className="page-description">
        Temporary notification messages shown in the bottom-right corner.
        Use the <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>useToast</code> hook to
        trigger toasts from anywhere in your component tree.
      </p>

      <h2 className="section-title">Interactive demo</h2>
      <ComponentDemo code={basicCode} preview={<ToastDemo />} />

      <h2 className="section-title">Toast options</h2>
      <PropsTable rows={props} />
    </>
  )
}
