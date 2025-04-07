import { useState } from 'react'
import './styles/Common.css'

// Import components
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Clients from './components/Clients'
import Map from './components/Map'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollHandler from './components/ScrollHandler'

function App() {
  const [scrolled, setScrolled] = useState(false);

  return (
    <div className="app">
      {/* ScrollHandler manages scroll effects */}
      <ScrollHandler setScrolled={setScrolled} />
      
      {/* Header component */}
      <Header scrolled={scrolled} />
      
      {/* Main content sections */}
      <Hero />
      <Services />
      <Clients />
      <Map />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
