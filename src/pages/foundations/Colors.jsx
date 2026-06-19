import TokenTable from '../../components/docs/TokenTable.jsx'

const indigo = [
  { name: 'indigo-50',  value: '#EEF2FF', type: 'color' },
  { name: 'indigo-100', value: '#E0E7FF', type: 'color' },
  { name: 'indigo-200', value: '#C7D2FE', type: 'color' },
  { name: 'indigo-300', value: '#A5B4FC', type: 'color' },
  { name: 'indigo-400', value: '#818CF8', type: 'color' },
  { name: 'indigo-500', value: '#6366F1', type: 'color' },
  { name: 'indigo-600', value: '#4F46E5', type: 'color' },
  { name: 'indigo-700', value: '#4338CA', type: 'color' },
  { name: 'indigo-800', value: '#3730A3', type: 'color' },
  { name: 'indigo-900', value: '#312E81', type: 'color' },
]

const slate = [
  { name: 'slate-50',  value: '#F8FAFC', type: 'color' },
  { name: 'slate-100', value: '#F1F5F9', type: 'color' },
  { name: 'slate-200', value: '#E2E8F0', type: 'color' },
  { name: 'slate-300', value: '#CBD5E1', type: 'color' },
  { name: 'slate-400', value: '#94A3B8', type: 'color' },
  { name: 'slate-500', value: '#64748B', type: 'color' },
  { name: 'slate-600', value: '#475569', type: 'color' },
  { name: 'slate-700', value: '#334155', type: 'color' },
  { name: 'slate-800', value: '#1E293B', type: 'color' },
  { name: 'slate-900', value: '#0F172A', type: 'color' },
]

const emerald = [
  { name: 'emerald-50',  value: '#ECFDF5', type: 'color' },
  { name: 'emerald-400', value: '#34D399', type: 'color' },
  { name: 'emerald-500', value: '#10B981', type: 'color' },
  { name: 'emerald-700', value: '#047857', type: 'color' },
]

const amber = [
  { name: 'amber-50',  value: '#FFFBEB', type: 'color' },
  { name: 'amber-400', value: '#FBBF24', type: 'color' },
  { name: 'amber-500', value: '#F59E0B', type: 'color' },
  { name: 'amber-700', value: '#B45309', type: 'color' },
]

const red = [
  { name: 'red-50',  value: '#FEF2F2', type: 'color' },
  { name: 'red-500', value: '#EF4444', type: 'color' },
  { name: 'red-600', value: '#DC2626', type: 'color' },
  { name: 'red-700', value: '#B91C1C', type: 'color' },
]

const base = [
  { name: 'white', value: '#FFFFFF', type: 'color' },
  { name: 'black', value: '#000000', type: 'color' },
]

const semanticBg = [
  { name: 'color-bg-default',  value: '#FFFFFF',  type: 'color', description: 'Page / app background' },
  { name: 'color-bg-subtle',   value: '#F8FAFC',  type: 'color', description: 'Sidebar, table rows, secondary surfaces' },
  { name: 'color-surface',     value: '#FFFFFF',  type: 'color', description: 'Card / panel surface' },
  { name: 'color-surface-raised', value: '#F1F5F9', type: 'color', description: 'Elevated surface (dropdown, tooltip bg)' },
]

const semanticText = [
  { name: 'color-text-default',    value: '#0F172A', type: 'color', description: 'Primary body text' },
  { name: 'color-text-muted',      value: '#475569', type: 'color', description: 'Secondary / supporting text' },
  { name: 'color-text-disabled',   value: '#94A3B8', type: 'color', description: 'Placeholder and disabled text' },
  { name: 'color-text-on-primary', value: '#FFFFFF', type: 'color', description: 'Text on brand-colored backgrounds' },
]

const semanticInteractive = [
  { name: 'color-interactive-primary',       value: '#4F46E5', type: 'color', description: 'Primary action (button, link)' },
  { name: 'color-interactive-primary-hover', value: '#4338CA', type: 'color', description: 'Hover state' },
  { name: 'color-interactive-primary-fg',    value: '#FFFFFF', type: 'color', description: 'Foreground on primary' },
  { name: 'color-interactive-primary-subtle',value: '#EEF2FF', type: 'color', description: 'Subtle tint (selected rows, focus rings)' },
  { name: 'color-interactive-neutral',       value: '#64748B', type: 'color', description: 'Secondary / ghost actions' },
]

const semanticBorder = [
  { name: 'color-border-default', value: '#E2E8F0', type: 'color', description: 'Default dividers and input outlines' },
  { name: 'color-border-strong',  value: '#CBD5E1', type: 'color', description: 'Stronger separation' },
  { name: 'color-border-focus',   value: '#4F46E5', type: 'color', description: 'Focus ring outline' },
]

const semanticFeedback = [
  { name: 'color-success-bg',     value: '#ECFDF5', type: 'color', description: 'Success background tint' },
  { name: 'color-success-border', value: '#10B981', type: 'color', description: 'Success border' },
  { name: 'color-success-text',   value: '#047857', type: 'color', description: 'Success text' },
  { name: 'color-warning-bg',     value: '#FFFBEB', type: 'color', description: 'Warning background tint' },
  { name: 'color-warning-border', value: '#F59E0B', type: 'color', description: 'Warning border' },
  { name: 'color-warning-text',   value: '#B45309', type: 'color', description: 'Warning text' },
  { name: 'color-error-bg',       value: '#FEF2F2', type: 'color', description: 'Error background tint' },
  { name: 'color-error-border',   value: '#DC2626', type: 'color', description: 'Error border' },
  { name: 'color-error-text',     value: '#B91C1C', type: 'color', description: 'Error text' },
  { name: 'color-info-bg',        value: '#EEF2FF', type: 'color', description: 'Info background tint' },
  { name: 'color-info-border',    value: '#4F46E5', type: 'color', description: 'Info border' },
  { name: 'color-info-text',      value: '#4338CA', type: 'color', description: 'Info text' },
]

function SemanticRow({ token }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '40px 260px 100px 1fr', gap: 12, alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--color-border-default)' }}>
      <div style={{ width: 28, height: 28, borderRadius: 6, background: `var(--${token.name}, ${token.value})`, border: '1px solid var(--color-border-default)', flexShrink: 0 }} />
      <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-interactive-primary)' }}>--{token.name}</code>
      <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-text-muted)' }}>{token.value}</code>
      <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>{token.description}</span>
    </div>
  )
}

export default function ColorsPage() {
  return (
    <>
      <h1 className="page-title">Colors</h1>
      <p className="page-description">
        Two layers: primitive tokens (raw values) and semantic tokens (intent-based aliases).
        Always use semantic tokens in components — never primitives directly.
      </p>

      <h2 className="section-title">Primitives</h2>
      <p style={{ color: 'var(--color-text-muted)', fontSize: 14, marginBottom: 16 }}>
        Raw color values. Used only as alias targets for semantic tokens.
      </p>

      <h3 style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: 8, marginTop: 24 }}>Indigo (brand)</h3>
      <TokenTable tokens={indigo} />

      <h3 style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: 8, marginTop: 24 }}>Slate (neutrals)</h3>
      <TokenTable tokens={slate} />

      <h3 style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: 8, marginTop: 24 }}>Emerald (success)</h3>
      <TokenTable tokens={emerald} />

      <h3 style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: 8, marginTop: 24 }}>Amber (warning)</h3>
      <TokenTable tokens={amber} />

      <h3 style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: 8, marginTop: 24 }}>Red (error)</h3>
      <TokenTable tokens={red} />

      <h3 style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: 8, marginTop: 24 }}>Base</h3>
      <TokenTable tokens={base} />

      <h2 className="section-title" style={{ marginTop: 48 }}>Semantic tokens</h2>
      <p style={{ color: 'var(--color-text-muted)', fontSize: 14, marginBottom: 24 }}>
        These alias primitives and switch automatically in Light/Dark mode. Only ever use these in components.
      </p>

      <h3 style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: 4, marginTop: 24 }}>Background</h3>
      {semanticBg.map(t => <SemanticRow key={t.name} token={t} />)}

      <h3 style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: 4, marginTop: 24 }}>Text</h3>
      {semanticText.map(t => <SemanticRow key={t.name} token={t} />)}

      <h3 style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: 4, marginTop: 24 }}>Interactive</h3>
      {semanticInteractive.map(t => <SemanticRow key={t.name} token={t} />)}

      <h3 style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: 4, marginTop: 24 }}>Border</h3>
      {semanticBorder.map(t => <SemanticRow key={t.name} token={t} />)}

      <h3 style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: 4, marginTop: 24 }}>Feedback</h3>
      {semanticFeedback.map(t => <SemanticRow key={t.name} token={t} />)}
    </>
  )
}
