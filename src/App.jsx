import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import SongRequest from './components/SongRequest'
import Community from './components/Collaborate'
import Collaborate from './components/Collaborate'

export default function App() {
  return (
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
        <Collaborate/>
        <About />
      </main>

      <Footer />
    </div>
  )
}