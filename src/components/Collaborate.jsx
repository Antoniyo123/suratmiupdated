import '../styles/Collaborate.css'

export default function Collaborate() {
  const portraits = [
    {
      image: '/profile/alex.jpg',
      name: 'Alex',
      instagram: 'https://instagram.com/alexjorr1',
    },
    {
      image: '/profile/alfin.png',
      name: 'Pindu',
      instagram: 'https://instagram.com/alfinpanduu',
    },
    {
      image: '/profile/adit.png',
      name: 'Adit',
      instagram: 'https://instagram.com/adityasryksm',
    },
    {
      image: '/profile/chito.png',
      name: 'Mashito',
      instagram: 'https://instagram.com/mashito92',
    },
    {
      image: '/profile/fili.png',
      name: 'BangBert',
      instagram: 'https://instagram.com/fllbert',
    },
  ]

  return (
    <section
      id="collaborate"
      className="collaborate"
    >

      {/* Section Header */}

      <div className="collaborate-header">

        <h2 className="collaborate-heading">
          The People Behind
          <br />
          SuratmiFM
        </h2>

      </div>

      {/* Portrait Grid */}

      <div className="collaborate-grid">
  {portraits.map((profile, index) => (
    <a
      key={index}
      href={profile.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="collaborate-portrait"
    >
      <img
        src={profile.image}
        alt={profile.name}
        className={`collaborate-image ${
          index % 2 === 0 ? 'portrait-up' : 'portrait-down'
        }`}
      />

      <div className="profile-name">
        {profile.name}
      </div>

      <div className="profile-overlay">
        Instagram ↗
      </div>
    </a>
  ))}
</div>

    </section>
  )
}