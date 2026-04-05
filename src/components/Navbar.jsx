import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.logo} onClick={() => setOpen(false)}>
        <img src="/images/logo.jpg" alt="C/N" className={styles.logoImg} />
      </NavLink>
      <button
        className={`${styles.hamburger}${open ? ' ' + styles.hamburgerOpen : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>
      <ul className={`${styles.links}${open ? ' ' + styles.linksOpen : ''}`}>
        <li><NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink></li>
        <li><NavLink to="/media" onClick={() => setOpen(false)}>Media</NavLink></li>
        <li><NavLink to="/contact" className={styles.cta} onClick={() => setOpen(false)}>Get Started</NavLink></li>
      </ul>
    </nav>
  )
}
