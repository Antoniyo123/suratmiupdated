import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import '../styles/RequestsModal.css'

export default function RequestsModal({ onClose }) {
  const [requests, setRequests] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRequests = async () => {
      const { data, error } = await supabase
        .from('song_requests')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50)

      if (!error) setRequests(data)
      setLoading(false)
    }
    fetchRequests()
  }, [])

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  const formatDate = (ts) =>
    new Date(ts).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    })

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal" role="dialog" aria-modal="true">

        <div className="modal-header">
          <div>
            <p className="modal-eyebrow">Song Requests</p>
            <h3 className="modal-title">
              Request Masuk
              {!loading && (
                <span className="modal-count">{requests.length}</span>
              )}
            </h3>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Tutup">✕</button>
        </div>

        <div className="modal-body">

          {loading && (
            <div className="modal-state">Memuat request...</div>
          )}

          {!loading && requests.length === 0 && (
            <div className="modal-state">Belum ada request yang masuk.</div>
          )}

          {!loading && requests.map((req, i) => (
            <div key={req.id} className="request-card">

              <div className="request-card-top">
                <span className="request-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="request-date">{formatDate(req.created_at)}</span>
              </div>

              {/* Bubble wrapper: semua konten request masuk ke sini */}
              <div className="request-bubble">

                <div className="request-sender">
                  <span className="request-sender-name">{req.name}</span>
                </div>

                <div className="request-song">
                  <span className="request-song-title">{req.song_title}</span>
                  <span className="request-song-sep">—</span>
                  <span className="request-song-artist">{req.artist}</span>
                </div>

                {(req.from_name || req.to_name) && (
                  <div className="request-dedication">
                    <span className="dedication-pill">
                      {req.from_name && (
                        <span>
                          <span className="dedication-label">dari</span>
                          {req.from_name}
                        </span>
                      )}
                      {req.from_name && req.to_name && (
                        <span className="dedication-arrow">→</span>
                      )}
                      {req.to_name && (
                        <span>
                          <span className="dedication-label">untuk</span>
                          {req.to_name}
                        </span>
                      )}
                    </span>
                  </div>
                )}

                {req.message && (
                  <blockquote className="request-message">{req.message}</blockquote>
                )}

              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  )
}