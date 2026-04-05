import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { logEvent } from '../analytics.js'
import styles from './Contact.module.css'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = 'template_i0wlbjr'
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus('success')
      formRef.current.reset()
      logEvent('contact_form_submit', { result: 'success' })
    } catch {
      setStatus('error')
      logEvent('contact_form_submit', { result: 'error' })
    }
  }

  function handleCardClick(name, dest) {
    logEvent('click', { link_name: `contact_${name}`, destination: dest })
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.slash}>/</span>
          <h2 className={styles.title}>Contact</h2>
        </div>
        <p className={styles.intro}>
          Ready to bring AI into your workflow? Let's talk.
        </p>

        <div className={styles.cards}>
          <a href="tel:7347521190" className={styles.card} onClick={() => handleCardClick('phone', 'tel:7347521190')}>
            <span className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </span>
            <div>
              <p className={styles.label}>Phone</p>
              <p className={styles.value}>(734) 752-1190</p>
            </div>
          </a>
          <a href="mailto:cozynerd.consulting@gmail.com" className={styles.card} onClick={() => handleCardClick('email', 'mailto:cozynerd.consulting@gmail.com')}>
            <span className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </span>
            <div>
              <p className={styles.label}>Email</p>
              <p className={styles.value}>cozynerd.consulting@gmail.com</p>
            </div>
          </a>
          <div className={styles.card}>
            <span className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </span>
            <div>
              <p className={styles.label}>Location</p>
              <p className={styles.value}>Detroit, MI</p>
            </div>
          </div>
          <a href="https://www.linkedin.com/in/jameswright2215/" target="_blank" rel="noopener noreferrer" className={styles.card} onClick={() => handleCardClick('linkedin', 'https://www.linkedin.com/in/jameswright2215/')}>
            <span className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </span>
            <div>
              <p className={styles.label}>LinkedIn</p>
              <p className={styles.value}>jameswright2215</p>
            </div>
          </a>
          <a href="https://m.me/61588369932005" target="_blank" rel="noopener noreferrer" className={styles.card} onClick={() => handleCardClick('messenger', 'https://m.me/61588369932005')}>
            <span className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.652V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.974 12-11.111S18.627 0 12 0zm1.191 14.963-3.055-3.26-5.963 3.26L10.732 8.1l3.131 3.26L19.752 8.1l-6.561 6.863z"/>
              </svg>
            </span>
            <div>
              <p className={styles.label}>Messenger</p>
              <p className={styles.value}>Message on Facebook</p>
            </div>
          </a>
        </div>

        <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="user_email">Your Email</label>
            <input
              id="user_email"
              name="user_email"
              type="email"
              required
              className={styles.input}
              placeholder="you@example.com"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              className={styles.input}
              placeholder="How can we help?"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className={styles.textarea}
              placeholder="Tell us about your project..."
            />
          </div>
          {status === 'success' && (
            <p className={`${styles.feedback} ${styles.feedbackSuccess}`}>
              Message sent! We'll be in touch soon.
            </p>
          )}
          {status === 'error' && (
            <p className={`${styles.feedback} ${styles.feedbackError}`}>
              Something went wrong. Please try emailing us directly.
            </p>
          )}
          <button
            type="submit"
            className={styles.submitBtn}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
