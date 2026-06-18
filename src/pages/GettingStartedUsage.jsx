import CodeBlock from '../components/docs/CodeBlock.jsx'

export default function GettingStartedUsage() {
  return (
    <>
      <h1 className="page-title">Usage</h1>
      <p className="page-description">
        Patterns and conventions for using the design system correctly across your product.
      </p>

      <h2 className="section-title">Importing components</h2>
      <p style={{ color: 'var(--color-text-muted)', fontSize: 14, marginBottom: 12 }}>
        Import individual components by name. Tree-shaking ensures only what you use is bundled.
      </p>
      <CodeBlock language="js" code={`import Button from '@your-org/design-system/Button'
import { Alert } from '@your-org/design-system'
import Badge from '@your-org/design-system/Badge'`} />

      <h2 className="section-title">Using design tokens</h2>
      <p style={{ color: 'var(--color-text-muted)', fontSize: 14, marginBottom: 12 }}>
        Always use CSS custom properties from <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>tokens.css</code> in your own styles.
        Never hardcode hex values or px sizes that exist in the token set.
      </p>
      <CodeBlock language="css" code={`.my-component {
  color: var(--color-text-default);
  background: var(--color-bg-subtle);
  padding: var(--spacing-lg) var(--spacing-2xl);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border-default);
}`} />

      <h2 className="section-title">Dark mode</h2>
      <p style={{ color: 'var(--color-text-muted)', fontSize: 14, marginBottom: 12 }}>
        Toggle dark mode by adding <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>data-theme="dark"</code> to the root element.
        All semantic tokens automatically resolve to their dark-mode values.
      </p>
      <CodeBlock language="js" code={`// Toggle dark mode
document.documentElement.setAttribute('data-theme', 'dark')

// Remove dark mode
document.documentElement.removeAttribute('data-theme')`} />

      <h2 className="section-title">Accessibility</h2>
      <p style={{ color: 'var(--color-text-muted)', fontSize: 14, marginBottom: 12 }}>
        All components ship with accessible defaults: keyboard navigation, ARIA attributes,
        focus rings, and WCAG AA contrast. A few guidelines for custom usage:
      </p>
      <ul style={{ color: 'var(--color-text-muted)', fontSize: 14, lineHeight: 1.8, paddingLeft: 20 }}>
        <li>Always provide a visible label for interactive elements — never rely on placeholder text alone.</li>
        <li>Use semantic HTML: buttons for actions, links for navigation.</li>
        <li>Don't remove focus outlines. The focus ring uses <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>focus-visible</code> so it only appears on keyboard navigation.</li>
        <li>Error states always combine color + icon + text — never color alone.</li>
      </ul>
    </>
  )
}
