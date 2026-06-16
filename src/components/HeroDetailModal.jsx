import '../styles/HeroDetailModal.css'

export default function HeroDetailModal({
  card,
  onClose,
}) {
  return (
    <div
      className="hero-modal-backdrop"
      onClick={onClose}
    >
      <div
        className="hero-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="hero-modal-close"
          onClick={onClose}
        >
          ✕
        </button>

        <img
          src={card.images[0]}
          alt={card.title}
          className="hero-modal-cover"
        />

        <div className="hero-modal-content">

          <div className="hero-modal-eyebrow">
            {card.eyebrow}
          </div>

          <h2 className="hero-modal-title">
            {card.title.replace('\n', ' ')}
          </h2>

          <p className="hero-modal-description">
            {card.description}
          </p>

          <div className="hero-modal-meta">
            {card.meta}
          </div>

          <div className="hero-modal-gallery">
            {card.images.map((image) => (
              <img
                key={image}
                src={image}
                alt=""
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}