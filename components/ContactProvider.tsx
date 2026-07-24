"use client";

import { createContext, useContext, useEffect, useState } from "react";
import ContactPanel from "./ContactPanel";

interface Ctx {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

const ContactCtx = createContext<Ctx | null>(null);

/**
 * Wraps the app so any nested component can trigger the contact
 * slide-out via useContact(). Also renders the panel + overlay itself.
 *
 * Local state only — no external store. When open, we lock body scroll
 * so the panel becomes the only scroll target.
 */
export default function ContactProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setOpen] = useState(false);

  const open = () => setOpen(true);
  const close = () => setOpen(false);

  // Lock body scroll while open + close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <ContactCtx.Provider value={{ open, close, isOpen }}>
      {children}
      <ContactPanel isOpen={isOpen} onClose={close} />
    </ContactCtx.Provider>
  );
}

export function useContact(): Ctx {
  const ctx = useContext(ContactCtx);
  if (!ctx) {
    throw new Error("useContact must be used within a ContactProvider");
  }
  return ctx;
}
