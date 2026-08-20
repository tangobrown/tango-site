// Neutral stone image placeholder used until real assets land (handoff
// open item #6). Fills its parent; swap for a real <next/image fill> later.
// Carries a faint label so each slot's intended content is obvious in dev.

export default function Placeholder({ label }: { label?: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-stone p-4 text-center">
      {label ? (
        <span className="text-[11px] uppercase tracking-[0.12em] text-muted/70">{label}</span>
      ) : null}
    </div>
  );
}
