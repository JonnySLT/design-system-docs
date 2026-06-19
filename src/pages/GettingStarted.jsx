import CodeBlock from '../components/docs/CodeBlock.jsx'

export default function GettingStarted() {
  return (
    <>
      <h1 className="page-title">Installation</h1>
      <p className="page-description">
        Get the design system set up in your project. The package ships the compiled
        components and the CSS token file.
      </p>

      <h2 className="section-title">1. Install the package</h2>
      <CodeBlock language="bash" code={`npm install @your-org/design-system`} />

      <h2 className="section-title">2. Import the tokens</h2>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: 16, fontSize: 14 }}>
        Add the token CSS file at the root of your app. This provides all CSS custom
        properties used by every component.
      </p>
      <CodeBlock language="js" code={`// In your root file (e.g. main.jsx or App.jsx)
import '@your-org/design-system/tokens.css'`} />

      <h2 className="section-title">3. Use a component</h2>
      <CodeBlock language="jsx" code={`import { Button } from '@your-org/design-system'

export default function MyPage() {
  return <Button variant="primary">Save changes</Button>
}`} />
    </>
  )
}
