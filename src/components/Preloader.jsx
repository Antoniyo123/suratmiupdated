import '../styles/Preloader.css'

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
        <img
          src="/suratmiFm.png"
          alt="SuratmiFM"
          className="preloader-logo"
        />
      </div>

    </div>
  )
}