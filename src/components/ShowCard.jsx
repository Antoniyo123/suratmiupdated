import React from 'react'

const COLORS = [
  'from-purple-900 to-indigo-900',
  'from-emerald-900 to-teal-900',
  'from-rose-900 to-pink-900',
  'from-amber-900 to-orange-900',
  'from-cyan-900 to-sky-900',
  'from-violet-900 to-fuchsia-900',
]

export default function ShowCard({ show, onPlay }) {
  const grad = COLORS[show.id % COLORS.length]

  return (
    <div className="show-card group" onClick={() => onPlay && onPlay(show)}>
      {/* Gradient placeholder as artwork */}
      <div
        className={`show-card-img bg-gradient-to-br ${grad} flex items-center justify-center`}
        style={{ aspectRatio: '1/1' }}
      >
        <span className="font-display text-5xl text-white/20 select-none">
          {show.title.slice(0, 2).toUpperCase()}
        </span>
      </div>

      {/* Bottom info overlay */}
      <div className="show-card-overlay" />
      <div className="show-card-info">
        <p className="font-mono text-orange-DEFAULT text-xs uppercase tracking-widest mb-1">
          {show.genre}
        </p>
        <p className="text-white font-semibold text-sm leading-tight mb-2">
          {show.title}
        </p>
        <button
          className="flex items-center gap-2 text-white/70 text-xs font-mono hover:text-orange-DEFAULT transition-colors"
          onClick={e => { e.stopPropagation(); onPlay && onPlay(show) }}
        >
          <PlayCircle /> Play episode
        </button>
      </div>

      {/* Static bottom info (always visible) */}
      <div className="p-3 bg-smoke">
        <p className="text-white text-sm font-semibold truncate">{show.title}</p>
        <p className="text-mist text-xs font-mono mt-0.5">{show.host}</p>
      </div>
    </div>
  )
}

const PlayCircle = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
    <polygon points="10,8 16,12 10,16" fill="currentColor"/>
  </svg>
)