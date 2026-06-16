import { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import SongRequest from './components/SongRequest'
import Collaborate from './components/Collaborate'
import Preloader from './components/Preloader'

export default function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)

    return () => clearTimeout(timer)

  }, [])

  return (
    <>
      {loading && <Preloader />}

      <div
        style={{
          background: '#0A0A0A',
          color: '#E8E8E8',
          minHeight: '100vh',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <Navbar />

        <main>
          <Hero />
          <SongRequest />
          <Collaborate />
          <About />
        </main>

        <Footer />
      </div>
    </>
  )
}