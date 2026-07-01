import { ExternalLink, GitBranch, Mail, MapPin } from 'lucide-react'

const work = [
  'Responsive portfolio experiences',
  'Frontend application interfaces',
  'Clean deployment workflows',
]

export function App() {
  return (
    <main className="page-shell">
      <section className="hero" aria-labelledby="intro-heading">
        <div className="hero__content">
          <p className="eyebrow">Portfolio</p>
          <h1 id="intro-heading">Subash Kumar</h1>
          <p className="lede">
            Frontend developer focused on practical, polished web experiences
            that are fast to load and easy to use.
          </p>
          <div className="actions" aria-label="Contact links">
            <a href="mailto:hello@example.com">
              <Mail size={18} aria-hidden="true" />
              Contact
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <GitBranch size={18} aria-hidden="true" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <ExternalLink size={18} aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>

        <aside className="profile-card" aria-label="Profile summary">
          <div className="portrait" aria-hidden="true">SK</div>
          <div>
            <p className="profile-card__label">Based in</p>
            <p className="profile-card__location">
              <MapPin size={17} aria-hidden="true" />
              India
            </p>
          </div>
        </aside>
      </section>

      <section className="work-band" aria-labelledby="work-heading">
        <div>
          <p className="eyebrow">Focus</p>
          <h2 id="work-heading">Building useful interfaces with a clear release path.</h2>
        </div>
        <ul>
          {work.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}
