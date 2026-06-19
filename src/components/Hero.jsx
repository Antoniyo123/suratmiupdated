import { useState } from 'react'
import '../styles/Hero.css'
import HeroDetailModal from './HeroDetailModal'

// ── Data statis: Upcoming Event (kolom kiri) ──
// Ganti/sambungkan ke data dinamis nanti.
const UPCOMING_EVENT = {
  label: 'Upcoming Event',
  title: 'Suratmi FM X The Perompaks X Puero',
  meta: 'Saturday, 20 june 2026 · 21:00 WIB · Puero',
}

// ── Data statis: Running text PSA (kolom kanan) ──
// Placement iklan brand nanti tinggal disisipkan ke array ini.
const MARQUEE_ITEMS = [
  'Jangan berkendara ketika mabuk',
]

// ── Instagram feed (Behold.so) ──
// 1. Daftar di https://behold.so, hubungkan akun Instagram @suratmifm
// 2. Buat widget feed, lalu copy feedId dari "Embed Code" di dashboard
// 3. Tempel feedId di sini. Layout/jumlah post diatur dari dashboard Behold,
//    bukan dari kode ini.
const BEHOLD_FEED_ID = 'OFjQBt3BoCQiR3Zlhv0p'

const CARD_DATA = [
    {
      id: 'mix',
      images: [
        '/img/pic3.jpg',
        '/img/pic4.jpg',
        '/img/pic5.jpg',
      ],
      eyebrow: 'Latest Mix',
      title: 'SURATMI Event:\n Sejauh ini',
     
  
      description:
        'A one-hour mix exploring ambient textures, downtempo rhythms, and late-night listening sessions.',
  
      cta: 'Play Mix',
      ctaIcon: '▶',
      accent: '#E8E8E8',
    },
  ]

  export default function Hero() {
    const [selectedCard, setSelectedCard] =
      useState(null)
  
    return (
      <section className="hero">
  
        <div className="hero-header">

          {/* ── Kolom kiri: Upcoming Event ── */}
          <div className="hero-header-left">
            <span className="hero-eyebrow-label">
              {UPCOMING_EVENT.label}
            </span>
            <h2 className="hero-upcoming-title">
              {UPCOMING_EVENT.title}
            </h2>
            <p className="hero-upcoming-meta">
              {UPCOMING_EVENT.meta}
            </p>
          </div>

          {/* ── Kolom kanan: Request Lagu + running text ── */}
          <div className="hero-header-right">
          <div className="hero-marquee" aria-label="Pengumuman">
              <div className="hero-marquee-track">
                {/* Render 2x supaya loop scroll -50% mulus tanpa gap */}
                {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
                  <span className="hero-marquee-item" key={`${item}-${i}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <a
              href="#song-request"
              className="hero-request-cta"
            >
              REQUEST A SONG →
            </a>

            
          </div>

        </div>
  
        <div className="hero-grid">

          {/* ── Card kiri: Instagram feed langsung (Behold) ── */}
          <InstagramFeedCard feedId={BEHOLD_FEED_ID} />

          {/* ── Card kanan: tetap modal poster/video/gif ── */}
          {CARD_DATA.map((card) => (
            <HeroCard
              key={card.id}
              card={card}
              onOpen={() =>
                setSelectedCard(card)
              }
            />
          ))}
        </div>
  
        {selectedCard && (
          <HeroDetailModal
            card={selectedCard}
            onClose={() =>
              setSelectedCard(null)
            }
          />
        )}
  
      </section>
    )
  }

function InstagramFeedCard({ feedId }) {
  return (
    <div className="hero-card hero-card--instagram">
      <div className="hero-card-instagram-header">
        <span className="hero-card-eyebrow">@suratmifm</span>
        <a
          className="hero-card-ig-link"
          href="https://www.instagram.com/suratmi.fm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buka Instagram →
        </a>
      </div>

      <div className="hero-card-instagram-body">
        {/* Widget Behold — load script CDN sekali di index.html:
            <script src="https://w.behold.so/widget.js" type="module"></script>
            lalu render web component-nya di sini. */}
        <behold-widget feed-id={feedId}></behold-widget>
      </div>

      <p className="hero-card-instagram-desc">
        Lihat seluruh keseruan kami di Instagram
      </p>
    </div>
  )
}

function HeroCard({ card, onOpen }) {
    const [index, setIndex] = useState(0)
    const total = card.images.length
  
    const prev = (e) => {
      e.stopPropagation()
      setIndex((i) => (i - 1 + total) % total)
    }
  
    const next = (e) => {
      e.stopPropagation()
      setIndex((i) => (i + 1) % total)
    }
  
    const titleLines = card.title.split('\n')
  
    return (
      <div
        className="hero-card"
        onClick={onOpen}
      >
  
        {/* Images */}
        <div className="hero-card-images">
          {card.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={card.title}
              className={`hero-card-image ${
                i === index ? 'is-active' : ''
              }`}
            />
          ))}
        </div>
  
        {/* Overlay */}
        <div className="hero-card-overlay" />
  
        {/* Previous */}
        <button
          className="hero-arrow hero-arrow--prev"
          onClick={prev}
          aria-label="Previous image"
        >
          ←
        </button>
  
        {/* Next */}
        <button
          className="hero-arrow hero-arrow--next"
          onClick={next}
          aria-label="Next image"
        >
          →
        </button>
  
        {/* Dots */}
        <div className="hero-dots">
          {card.images.map((_, i) => (
            <button
              key={i}
              className={`hero-dot ${
                i === index ? 'is-active' : ''
              }`}
              onClick={(e) => {
                e.stopPropagation()
                setIndex(i)
              }}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
  
        {/* Content */}
        <div className="hero-card-content">
  
          {/* <span className="hero-card-eyebrow">
            {card.eyebrow}
          </span> */}
  
          <h2 className="hero-card-title">
            {titleLines.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h2>
  
          <div className="hero-card-footer">
  
            <span className="hero-card-meta">
              {card.meta}
            </span>
  
            {/* <button
              className="hero-card-cta"
              style={{
                '--accent': card.accent,
              }}
              onClick={(e) => {
                e.stopPropagation()
                onOpen()
              }}
            >
              <span className="hero-cta-icon">
                {card.ctaIcon}
              </span>
  
              {card.cta}
            </button> */}
  
          </div>
  
        </div>
  
      </div>
    )
  }