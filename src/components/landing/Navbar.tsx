"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { useEffect, useState } from "react";

const links = [
  { href: "#designs", label: "Designs" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled || menuOpen
          ? "border-luxury-border bg-luxury-bg/90 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-3 sm:h-[4.25rem] sm:gap-4">
        <a href="#" className="group flex min-w-0 items-center gap-2">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-sm font-semibold text-gold transition group-hover:border-gold/60">
            MW
          </span>
          <span className="truncate font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
            Media Walls
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-luxury-muted transition hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-luxury-border text-gold transition hover:border-gold/50 hover:bg-white/5 md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="relative block h-3.5 w-4">
              <motion.span
                className="absolute left-0 top-0 h-0.5 w-full rounded-full bg-current"
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="absolute left-0 top-1.5 h-0.5 w-full rounded-full bg-current"
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="absolute left-0 top-3 h-0.5 w-full rounded-full bg-current"
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              />
            </span>
          </button>
          <a
            href="#contact"
            className="rounded-full border border-gold/40 px-3 py-2 text-xs font-medium text-gold transition hover:border-gold hover:bg-gold/10 sm:px-4 sm:text-sm"
            onClick={() => setMenuOpen(false)}
          >
            <span className="sm:hidden">Start</span>
            <span className="hidden sm:inline">Start My Design</span>
          </a>
        </div>
      </Container>
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-luxury-border bg-luxury-bg/95 backdrop-blur-md md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                  className="rounded-lg px-3 py-3 text-base text-white/90 transition hover:bg-white/5 hover:text-gold"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </motion.a>
              ))}
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
