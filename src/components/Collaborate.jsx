import '../styles/Collaborate.css'

export default function Collaborate() {
  const portraits = [
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200',
    'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200',
  ]

  return (
    <section
      id="collaborate"
      className="collaborate"
    >
      {/* Portrait Background */}

      <div className="collaborate-grid">
        {portraits.map((img, index) => (
          <div
            key={index}
            className="collaborate-portrait"
          >
            <img
              src={img}
              alt=""
              className={`collaborate-image ${
                index % 2 === 0
                  ? 'portrait-up'
                  : 'portrait-down'
              }`}
            />
          </div>
        ))}
      </div>

      {/* Overlay */}

      <div className="collaborate-overlay" />

      {/* Content */}

      <div className="collaborate-content">
        <div className="collaborate-label">
          Open For Collaboration
        </div>

        <h2 className="collaborate-title">
          LET'S
          <br />
          COLLABORATE
        </h2>

        <p className="collaborate-description">
          SuratmiFM works with artists,
          labels, collectives, venues,
          communities and cultural projects.
          If you have an idea worth sharing,
          let's build something meaningful
          together.
        </p>

        <div className="collaborate-actions">
          <button className="collaborate-primary-btn">
          Connect With Us
          </button>

          <button className="collaborate-secondary-btn">
            Submit Music
          </button>
        </div>
      </div>
    </section>
  )
}