export default function About() {
    const mono = {
      fontFamily: 'Instrument Serif, serif',
    }
  
    const links = [
      'Instagram',
      'Submission',
      'Support Us',
    ]
  
    return (
      <section
        id="about"
        style={{
          borderTop: '1px solid #1a1a1a',
          padding: '80px 24px',
        }}
      >
        <div
          style={{
            ...mono,
            fontSize: 8,
            letterSpacing: 3,
            color: '#FF5A00',
            marginBottom: 32,
          }}
        >
          ABOUT
        </div>
  
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.8fr .8fr',
            gap: '80px',
            alignItems: 'start',
          }}
        >
          {/* Main Text */}
          <div>
            <h2
              style={{
                fontSize: 'clamp(36px, 5vw, 72px)',
                fontWeight: 300,
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                color: '#e8e8e8',
                margin: 0,
                maxWidth: '900px',
              }}
            >
              Independent radio
              <br />
              for people who
              <br />
              actually listen.
            </h2>
  
            <p
              style={{
                marginTop: 40,
                maxWidth: '640px',
                fontSize: 18,
                lineHeight: 1.8,
                color: '#707070',
              }}
            >
              suratmiFM adalah stasiun radio independen yang
              mengudara 24 jam sehari. Sebuah ruang untuk
              musik, percakapan, eksperimen, dan komunitas
              yang tumbuh di luar algoritma.
            </p>
  
            <p
              style={{
                marginTop: 24,
                maxWidth: '640px',
                fontSize: 18,
                lineHeight: 1.8,
                color: '#707070',
              }}
            >
              Kami percaya bahwa suara terbaik lahir dari
              pinggiran. Dari ruang-ruang kecil, malam-malam
              panjang, dan orang-orang yang benar-benar
              peduli terhadap budaya yang mereka bangun.
            </p>
          </div>
  
          {/* Links */}
          <div>
            {links.map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  ...mono,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: '#555',
                  fontSize: 10,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  padding: '18px 0',
                  borderBottom: '1px solid #1a1a1a',
                  transition: 'all .2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#fff'
                  e.currentTarget.style.paddingLeft = '10px'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#555'
                  e.currentTarget.style.paddingLeft = '0'
                }}
              >
                {link}
                <span>↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    )
  }