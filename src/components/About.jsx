import {
    FaInstagram,
    FaYoutube,
    FaEnvelope
  } from 'react-icons/fa'
  
  import { SiMixcloud } from 'react-icons/si'
  
  import '../styles/About.css'
  
  export default function About() {
    const socials = [
      {
        label: 'Email',
        href: 'mailto:suratmi.fm.gmail.com',
        icon: <FaEnvelope />,
      },
      {
        label: 'Instagram',
        href: 'https://instagram.com/suratmifm',
        icon: <FaInstagram />,
      },
      {
        label: 'WhatsApp',
        href: '+62 62 816-830-009',
        icon: <SiMixcloud />,
      },
      {
        label: 'Youtube',
        href: '#',
        icon: <FaYoutube />,
      },
    ]
  
    return (
      <section
        id="about"
        className="about"
      >
        <span className="about__label">
          About SuratmiFM
        </span>
  
        <div className="about__grid">
  
          {/* LEFT */}
  
          <div className="about__text">
            <h2 className="about__heading">
              More than
              <br />
              just karaoke.
              <br />
              It's a show.
            </h2>
  
            <p className="about__body">
            SuratmiFM adalah event karaoke interaktif yang memadukan keseruan bernyanyi bareng dengan gimmick seru dan kuis berhadiah.

            </p>
  
            <p className="about__body">
            Bukan sekadar karaoke biasa, di sini batasan antara penonton dan penampil dilebur lewat atmosfer penuh energi. Ini adalah ruang buat seru-seruan, kenalan sama orang baru, dan pulang bawa cerita berkesan. Sing along, play games, and share the vibes!
            </p>
  
            {/* <p className="about__body">
              Bukan sekadar karaoke,
              SuratmiFM adalah tempat untuk
              bersenang-senang, bertemu orang
              baru, dan menciptakan kenangan
              yang akan terus dibicarakan
              setelah musik berhenti.
            </p> */}
          </div>
  
          {/* RIGHT */}
  
          <div className="about__contact">
  
            <h3 className="about__contact-title">
              Connect With Us
            </h3>
  
            <p className="about__contact-text">
              Follow SuratmiFM for upcoming
              events, music updates, and
              community activities.
            </p>
  
            <div className="about__socials">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="about__social"
                >
                  <span className="about__social-icon">
                    {social.icon}
                  </span>
  
                  <span>
                    {social.label}
                  </span>
  
                  <span className="about__social-arrow">
                    ↗
                  </span>
                </a>
              ))}
            </div>
  
            <div className="about__info">
              <span>Jakarta, Indonesia</span>
              {/* <span>Independent Community Radio</span> */}
            </div>
  
          </div>
  
        </div>
  
        <div className="about__bottom">
          © 2026 SURATMIFM
        </div>
      </section>
    )
  }