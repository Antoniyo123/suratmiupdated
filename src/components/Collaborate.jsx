import '../styles/Collaborate.css'

export default function Collaborate() {
  const portraits = [
    {
      image: '/profile/alex.png',
      instagram: 'https://instagram.com/alexjorr1',
    },
    {
      image: '/profile/alfin.png',
      instagram: 'https://instagram.com/alfinpanduu',
    },
    {
      image: '/profile/adit.png',
      instagram: 'https://instagram.com/adityasryksm',
    },
    {
      image: '/profile/chito.png',
      instagram: 'https://instagram.com/mashito92',
    },
    {
      image: '/profile/fili.png',
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
    {/* <span className="collaborate-label">
      
    </span> */}

    <h2 className="collaborate-heading">
      The People Behind
      <br />
      SuratmiFM
    </h2>

    {/* <p className="collaborate-intro">
      SuratmiFM is powered by a small collective of
      selectors, DJs, creatives, and music lovers.
      Meet the people who keep the station running,
      curate the music, and shape the community.
      Click a profile to connect directly through
      Instagram.
    </p> */}
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
          alt=""
          className={`collaborate-image ${
            index % 2 === 0
              ? 'portrait-up'
              : 'portrait-down'
          }`}
        />

        <div className="profile-overlay">
          Instagram ↗
        </div>
      </a>
    ))}
  </div>

</section>
  )
}