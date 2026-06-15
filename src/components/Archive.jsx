import React from 'react'

const ITEMS = [
  { title:'Resonance Fields — Live from Berghain', meta:'Konstantin Veil · Techno',           dur:'3h 12m' },
  { title:'Afro Futures: A Diasporic Transmission', meta:'Amara Osei & Guests · Afrobeat',    dur:'2h 45m' },
  { title:'Keroncong After Dark',                   meta:'Various · Jazz Fusion',              dur:'1h 15m' },
  { title:'Subuh Frequencies Vol. 3',               meta:'Mas Joko · Ambient',                dur:'2h 00m' },
  { title:'Dangdut Edits Vol. 6',                   meta:'DJ Kliwon · Club',                  dur:'58m' },
]

export default function Archive() {
  const mono = { fontFamily:'DM Mono,monospace' }
  return (
    <section id="archive">
      <div style={{ ...mono, fontSize:8, color:'#383838', letterSpacing:3, textTransform:'uppercase', padding:'24px 24px 14px', borderTop:'1px solid #1a1a1a' }}>Archive</div>
      {ITEMS.map((item, i) => <ArchiveRow key={i} item={item} num={i + 1} />)}
    </section>
  )
}

function ArchiveRow({ item, num }) {
  const [hov, setHov] = React.useState(false)
  const mono = { fontFamily:'DM Mono,monospace' }
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'13px 24px', borderBottom:'1px solid #121212', background: hov ? '#111' : 'transparent', cursor:'pointer', transition:'background .15s' }}>
      <div style={{ display:'flex', alignItems:'center', gap:16 }}>
        <span style={{ ...mono, fontSize:9, color:'#222', width:20, textAlign:'right', flexShrink:0 }}>{String(num).padStart(2,'0')}</span>
        <div>
          <div style={{ fontSize:12, color: hov ? '#FF5A00' : '#e8e8e8', transition:'color .15s' }}>{item.title}</div>
          <div style={{ ...mono, fontSize:9, color:'#2a2a2a', marginTop:2 }}>{item.meta}</div>
        </div>
      </div>
      <span style={{ ...mono, fontSize:9, color:'#2a2a2a', flexShrink:0 }}>{item.dur}</span>
    </div>
  )
}