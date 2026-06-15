import React from 'react'

const MIXES = [
    {
      tag: 'JAZZ FUSION',
      title: 'Keroncong\nAfter Dark',
      meta: '75 min · Archive',
      image:
        'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200',
    },
    {
      tag: 'INDUSTRIAL',
      title: 'Late Night Noise\nw/ Fauzi Rizal',
      meta: 'Every Friday',
      image:
        'https://images.unsplash.com/photo-1571266028243-d220c9c3b7b1?q=80&w=1200',
    },
    {
      tag: 'CLUB',
      title: 'Dangdut Edits\nVol. 7',
      meta: '60 min · New',
      image:
        'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200',
    },
  ]

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
        <img
          src={s.image}
          alt={s.title}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: hov
              ? 'grayscale(0%) contrast(110%)'
              : 'grayscale(100%) contrast(120%)',
            transform: hov ? 'scale(1.08)' : 'scale(1)',
            transition: 'all .6s ease',
          }}
        />
  
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: hov
              ? 'rgba(0,0,0,.75)'
              : 'linear-gradient(to top, rgba(0,0,0,.9), rgba(0,0,0,.25))',
            transition: '.4s',
          }}
        />
  
        <div
          style={{
            position: 'absolute',
            left: 20,
            right: 20,
            bottom: 20,
            zIndex: 2,
          }}
        >
          <div
            style={{
              ...mono,
              fontSize: 8,
              color: '#FF5A00',
              letterSpacing: 2,
              marginBottom: 8,
            }}
          >
            {s.tag}
          </div>
  
          <div
            style={{
              fontSize: 18,
              color: '#fff',
              lineHeight: 1.2,
              whiteSpace: 'pre-line',
              marginBottom: 6,
            }}
          >
            {s.title}
          </div>
  
          <div
            style={{
              ...mono,
              fontSize: 9,
              color: 'rgba(255,255,255,.55)',
            }}
          >
            {s.meta}
          </div>
        </div>
      </div>
    )
  }

  export default function MixGrid() {
    const mono = {
      fontFamily: 'DM Mono, monospace',
    }
  
    return (
      <section id="mixes">
        <div
          style={{
            padding: '80px 24px 40px',
            borderTop: '1px solid #1a1a1a',
          }}
        >
          <div
            style={{
              ...mono,
              fontSize: 8,
              color: '#FF5A00',
              letterSpacing: 3,
              marginBottom: 12,
            }}
          >
            MIXES
          </div>
  
          <h2
            style={{
              fontSize: 'clamp(32px,4vw,64px)',
              fontWeight: 300,
              lineHeight: '.95',
              color: '#e8e8e8',
              margin: 0,
              maxWidth: '700px',
            }}
          >
            Archived sounds,
            <br />
            live sessions,
            <br />
            and resident mixes.
          </h2>
        </div>
  
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: 1,
            background: '#1a1a1a',
          }}
        >
          {MIXES.map((s, i) => (
            <GridItem key={i} s={s} />
          ))}
        </div>
      </section>
    )
  }