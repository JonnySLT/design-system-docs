import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className="home-hero">
        <div className="home-hero-tag">Design System v1.0</div>
        <h1>Design and code that <span>stay in sync</span></h1>
        <p>
          A single source of truth for designers and developers — where decisions made in Figma
          automatically flow to code, drift gets caught before it ships, and the whole system
          documents itself.
        </p>
      </div>

      <div className="home-cards">
        <Link to="/foundations/tokens" className="home-card">
          <div className="home-card-icon">🎨</div>
          <h3>Design Tokens</h3>
          <p>Colors, spacing, typography, and radius — all defined in Figma and mirrored in code.</p>
        </Link>
        <Link to="/components/button" className="home-card">
          <div className="home-card-icon">⚡</div>
          <h3>Components</h3>
          <p>19 production-ready components with live demos, props docs, and copy-ready code.</p>
        </Link>
        <Link to="/getting-started/installation" className="home-card">
          <div className="home-card-icon">🚀</div>
          <h3>Get Started</h3>
          <p>Import the tokens, drop in a component, and ship in minutes.</p>
        </Link>
      </div>

      <div className="home-section">
        <div className="home-section-label">How it works</div>
        <h2 className="home-section-heading">One source of truth, two teams, no drift</h2>
        <p className="home-section-subheading">
          Most design systems break down at the handoff — designers update something in Figma,
          developers don't hear about it, and the product quietly diverges. This system closes
          that gap with a workflow where changes in either direction are tracked, checked, and logged automatically.
        </p>
        <div className="home-steps">
          <div className="home-step">
            <div className="home-step-number">1</div>
            <h3>Designers work in Figma</h3>
            <p>Colors, spacing, and typography live as structured variables in a single Figma file — not scattered annotations or static specs. One file, no confusion about which is current.</p>
          </div>
          <div className="home-step">
            <div className="home-step-number">2</div>
            <h3>Code mirrors the design</h3>
            <p>Every design decision flows directly into the codebase as a token. Update a color in Figma, and it updates everywhere it's used in the product — buttons, text, backgrounds, all of it.</p>
          </div>
          <div className="home-step">
            <div className="home-step-number">3</div>
            <h3>Drift gets caught automatically</h3>
            <p>Five automated checks run on every code change. If anything diverges from the design — a hardcoded value, a stale token, a component that looks different from its Figma counterpart — the build flags it before it reaches users.</p>
          </div>
          <div className="home-step">
            <div className="home-step-number">4</div>
            <h3>The system documents itself</h3>
            <p>Every change — whether made in Figma or code — is logged automatically with a date, category, and description. No one has to maintain a "what changed" document. The changelog writes itself.</p>
          </div>
        </div>
      </div>

      <div className="home-section">
        <div className="home-section-label">Why it matters</div>
        <h2 className="home-section-heading">Built for the whole team, not just engineers</h2>
        <p className="home-section-subheading">
          A design system is only useful if everyone can trust it. This one is built so that
          designers, developers, and the people who manage them all get something real out of it.
        </p>
        <div className="home-benefits">
          <div className="home-benefit-card">
            <div className="home-benefit-audience">For Designers</div>
            <h3>Your decisions actually ship</h3>
            <p>When you update a color or spacing value in Figma, it flows to code through an automated process. The system preserves your intent instead of letting it get lost in handoff.</p>
            <ul className="home-benefit-list">
              <li>One file — no confusion about which is current</li>
              <li>Changes tracked with a date and category automatically</li>
              <li>Design choices enforced in code, not just recommended</li>
            </ul>
          </div>
          <div className="home-benefit-card">
            <div className="home-benefit-audience">For Developers</div>
            <h3>Problems caught before users see them</h3>
            <p>Automated guards flag the moment code diverges from design. Fixes happen in development, not in production — and you always know exactly where to look.</p>
            <ul className="home-benefit-list">
              <li>One command verifies everything is in sync</li>
              <li>Clear map between every Figma variable and its CSS counterpart</li>
              <li>Component appearances tested against baselines on every PR</li>
            </ul>
          </div>
          <div className="home-benefit-card">
            <div className="home-benefit-audience">For Teams</div>
            <h3>Less reconciliation, more building</h3>
            <p>The system handles the routine work — logging changes, checking for drift, keeping documentation current — so your team spends time on decisions, not maintenance.</p>
            <ul className="home-benefit-list">
              <li>No more "is the design or the build correct?" debates</li>
              <li>AI assistants can act accurately without hand-holding</li>
              <li>New team members get up to speed from a single read</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
