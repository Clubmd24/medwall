"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/landing/MotionSection";
import { SectionHeading } from "@/components/landing/SectionHeading";

const steps = [
  { n: "01", title: "Upload your room photo", body: "Snap your space — we use it to scale proportions and lighting." },
  { n: "02", title: "Choose your wall style", body: "Browse living, bedroom, headboard, and cinema-led layouts." },
  { n: "03", title: "Preview it in your room", body: "See finishes, TV position, and RGBWW scenes in context." },
  { n: "04", title: "Get an estimated price range", body: "Instant guidance — not a final quote until we survey." },
  {
    n: "05",
    title: "Upgrade to a design & fixed quote pack",
    body: "Detailed drawings, AV routing, and a fixed price for install.",
  },
  { n: "06", title: "Installation in 1–2 days", body: "Pre-built modules mean less mess and a faster handover." },
];

export function HowItWorks() {
  return (
    <MotionSection id="how-it-works" className="border-t border-luxury-border bg-luxury-surface/40 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="How it works"
          description="From first photo to finished wall — a clear path with no guesswork."
          align="center"
          className="mx-auto max-w-3xl"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <motion.article
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-luxury-border bg-luxury-bg/80 p-6 shadow-sm transition-shadow duration-300 hover:border-gold/35 hover:shadow-[0_0_40px_rgba(212,175,95,0.08)]"
            >
              <span className="font-display text-4xl font-semibold text-gold/25 transition group-hover:text-gold/40">
                {s.n}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-luxury-muted">{s.body}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
}
