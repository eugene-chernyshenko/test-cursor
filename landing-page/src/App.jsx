import './App.css'

function App() {
  const navLinks = [
    { label: 'Product', href: '#features' },
    { label: 'Platform', href: '#platform' },
    { label: 'Pricing', href: '#cta' },
    { label: 'Stories', href: '#stories' },
    { label: 'FAQ', href: '#faq' },
  ]

  const stats = [
    { value: '4.9/5', label: 'Customer Happiness' },
    { value: '28%', label: 'Lift in Conversions' },
    { value: '2,500+', label: 'High-Growth Teams' },
    { value: '12 hrs', label: 'Saved Per Launch' },
  ]

  const features = [
    {
      icon: '⚡️',
      title: 'Campaign automation',
      description:
        'Trigger hyper-personalized journeys in minutes with drag-and-drop workflows, smart segmentation, and real‑time event tracking.',
    },
    {
      icon: '📊',
      title: 'Performance intelligence',
      description:
        'See what resonates instantly with dashboards that spotlight your highest converting channels, content, and customer cohorts.',
    },
    {
      icon: '🤝',
      title: 'Team collaboration',
      description:
        'Keep marketing, product, and sales in lockstep through shared workspaces, async updates, and built-in approval flows.',
    },
    {
      icon: '🚀',
      title: 'Launch playbooks',
      description:
        'Start from proven templates tailored to your industry so every release, announcement, and lifecycle campaign ships faster.',
    },
  ]

  const testimonials = [
    {
      quote:
        'LaunchFlow helps our marketing team move at the pace of product. We run complex launches in days instead of weeks and have complete visibility across every campaign.',
      name: 'Anika Patel',
      role: 'Head of Growth, Northwind',
    },
    {
      quote:
        'The insights we get from LaunchFlow changed how we prioritize. Our conversions jumped 31% because we finally know which messages and channels perform.',
      name: 'Miguel Santos',
      role: 'VP Marketing, HorizonOS',
    },
  ]

  const faqs = [
    {
      question: 'How long does onboarding take?',
      answer:
        'Teams typically launch their first campaign within the first week. We provide guided setup, migration support, and best-practice templates tailored to your goals.',
    },
    {
      question: 'Can we integrate with our existing tools?',
      answer:
        'Yes. LaunchFlow connects with 50+ popular tools including HubSpot, Salesforce, Segment, Slack, and Airtable. Our open API makes custom integrations easy.',
    },
    {
      question: 'Is LaunchFlow secure and compliant?',
      answer:
        'We operate with enterprise-grade security, hold SOC 2 Type II certification, and comply with GDPR. Single sign-on and role-based permissions come standard.',
    },
    {
      question: 'What does pricing look like?',
      answer:
        'Pricing scales with the size of your marketing team and monthly contact volume. Start on a 14-day free trial, then choose between growth and scale plans.',
    },
  ]

  const heroBars = [68, 88, 54, 95, 74]

  return (
    <div className="page">
      <header className="header">
        <div className="container header__inner">
          <div className="brand">LaunchFlow</div>
          <nav className="nav" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="header__actions">
            <a className="text-link" href="#login">
              Log in
            </a>
            <a className="button button--primary" href="#cta">
              Start free
            </a>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="hero" id="platform">
          <div className="container hero__grid">
            <div className="hero__copy">
              <span className="eyebrow">Product launch platform</span>
              <h1>
                Launch smarter.
                <br />
                Convert faster.
              </h1>
              <p className="lead">
                LaunchFlow gives modern marketing teams a single command center to plan
                launches, automate campaigns, and understand what drives growth—all in one
                intuitive workspace.
              </p>
              <div className="hero__actions">
                <a className="button button--primary button--lg" href="#cta">
                  Start free trial
                </a>
                <a className="button button--ghost button--lg" href="#stories">
                  View product tour
                </a>
              </div>
              <div className="hero__trust">
                <div className="avatar-group" aria-hidden="true">
                  <span className="avatar avatar--1">AP</span>
                  <span className="avatar avatar--2">MS</span>
                  <span className="avatar avatar--3">JL</span>
                  <span className="avatar avatar--4">TN</span>
                </div>
                <p>
                  Trusted by 2,500+ high-growth teams to orchestrate launches in record time.
                </p>
              </div>
            </div>
            <div className="hero__visual">
              <div className="hero-card hero-card--primary">
                <div className="hero-card__header">
                  <span>Campaign performance</span>
                  <span className="badge badge--positive">+38%</span>
                </div>
                <div className="hero-card__metric">
                  <span className="hero-card__number">12.4k</span>
                  <span className="hero-card__label">Qualified leads this quarter</span>
                </div>
                <div className="hero-card__chart" role="presentation">
                  {heroBars.map((height, index) => (
                    <span
                      key={height + index}
                      className="hero-card__bar"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="hero-card hero-card--secondary">
                <div className="pulse" />
                <div className="hero-card__mini">
                  <span className="hero-card__mini-label">Next launch</span>
                  <strong>AI-powered workspace</strong>
                  <span>In progress • 82% complete</span>
                </div>
                <div className="hero-card__mini hero-card__mini--secondary">
                  <span className="hero-card__mini-label">Team update</span>
                  <p>
                    “Design finalized the teaser site—handoff to growth tomorrow morning.”
                  </p>
                  <span className="chip">#launch-allhands</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats" id="stats">
          <div className="container stats__grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stats__item">
                <span className="stats__value">{stat.value}</span>
                <span className="stats__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section section--light" id="features">
          <div className="container">
            <div className="section__header">
              <span className="eyebrow">Why teams choose LaunchFlow</span>
              <h2>Everything you need to launch with confidence</h2>
              <p>
                LaunchFlow brings planning, automation, intelligence, and collaboration
                together so every release feels effortless—and every customer touchpoint is
                intentional.
              </p>
            </div>
            <div className="feature-grid">
              {features.map((feature) => (
                <article key={feature.title} className="feature-card">
                  <span className="feature-card__icon" aria-hidden="true">
                    {feature.icon}
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <a className="feature-card__link" href="#stories">
                    Explore playbook →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--dark" id="stories">
          <div className="container testimonials">
            <div className="section__header section__header--center">
              <span className="eyebrow eyebrow--accent">Customer stories</span>
              <h2>Built for teams that need to move fast</h2>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((testimonial) => (
                <figure key={testimonial.name} className="testimonial-card">
                  <blockquote>{testimonial.quote}</blockquote>
                  <figcaption>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--light" id="faq">
          <div className="container">
            <div className="section__header">
              <span className="eyebrow">Answers</span>
              <h2>Everything you might want to know</h2>
              <p>
                Still curious? Here are the questions we hear most often from teams switching
                to LaunchFlow.
              </p>
            </div>
            <div className="faq">
              {faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="cta" id="cta">
          <div className="container">
            <div className="cta-card">
              <div className="cta-card__copy">
                <span className="eyebrow eyebrow--accent">Ready to launch?</span>
                <h2>Start building with LaunchFlow today</h2>
                <p>
                  Spin up your first campaign in under 10 minutes. No credit card required—
                  just clarity and momentum.
                </p>
              </div>
              <div className="cta-card__actions">
                <a className="button button--primary button--lg" href="#signup">
                  Get started
                </a>
                <a className="button button--ghost button--lg" href="#demo">
                  Book a strategy call
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div>
            <div className="brand">LaunchFlow</div>
            <p>Ship unforgettable product moments with a launch engine built for momentum.</p>
          </div>
          <div className="footer__links">
            <a href="#features">Features</a>
            <a href="#stories">Customer stories</a>
            <a href="#faq">FAQ</a>
            <a href="mailto:hello@launchflow.com">Contact</a>
          </div>
          <p className="footer__legal">© {new Date().getFullYear()} LaunchFlow Labs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
