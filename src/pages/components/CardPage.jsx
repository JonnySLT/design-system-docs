import ComponentDemo from '../../components/docs/ComponentDemo.jsx'
import PropsTable from '../../components/docs/PropsTable.jsx'
import Card, { CardHeader, CardFooter } from '../../components/ui/Card.jsx'
import Button from '../../components/ui/Button.jsx'
import Badge from '../../components/ui/Badge.jsx'

const basicCode = `<Card>
  <CardHeader title="Team members" description="Manage your workspace members." />
  <p style={{ color: 'var(--color-text-muted)', fontSize: 14 }}>3 of 5 seats used.</p>
  <CardFooter>
    <Button size="sm">Invite member</Button>
    <Button variant="ghost" size="sm">View all</Button>
  </CardFooter>
</Card>`

const hoverableCode = `<Card hoverable>
  <CardHeader title="Pro plan" description="$49 / month" action={<Badge variant="primary">Current</Badge>} />
  <p style={{ fontSize: 14, color: 'var(--color-text-muted)' }}>Unlimited projects, priority support, and advanced analytics.</p>
</Card>`

const props = [
  { prop: 'children',  type: 'ReactNode', default: '—',     description: 'Card content' },
  { prop: 'padding',   type: 'boolean',   default: 'true',  description: 'Adds 24px internal padding' },
  { prop: 'hoverable', type: 'boolean',   default: 'false', description: 'Adds hover lift and shadow' },
]

export default function CardPage() {
  return (
    <>
      <h1 className="page-title">Card</h1>
      <p className="page-description">
        A bordered container for grouping related content. Compose with{' '}
        <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>CardHeader</code> and{' '}
        <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>CardFooter</code> sub-components.
      </p>

      <h2 className="section-title">Basic</h2>
      <ComponentDemo code={basicCode} preview={
        <Card>
          <CardHeader title="Team members" description="Manage your workspace members." />
          <p style={{ color: 'var(--color-text-muted)', fontSize: 14, margin: 0 }}>3 of 5 seats used.</p>
          <CardFooter>
            <Button size="sm">Invite member</Button>
            <Button variant="ghost" size="sm">View all</Button>
          </CardFooter>
        </Card>
      } />

      <h2 className="section-title">Hoverable</h2>
      <ComponentDemo code={hoverableCode} preview={
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <Card hoverable>
            <CardHeader title="Starter" description="Free forever" action={<Badge>Current</Badge>} />
            <p style={{ fontSize: 14, color: 'var(--color-text-muted)', margin: 0 }}>Up to 3 projects and basic analytics.</p>
          </Card>
          <Card hoverable>
            <CardHeader title="Pro plan" description="$49 / month" action={<Badge variant="primary">Popular</Badge>} />
            <p style={{ fontSize: 14, color: 'var(--color-text-muted)', margin: 0 }}>Unlimited projects, priority support.</p>
          </Card>
        </div>
      } />

      <h2 className="section-title">Props</h2>
      <PropsTable rows={props} />
    </>
  )
}
