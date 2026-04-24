"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/landing/MotionSection";
import { SectionHeading } from "@/components/landing/SectionHeading";

const scenes = [
  { name: "Movie mode", tone: "from-amber-500/40 to-orange-950/60" },
  { name: "Relax mode", tone: "from-violet-500/30 to-indigo-950/50" },
  { name: "Gaming mode", tone: "from-cyan-400/35 to-emerald-950/50" },
];

export function SmartLightingAV() {
  return (
    <MotionSection className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Smart lighting & AV"
              title="One wall. One brain. Every source hidden."
              description="Alexa-controlled scenes, a whisper-quiet equipment rack, and centralised control for Sky, Fire TV, Xbox, AV receiver, network switches, and more — routed once, accessed everywhere."
            />
            <ul className="mt-8 space-y-4 text-sm text-luxury-muted">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                Voice scenes sync colour temperature with content and time of day.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                IR / IP / HDMI matrix options — pick up any remote and the rack responds.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                Thermal management and service access built in — no more cable spaghetti.
              </li>
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {scenes.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className={`relative overflow-hidden rounded-2xl border border-luxury-border bg-gradient-to-br ${s.tone} p-6 min-h-[140px] shadow-inner transition hover:border-gold/40`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Scene</p>
                <p className="mt-2 font-display text-xl text-white">{s.name}</p>
                <div className="pointer-events-none absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border border-luxury-border bg-luxury-elevated/50 p-6 sm:p-8"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Hidden rack</p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-luxury-muted">
                Equipment lives in a ventilated, acoustically isolated bay — not on show. Sky Q, Apple TV, consoles,
                and receivers stay accessible to you, invisible to guests.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2">
              {["Sky", "Fire TV", "Xbox", "AVR", "Network"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-luxury-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </MotionSection>
  );
}
