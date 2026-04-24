import { Container } from "@/components/ui/Container";

const links = [
  { href: "#designs", label: "Designs" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-luxury-border bg-black py-12">
      <Container className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold text-white">Media Walls</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-luxury-muted">
            Premium media walls, smart RGBWW lighting, and AV integration — installed fast, finished flawlessly.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.15em] text-gold/80">Areas covered</p>
          <p className="mt-1 text-sm text-luxury-muted">Birmingham to Scotland / North of England</p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-luxury-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-gold">
              {l.label}
            </a>
          ))}
        </nav>
      </Container>
      <Container className="mt-10 border-t border-white/5 pt-8">
        <p className="text-center text-xs text-luxury-muted">
          © {new Date().getFullYear()} Media Walls. All rights reserved. Placeholder branding for presentation.
        </p>
      </Container>
    </footer>
  );
}
