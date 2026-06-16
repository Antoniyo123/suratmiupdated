import '../styles/Preloader.css'

const letters = 'SuratmiFM'.split('')

const images = [
  '/img/pic.jpg',
  '/img/pic1.jpg',
  '/img/pic2.jpg',
  '/img/pic3.jpg',
  '/img/pic4.jpg',
  '/img/pic5.jpg',
]

export default function Preloader() {
  return (
    <div className="preloader">

      <div className="preloader-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className="preloader-image"
          >
            <img
              src={image}
              alt=""
            />
          </div>
        ))}
      </div>

      <div className="preloader-overlay" />

      <div className="preloader-content">
        <h1 className="preloader-title">
          {letters.map((letter, index) => (
            <span
              key={index}
              style={{
                animationDelay: `${index * 0.12}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </h1>

        <p className="preloader-subtitle">
          Community Event
        </p>
      </div>

    </div>
  )
}