import React from 'react'

const FEATURED = [
  {
    id: 1,
    title: 'Resonance Fields —\nLive from Berghain',
    host: 'Konstantin Veil',
    genre: 'Techno / Industrial',
    duration: '3h 12m',
    bg: '#0f0f0f',
    tag: 'EXCLUSIVE',
  },
  {
    id: 2,
    title: 'Afro Futures: A\nDiasporic Transmission',
    host: 'Amara Osei & Guests',
    genre: 'Afrobeat / Club / Experiment',
    duration: '2h 45m',
    bg: '#100e0c',
    tag: 'NEW',
  },
]

export default function FeaturedSection() {
  return (
    <section style={{ padding: '32px', background: '#0c0c0c' }}>
      <div style={{ fontFamily:'DM Mono,monospace', fontSize:9, color:'#FF5A00', letterSpacing:3, textTransform:'uppercase', marginBottom:20 }}>
        Featured
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:1, background:'#1a1a1a', border:'1px solid #1a1a1a', borderRadius:6, overflow:'hidden' }}>
        {FEATURED.map(item => <FeaturedCard key={item.id} item={item} />)}
      </div>
    </section>
  )
}

function FeaturedCard({ item }) {
  const initials = item.title.split(/\s+/).slice(0,2).map(w => w[0]).join('')
  const [hovered, setHovered] = React.useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ background:'#0c0c0c', cursor:'pointer', position:'relative', overflow:'hidden' }}
    >
      {/* Art */}
      <div style={{ aspectRatio:'16/9', background: item.bg, display:'flex', alignItems:'center', justifyContent:'center', position:'relative', overflow:'hidden' }}>
        <span style={{ fontSize:96, fontWeight:700, color:'rgba(255,255,255,.04)', lineHeight:1, letterSpacing:-4, userSelect:'none' }}>
          {initials}
        </span>
        <span style={{
          position:'absolute', top:14, left:14,
          fontFamily:'DM Mono,monospace', fontSize:9, letterSpacing:2, padding:'4px 10px', borderRadius:2,
          background: item.tag === 'EXCLUSIVE' ? '#FF5A00' : '#e8e8e8',
          color: item.tag === 'EXCLUSIVE' ? '#fff' : '#0c0c0c',
        }}>
          {item.tag}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding:'20px 20px 22px', borderTop:'1px solid #1a1a1a', position:'relative' }}>
        <div style={{ fontFamily:'DM Mono,monospace', fontSize:9, color:'#FF5A00', letterSpacing:2, marginBottom:10 }}>
          {item.genre}
        </div>
        <div style={{ fontSize:18, fontWeight:400, color: hovered ? '#FF5A00' : '#e8e8e8', lineHeight:1.25, whiteSpace:'pre-line', transition:'color .2s' }}>
          {item.title}
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:10, marginTop:10 }}>
          <span style={{ fontSize:11, color:'#383838' }}>{item.host}</span>
          <span style={{ fontFamily:'DM Mono,monospace', fontSize:10, color:'#2a2a2a' }}>· {item.duration}</span>
        </div>

        {/* Play btn */}
        <button style={{
          position:'absolute', bottom:20, right:20,
          width:34, height:34, borderRadius:'50%', background:'#FF5A00',
          border:'none', display:'flex', alignItems:'center', justifyContent:'center',
          cursor:'pointer', opacity: hovered ? 1 : 0, transition:'opacity .2s',
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21"/></svg>
        </button>
      </div>
    </div>
  )
}