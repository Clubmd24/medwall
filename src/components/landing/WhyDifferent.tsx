"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/landing/MotionSection";
import { SectionHeading } from "@/components/landing/SectionHeading";

const points = [
  {
    title: "Pre-built off-site components",
    body: "Carcasses, lighting channels, and AV paths are assembled in a controlled environment — not improvised on your carpet.",
  },
  {
    title: "Minimal mess on site",
    body: "Short programme, dust-managed cuts, and tidy handover — designed around occupied homes.",
  },
  {
    title: "Smart RGBWW lighting scenes",
    body: "True warm-to-cool whites plus saturated accents — tuned for film, focus, and wind-down.",
  },
  {
    title: "Hidden AV source rack",
    body: "One quiet home for boxes, consoles, and networking — only the screen stays in view.",
  },
  {
    title: "5.1 surround sound options",
    body: "Architectural speakers and calibrated layouts for immersive living-room cinema.",
  },
  {
    title: "Relocatable system",
    body: "Moving home? Take it with you. The wall is designed to move — not demolish.",
  },
];

export function WhyDifferent() {
  return (
    <MotionSection className="border-y border-luxury-border bg-luxury-surface/30 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Difference"
          title="Why We're Different"
          description="Every detail exists to protect your home, your time, and your resale story."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p, i) => (
            <motion.li
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              className="rounded-2xl border border-luxury-border bg-luxury-bg/60 p-5 transition hover:border-gold/25 hover:bg-luxury-elevated/80"
            >
              <span className="mb-3 block h-px w-10 bg-gradient-to-r from-gold to-transparent" />
              <h3 className="font-display text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-luxury-muted">{p.body}</p>
            </motion.li>
          ))}
        </ul>
      </Container>
    </MotionSection>
  );
}
