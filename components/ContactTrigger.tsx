"use client";

import { useContact } from "./ContactProvider";

type Element = "button" | "span" | "a";

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: Element;
  ariaLabel?: string;
}

/**
 * Renders an element that opens the contact slide-out on click.
 * Used from nav, hero, About "Work with me →" link, CTA button, and
 * the footer "Contact" link — anywhere the design asks for a click
 * to open contact rather than navigate.
 */
export default function ContactTrigger({
  children,
  className,
  style,
  as = "button",
  ariaLabel,
}: Props) {
  const { open } = useContact();

  if (as === "a") {
    return (
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          open();
        }}
        aria-label={ariaLabel}
        className={className}
        style={style}
      >
        {children}
      </a>
    );
  }
  if (as === "span") {
    return (
      <span
        role="button"
        tabIndex={0}
        onClick={open}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            open();
          }
        }}
        aria-label={ariaLabel}
        className={className}
        style={style}
      >
        {children}
      </span>
    );
  }
  return (
    <button
      type="button"
      onClick={open}
      aria-label={ariaLabel}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
}
