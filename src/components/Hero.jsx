import { useState } from 'react'
import '../styles/Hero.css'
import HeroDetailModal from './HeroDetailModal'


// ── Data statis: Upcoming Event (sekarang di kolom kanan) ──
// Ganti/sambungkan ke data dinamis nanti.
const UPCOMING_EVENT = {
  label: 'Upcoming Event',
  title: 'Suratmi FM X The Perompaks X Puero',
  meta: 'Saturday, 20 june 2026 · 21:00 WIB · Puero',
}

// ── Data statis: Running text PSA ──
// Placement iklan brand nanti tinggal disisipkan ke array ini.
const MARQUEE_ITEMS = [
  'Jangan berkendara ketika mabuk',
]

// ── Data statis: Now Playing dummy (kolom kiri) ──
// Ganti/sambungkan ke audio player asli nanti.
const NOW_PLAYING = {
  device: 'iPhone',
  title: 'Askaba',
  artist: 'SuratmiFM',
  currentTime: '1:29',
  remaining: '-1:31',
  progressPercent: 48,
  lyricLine: "Apa kurangnya aku di dalam hidupmu hingga",
}

// ── Instagram feed — gambar post + link ke post aslinya ──
// 1. Screenshot/simpan gambar tiap post, taruh di /public/instagram/
// 2. Ambil link post-nya: buka post di Instagram, klik "...", "Copy link"
// 3. Isi pasangan image+url di array di bawah (boleh tambah berapa pun)
const INSTAGRAM_POSTS = [
  {
    image: '/instagram/post1.png',
    url: 'https://www.instagram.com/p/DYASTZPPqmf/',
  },
  {
    image: '/instagram/post2.png',
    url: 'https://www.instagram.com/p/DX3gN73j_5R/',
  },
  {
    image: '/instagram/post3.png',
    url: 'https://www.instagram.com/p/DZuvlALPD9H/',
  },
  {
    image: '/instagram/post4.png',
    url: 'https://www.instagram.com/p/DYm0czMvQWL/',
  },
]

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

          {/* ── Kolom kiri: Now Playing + Request Lagu ── */}
          <NowPlayingRequestCard data={NOW_PLAYING} />

          {/* ── Kolom kanan: Upcoming Event + running text ── */}
          <div className="hero-header-right">
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
          </div>

        </div>

        <div className="hero-grid">

          {/* ── Card kiri: Instagram feed, struktur & CSS sama kaya card kanan ── */}
          <InstagramFeedCard posts={INSTAGRAM_POSTS} />

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

function NowPlayingRequestCard({ data }) {
  return (
    <div className="hero-nowplaying">

      {/* ── Now playing (dummy, statis) ── */}
      <div className="hero-nowplaying-player">
      <div className="hero-nowplaying-artwork">
  <img
    src="/img/pic2.jpg"
    alt={`${data.title} cover`}
    className="hero-nowplaying-artwork-image"
  />
</div>

        <div className="hero-nowplaying-info">
          <span className="hero-nowplaying-device">
            {data.device} <span className="hero-nowplaying-device-icon">⌧</span>
          </span>
          <h3 className="hero-nowplaying-title">{data.title}</h3>
          <p className="hero-nowplaying-artist">{data.artist}</p>

          <div className="hero-nowplaying-progress-row">
            <span className="hero-nowplaying-time">{data.currentTime}</span>
            <div className="hero-nowplaying-progress-track">
              <div
                className="hero-nowplaying-progress-fill"
                style={{ width: `${data.progressPercent}%` }}
              />
            </div>
            <span className="hero-nowplaying-time">{data.remaining}</span>
          </div>

          <p className="hero-nowplaying-lyric">{data.lyricLine}</p>

          <div className="hero-nowplaying-controls">
            <button className="hero-nowplaying-btn" aria-label="Previous track" tabIndex={-1}>
              ⏮
            </button>
            <button className="hero-nowplaying-btn hero-nowplaying-btn--play" aria-label="Pause" tabIndex={-1}>
              ❙❙
            </button>
            <button className="hero-nowplaying-btn" aria-label="Next track" tabIndex={-1}>
              ⏭
            </button>
            <button className="hero-nowplaying-btn hero-nowplaying-btn--airplay" aria-label="AirPlay" tabIndex={-1}>
              ◎
            </button>
          </div>

          <div className="hero-nowplaying-volume-row">
            <span className="hero-nowplaying-volume-icon">🔈</span>
            <div className="hero-nowplaying-volume-track">
              <div className="hero-nowplaying-volume-fill" />
            </div>
            <span className="hero-nowplaying-volume-icon">🔊</span>
          </div>
        </div>
      </div>

      {/* ── Banner request lagu ── */}
      <a href="#song-request" className="hero-nowplaying-request">
        <span className="hero-nowplaying-request-title">
          Click here to<br />request your song
        </span>
        <span className="hero-nowplaying-request-note">
          Song requests are valid before midnight
        </span>
      </a>
    </div>
  )
}

// ── Instagram card — markup-nya disamakan persis sama HeroCard di kanan:
// image stack + overlay + arrow + dots + content overlay di bawah.
// Bedanya cuma: image-nya dibungkus <a> yang ngarah ke post aslinya
// di Instagram, dan ga ada modal yang kebuka pas card di-klik.
function InstagramFeedCard({ posts }) {
  const [index, setIndex] = useState(0)
  const total = posts.length

  const prev = (e) => {
    e.stopPropagation()
    setIndex((i) => (i - 1 + total) % total)
  }

  const next = (e) => {
    e.stopPropagation()
    setIndex((i) => (i + 1) % total)
  }

  const titleLines = ['Cek post-post terbaru', 'kami di Instagram']

  return (
    <div className="hero-card">

      {/* Images — sama kaya HeroCard, cuma dibungkus link ke post aktif */}
      <a
        href={posts[index].url}
        target="_blank"
        rel="noopener noreferrer"
        className="hero-card-instagram-link"
        aria-label="Buka post di Instagram"
      >
        <div className="hero-card-images">
          {posts.map((post, i) => (
            <img
              key={post.url + i}
              src={post.image}
              alt="Instagram post"
              className={`hero-card-image ${
                i === index ? 'is-active' : ''
              }`}
            />
          ))}
        </div>
      </a>

      {/* Overlay */}
      <div className="hero-card-overlay" />

      {/* Previous */}
      <button
        className="hero-arrow hero-arrow--prev"
        onClick={prev}
        aria-label="Post sebelumnya"
      >
        ←
      </button>

      {/* Next */}
      <button
        className="hero-arrow hero-arrow--next"
        onClick={next}
        aria-label="Post berikutnya"
      >
        →
      </button>

      {/* Dots */}
      <div className="hero-dots">
        {posts.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${
              i === index ? 'is-active' : ''
            }`}
            onClick={(e) => {
              e.stopPropagation()
              setIndex(i)
            }}
            aria-label={`Post ${i + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="hero-card-content">

        <span className="hero-card-eyebrow">@suratmi.fm</span>

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
            Tap gambar untuk lihat post
          </span>

          <a
            href="https://www.instagram.com/suratmi.fm"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-card-cta"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="hero-cta-icon">↗</span>
            Buka Instagram
          </a>

        </div>

      </div>

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