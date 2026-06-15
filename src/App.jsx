import React from 'react'
import Navbar    from './components/Navbar'
import Player    from './components/Player'
import Hero      from './components/Hero'
import ShowsGrid  from './components/ShowsGrid'
import Schedule  from './components/Schedule'
import MixGrid   from './components/MixGrid'
import Archive   from './components/Archive'
import About     from './components/About'
import Footer    from './components/Footer'

export default function App() {
  return (
    <div style={{ background: '#0c0c0c', minHeight: '100vh', color: '#e8e8e8' }}>
      <Navbar />
      <Player />

      <main>
        <Hero />

        <section id="shows">
          <ShowsGrid />
        </section>

        <section id="schedule">
          <Schedule />
        </section>

        <section id="mixes">
          <MixGrid />
        </section>

        <section id="archive">
          <Archive />
        </section>

        <section id="about">
          <About />
        </section>
      </main>

      <Footer />
    </div>
  )
}