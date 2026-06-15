import {
    FaInstagram,
    FaYoutube,
  } from 'react-icons/fa'
  
  import { SiMixcloud } from 'react-icons/si'
  
  export default function Footer() {
    return (
      <footer
        style={{
          background: '#FF5A00',
          color: '#fff',
          marginTop: 120,
        }}
      >
        <div
          style={{
            maxWidth: 1600,
            margin: '0 auto',
            padding: '100px 32px 50px',
          }}
        >
          {/* Logo */}
  
          <div
            style={{
              marginBottom: 50,
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(72px,10vw,140px)',
                lineHeight: '.85',
                margin: 0,
                fontWeight: 700,
                letterSpacing: -4,
                textTransform: 'uppercase',
              }}
            >
              SURATMI
              <br />
              FM
            </h2>
  
            <p
              style={{
                marginTop: 24,
                fontSize: 20,
                maxWidth: 380,
                lineHeight: 1.7,
                opacity: .9,
              }}
            >
              Independent internet radio
              broadcasting music, culture
              and creative communities.
            </p>
          </div>
  
          {/* Social */}
  
          <div
            style={{
              display: 'flex',
              gap: 18,
              marginBottom: 60,
            }}
          >
            {[
              {
                icon: <FaInstagram />,
                href: '#',
              },
              {
                icon: <SiMixcloud />,
                href: '#',
              },
              {
                icon: <FaYoutube />,
                href: '#',
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: 22,
                  textDecoration: 'none',
                  transition: '.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#fff'
                  e.currentTarget.style.color = '#FF5A00'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = '#fff'
                }}
              >
                {item.icon}
              </a>
            ))}
          </div>
  
          {/* Navigation */}
  
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 28,
              paddingTop: 40,
              borderTop: '1px solid rgba(255,255,255,.2)',
            }}
          >
            {[
              'About',
              'Submit Music',
              'Collaborate',
              'Archive',
              'Contact',
            ].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: 15,
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                }}
              >
                {item}
              </a>
            ))}
          </div>
  
          {/* Bottom */}
  
          <div
            style={{
              marginTop: 70,
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 20,
              opacity: .75,
              fontSize: 13,
            }}
          >
            <span>
              © 2026 SURATMIFM
            </span>
  
            <span>
              Jakarta — Indonesia
            </span>
          </div>
        </div>
      </footer>
    )
  }