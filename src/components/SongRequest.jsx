export default function SongRequest() {
    const mono = {
      fontFamily: 'DM Mono, monospace',
    }
  
    const inputStyle = {
      width: '100%',
      background: 'transparent',
      border: 'none',
      borderBottom: '1px solid #222',
      padding: '16px 0',
      color: '#E8E8E8',
      fontSize: '15px',
      outline: 'none',
    }
  
    return (
      <section
        id="request"
        style={{
          padding: '120px 24px',
          borderTop: '1px solid #1A1A1A',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '100px',
            alignItems: 'start',
          }}
        >
          {/* Left */}
  
          <div>
            <div
              style={{
                ...mono,
                color: '#FF5A00',
                fontSize: 10,
                letterSpacing: 3,
                marginBottom: 24,
                textTransform: 'uppercase',
              }}
            >
              Request A Song
            </div>
  
            <h2
              style={{
                fontFamily: 'Instrument Serif, serif',
                fontSize: 'clamp(42px,5vw,80px)',
                lineHeight: '.92',
                fontWeight: 400,
                color: '#E8E8E8',
                marginBottom: 28,
              }}
            >
              Tell us what
              <br />
              should play next.
            </h2>
  
            <p
              style={{
                maxWidth: 420,
                color: '#777',
                fontSize: 16,
                lineHeight: 1.8,
              }}
            >
              Punya lagu favorit yang ingin diputar di
              SURATMIFM? Kirim request-mu dan kami akan
              memilih lagu-lagu terbaik untuk program
              berikutnya.
            </p>
  
            <div
              style={{
                marginTop: 50,
                display: 'flex',
                gap: 32,
              }}
            >
              <div>
                <div
                  style={{
                    ...mono,
                    color: '#FF5A00',
                    fontSize: 9,
                    letterSpacing: 2,
                    marginBottom: 8,
                  }}
                >
                  REQUESTS THIS WEEK
                </div>
  
                <div
                  style={{
                    fontSize: 48,
                    fontWeight: 300,
                  }}
                >
                  248
                </div>
              </div>
  
              <div>
                <div
                  style={{
                    ...mono,
                    color: '#FF5A00',
                    fontSize: 9,
                    letterSpacing: 2,
                    marginBottom: 8,
                  }}
                >
                  SONGS PLAYED
                </div>
  
                <div
                  style={{
                    fontSize: 48,
                    fontWeight: 300,
                  }}
                >
                  89
                </div>
              </div>
            </div>
          </div>
  
          {/* Right */}
  
          <form
            style={{
              borderTop: '1px solid #222',
              paddingTop: 10,
            }}
          >
            <input
              placeholder="Your Name"
              style={inputStyle}
            />
  
            <input
              placeholder="Song Title"
              style={inputStyle}
            />
  
            <input
              placeholder="Artist / Band"
              style={inputStyle}
            />
  
            <textarea
              placeholder="Message (optional)"
              rows="4"
              style={{
                ...inputStyle,
                resize: 'none',
              }}
            />
  
            <button
              type="submit"
              style={{
                marginTop: 32,
                background: '#FF5A00',
                border: 'none',
                color: '#fff',
                padding: '16px 28px',
                cursor: 'pointer',
                fontSize: 11,
                letterSpacing: 2,
                textTransform: 'uppercase',
                fontFamily: 'DM Mono, monospace',
              }}
            >
              Send Request
            </button>
          </form>
        </div>
      </section>
    )
  }