// Labelled placeholder tile. Stands in for the eleven real assets the
// handoff calls for (headshot, portrait, case images, icons, background
// photo) until they arrive — swap each for a real <next/image> then.
// Fills its parent, so the parent controls size and aspect ratio.

type PlaceholderProps = {
  label: string;
  /** "light" tiles sit on light sections, "dark" on the night/photo layers. */
  tone?: "light" | "dark";
  className?: string;
};

export default function Placeholder({
  label,
  tone = "light",
  className = "",
}: PlaceholderProps) {
  const tones =
    tone === "dark"
      ? "bg-night-deep text-[rgba(245,244,240,.5)]"
      : "bg-[#E7E3DA] text-ink-4";

  return (
    <div
      aria-hidden="true"
      className={`flex h-full w-full items-center justify-center overflow-hidden p-3 text-center ${tones} ${className}`}
    >
      <span className="font-mono text-[10px] uppercase leading-tight tracking-[.16em]">
        {label}
      </span>
    </div>
  );
}
