import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './firebase.js'
import Background from './components/Background.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Media from './components/Media.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'COZY/NERD',
    url: 'https://cozynerd.tech',
    logo: 'https://cozynerd.tech/images/logo.jpg',
    description: 'AI for Everyday Folks — Detroit-based AI consulting by James Wright',
    sameAs: [
      'https://www.facebook.com/profile.php?id=61588369932005',
      'https://www.instagram.com/thecozynerd/',
      'https://www.tiktok.com/@thecozynerd',
      'https://www.linkedin.com/in/jameswright2215/',
    ],
  }

  return (
    <BrowserRouter>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>
      <Background />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
