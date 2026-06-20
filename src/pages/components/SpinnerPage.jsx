import ComponentDemo from '../../components/docs/ComponentDemo.jsx'
import PropsTable from '../../components/docs/PropsTable.jsx'
import Guidelines from '../../components/docs/Guidelines.jsx'
import Spinner from '../../components/ui/Spinner.jsx'

const sizesCode = `<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />`

const colorsCode = `<Spinner color="primary" />
<Spinner color="muted" />`

const props = [
  { prop: 'size',  type: '"sm" | "md" | "lg"',    default: '"md"',     description: '16px / 24px / 36px diameter' },
  { prop: 'color', type: '"primary" | "muted"',   default: '"primary"', description: 'Brand blue or muted grey' },
]

export default function SpinnerPage() {
  return (
    <>
      <h1 className="page-title">Spinner</h1>
      <p className="page-description">
        Indicates loading or processing state. Use inline within buttons (via the{' '}
        <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>loading</code>{' '}
        prop) or as a standalone page/section loader.
      </p>

      <h2 className="section-title">Sizes</h2>
      <ComponentDemo
        code={sizesCode}
        preview={<div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </div>}
      />

      <h2 className="section-title">Colors</h2>
      <ComponentDemo
        code={colorsCode}
        preview={<div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <Spinner color="primary" />
          <Spinner color="muted" />
        </div>}
      />

      <Guidelines
        accessibility={[
          'Pair the spinner with text or an aria-label / aria-live region so the loading state is announced.',
          'For in-button loading, keep the button’s accessible name and disable it while busy.',
        ]}
        dos={[
          'Use for short, indeterminate waits.',
          'Show it where the result will appear (in place), not only globally.',
        ]}
        donts={[
          'Don’t use a spinner for long or measurable progress — use a progress bar.',
          'Don’t block the whole screen for a small background task.',
        ]}
      />

      <h2 className="section-title">Props</h2>
      <PropsTable rows={props} />
    </>
  )
}
