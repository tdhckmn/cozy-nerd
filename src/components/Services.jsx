import { Link } from 'react-router-dom'
import { logEvent } from '../analytics.js'
import styles from './Services.module.css'

const services = [
  { title: 'Data Collection', desc: 'Structured gathering of the data your business needs to make smarter decisions.' },
  { title: 'Projection & Forecasting', desc: 'Forward-looking data models to anticipate trends and outcomes.' },
  { title: 'Data Cleaning', desc: 'Transform messy, inconsistent data into reliable, analysis-ready assets.' },
  { title: 'Data Scraping', desc: 'Automated extraction of web data to fuel your research and strategy.' },
  { title: 'Organization', desc: 'Bring order to your information ecosystem — files, folders, and workflows.' },
  { title: 'Financial Planning', desc: 'AI-assisted financial modeling and planning tailored to your goals.' },
  { title: 'AI Prompt Engineering', desc: 'Craft precise, powerful prompts to unlock the full potential of AI tools.' },
  { title: 'Workflow Analysis & Refinement', desc: 'Identify bottlenecks and streamline how your team works with AI.' },
  { title: 'Digital Asset Management', desc: 'Organize and optimize your digital files, media, and brand assets.' },
  { title: 'Budget Planning & Forecasting', desc: 'Build smarter budgets backed by data-driven projections.' },
  { title: 'Customized Solutions', desc: "Don't see what you need? We build bespoke AI solutions for your unique challenges." },
]

export default function Services() {
  function handleCtaClick(serviceName) {
    logEvent('click', { link_name: 'service_get_in_touch', service: serviceName })
  }

  return (
    <section id="services" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.slash}>/</span>
          <h2 className={styles.title}>Services</h2>
        </div>
        <p className={styles.intro}>
          Practical AI solutions for real-world problems — no fluff, no jargon.
        </p>
        <div className={styles.grid}>
          {services.map((s) => (
            <div key={s.title} className={styles.card}>
              <span className={styles.cardSlash}>/</span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <Link
                to="/contact"
                className={styles.cardCta}
                onClick={() => handleCtaClick(s.title)}
              >
                Get in Touch →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
