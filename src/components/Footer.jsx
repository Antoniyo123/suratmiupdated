export default function Footer() {
    const mono = {
      fontFamily: 'DM Mono, monospace',
    }
  
    const links = [
      'Instagram',
      'Schedule',
      'Submission',
      'Contact',
    ]
  
    return (
      <footer
        style={{
          borderTop: '1px solid #1a1a1a',
          padding: '100px 24px 32px',
        }}
      >
        {/* Big Logo */}
        <div
          style={{
            marginBottom: 80,
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(64px,12vw,180px)',
              lineHeight: '.85',
              fontWeight: 300,
              letterSpacing: '-0.06em',
              color: '#e8e8e8',
              margin: 0,
            }}
          >
            SURATMI
            <span style={{ color: '#FF5A00' }}>FM</span>
          </h2>
  
          <p
            style={{
              marginTop: 16,
              color: '#555',
              fontSize: 14,
              maxWidth: 320,
              lineHeight: 1.7,
            }}
          >
            Independent radio platform,
            broadcasting music, culture,
            and conversations beyond
            the algorithm.
          </p>
        </div>
  
        {/* Footer Bottom */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: 40,
            alignItems: 'end',
          }}
        >
          <div>
            <div
              style={{
                ...mono,
                fontSize: 8,
                color: '#444',
                letterSpacing: 2,
                marginBottom: 12,
              }}
            >
              NAVIGATION
            </div>
  
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 24,
              }}
            >
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    ...mono,
                    fontSize: 10,
                    color: '#777',
                    textDecoration: 'none',
                    letterSpacing: 1.5,
                    textTransform: 'uppercase',
                    transition: '.2s',
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
  
          <div
            style={{
              textAlign: 'right',
            }}
          >
            <div
              style={{
                ...mono,
                fontSize: 8,
                color: '#444',
                letterSpacing: 2,
                marginBottom: 8,
              }}
            >
              BASED IN INDONESIA
            </div>
  
            <div
              style={{
                ...mono,
                fontSize: 9,
                color: '#666',
                letterSpacing: 1,
              }}
            >
              © 2026 SURATMIFM
            </div>
          </div>
        </div>
      </footer>
    )
  }