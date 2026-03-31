import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="#hero" className={styles.logo}>
        <img src="/images/logo.jpg" alt="C/N" className={styles.logoImg} />
      </a>
      <ul className={styles.links}>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact" className={styles.cta}>Get Started</a></li>
      </ul>
    </nav>
  )
}
