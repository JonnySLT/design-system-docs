import { useState } from 'react'
import ComponentDemo from '../../components/docs/ComponentDemo.jsx'
import PropsTable from '../../components/docs/PropsTable.jsx'
import Guidelines from '../../components/docs/Guidelines.jsx'
import Alert from '../../components/ui/Alert.jsx'

const typesCode = `<Alert type="info"    title="Info"    message="Your session will expire in 10 minutes." />
<Alert type="success" title="Success" message="Profile updated successfully." />
<Alert type="warning" title="Warning" message="You are approaching your storage limit." />
<Alert type="error"   title="Error"   message="Failed to save. Please try again." />`

const dismissCode = `<Alert
  type="success"
  title="File uploaded"
  message="marketing-deck.pdf was uploaded successfully."
  dismissible
/>`

const noIconCode = `<Alert type="info" title="Scheduled maintenance" message="The platform will be unavailable on Sunday from 2–4 AM UTC." showIcon={false} />`

const props = [
  { prop: 'type',        type: '"info" | "success" | "warning" | "error"', default: '"info"',   description: 'Determines icon and color treatment' },
  { prop: 'title',       type: 'string',                                   default: '—',        description: 'Bold heading text' },
  { prop: 'message',     type: 'string',                                   default: '—',        description: 'Supporting body text' },
  { prop: 'showIcon',    type: 'boolean',                                  default: 'true',     description: 'Shows the type-specific icon' },
  { prop: 'dismissible', type: 'boolean',                                  default: 'false',    description: 'Shows a close button to dismiss the alert' },
  { prop: 'onDismiss',   type: '() => void',                               default: '—',        description: 'Called when the alert is dismissed' },
]

export default function AlertPage() {
  const [dismissed, setDismissed] = useState(false)

  return (
    <>
      <h1 className="page-title">Alert</h1>
      <p className="page-description">
        Communicates important contextual information inline on a page. Alerts are not
        toasts — they are persistent and visible within the content flow.
      </p>

      <h2 className="section-title">Types</h2>
      <ComponentDemo
        code={typesCode}
        preview={<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Alert type="info"    title="Info"    message="Your session will expire in 10 minutes." />
          <Alert type="success" title="Success" message="Profile updated successfully." />
          <Alert type="warning" title="Warning" message="You are approaching your storage limit." />
          <Alert type="error"   title="Error"   message="Failed to save. Please try again." />
        </div>}
      />

      <h2 className="section-title">Dismissible</h2>
      <ComponentDemo
        code={dismissCode}
        preview={
          dismissed
            ? <p style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>Alert dismissed. Refresh to reset.</p>
            : <Alert
                type="success"
                title="File uploaded"
                message="marketing-deck.pdf was uploaded successfully."
                dismissible
                onDismiss={() => setDismissed(true)}
              />
        }
      />

      <h2 className="section-title">Without icon</h2>
      <ComponentDemo
        code={noIconCode}
        preview={<Alert type="info" title="Scheduled maintenance" message="The platform will be unavailable on Sunday from 2–4 AM UTC." showIcon={false} />}
      />

      <Guidelines
        accessibility={[
          'Use role="alert" (assertive) for urgent messages or "status" (polite) for non-urgent ones.',
          'Communicate type with the icon + text, never color alone.',
          'When dismissible, the close button needs an aria-label.',
        ]}
        dos={[
          'Use for persistent, inline messages tied to a section or form.',
          'Pair the type with a clear, actionable message.',
        ]}
        donts={[
          'Don’t use an alert for transient confirmation — use a Toast.',
          'Don’t convey severity with color only.',
        ]}
      />

      <h2 className="section-title">Props</h2>
      <PropsTable rows={props} />
    </>
  )
}
