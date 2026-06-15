import { useState, useRef, useEffect } from 'react'
import '../styles/AudioPlayer.css'
const STREAM = {
  title: 'Dark Matters w/ Nadia Okafor',
  genre: 'TECHNO / EXPERIMENTAL',
}
const DURATION = 3600

const fmt = s => {
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const sc = s % 60
  return h > 0
    ? `${h}:${String(m).padStart(2,'0')}:${String(sc).padStart(2,'0')}`
    : `${m}:${String(sc).padStart(2,'0')}`
}

export default function AudioPlayer() {
  const [playing, setPlaying] = useState(false)
  const [current, setCurrent] = useState(0)
  const [muted, setMuted]     = useState(false)
  const [volume, setVolume]   = useState(80)
  const [eqH, setEqH]        = useState([4,10,7,13,5])
  const iv  = useRef(null)
  const eqIv = useRef(null)

  useEffect(() => {
    if (playing) {
      iv.current = setInterval(() => setCurrent(c => Math.min(DURATION, c + 1)), 1000)
      eqIv.current = setInterval(() => setEqH([1,2,3,4,5].map(() => Math.floor(Math.random()*12)+2)), 180)
    } else {
      clearInterval(iv.current)
      clearInterval(eqIv.current)
    }
    return () => { clearInterval(iv.current); clearInterval(eqIv.current) }
  }, [playing])

  const seek = e => {
    const r = e.currentTarget.getBoundingClientRect()
    setCurrent(Math.floor(((e.clientX - r.left) / r.width) * DURATION))
  }

  const s = { fontFamily: "'DM Sans', sans-serif" }
  const mono = { fontFamily: "'DM Mono', monospace" }

  return (
    <div style={{ ...s, background:'#0c0c0c', borderTop:'1px solid #1a1a1a', borderBottom:'1px solid #1a1a1a' }}>
      <div style={{ display:'flex', alignItems:'center', padding:'0 28px', height:64 }}>

        {/* Track info */}
        <div style={{ minWidth:180 }}>
          <div style={{ fontSize:12, fontWeight:500, color:'#e8e8e8', letterSpacing:'.2px' }}>{STREAM.title}</div>
          <div style={{ ...mono, fontSize:9, color:'#383838', letterSpacing:1, marginTop:3 }}>{STREAM.genre}</div>
        </div>

        <div style={{ width:1, height:32, background:'#1a1a1a', margin:'0 28px', flexShrink:0 }} />

        {/* Controls */}
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:8, flex:1 }}>
          <div style={{ display:'flex', alignItems:'center', gap:20 }}>
            <button onClick={() => setCurrent(c => Math.max(0, c-15))} style={{ background:'none', border:'none', color:'#383838', cursor:'pointer', display:'flex' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/></svg>
            </button>
            <button onClick={() => setPlaying(p => !p)} style={{ width:36, height:36, borderRadius:'50%', background:'#FF5A00', border:'none', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer' }}>
              {playing
                ? <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
                : <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21"/></svg>
              }
            </button>
            <button onClick={() => setCurrent(c => Math.min(DURATION, c+15))} style={{ background:'none', border:'none', color:'#383838', cursor:'pointer', display:'flex' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 18l8.5-6L6 6v12zm2-8.14L11.03 12 8 14.14V9.86zM16 6h2v12h-2z"/></svg>
            </button>
          </div>

          <div style={{ display:'flex', alignItems:'center', gap:10, width:'100%', maxWidth:480 }}>
            <span style={{ ...mono, fontSize:9, color:'#383838', width:32, textAlign:'right' }}>{fmt(current)}</span>
            <div onClick={seek} style={{ flex:1, height:2, background:'#1a1a1a', borderRadius:1, cursor:'pointer', position:'relative' }}>
              <div style={{ height:'100%', background:'#FF5A00', borderRadius:1, width:`${(current/DURATION)*100}%`, transition:'width .3s linear' }} />
            </div>
            <span style={{ ...mono, fontSize:9, color:'#383838', width:32 }}>{fmt(DURATION)}</span>
          </div>
        </div>

        <div style={{ width:1, height:32, background:'#1a1a1a', margin:'0 28px', flexShrink:0 }} />

        {/* Right */}
        <div style={{ display:'flex', alignItems:'center', gap:16, minWidth:180, justifyContent:'flex-end' }}>
          <div style={{ display:'flex', alignItems:'center', gap:6, ...mono, fontSize:9, color:'#FF5A00', letterSpacing:'1.5px' }}>
            <span style={{ width:4, height:4, background:'#FF5A00', borderRadius:'50%', animation:'pulse 1.5s infinite' }} />
            LIVE
          </div>
          <div style={{ display:'flex', alignItems:'flex-end', gap:2, height:14 }}>
            {eqH.map((h, i) => (
              <div key={i} style={{ width:2, height:h, background:'#FF5A00', borderRadius:1, opacity:.6, transition:'height .15s' }} />
            ))}
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <button onClick={() => setMuted(m => !m)} style={{ background:'none', border:'none', color:'#383838', cursor:'pointer', display:'flex' }}>
              {muted
                ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
                : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
              }
            </button>
            <input type="range" min="0" max="100" value={muted ? 0 : volume}
              onChange={e => { setVolume(+e.target.value); setMuted(false) }}
              style={{ width:72, accentColor:'#FF5A00' }}
            />
          </div>
        </div>

      </div>
    </div>
  )
}