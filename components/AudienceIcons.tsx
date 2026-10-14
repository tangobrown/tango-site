// Icons for the two audiences (service businesses / online stores).

// Service bell on a dark green tile.
export function ServiceIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" className={`rounded-[14px] ${className}`}>
      <rect width="512" height="512" rx="56" fill="#0e2a1f" />
      <rect x="232" y="150" width="48" height="22" rx="11" fill="#14a85a" />
      <rect x="246" y="166" width="20" height="40" fill="#14a85a" />
      <path d="M136 330 A120 120 0 0 1 376 330 Z" fill="#14a85a" />
      <path d="M186 300 A76 76 0 0 1 226 248" fill="none" stroke="#0e2a1f" strokeWidth="18" strokeLinecap="round" />
      <rect x="104" y="346" width="304" height="34" rx="17" fill="#14a85a" />
    </svg>
  );
}

// Shopping bag on a dark green tile.
export function EcommerceIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" className={`rounded-[14px] ${className}`}>
      <rect width="512" height="512" rx="56" fill="#0e2a1f" />
      <path d="M206 236 V180 A50 50 0 0 1 306 180 V236" fill="none" stroke="#14a85a" strokeWidth="28" strokeLinecap="round" />
      <path
        d="M146 206 H366 Q380 206 382 220 L398 380 Q400 404 376 404 H136 Q112 404 114 380 L130 220 Q132 206 146 206 Z"
        fill="#14a85a"
      />
      <circle cx="206" cy="246" r="14" fill="#0e2a1f" />
      <circle cx="306" cy="246" r="14" fill="#0e2a1f" />
    </svg>
  );
}
