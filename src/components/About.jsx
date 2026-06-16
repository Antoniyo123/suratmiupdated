import '../styles/About.css'

const links = ['Instagram', 'Register', 'Partnership']

export default function About() {
  return (
    <section id="about" className="about">
      <span className="about__label">About</span>

      <div className="about__grid">
        <div className="about__text">
          <h2 className="about__heading">
            More than<br />
            just karaoke.<br />
            It's a show.
          </h2>

          <p className="about__body">
            SuratmiFM adalah event karaoke interaktif yang menghadirkan
            pengalaman bernyanyi yang berbeda. Dipenuhi berbagai gimmick,
            tantangan seru, kuis berhadiah, dan lagu-lagu yang membuat semua
            orang ikut bernyanyi bersama.
          </p>

          <p className="about__body">
            Setiap acara dirancang untuk menciptakan momen yang tidak terduga.
            Dari permainan spontan, hadiah menarik, hingga suasana penuh energi
            yang membuat penonton dan peserta menjadi bagian dari pertunjukan.
          </p>

          <p className="about__body">
            Bukan sekadar karaoke, SuratmiFM adalah tempat untuk bersenang-senang,
            bertemu orang baru, dan menciptakan kenangan yang akan terus
            dibicarakan setelah musik berhenti.
          </p>
        </div>

        <nav className="about__links" aria-label="External links">
          {links.map((link) => (
            <a key={link} href="#" className="about__link">
              {link}
              <span className="about__link-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  )
}