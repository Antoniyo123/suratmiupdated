export default function Collaborate() {
  const mono = {
    fontFamily: 'DM Mono, monospace',
  }

  return (
    <section
      id="collaborate"
      style={{
        position: 'relative',
        height: '85vh',
        minHeight: 700,
        overflow: 'hidden',
        borderTop: '1px solid #1A1A1A',
      }}
    >
      {/* Background */}

      <img
        src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2000"
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'grayscale(100%) contrast(130%)',
        }}
      />

      {/* Orange overlay */}

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'rgba(255,90,0,.78)',
          mixBlendMode: 'multiply',
        }}
      />

      {/* Content */}

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 40px',
        }}
      >
        <div
          style={{
            ...mono,
            fontSize: 10,
            letterSpacing: 3,
            color: '#fff',
            marginBottom: 20,
          }}
        >
          OPEN FOR COLLABORATION
        </div>

        <h2
          style={{
            fontSize: 'clamp(72px,12vw,220px)',
            lineHeight: '.85',
            fontWeight: 700,
            color: '#fff',
            margin: 0,
            textTransform: 'uppercase',
          }}
        >
          LET'S
          <br />
          COLLABORATE
        </h2>

        <p
          style={{
            marginTop: 30,
            maxWidth: 520,
            color: '#fff',
            fontSize: 18,
            lineHeight: 1.8,
          }}
        >
          We work with artists, brands,
          collectives, venues and cultural
          communities to create meaningful
          experiences through music.
        </p>

        <button
          style={{
            marginTop: 40,
            width: 'fit-content',
            padding: '16px 28px',
            background: '#fff',
            color: '#111',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          START A PROJECT
        </button>
      </div>
    </section>
  )
}