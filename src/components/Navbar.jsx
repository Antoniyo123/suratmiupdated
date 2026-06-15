const NAV_LINKS = ['Shows', 'Mixes', 'Schedule', 'Archive', 'About']

export default function Navbar() {
    const links = ['Shows', 'Mixes', 'Schedule', 'Archive', 'About']
    return (
      <nav style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'20px 24px', borderBottom:'1px solid #1a1a1a', background:'#0c0c0c', position:'sticky', top:0, zIndex:100 }}>
        <div style={{ fontFamily:'DM Mono,monospace', fontSize:15, fontWeight:500, letterSpacing:1, color:'#e8e8e8' }}>
          SURATMI<span style={{ color:'#FF5A00' }}>FM</span>
        </div>
        <div style={{ display:'flex', gap:20 }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ fontFamily:'DM Mono,monospace', fontSize:9, color:'#444', textDecoration:'none', letterSpacing:2, textTransform:'uppercase', transition:'color .15s' }}
              onMouseEnter={e => e.target.style.color='#e8e8e8'}
              onMouseLeave={e => e.target.style.color='#444'}
            >{l}</a>
          ))}
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:6, fontFamily:'DM Mono,monospace', fontSize:9, color:'#FF5A00', letterSpacing:2 }}>
          <span style={{ width:4, height:4, background:'#FF5A00', borderRadius:'50%', display:'inline-block', animation:'pulse 1.5s infinite' }} />
          ON AIR
          <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.1}}`}</style>
        </div>
      </nav>
    )
  }