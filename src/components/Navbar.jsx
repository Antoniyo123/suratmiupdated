import { useState, useRef, useEffect } from 'react'
import '../styles/Navbar.css'


const STORAGE_KEY = 'suratmifm_chat_messages'
const NICK_KEY = 'suratmifm_chat_nickname'
const DEFAULT_MESSAGES = [
  { id: 1, time: '12:00', nickname: 'suratmiFM', text: 'Halo! Tulis pesan kalian di sini, ya.' },
]

export default function Navbar() {
  const [chatOpen, setChatOpen] = useState(false)
  const [messages, setMessages] = useState(() => {
    if (typeof window === 'undefined') return DEFAULT_MESSAGES
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : DEFAULT_MESSAGES
    } catch {
      return DEFAULT_MESSAGES
    }
  })
  const [nickname, setNickname] = useState(() => {
    if (typeof window === 'undefined') return ''
    try {
      return localStorage.getItem(NICK_KEY) || ''
    } catch {
      return ''
    }
  })
  const [input, setInput] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)

  const audioRef = useRef(null)
  const messagesEndRef = useRef(null)

  const toggleChat = () => setChatOpen((prev) => !prev)
  const closeChat = () => setChatOpen(false)

  // simpan pesan & nickname ke localStorage, jadi tetap ada saat refresh
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
    } catch {
      // storage penuh / diblok browser, abaikan
    }
  }, [messages])

  useEffect(() => {
    try {
      localStorage.setItem(NICK_KEY, nickname)
    } catch {
      // abaikan
    }
  }, [nickname])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying((prev) => !prev)
  }

  const sendMessage = () => {
    const trimmed = input.trim()
    if (!trimmed) return
    const time = new Date().toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
    })
    const name = nickname.trim() || 'Anonim'
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), time, nickname: name, text: trimmed },
    ])
    setInput('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      sendMessage()
    }
  }

  // auto-scroll ke pesan terbaru
  useEffect(() => {
    if (chatOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, chatOpen])

  return (
    <>
      <header className="navbar">

        {/* ── Row 1: Logo + Chat btn ── */}
        <div className="navbar-row1">
        <div className="navbar-logo">
  <img src="/suratmiFm.png" alt="SuratmiFM" />
</div>
          <div className="chat-btn-wrap">
            <button
              className={`chat-btn${chatOpen ? ' open' : ''}`}
              onClick={toggleChat}
              aria-label="Buka live chat"
              aria-expanded={chatOpen}
            >
              {chatOpen ? (
                <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                  <path d="M5 5l10 10M15 5L5 15" />
                </svg>
              ) : (
                <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 4.5h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8l-3.5 3v-3H3a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1z" />
                </svg>
              )}
            </button>
            {!chatOpen && (
              <span className="chat-btn-tooltip">kirim pesan yuk !!!</span>
            )}
          </div>
        </div>

        {/* ── Row 2: Play button ── */}
        <div className="navbar-row2">
          <button
            className="play-btn"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? '❙❙' : '▶'}
          </button>
          {/* ganti src ini dengan URL stream / lagu asli */}
          <audio ref={audioRef} src="/audio/now-playing.mp3" preload="none" />
        </div>

      </header>

      {/* ── Overlay ── */}
      <div
        className={`drawer-overlay${chatOpen ? ' open' : ''}`}
        onClick={closeChat}
        aria-hidden="true"
      />

      {/* ── Chat drawer ── */}
      <nav
        className={`drawer${chatOpen ? ' open' : ''}`}
        role="dialog"
        aria-label="Live chat"
      >
        <div className="chat-header">
          <span className="chat-header-label">Live Chat</span>
        </div>

        <div className="chat-messages">
          {messages.map((msg) => (
            <div className="chat-message" key={msg.id}>
              <div className="chat-message-meta">
                <span className="chat-message-nickname">{msg.nickname || 'Anonim'}</span>
                <span className="chat-message-time">{msg.time}</span>
              </div>
              <span className="chat-message-text">{msg.text}</span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input-area">
          <input
            type="text"
            className="chat-nickname-input"
            placeholder="Nickname kamu"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            maxLength={20}
          />
          <div className="chat-input-row">
            <input
              type="text"
              className="chat-input"
              placeholder="Tulis pesan..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className="chat-send-btn"
              onClick={sendMessage}
              aria-label="Kirim pesan"
            >
              <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 10h12M11 5l5 5-5 5" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}