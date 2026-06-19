import { useState } from 'react'
import SongRequestForm from './SongRequestForm'
import RequestsModal from './RequestsModal'
import '../styles/SongRequest.css'

const RECENT_REQUESTS = [
  'Float On — Modest Mouse',
  'These Chains — Mid-Air Thief',
  'Zona Nyaman — Fourtwnty',
  'Konservatif — The Adams',
]

// Placeholder banner iklan — ganti src ini kalau sudah ada aset brand.
const AD_BANNER = {
  src: 'https://placehold.co/220x480/1a1a1a/ff5a00?text=AD',
  alt: 'Ad placement',
}

export default function SongRequest() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section id="song-request" className="song-request">
      <div className="song-request-grid">

        <div className="song-request-left">
          <div className="song-request-label">
            Request A Song
          </div>

          <h2 className="song-request-title">
          Lagi pengen denger
            <br />
            lagu apa?
          </h2>

          <p className="song-request-desc">
          Kirim lagu favoritmu dan biarkan kami
  memutarnya di SuratmiFM. Siapa tahu
  request-mu jadi soundtrack hari ini.
          </p>

          <div className="request-list">
            <div className="request-list-header">
              <span>Request Terbaru</span>
              <button
                className="view-all-btn"
                onClick={() => setModalOpen(true)}
              >
                Lihat Semua →
              </button>
            </div>

            {RECENT_REQUESTS.map((song) => (
              <div key={song} className="request-item">
                {song}
              </div>
            ))}
          </div>
        </div>

        <SongRequestForm />

        <div className="song-request-ad">
          <span className="song-request-ad-label">Advertisement</span>
          <img
  src="/promo2.png"
  alt="Advertisement Banner"
/>
        </div>

      </div>

      {modalOpen && (
        <RequestsModal onClose={() => setModalOpen(false)} />
      )}
    </section>
  )
}