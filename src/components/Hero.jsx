import { useState, useEffect } from 'react'

const FEATURES = [
  {
    tag: 'NOW PLAYING',
    title: 'Malam Minggu\nw/ DJ Lastri',
    meta: 'Deep House • Live from Studio B',
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1600',
  },
  {
    tag: 'FEATURED',
    title: 'Reog Techno\nSessions Vol. 4',
    meta: 'Experimental • 90 min',
    image:
      'https://images.unsplash.com/photo-1571266028243-d220c9c3b7b1?q=80&w=1600',
  },
  {
    tag: 'ARCHIVE',
    title: 'Keroncong\nAfter Dark',
    meta: 'Jazz Fusion • 75 min',
    image:
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1600',
  },
]

const SCHEDULE = [
  {
    time: '06:00',
    title: 'Subuh Frequencies',
    meta: 'Ambient',
  },
  {
    time: '12:00',
    title: 'Dangdut Edits Vol. 7',
    meta: 'Club',
  },
  {
    time: '18:00',
    title: 'Reog Techno Sessions',
    meta: 'Experimental',
  },
  {
    time: '22:00',
    title: 'Late Night Noise',
    meta: 'Industrial',
  },
]

export default function Hero() {
  const [active, setActive] = useState(0)

  const mono = {
    fontFamily: 'DM Mono, monospace',
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % FEATURES.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  const current = FEATURES[active]

  return (
    <section
      style={{
        borderBottom: '1px solid #1a1a1a',
      }}
    >
      {/* Hero Intro */}

      <div
        style={{
          padding: '90px 24px 70px',
          borderBottom: '1px solid #1a1a1a',
        }}
      >
        <div
          style={{
            ...mono,
            fontSize: 9,
            color: '#FF5A00',
            letterSpacing: 3,
            marginBottom: 24,
          }}
        >
          SURATMIFM
        </div>

        <h1
          style={{
            fontFamily: 'Instrument Serif, serif',
            fontSize: 'clamp(64px,8vw,120px)',
            lineHeight: '.88',
            letterSpacing: '-0.05em',
            color: '#e8e8e8',
            fontWeight: 400,
            margin: 0,
            maxWidth: '900px',
          }}
        >
          Independent radio
          <br />
          for people who
          <br />
          actually listen.
        </h1>

        <p
          style={{
            maxWidth: 600,
            marginTop: 36,
            marginBottom: 0,
            color: '#666',
            fontSize: 18,
            lineHeight: 1.8,
          }}
        >
          Broadcasting independent music,
          conversations and culture from
          Jakarta to wherever you're listening.
        </p>

        <div
          style={{
            display: 'flex',
            gap: 12,
            marginTop: 42,
          }}
        >
          <button
            style={{
              ...mono,
              background: '#FF5A00',
              color: '#fff',
              border: 'none',
              padding: '14px 28px',
              fontSize: 10,
              letterSpacing: 2,
              cursor: 'pointer',
            }}
          >
            LISTEN LIVE
          </button>

          <button
            style={{
              ...mono,
              background: 'transparent',
              color: '#777',
              border: '1px solid #1a1a1a',
              padding: '14px 28px',
              fontSize: 10,
              letterSpacing: 2,
              cursor: 'pointer',
            }}
          >
            VIEW SCHEDULE
          </button>
        </div>
      </div>

      {/* Section Header */}

      <div
        style={{
          padding: '20px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: '1px solid #1a1a1a',
        }}
      >
        <span
          style={{
            ...mono,
            fontSize: 8,
            letterSpacing: 3,
            color: '#FF5A00',
          }}
        >
          FEATURED PROGRAMMING
        </span>

        <span
          style={{
            ...mono,
            fontSize: 8,
            letterSpacing: 2,
            color: '#555',
          }}
        >
          LIVE • 24/7
        </span>
      </div>

      {/* Main Grid */}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.7fr .8fr',
          minHeight: '540px',
        }}
      >
        {/* Featured */}

        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <img
            src={current.image}
            alt={current.title}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'grayscale(100%) contrast(120%)',
              transform: 'scale(1.06)',
            }}
          />

          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(0,0,0,.92), rgba(0,0,0,.2))',
            }}
          />

          <div
            style={{
              position: 'absolute',
              left: 32,
              right: 32,
              bottom: 32,
              zIndex: 2,
            }}
          >
            <div
              style={{
                ...mono,
                color: '#FF5A00',
                fontSize: 8,
                letterSpacing: 2,
                marginBottom: 10,
              }}
            >
              {current.tag}
            </div>

            <h2
              style={{
                color: '#fff',
                fontSize: 42,
                lineHeight: 1,
                fontWeight: 300,
                margin: 0,
                whiteSpace: 'pre-line',
              }}
            >
              {current.title}
            </h2>

            <div
              style={{
                ...mono,
                marginTop: 12,
                color: 'rgba(255,255,255,.65)',
                fontSize: 10,
                letterSpacing: 1,
              }}
            >
              {current.meta}
            </div>
          </div>

          <div
            style={{
              position: 'absolute',
              right: 24,
              bottom: 24,
              display: 'flex',
              gap: 8,
              zIndex: 3,
            }}
          >
            {FEATURES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  background:
                    i === active
                      ? '#FF5A00'
                      : 'rgba(255,255,255,.25)',
                }}
              />
            ))}
          </div>
        </div>

        {/* Schedule */}

        <div
          style={{
            borderLeft: '1px solid #1a1a1a',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              ...mono,
              padding: 24,
              fontSize: 8,
              color: '#FF5A00',
              letterSpacing: 3,
              borderBottom: '1px solid #1a1a1a',
            }}
          >
            TODAY'S SCHEDULE
          </div>

          {SCHEDULE.map((item, index) => (
            <div
              key={index}
              style={{
                padding: '22px 24px',
                borderBottom: '1px solid #141414',
              }}
            >
              <div
                style={{
                  ...mono,
                  fontSize: 10,
                  color: '#555',
                  marginBottom: 8,
                }}
              >
                {item.time}
              </div>

              <div
                style={{
                  color: '#e8e8e8',
                  fontSize: 18,
                  lineHeight: 1.3,
                  marginBottom: 4,
                }}
              >
                {item.title}
              </div>

              <div
                style={{
                  ...mono,
                  color: '#666',
                  fontSize: 9,
                }}
              >
                {item.meta}
              </div>
            </div>
          ))}

          <div
            style={{
              marginTop: 'auto',
              padding: 24,
            }}
          >
            <button
              style={{
                ...mono,
                width: '100%',
                background: 'transparent',
                border: '1px solid #1a1a1a',
                color: '#777',
                padding: '14px',
                fontSize: 9,
                letterSpacing: 2,
                cursor: 'pointer',
              }}
            >
              FULL SCHEDULE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}