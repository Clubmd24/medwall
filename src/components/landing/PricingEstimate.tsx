"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/landing/MotionSection";
import { SectionHeading } from "@/components/landing/SectionHeading";

export function PricingEstimate() {
  return (
    <MotionSection id="pricing" className="border-t border-luxury-border bg-luxury-surface/40 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Transparent estimates — fixed quotes when you’re ready"
          description="Online numbers are ranges based on typical scope. Your final price is confirmed after survey — never hidden behind a call."
          align="center"
          className="mx-auto max-w-3xl"
        />
        <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-luxury-border bg-luxury-bg p-6 sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Instant estimate range</p>
            <p className="mt-4 text-sm text-luxury-muted">
              Illustrative only — not a contractual quote. Width, finishes, AV depth, and access all refine the number.
            </p>
            <dl className="mt-8 space-y-6">
              <div className="flex items-baseline justify-between gap-4 border-b border-luxury-border pb-6">
                <dt className="text-sm text-luxury-muted">Best-case estimate</dt>
                <dd className="font-display text-2xl font-semibold text-white">from £4,200</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-sm text-luxury-muted">Upper estimate</dt>
                <dd className="font-display text-2xl font-semibold text-gold/90">to £18,500+</dd>
              </div>
            </dl>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-2xl border border-gold/35 bg-gradient-to-br from-gold/10 via-luxury-bg to-luxury-bg p-6 sm:p-8 shadow-[0_0_60px_rgba(212,175,95,0.06)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Design & fixed quote pack</p>
            <p className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">from £129</p>
            <p className="mt-4 text-sm leading-relaxed text-luxury-muted">
              Includes measured design, AV routing plan, and a fixed installation quote for your chosen scope.
            </p>
            <p className="mt-6 rounded-xl border border-gold/25 bg-gold/5 px-4 py-3 text-sm text-gold/95">
              Fully redeemable against your installation if you proceed.
            </p>
          </motion.div>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-luxury-muted">
          Figures shown are placeholders for demo purposes. Your live journey will reflect current materials, travel,
          and AV specification.
        </p>
      </Container>
    </MotionSection>
  );
}
