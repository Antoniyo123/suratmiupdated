import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import '../styles/SongRequestForm.css'

const INITIAL_FORM = {
  name: '',
  phone: '',
  instagram: '',
  song_title: '',
  artist: '',
  from_name: '',
  to_name: '',
  message: '',
}

export default function SongRequestForm() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.name || !form.song_title || !form.artist) {
      setStatus('error')
      return
    }

    setStatus('loading')

    const { error } = await supabase
      .from('song_requests')
      .insert([{
        name: form.name,
        phone: form.phone,
        instagram: form.instagram,
        song_title: form.song_title,
        artist: form.artist,
        from_name: form.from_name,
        to_name: form.to_name,
        message: form.message,
      }])

    if (error) {
      console.error(error)
      setStatus('error')
    } else {
      setStatus('success')
      setForm(INITIAL_FORM)
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <form className="srf" onSubmit={handleSubmit} noValidate>

      {/* ── Blok 1: Identitas ── */}
      <div className="srf-block">
        <div className="srf-block-header">
          <span className="srf-block-num">01</span>
          <span className="srf-block-title">Identitas kamu</span>
        </div>
        <div className="srf-block-body">
          <div className="srf-field">
            <label className="srf-label">Nama <span className="srf-req">*</span></label>
            <input
              name="name"
              placeholder="Nama kamu"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="srf-field-row">
            <div className="srf-field">
              <label className="srf-label">No. Telepon</label>
              <input
                name="phone"
                placeholder="08xx-xxxx-xxxx"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            <div className="srf-field">
              <label className="srf-label">Instagram</label>
              <input
                name="instagram"
                placeholder="@username"
                value={form.instagram}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Blok 2: Lagu ── */}
      <div className="srf-block">
        <div className="srf-block-header">
          <span className="srf-block-num">02</span>
          <span className="srf-block-title">Lagu yang direquest</span>
        </div>
        <div className="srf-block-body">
          <div className="srf-field">
            <label className="srf-label">Judul Lagu <span className="srf-req">*</span></label>
            <input
              name="song_title"
              placeholder="Judul lagu"
              value={form.song_title}
              onChange={handleChange}
            />
          </div>
          <div className="srf-field">
            <label className="srf-label">Artist / Band <span className="srf-req">*</span></label>
            <input
              name="artist"
              placeholder="Nama artist atau band"
              value={form.artist}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* ── Blok 3: Dedikasi (opsional) ── */}
      <div className="srf-block">
        <div className="srf-block-header">
          <span className="srf-block-num">03</span>
          <span className="srf-block-title">
            Dedikasi
            <span className="srf-optional">opsional</span>
          </span>
        </div>
        <div className="srf-block-body">
          <div className="srf-field-row">
            <div className="srf-field">
              <label className="srf-label">Dari</label>
              <input
                name="from_name"
                placeholder="Nama pengirim"
                value={form.from_name}
                onChange={handleChange}
              />
            </div>
            <div className="srf-field">
              <label className="srf-label">Untuk</label>
              <input
                name="to_name"
                placeholder="Nama penerima"
                value={form.to_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="srf-field">
            <label className="srf-label">Pesan</label>
            <textarea
              name="message"
              rows="3"
              placeholder="Tulis pesan untuk si dia..."
              value={form.message}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* ── Feedback ── */}
      {status === 'error' && (
        <p className="srf-feedback srf-feedback--error">
          Nama, judul lagu, dan artist wajib diisi.
        </p>
      )}
      {status === 'success' && (
        <p className="srf-feedback srf-feedback--success">
          Request kamu sudah terkirim!
        </p>
      )}

      <button
        type="submit"
        className={`srf-submit${status === 'loading' ? ' srf-submit--loading' : ''}`}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Mengirim...' : 'Kirim Request →'}
      </button>

    </form>
  )
}