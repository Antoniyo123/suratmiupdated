export default function Hero() {
    const mono = {
      fontFamily: 'DM Mono, monospace',
    }
  
    return (
      <section
        style={{
          padding: '32px 24px 80px',
        }}
      >
        {/* Header */}
  
        <div
          style={{
            marginBottom: 32,
          }}
        >
          <div
            style={{
              ...mono,
              fontSize: 10,
              letterSpacing: 3,
              color: '#FF5A00',
              marginBottom: 12,
              textTransform: 'uppercase',
            }}
          >
            Community Radio
          </div>
  
          <h1
            style={{
              fontFamily: 'Instrument Serif, serif',
              fontSize: 'clamp(52px,8vw,110px)',
              fontWeight: 400,
              lineHeight: '.9',
              color: '#E8E8E8',
              margin: 0,
            }}
          >
            SURATMIFM
          </h1>
        </div>
  
        {/* Cards */}
  
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16,
          }}
        >
          <HeroCard
            image="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1800"
            title="Malam Minggu w/ DJ Lastri"
            subtitle="Every Saturday · 21:00 WIB"
            button="Listen Live"
          />
  
          <HeroCard
            image="https://images.unsplash.com/photo-1571266028243-d220c9c3b7b1?q=80&w=1800"
            title="SURATMI MIX 003: Gingerale"
            subtitle="Available on Mixcloud"
            button="Play Mix"
          />
        </div>
      </section>
    )
  }
  
  function HeroCard({
    image,
    title,
    subtitle,
    button,
  }) {
    return (
      <div
        style={{
          position: 'relative',
          aspectRatio: '1 / 1.05',
          overflow: 'hidden',
          border: '1px solid #FF5A00',
          borderRadius: 24,
          cursor: 'pointer',
        }}
      >
        {/* Background Image */}
  
        <img
          src={image}
          alt={title}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'grayscale(25%)',
          }}
        />
  
        {/* Overlay */}
  
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(0,0,0,.92), rgba(0,0,0,.25))',
          }}
        />
  
        {/* Content */}
  
        <div
          style={{
            position: 'absolute',
            left: 24,
            right: 24,
            bottom: 24,
            zIndex: 2,
          }}
        >
          {/* Title Box */}
  
          <div
            style={{
              background: '#0A0A0A',
              border: '1px solid #FF5A00',
              borderRadius: 16,
              padding: '18px 20px',
              marginBottom: 14,
            }}
          >
            <h2
              style={{
                color: '#fff',
                fontSize: 28,
                fontWeight: 600,
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              {title}
            </h2>
          </div>
  
          {/* Bottom Pills */}
  
          <div
            style={{
              display: 'flex',
              gap: 10,
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                background: '#0A0A0A',
                border: '1px solid #FF5A00',
                borderRadius: 999,
                padding: '10px 16px',
                color: '#fff',
                fontSize: 12,
              }}
            >
              {subtitle}
            </div>
  
            <div
              style={{
                background: '#0A0A0A',
                border: '1px solid #FF5A00',
                borderRadius: 999,
                padding: '10px 16px',
                color: '#fff',
                fontSize: 12,
              }}
            >
              {button}
            </div>
          </div>
        </div>
      </div>
    )
  }