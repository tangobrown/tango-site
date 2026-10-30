// The site's arrow icon. Points right by default; `direction` rotates it.
// Sized in em so it scales with the text it sits beside.
const rotate = { right: "", left: "rotate-180", up: "-rotate-90", down: "rotate-90" } as const;

export default function Arrow({
  direction = "right",
  className = "",
}: {
  direction?: keyof typeof rotate;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={`inline-block h-[1.25em] w-[1.25em] flex-none ${rotate[direction]} ${className}`}
    >
      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
    </svg>
  );
}
