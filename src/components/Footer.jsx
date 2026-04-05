import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <img src="/images/logo.jpg" alt="C/N" className={styles.logo} />
        <div className={styles.center}>
          <p className={styles.brand}>
            COZY<span className={styles.slash}>/</span>NERD
          </p>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} Cozy Nerd
          </p>
        </div>
        <p className={styles.tagline}>AI for Everyday Folks</p>
      </div>
    </footer>
  )
}
