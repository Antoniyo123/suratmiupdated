import {
    FaInstagram,
    FaYoutube,
  } from 'react-icons/fa'
  
  import { SiMixcloud } from 'react-icons/si'
  
  import '../styles/Footer.css'
  
  export default function Footer() {
    const socials = [
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
    ]
  
    return (
      <footer className="footer">
        <div className="footer-container">
  
          {/* Top */}
  
          <div className="footer-top">
            <div>
              <h2 className="footer-logo">
                SURATMI
                <br />
                FM
              </h2>
  
              <p className="footer-description">
                Independent internet radio
                broadcasting music and culture.
              </p>
            </div>
  
            <div className="footer-socials">
              {socials.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="footer-social-link"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
  
          {/* Navigation */}
  
          <div className="footer-nav">
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
                className="footer-nav-link"
              >
                {item}
              </a>
            ))}
          </div>
  
          {/* Bottom */}
  
          <div className="footer-bottom">
            <span>© 2026 SURATMIFM</span>
            <span>Jakarta, Indonesia</span>
          </div>
  
        </div>
      </footer>
    )
  }