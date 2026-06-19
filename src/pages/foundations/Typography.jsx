export default function TypographyPage() {
  const styles = [
    { name: 'Display/Large',      size: 64, weight: 800, lineHeight: '72px', sample: 'Aa Bb Cc' },
    { name: 'Display/Medium',     size: 48, weight: 800, lineHeight: '56px', sample: 'Aa Bb Cc' },
    { name: 'Display/Small',      size: 36, weight: 700, lineHeight: '44px', sample: 'The quick brown fox' },
    { name: 'Heading/1',          size: 30, weight: 700, lineHeight: '38px', sample: 'The quick brown fox' },
    { name: 'Heading/2',          size: 24, weight: 600, lineHeight: '32px', sample: 'The quick brown fox jumps over' },
    { name: 'Heading/3',          size: 20, weight: 600, lineHeight: '28px', sample: 'The quick brown fox jumps over the lazy dog' },
    { name: 'Heading/4',          size: 18, weight: 600, lineHeight: '26px', sample: 'The quick brown fox jumps over the lazy dog' },
    { name: 'Body/Large',         size: 16, weight: 400, lineHeight: '24px', sample: 'The quick brown fox jumps over the lazy dog' },
    { name: 'Body/Large Strong',  size: 16, weight: 500, lineHeight: '24px', sample: 'The quick brown fox jumps over the lazy dog' },
    { name: 'Body/Medium',        size: 14, weight: 400, lineHeight: '20px', sample: 'The quick brown fox jumps over the lazy dog' },
    { name: 'Body/Medium Strong', size: 14, weight: 500, lineHeight: '20px', sample: 'The quick brown fox jumps over the lazy dog' },
    { name: 'Body/Small',         size: 12, weight: 400, lineHeight: '18px', sample: 'Caption text, helper text, and supplementary information.' },
    { name: 'Label/Large',        size: 14, weight: 500, lineHeight: '20px', sample: 'Button labels, form labels, nav items' },
    { name: 'Label/Small',        size: 12, weight: 500, lineHeight: '18px', sample: 'Tags, badges, timestamps', letterSpacing: '0.5px' },
    { name: 'Code/Inline',        size: 14, weight: 400, lineHeight: '20px', sample: 'const value = token.resolve()', mono: true },
  ]

  return (
    <>
      <h1 className="page-title">Typography</h1>
      <p className="page-description">
        15 text styles across Display, Heading, Body, Label, and Code categories.
        Inter for UI text, JetBrains Mono for code. Each specimen renders at its actual size.
      </p>
      <h2 className="section-title">Type scale</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {styles.map((s) => (
          <div
            key={s.name}
            style={{
              display: 'grid',
              gridTemplateColumns: '200px 1fr',
              gap: 24,
              padding: '20px 0',
              borderBottom: '1px solid var(--color-border-default)',
              alignItems: 'center',
            }}
          >
            <div style={{ flexShrink: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: 3 }}>{s.name}</div>
              <div style={{ fontSize: 11, color: 'var(--color-text-disabled)', fontFamily: 'var(--font-mono)' }}>
                {s.size}px / {s.lineHeight}{s.letterSpacing ? ` / +${s.letterSpacing}` : ''}
                {' · '}{s.weight}
              </div>
            </div>
            <div
              style={{
                fontSize: s.size,
                fontWeight: s.weight,
                lineHeight: s.lineHeight,
                letterSpacing: s.letterSpacing || 'normal',
                color: 'var(--color-text-default)',
                fontFamily: s.mono ? 'var(--font-mono)' : 'var(--font-sans)',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: s.size > 20 ? 'nowrap' : 'normal',
              }}
            >
              {s.sample}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
