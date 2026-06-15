export default function Navbar() {
    const mono = {
      fontFamily: 'DM Mono, monospace',
    }
  
    return (
      <header
        style={{
          background: '#FF4D00',
          height: 88,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 32px',
          position: 'sticky',
          top: 0,
          zIndex: 999,
        }}
      >
        {/* Left */}
  
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
          }}
        >
          <button
            style={{
              width: 44,
              height: 44,
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              color: '#fff',
            }}
          >
            ▶
          </button>
  
          <div
            style={{
              border: '2px solid rgba(255,255,255,.8)',
              borderRadius: 12,
              padding: '10px 16px',
              minWidth: 320,
              color: '#fff',
              fontSize: 18,
            }}
          >
            Live Now — Malam Minggu w/ DJ Lastri
          </div>
        </div>
  
        {/* Center */}
  
        <div
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontFamily: 'Instrument Serif, serif',
              fontSize: 42,
              lineHeight: 1,
              color: '#fff',
            }}
          >
            suratmiFM
          </div>
        </div>
  
        {/* Right */}
  
        <button
          style={{
            border: 'none',
            background: 'transparent',
            color: '#fff',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
          }}
        >
          <span
            style={{
              width: 28,
              height: 2,
              background: '#fff',
              display: 'block',
            }}
          />
  
          <span
            style={{
              width: 28,
              height: 2,
              background: '#fff',
              display: 'block',
            }}
          />
  
          <span
            style={{
              width: 28,
              height: 2,
              background: '#fff',
              display: 'block',
            }}
          />
        </button>
      </header>
    )
  }