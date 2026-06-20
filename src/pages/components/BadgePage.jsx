import ComponentDemo from '../../components/docs/ComponentDemo.jsx'
import PropsTable from '../../components/docs/PropsTable.jsx'
import Guidelines from '../../components/docs/Guidelines.jsx'
import Badge from '../../components/ui/Badge.jsx'

const variantsCode = `<Badge variant="default">Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>`

const sizesCode = `<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>`

const props = [
  { prop: 'variant', type: '"default" | "primary" | "success" | "warning" | "error"', default: '"default"', description: 'Color and semantic meaning of the badge' },
  { prop: 'size',    type: '"sm" | "md" | "lg"',                                      default: '"md"',      description: 'Font and padding scale' },
  { prop: 'children', type: 'ReactNode',                                               default: '—',         description: 'Badge label content' },
]

export default function BadgePage() {
  return (
    <>
      <h1 className="page-title">Badge</h1>
      <p className="page-description">
        Labels and status indicators. Use to surface metadata, categories, or states
        without disrupting the content flow.
      </p>

      <h2 className="section-title">Variants</h2>
      <ComponentDemo
        code={variantsCode}
        preview={<div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <Badge variant="default">Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
        </div>}
      />

      <h2 className="section-title">Sizes</h2>
      <ComponentDemo
        code={sizesCode}
        preview={<div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium</Badge>
          <Badge size="lg">Large</Badge>
        </div>}
      />

      <Guidelines
        accessibility={[
          'A badge is text — make its meaning clear from the label, not color alone.',
          'If it conveys a live count (e.g. unread), expose that to assistive tech via an aria-label on the parent control.',
        ]}
        dos={[
          'Use to label status or categorize an item with a short word.',
          'Match the variant to meaning (success / warning / error).',
        ]}
        donts={[
          'Don’t put long text or interactive elements inside a badge.',
          'Don’t use a semantic color decoratively — it implies meaning.',
        ]}
      />

      <h2 className="section-title">Props</h2>
      <PropsTable rows={props} />
    </>
  )
}
