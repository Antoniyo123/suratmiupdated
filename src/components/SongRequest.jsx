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
            Tell us what
            <br />
            should play next.
          </h2>

          <p className="song-request-desc">
            Punya lagu favorit yang ingin diputar di
            SURATMIFM? Kirim request dan kami akan
            memilih lagu-lagu terbaik untuk program
            berikutnya.
          </p>

          <div className="request-list">
            <div className="request-list-header">
              <span>Recently Requested</span>
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

      </div>

      {modalOpen && (
        <RequestsModal onClose={() => setModalOpen(false)} />
      )}
    </section>
  )
}