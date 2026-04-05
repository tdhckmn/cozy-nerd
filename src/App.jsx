import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './firebase.js'
import Background from './components/Background.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Media from './components/Media.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <BrowserRouter>
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
