export default function Icon({ name, size = 24, className = '' }) {
  const stroke = 'currentColor';
  const sw = 1.6;
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke,
    strokeWidth: sw,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    'aria-hidden': true,
  };

  switch (name) {
    case 'snowflake':
      return (
        <svg {...common}>
          <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1" />
          <path d="M9 5l3 2 3-2M9 19l3-2 3 2M5 9l2 3-2 3M19 9l-2 3 2 3" />
        </svg>
      );
    case 'steam':
      return (
        <svg {...common}>
          <path d="M5 12h14a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v0a3 3 0 0 1 3-3z" />
          <path d="M8 8c0-1 1-2 1-3M12 8c0-1 1-2 1-3M16 8c0-1 1-2 1-3" />
        </svg>
      );
    case 'heart':
      return (
        <svg {...common}>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case 'gift':
      return (
        <svg {...common}>
          <path d="M20 12v9H4v-9M2 7h20v5H2zM12 21V7M12 7H8a2 2 0 1 1 0-4c3 0 4 4 4 4M12 7h4a2 2 0 1 0 0-4c-3 0-4 4-4 4" />
        </svg>
      );
    case 'cart':
      return (
        <svg {...common}>
          <path d="M3 4h2l3 12h11l2-8H6" />
          <circle cx="9" cy="20" r="1.4" />
          <circle cx="17" cy="20" r="1.4" />
        </svg>
      );
    case 'truck':
      return (
        <svg {...common}>
          <path d="M1 6h12v10H1zM13 9h5l3 3v4h-8" />
          <circle cx="6" cy="18" r="2" />
          <circle cx="17" cy="18" r="2" />
        </svg>
      );
    case 'box':
      return (
        <svg {...common}>
          <path d="M3 7l9-4 9 4-9 4-9-4z" />
          <path d="M3 7v10l9 4 9-4V7M12 11v10" />
        </svg>
      );
    case 'plate':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
        </svg>
      );
    case 'thaw':
      return (
        <svg {...common}>
          <path d="M12 2v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" />
          <path d="M9 17a4 4 0 1 1 6-2.8" />
        </svg>
      );
    case 'calendar':
      return (
        <svg {...common}>
          <path d="M3 6h18v15H3zM3 10h18M8 3v4M16 3v4" />
        </svg>
      );
    case 'chat':
      return (
        <svg {...common}>
          <path d="M21 12a8 8 0 1 1-3-6.2L21 4l-1.2 3.2A8 8 0 0 1 21 12z" />
        </svg>
      );
    case 'star':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M12 2l3 6.5 7 .9-5 4.9 1.3 7-6.3-3.4L5.7 21l1.3-7-5-4.9 7-.9z" />
        </svg>
      );
    case 'check':
      return (
        <svg {...common}>
          <path d="M4 12l5 5 11-11" />
        </svg>
      );
    case 'arrow-right':
      return (
        <svg {...common}>
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      );
    case 'chevron-left':
      return (
        <svg {...common}>
          <path d="M15 6l-6 6 6 6" />
        </svg>
      );
    case 'chevron-right':
      return (
        <svg {...common}>
          <path d="M9 6l6 6-6 6" />
        </svg>
      );
    case 'line':
      return (
        <svg {...common}>
          <path d="M5 12h14M14 7l5 5-5 5" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}