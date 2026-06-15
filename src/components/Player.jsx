import { useState, useEffect, useRef } from 'react'

const DURATION = 3600
const fmt = s => {
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sc = s % 60
  return h ? `${h}:${String(m).padStart(2,'0')}:${String(sc).padStart(2,'0')}` : `${m}:${String(sc).padStart(2,'0')}`
}

export default function Player() {
  const [playing, setPlaying] = useState(false)
  const [cur, setCur]         = useState(0)
  const [muted, setMuted]     = useState(false)
  const [vol, setVol]         = useState(80)
  const [eqH, setEqH]        = useState([4,10,7,13,5])
  const iv = useRef(null)
  const eqIv = useRef(null)

  useEffect(() => {
    if (playing) {
      iv.current   = setInterval(() => setCur(c => Math.min(DURATION, c + 1)), 1000)
      eqIv.current = setInterval(() => setEqH([1,2,3,4,5].map(() => Math.floor(Math.random() * 12) + 2)), 180)
    } else {
      clearInterval(iv.current)
      clearInterval(eqIv.current)
    }
    return () => { clearInterval(iv.current); clearInterval(eqIv.current) }
  }, [playing])

  const seek = e => {
    const r = e.currentTarget.getBoundingClientRect()
    setCur(Math.floor(((e.clientX - r.left) / r.width) * DURATION))
  }

  const mono = { fontFamily:'DM Mono,monospace' }

  return (
    <div style={{ ...mono, background:'#0c0c0c', borderBottom:'1px solid #1a1a1a' }}>
      <div style={{ display:'flex', alignItems:'center', padding:'0 24px', height:60 }}>

        {/* Track info */}
        <div style={{ minWidth:200 }}>
          <div style={{ fontSize:12, fontWeight:500, color:'#e8e8e8', letterSpacing:.2 }}>Malam Minggu w/ DJ Lastri</div>
          <div style={{ fontSize:9, color:'#333', letterSpacing:1, marginTop:3 }}>DEEP HOUSE · LIVE · STUDIO B</div>
        </div>

        <div style={{ width:1, height:28, background:'#1a1a1a', margin:'0 24px', flexShrink:0 }} />

        {/* Controls */}
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:8, flex:1 }}>
          <div style={{ display:'flex', alignItems:'center', gap:18 }}>
            <button onClick={() => setCur(c => Math.max(0, c - 15))} style={{ background:'none', border:'none', color:'#333', cursor:'pointer', fontSize:16, lineHeight:1, padding:0, transition:'color .15s' }}
              onMouseEnter={e=>e.target.style.color='#888'} onMouseLeave={e=>e.target.style.color='#333'}>⏮</button>
            <button onClick={() => setPlaying(p => !p)} style={{ width:36, height:36, borderRadius:'50%', background:'#FF5A00', border:'none', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', flexShrink:0, transition:'opacity .2s' }}
              onMouseEnter={e=>e.currentTarget.style.opacity='.8'} onMouseLeave={e=>e.currentTarget.style.opacity='1'}>
              {playing
                ? <svg width="13" height="13" viewBox="0 0 24 24" fill="white"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
                : <svg width="13" height="13" viewBox="0 0 24 24" fill="white"><polygon points="6,3 20,12 6,21"/></svg>}
            </button>
            <button onClick={() => setCur(c => Math.min(DURATION, c + 15))} style={{ background:'none', border:'none', color:'#333', cursor:'pointer', fontSize:16, lineHeight:1, padding:0, transition:'color .15s' }}
              onMouseEnter={e=>e.target.style.color='#888'} onMouseLeave={e=>e.target.style.color='#333'}>⏭</button>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:10, width:'100%', maxWidth:480 }}>
            <span style={{ fontSize:9, color:'#2a2a2a', width:36, textAlign:'right' }}>{fmt(cur)}</span>
            <div onClick={seek} style={{ flex:1, height:1, background:'#1a1a1a', cursor:'pointer', position:'relative' }}>
              <div style={{ height:'100%', background:'#FF5A00', width:`${(cur/DURATION)*100}%`, transition:'width .3s linear' }} />
            </div>
            <span style={{ fontSize:9, color:'#2a2a2a', width:36 }}>{fmt(DURATION)}</span>
          </div>
        </div>

        <div style={{ width:1, height:28, background:'#1a1a1a', margin:'0 24px', flexShrink:0 }} />

        {/* Right */}
        <div style={{ display:'flex', alignItems:'center', gap:16, minWidth:160, justifyContent:'flex-end' }}>
          <div style={{ display:'flex', alignItems:'center', gap:6, fontSize:9, color:'#FF5A00', letterSpacing:2 }}>
            <span style={{ width:4, height:4, background:'#FF5A00', borderRadius:'50%', animation:'pulse 1.5s infinite' }} />
            LIVE
          </div>
          <div style={{ display:'flex', alignItems:'flex-end', gap:2, height:14 }}>
            {eqH.map((h, i) => (
              <div key={i} style={{ width:2, height:playing ? h : 2, background:'#FF5A00', borderRadius:1, opacity:.5, transition:'height .15s' }} />
            ))}
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <button onClick={() => setMuted(m => !m)} style={{ background:'none', border:'none', color:'#333', cursor:'pointer', fontSize:13, padding:0, transition:'color .15s' }}
              onMouseEnter={e=>e.target.style.color='#888'} onMouseLeave={e=>e.target.style.color='#333'}>
              {muted ? '🔇' : '🔈'}
            </button>
            <input type="range" min="0" max="100" value={muted ? 0 : vol}
              onChange={e => { setVol(+e.target.value); setMuted(false) }}
              style={{ width:64, accentColor:'#FF5A00' }} />
          </div>
        </div>

      </div>
    </div>
  )
}