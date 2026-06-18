import ComponentDemo from '../../components/docs/ComponentDemo.jsx'
import PropsTable from '../../components/docs/PropsTable.jsx'
import Tooltip from '../../components/ui/Tooltip.jsx'
import Button from '../../components/ui/Button.jsx'

const basicCode = `<Tooltip content="Save your changes">
  <Button size="sm">Save</Button>
</Tooltip>`

const placementsCode = `<Tooltip content="Above" placement="top"><Button size="sm" variant="secondary">Top</Button></Tooltip>
<Tooltip content="Below" placement="bottom"><Button size="sm" variant="secondary">Bottom</Button></Tooltip>
<Tooltip content="Left"  placement="left"><Button size="sm" variant="secondary">Left</Button></Tooltip>
<Tooltip content="Right" placement="right"><Button size="sm" variant="secondary">Right</Button></Tooltip>`

const props = [
  { prop: 'content',   type: 'string',                              default: '—',     description: 'Tooltip text shown on hover/focus' },
  { prop: 'placement', type: '"top" | "bottom" | "left" | "right"', default: '"top"', description: 'Position relative to the trigger' },
  { prop: 'children',  type: 'ReactNode',                          default: '—',     description: 'The element that triggers the tooltip' },
]

export default function TooltipPage() {
  return (
    <>
      <h1 className="page-title">Tooltip</h1>
      <p className="page-description">
        Contextual text that appears on hover or focus. Use to clarify icon buttons or add
        extra context — never to convey critical information, since tooltips are invisible on touch devices.
      </p>

      <h2 className="section-title">Basic</h2>
      <ComponentDemo code={basicCode} preview={
        <div style={{ padding: 32, display: 'flex', justifyContent: 'center' }}>
          <Tooltip content="Save your changes">
            <Button size="sm">Hover me</Button>
          </Tooltip>
        </div>
      } />

      <h2 className="section-title">Placements</h2>
      <ComponentDemo code={placementsCode} preview={
        <div style={{ padding: 40, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Tooltip content="Above" placement="top"><Button size="sm" variant="secondary">Top</Button></Tooltip>
          <Tooltip content="Below" placement="bottom"><Button size="sm" variant="secondary">Bottom</Button></Tooltip>
          <Tooltip content="To the left" placement="left"><Button size="sm" variant="secondary">Left</Button></Tooltip>
          <Tooltip content="To the right" placement="right"><Button size="sm" variant="secondary">Right</Button></Tooltip>
        </div>
      } />

      <h2 className="section-title">Props</h2>
      <PropsTable rows={props} />
    </>
  )
}
