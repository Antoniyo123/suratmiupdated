import { useState } from 'react'
import '../styles/Hero.css'
import HeroDetailModal from './HeroDetailModal'



const CARD_DATA = [
    {
      id: 'live',
      images: [
        '/img/pic.jpg',
        '/img/pic1.jpg',
        '/img/pic2.jpg',
      ],
      eyebrow: 'Suratmi FM Lucy Beer Mart Blok M',
      title: 'Suratmi FM X The Perompaks\nw/ Suratmi FM',
      meta: 'Every Saturday · 21:00 WIB',
  
      description:
        'Program musik elektronik mingguan yang menghadirkan pilihan house, disco, balearic, dan leftfield dance music untuk menemani malam minggu.',
  
      cta: 'Listen Live',
      ctaIcon: '▶',
      accent: '#FF5A00',
    },
  
    {
      id: 'mix',
      images: [
        '/img/pic3.jpg',
        '/img/pic4.jpg',
        '/img/pic5.jpg',
      ],
      eyebrow: 'Latest Mix',
      title: 'SURATMI MIX 003:\nGingerale',
      meta: 'Available on Mixcloud',
  
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
          <div className="hero-header-content">
  
            <h1 className="hero-title">
              SuratmiFM
            </h1>
  
            <p className="hero-subtitle">
              Request a track, send a shoutout,
              or dedicate a song live on air.
            </p>
  
            <a
              href="#song-request"
              className="hero-request-cta"
            >
              REQUEST A SONG →
            </a>
  
          </div>
        </div>
  
        <div className="hero-grid">
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
  
          <span className="hero-card-eyebrow">
            {card.eyebrow}
          </span>
  
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
  
            <button
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
            </button>
  
          </div>
  
        </div>
  
      </div>
    )
  }