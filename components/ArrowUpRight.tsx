/**
 * Up-right (outbound) arrow used on external links — currently
 * the "Visit website" links on the work cards. currentColor so
 * the surrounding text colour drives it.
 */
export default function ArrowUpRight({
  className = "w-4 h-4",
}: {
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${className} shrink-0`}
      aria-hidden="true"
    >
      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
    </svg>
  );
}
