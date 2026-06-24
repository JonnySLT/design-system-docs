import CodeBlock from '../components/docs/CodeBlock.jsx'

const stackTable = [
  ['React 18', 'Components — plain function components, default exports'],
  ['Vite', 'Dev server and production build'],
  ['Vanilla CSS', 'One .css file per component, styled with CSS custom properties (design tokens)'],
  ['React Router (HashRouter)', 'Docs site navigation only — not needed to use a component'],
]

export default function GettingStarted() {
  return (
    <>
      <h1 className="page-title">Installation</h1>
      <p className="page-description">
        Get up and running in minutes. This design system is plain React + vanilla CSS —
        no TypeScript, no Tailwind, no CSS-in-JS. If you know React and CSS, you already
        know this codebase.
      </p>

      <h2 className="section-title">What it's built with</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, marginBottom: 32 }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '8px 12px', borderBottom: '1px solid var(--color-border-default)', color: 'var(--color-text-muted)', fontWeight: 600 }}>Tool</th>
            <th style={{ textAlign: 'left', padding: '8px 12px', borderBottom: '1px solid var(--color-border-default)', color: 'var(--color-text-muted)', fontWeight: 600 }}>Used for</th>
          </tr>
        </thead>
        <tbody>
          {stackTable.map(([tool, desc], i) => (
            <tr key={i}>
              <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--color-border-subtle)', color: 'var(--color-text-primary)', fontFamily: 'var(--font-mono)', fontSize: 13, whiteSpace: 'nowrap' }}>{tool}</td>
              <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--color-border-subtle)', color: 'var(--color-text-muted)' }}>{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="section-title">Run it locally</h2>
      <CodeBlock language="bash" code={`git clone https://github.com/JonnySLT/design-system-demo.git
cd design-system-demo
npm install
npm run dev      # open the localhost URL it prints`} />
      <p style={{ color: 'var(--color-text-muted)', fontSize: 14, marginTop: 12, marginBottom: 32 }}>
        <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>npm run build</code> — production build into <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>dist/</code>&nbsp;&nbsp;·&nbsp;&nbsp;
        <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>npm run preview</code> — serve the built site locally
      </p>

      <h2 className="section-title">Using a component</h2>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: 16, fontSize: 14 }}>
        Each component is a single <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>.jsx</code> file
        in <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>src/components/ui/</code> paired with
        a matching <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>.css</code> file.
        Two steps to use one in your own app:
      </p>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: 8, fontSize: 14, fontWeight: 600 }}>1. Import the tokens once at your app's entry point</p>
      <CodeBlock language="js" code={`// main.jsx or App.jsx — do this once
import './tokens/tokens.css'`} />
      <p style={{ color: 'var(--color-text-muted)', margin: '16px 0 8px', fontSize: 14, fontWeight: 600 }}>2. Import and use the component</p>
      <CodeBlock language="jsx" code={`import Button from './components/ui/Button.jsx'

export default function Example() {
  return (
    <Button variant="primary" onClick={() => alert('Saved!')}>
      Save changes
    </Button>
  )
}`} />

      <h2 className="section-title">Anatomy of a component</h2>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: 16, fontSize: 14 }}>
        Every component follows the same pattern: a function component that renders an element
        with <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>ds-*</code> class names,
        paired with a CSS file that styles those classes using tokens — never hardcoded colors or sizes.
        Here's <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>Badge</code> in full:
      </p>
      <CodeBlock language="jsx" code={`// src/components/ui/Badge.jsx
import './Badge.css'

export default function Badge({ children, variant = 'default', size = 'md' }) {
  return (
    <span className={\`ds-badge ds-badge--\${variant} ds-badge--\${size}\`}>
      {children}
    </span>
  )
}`} />
      <CodeBlock language="css" code={`/* src/components/ui/Badge.css — colors and spacing come from tokens */
.ds-badge {
  display: inline-flex;
  border-radius: var(--badge-radius);
  font-family: var(--font-sans);
  font-weight: var(--font-weight-medium);
}
.ds-badge--md      { font-size: 12px; padding: 2px 8px; }
.ds-badge--primary { background: var(--color-interactive-primary-subtle); color: var(--color-interactive-primary); }
.ds-badge--success { background: var(--color-success-bg);  color: var(--color-success-text); }`} />

      <h2 className="section-title">Three conventions to know</h2>
      <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14, color: 'var(--color-text-muted)', marginBottom: 32 }}>
        <li><strong style={{ color: 'var(--color-text-primary)' }}>One default-exported function component per file</strong> — props have sensible defaults so the simplest usage requires no props at all.</li>
        <li><strong style={{ color: 'var(--color-text-primary)' }}>Class names follow <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>ds-{'{component}'}</code> + modifiers <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>ds-{'{component}'}--{'{variant}'}</code></strong> — e.g. <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>ds-badge ds-badge--primary ds-badge--md</code>.</li>
        <li><strong style={{ color: 'var(--color-text-primary)' }}>Always style with <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>var(--token)</code></strong> — never a raw hex or px value for color, spacing, or radius. All available tokens are listed on the <a href="#/foundations/tokens" style={{ color: 'var(--color-interactive-primary)' }}>Tokens</a> page.</li>
      </ol>
    </>
  )
}
