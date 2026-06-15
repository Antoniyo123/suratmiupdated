import React, { useState } from 'react'

const SLOTS = [
    { time:'22:00', title:'Malam Minggu w/ DJ Lastri',        genre:'Deep House',    badge:'LIVE NOW', live:true },
    { time:'00:00', title:'Late Night Noise w/ Fauzi Rizal',  genre:'Industrial',    badge:'NEXT',     live:false },
    { time:'04:00', title:'Subuh Frequencies w/ Mas Joko',    genre:'Ambient',       badge:'04:00 WIB',live:false },
    { time:'06:00', title:'Reog Techno Sessions',              genre:'Experimental',  badge:'MORNING',  live:false },
  ]
  
  export default function Schedule() {
    const mono = { fontFamily:'DM Mono,monospace' }
    return (
      <section id="schedule">
        <div style={{ ...mono, fontSize:8, color:'#383838', letterSpacing:3, textTransform:'uppercase', padding:'24px 24px 14px', borderTop:'1px solid #1a1a1a' }}>
          Schedule — Today
        </div>
        {SLOTS.map((s, i) => (
          <Row key={i} s={s} />
        ))}
      </section>
    )
  }
  
  function Row({ s }) {
    const [hov, setHov] = React.useState(false)
    const mono = { fontFamily:'DM Mono,monospace' }
    return (
      <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'13px 24px', borderBottom:'1px solid #121212', background: hov ? '#111' : 'transparent', cursor:'pointer', transition:'background .15s' }}>
        <div style={{ display:'flex', alignItems:'center', gap:20 }}>
          <span style={{ ...mono, fontSize:9, color:'#383838', letterSpacing:1, width:44, flexShrink:0 }}>{s.time}</span>
          <div>
            <div style={{ fontSize:12, color: hov ? '#FF5A00' : '#e8e8e8', transition:'color .15s' }}>{s.title}</div>
            <div style={{ ...mono, fontSize:9, color:'#2a2a2a', marginTop:2 }}>{s.genre}</div>
          </div>
        </div>
        <span style={{ ...mono, fontSize:8, letterSpacing:1.5, padding:'3px 8px', borderRadius:2, background: s.live ? 'rgba(255,90,0,.1)' : '#111', color: s.live ? '#FF5A00' : '#333' }}>
          {s.badge}
        </span>
      </div>
    )
  }