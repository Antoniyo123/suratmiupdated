import '../styles/About.css'

const links = ['Instagram', 'Submission', 'Support Us']

export default function About() {
  return (
    <section id="about" className="about">
      <span className="about__label">About</span>

      <div className="about__grid">
        <div className="about__text">
          <h2 className="about__heading">
            Independent radio<br />
            for people who<br />
            actually listen.
          </h2>
          <p className="about__body">
            suratmiFM adalah stasiun radio independen yang mengudara 24 jam
            sehari. Sebuah ruang untuk musik, percakapan, eksperimen, dan
            komunitas yang tumbuh di luar algoritma.
          </p>
          <p className="about__body">
            Kami percaya bahwa suara terbaik lahir dari pinggiran. Dari
            ruang-ruang kecil, malam-malam panjang, dan orang-orang yang
            benar-benar peduli terhadap budaya yang mereka bangun.
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