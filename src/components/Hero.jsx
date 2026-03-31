import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <img
          src="/images/hero.jpg"
          alt="COZY/NERD"
          className={styles.wordmark}
        />
        <p className={styles.tagline}>
          AI for Normal People
        </p>
        <p className={styles.sub}>
          Detroit-Based Millennial Futurist
        </p>
        <div className={styles.actions}>
          <a href="#services" className={styles.btnPrimary}>Our Services</a>
          <a href="#contact" className={styles.btnSecondary}>Contact Us</a>
        </div>
      </div>
    </section>
  )
}
