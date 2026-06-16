import {
    FaInstagram,
    FaYoutube,
  } from 'react-icons/fa'
  
  import { SiMixcloud } from 'react-icons/si'
  
  import '../styles/About.css'
  
  export default function About() {
    const socials = [
      {
        label: 'Instagram',
        href: 'https://instagram.com/suratmifm',
        icon: <FaInstagram />,
      },
      {
        label: 'Mixcloud',
        href: '#',
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
              SuratmiFM adalah event karaoke
              interaktif yang menghadirkan
              pengalaman bernyanyi yang berbeda.
              Dipenuhi berbagai gimmick,
              tantangan seru, kuis berhadiah,
              dan lagu-lagu yang membuat semua
              orang ikut bernyanyi bersama.
            </p>
  
            <p className="about__body">
              Setiap acara dirancang untuk
              menciptakan momen yang tidak
              terduga. Dari permainan spontan,
              hadiah menarik, hingga suasana
              penuh energi yang membuat
              penonton dan peserta menjadi
              bagian dari pertunjukan.
            </p>
  
            <p className="about__body">
              Bukan sekadar karaoke,
              SuratmiFM adalah tempat untuk
              bersenang-senang, bertemu orang
              baru, dan menciptakan kenangan
              yang akan terus dibicarakan
              setelah musik berhenti.
            </p>
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
              <span>Independent Community Radio</span>
            </div>
  
          </div>
  
        </div>
  
        <div className="about__bottom">
          © 2026 SURATMIFM
        </div>
      </section>
    )
  }