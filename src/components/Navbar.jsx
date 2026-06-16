import { useState } from 'react'
import '../styles/Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen((prev) => !prev)
  const close = () => setOpen(false)

  const scrollToRequest = () => {
    close()
    const el = document.getElementById('song-request')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className="navbar">

        {/* ── Row 1: Logo + Menu btn ── */}
        <div className="navbar-row1">
          <div className="navbar-logo">suratmiFM</div>
          <button
            className={`menu-btn${open ? ' open' : ''}`}
            onClick={toggle}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* ── Row 2: Play + Live badge ── */}
        <div className="navbar-row2">
          <button className="play-btn" aria-label="Play">▶</button>
          <div className="live-badge">
            <span className="live-dot" />
            <span className="live-text">Live</span>
            <span className="live-sep">—</span>
            <span className="live-show">Suratmi FM 27 JUNI / Lucy Beer Mart Blok M</span>
          </div>
        </div>

      </header>

      {/* ── Overlay ── */}
      <div
        className={`drawer-overlay${open ? ' open' : ''}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* ── Side drawer ── */}
      <nav
        className={`drawer${open ? ' open' : ''}`}
        role="dialog"
        aria-label="Navigation menu"
      >
        <div className="drawer-nav">
          <a href="/" className="drawer-link active" onClick={close}>
            <i className="ti ti-home" aria-hidden="true" /> Home
          </a>
          <a className="drawer-link drawer-link--request" onClick={scrollToRequest}>
            <i className="ti ti-music" aria-hidden="true" /> Request Lagu
          </a>
          <a href="/jadwal" className="drawer-link" onClick={close}>
            <i className="ti ti-calendar" aria-hidden="true" /> Jadwal
          </a>
          <a href="/about" className="drawer-link" onClick={close}>
            <i className="ti ti-users" aria-hidden="true" /> About
          </a>
          <a href="/kontak" className="drawer-link" onClick={close}>
            <i className="ti ti-mail" aria-hidden="true" /> Kontak
          </a>
        </div>

        <div className="drawer-footer">
          <p className="drawer-footer-label">suratmiFM © 2025</p>
        </div>
      </nav>
    </>
  )
}