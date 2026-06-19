import TokenTable from '../../components/docs/TokenTable.jsx'

const colorTokens = [
  { name: 'color-interactive-primary',        value: '#4F46E5', type: 'color', description: 'Primary brand color — buttons, links, focus rings' },
  { name: 'color-interactive-primary-hover',  value: '#4338CA', type: 'color', description: 'Hover state for primary interactive elements' },
  { name: 'color-interactive-primary-subtle', value: '#EEF2FF', type: 'color', description: 'Tinted background for primary elements' },
  { name: 'color-text-default',               value: '#0F172A', type: 'color', description: 'Primary body text' },
  { name: 'color-text-muted',                 value: '#475569', type: 'color', description: 'Secondary/supporting text' },
  { name: 'color-text-disabled',              value: '#94A3B8', type: 'color', description: 'Disabled state text' },
  { name: 'color-bg-default',                 value: '#FFFFFF', type: 'color', description: 'Default page background' },
  { name: 'color-bg-subtle',                  value: '#F8FAFC', type: 'color', description: 'Subtle background for sections, tables' },
  { name: 'color-border-default',             value: '#E2E8F0', type: 'color', description: 'Default border color' },
  { name: 'color-border-strong',              value: '#CBD5E1', type: 'color', description: 'Stronger border for emphasis' },
  { name: 'color-success-bg',                 value: '#ECFDF5', type: 'color' },
  { name: 'color-success-border',             value: '#10B981', type: 'color' },
  { name: 'color-warning-bg',                 value: '#FFFBEB', type: 'color' },
  { name: 'color-warning-border',             value: '#F59E0B', type: 'color' },
  { name: 'color-error-bg',                   value: '#FEF2F2', type: 'color' },
  { name: 'color-error-border',               value: '#DC2626', type: 'color' },
]

const spacingTokens = [
  { name: 'spacing-xs',  value: '4px',  type: 'spacing' },
  { name: 'spacing-sm',  value: '8px',  type: 'spacing' },
  { name: 'spacing-md',  value: '12px', type: 'spacing' },
  { name: 'spacing-lg',  value: '16px', type: 'spacing' },
  { name: 'spacing-xl',  value: '20px', type: 'spacing' },
  { name: 'spacing-2xl', value: '24px', type: 'spacing' },
  { name: 'spacing-3xl', value: '32px', type: 'spacing' },
  { name: 'spacing-4xl', value: '40px', type: 'spacing' },
  { name: 'spacing-5xl', value: '48px', type: 'spacing' },
]

const radiusTokens = [
  { name: 'radius-none', value: '0px',    type: 'spacing' },
  { name: 'radius-sm',   value: '4px',    type: 'spacing' },
  { name: 'radius-md',   value: '6px',    type: 'spacing' },
  { name: 'radius-lg',   value: '8px',    type: 'spacing' },
  { name: 'radius-xl',   value: '12px',   type: 'spacing' },
  { name: 'radius-full', value: '9999px', type: 'spacing' },
]

function SpacingRow({ name, value }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '8px 0', borderBottom: '1px solid var(--color-border-default)' }}>
      <div style={{ width: 140 }}>
        <span className="prop-name">--{name}</span>
      </div>
      <div
        style={{
          height: 24,
          width: parseInt(value) * 2,
          minWidth: 4,
          background: 'var(--color-interactive-primary)',
          borderRadius: 3,
          flexShrink: 0,
        }}
      />
      <span style={{ fontSize: 12, color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>{value}</span>
    </div>
  )
}

export default function TokensPage() {
  return (
    <>
      <h1 className="page-title">Design Tokens</h1>
      <p className="page-description">
        All visual properties — colors, spacing, radius, typography — are defined as
        CSS custom properties in{' '}
        <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>src/tokens/tokens.css</code>.
        They mirror the variables in the Claude Design System Figma file and are maintained directly in that file.
      </p>

      <h2 className="section-title">Color tokens</h2>
      <TokenTable tokens={colorTokens} />

      <h2 className="section-title">Spacing tokens</h2>
      <div style={{ marginBottom: 32 }}>
        {spacingTokens.map(t => <SpacingRow key={t.name} name={t.name} value={t.value} />)}
      </div>

      <h2 className="section-title">Border radius</h2>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 32 }}>
        {radiusTokens.map(t => (
          <div key={t.name} style={{ textAlign: 'center' }}>
            <div style={{
              width: 64, height: 64,
              background: 'var(--color-interactive-primary-subtle)',
              border: '1px solid var(--color-interactive-primary)',
              borderRadius: t.value,
              marginBottom: 8,
            }} />
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-text-muted)' }}>
              {t.name.replace('radius-', '')}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-text-disabled)' }}>
              {t.value}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
