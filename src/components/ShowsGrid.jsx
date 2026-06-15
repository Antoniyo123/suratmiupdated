import React, { useState } from 'react'


const SHOWS = [
    {
      init: 'MM',
      tag: 'DEEP HOUSE',
      title: 'Malam Minggu\nw/ DJ Lastri',
      meta: 'Live · Studio B',
      image: 'https://picsum.photos/800/800?random=1',
    },
    {
      init: 'RT',
      tag: 'EXPERIMENTAL',
      title: 'Reog Techno\nSessions Vol. 4',
      meta: '90 min',
      image: 'https://picsum.photos/800/800?random=2',
    },
    {
      init: 'SF',
      tag: 'AMBIENT',
      title: 'Subuh Frequencies\nw/ Mas Joko',
      meta: 'Sat 04:00 WIB',
      image: 'https://picsum.photos/800/800?random=3',
    },
  ]
  
  export default function ShowGrid() {
    const mono = { fontFamily:'DM Mono,monospace' }
    return (
      <section id="shows">
        <div style={{ ...mono, fontSize:8, color:'#383838', letterSpacing:3, textTransform:'uppercase', padding:'24px 24px 14px', borderTop:'1px solid #1a1a1a' }}>Shows</div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:1, background:'#1a1a1a' }}>
          {SHOWS.map((s, i) => <GridItem key={i} s={s} />)}
        </div>
      </section>
    )
  }
  
  function GridItem({ s }) {
    const [hov, setHov] = React.useState(false)
  
    const mono = {
      fontFamily: 'DM Mono, monospace',
    }
  
    return (
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          aspectRatio: '1',
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
        }}
      >
        {/* Background Image */}
        <img
          src={s.image}
          alt={s.title}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: hov ? 'scale(1.08)' : 'scale(1)',
            transition: 'transform .6s ease',
          }}
        />
  
        {/* Dark Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              hov
                ? 'rgba(0,0,0,.75)'
                : 'linear-gradient(to top, rgba(0,0,0,.7), rgba(0,0,0,.2))',
            transition: '.3s',
          }}
        />
  
        {/* Initial */}
        <span
          style={{
            position: 'relative',
            zIndex: 2,
            fontSize: 48,
            fontWeight: 700,
            color: 'rgba(255,255,255,.12)',
            letterSpacing: -2,
            userSelect: 'none',
          }}
        >
          {s.init}
        </span>
  
        {/* Hover Content */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: 16,
            opacity: hov ? 1 : 0,
            transition: 'opacity .25s ease',
          }}
        >
          <div
            style={{
              ...mono,
              fontSize: 8,
              color: '#FF5A00',
              letterSpacing: 2,
              marginBottom: 6,
            }}
          >
            {s.tag}
          </div>
  
          <div
            style={{
              fontSize: 12,
              color: '#fff',
              lineHeight: 1.3,
              marginBottom: 3,
              whiteSpace: 'pre-line',
            }}
          >
            {s.title}
          </div>
  
          <div
            style={{
              ...mono,
              fontSize: 9,
              color: '#8a8a8a',
            }}
          >
            {s.meta}
          </div>
        </div>
      </div>
    )
  }