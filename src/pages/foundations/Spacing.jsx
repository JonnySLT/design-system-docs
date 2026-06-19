export default function SpacingPage() {
  const scale = [
    { name: 'xs',  value: 4 },
    { name: 'sm',  value: 8 },
    { name: 'md',  value: 12 },
    { name: 'lg',  value: 16 },
    { name: 'xl',  value: 20 },
    { name: '2xl', value: 24 },
    { name: '3xl', value: 32 },
    { name: '4xl', value: 40 },
    { name: '5xl', value: 48 },
    { name: '6xl', value: 64 },
    { name: '7xl', value: 80 },
  ]

  const radii = [
    { name: 'none', value: '0px',    px: 0 },
    { name: 'sm',   value: '4px',    px: 4 },
    { name: 'md',   value: '6px',    px: 6 },
    { name: 'lg',   value: '8px',    px: 8 },
    { name: 'xl',   value: '12px',   px: 12 },
    { name: 'full', value: '9999px', px: 9999 },
  ]

  const shadows = [
    { name: 'xs', label: 'xs', y: 1,  blur: 2,  token: '--shadow-xs' },
    { name: 'sm', label: 'sm', y: 1,  blur: 3,  token: '--shadow-sm' },
    { name: 'md', label: 'md', y: 4,  blur: 6,  token: '--shadow-md' },
    { name: 'lg', label: 'lg', y: 10, blur: 15, token: '--shadow-lg' },
    { name: 'xl', label: 'xl', y: 20, blur: 25, token: '--shadow-xl' },
  ]

  return (
    <>
      <h1 className="page-title">Spacing</h1>
      <p className="page-description">
        All spacing uses a base-4 scale. Never use values outside this scale — arbitrary
        spacing like 13px or 22px breaks visual consistency.
      </p>

      <h2 className="section-title">Spacing scale</h2>
      <p style={{ color: 'var(--color-text-muted)', fontSize: 14, marginBottom: 16 }}>
        4px base grid. Apply via <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>spacing/*</code> variables in padding and gap properties.
      </p>
      <div>
        {scale.map((s) => (
          <div
            key={s.name}
            style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '10px 0', borderBottom: '1px solid var(--color-border-default)' }}
          >
            <div style={{ width: 120 }}>
              <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-interactive-primary)' }}>
                --spacing-{s.name}
              </code>
            </div>
            <div style={{ height: 16, width: s.value * 2, background: 'var(--color-interactive-primary)', borderRadius: 3, flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-text-muted)' }}>{s.value}px</span>
          </div>
        ))}
      </div>

      <h2 className="section-title" style={{ marginTop: 48 }}>Border radius</h2>
      <p style={{ color: 'var(--color-text-muted)', fontSize: 14, marginBottom: 24 }}>
        Six radius steps from sharp to full pill shape.
      </p>
      <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', padding: '24px', background: 'var(--color-bg-subtle)', borderRadius: 8 }}>
        {radii.map((r) => (
          <div key={r.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 72, height: 72,
              background: 'var(--color-interactive-primary)',
              borderRadius: Math.min(r.px, 36),
            }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-default)' }}>{r.name}</div>
              <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', marginTop: 2 }}>{r.value}</div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title" style={{ marginTop: 48 }}>Elevation</h2>
      <p style={{ color: 'var(--color-text-muted)', fontSize: 14, marginBottom: 24 }}>
        Five shadow levels from xs (barely lifted) to xl (overlay-level). Applied as CSS shadow tokens.
      </p>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        {shadows.map((s) => (
          <div key={s.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <div style={{
              width: 120, height: 80,
              background: 'var(--color-surface)',
              borderRadius: 8,
              boxShadow: `var(${s.token})`,
              border: '1px solid var(--color-border-default)',
            }} />
            <div style={{ textAlign: 'center' }}>
              <code style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--color-interactive-primary)', display: 'block' }}>{s.token}</code>
              <span style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>y:{s.y} blur:{s.blur}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
