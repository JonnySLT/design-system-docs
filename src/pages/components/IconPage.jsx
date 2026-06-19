import { useMemo, useState } from 'react'
import { icons } from '../../components/ui/icons.js'

export default function IconPage() {
  const [query, setQuery] = useState('')
  const [copied, setCopied] = useState(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return icons
    return icons.filter(
      (icon) =>
        icon.slug.includes(q) || icon.name.toLowerCase().includes(q),
    )
  }, [query])

  const handleCopy = async (slug) => {
    try {
      await navigator.clipboard.writeText(slug)
      setCopied(slug)
      setTimeout(() => setCopied((c) => (c === slug ? null : c)), 1200)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <>
      <h1 className="page-title">Icons</h1>
      <p className="page-description">
        The complete icon set — {icons.length} icons, exported directly from the
        Acme Corp DS Figma library. Each icon is a 20&times;20 SVG that inherits
        the current text color via <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>currentColor</code>.
        Search by name, then click an icon to copy its slug.
      </p>

      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search icons…"
        aria-label="Search icons"
        style={{
          width: '100%',
          boxSizing: 'border-box',
          padding: '10px 14px',
          fontSize: 14,
          fontFamily: 'var(--font-sans)',
          color: 'var(--color-text-default)',
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border-default)',
          borderRadius: 8,
          marginBottom: 24,
        }}
      />

      <p style={{ fontSize: 13, color: 'var(--color-text-muted)', margin: '0 0 16px' }}>
        {filtered.length} {filtered.length === 1 ? 'icon' : 'icons'}
      </p>

      {filtered.length === 0 ? (
        <p style={{ color: 'var(--color-text-muted)' }}>
          No icons match “{query}”.
        </p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            gap: 12,
          }}
        >
          {filtered.map((icon) => (
            <button
              key={icon.slug}
              type="button"
              onClick={() => handleCopy(icon.slug)}
              title={`Copy "${icon.slug}"`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 10,
                padding: '18px 8px 14px',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border-default)',
                borderRadius: 8,
                cursor: 'pointer',
                color: 'var(--color-text-default)',
                font: 'inherit',
                textAlign: 'center',
              }}
            >
              <span
                aria-hidden="true"
                style={{ display: 'flex', width: 28, height: 28, color: 'var(--color-text-default)' }}
                dangerouslySetInnerHTML={{ __html: icon.svg }}
              />
              <span
                style={{
                  fontSize: 11,
                  lineHeight: 1.3,
                  color: copied === icon.slug ? 'var(--color-interactive-primary)' : 'var(--color-text-muted)',
                  fontFamily: 'var(--font-mono)',
                  wordBreak: 'break-word',
                }}
              >
                {copied === icon.slug ? 'Copied!' : icon.slug}
              </span>
            </button>
          ))}
        </div>
      )}
    </>
  )
}
