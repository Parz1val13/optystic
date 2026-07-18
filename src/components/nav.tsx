"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { ButtonLink } from "./ui";

const LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line-soft bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8"
      >
        <Logo id="nav" className="text-[22px] md:text-2xl" />

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <ButtonLink href="/contact" size="sm">
            Start a project
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-full text-ink md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? (
              <path d="M6 6 L18 18 M18 6 L6 18" />
            ) : (
              <path d="M4 7 H20 M4 12 H20 M4 17 H20" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="flex flex-col border-t border-line-soft bg-paper px-5 pb-8 pt-3 md:hidden">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-line-soft py-4 font-display text-xl text-ink"
            >
              {l.label}
            </Link>
          ))}
          <ButtonLink href="/contact" className="mt-6">
            Start a project
          </ButtonLink>
        </div>
      )}
    </header>
  );
}
