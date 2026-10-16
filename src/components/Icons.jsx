const iconProps = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export function FeatureIcon({ name }) {
  switch (name) {
    case 'palette':
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'calendar':
      return (
        <svg {...iconProps}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M8 3v4M16 3v4M3 10h18" />
        </svg>
      )
    case 'sparkle':
      return (
        <svg {...iconProps}>
          <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z" />
        </svg>
      )
    case 'heart':
      return (
        <svg {...iconProps}>
          <path
            d="M12 20.5s-7-4.5-7-10a4 4 0 0 1 7-2.5 4 4 0 0 1 7 2.5c0 5.5-7 10-7 10z"
          />
        </svg>
      )
    default:
      return null
  }
}

export function LogoMark() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
      <rect width="36" height="36" rx="10" fill="#D81B60" />
      <path
        d="M18 8l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6l2-6z"
        fill="#fff"
        opacity="0.95"
      />
    </svg>
  )
}

export function StarRating() {
  return (
    <span className="stars" aria-label="5 out of 5 stars">
      {'★★★★★'}
    </span>
  )
}
