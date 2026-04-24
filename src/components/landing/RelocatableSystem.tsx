"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/landing/MotionSection";
import { SectionHeading } from "@/components/landing/SectionHeading";

export function RelocatableSystem() {
  return (
    <MotionSection className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative overflow-hidden rounded-2xl border border-luxury-border bg-gradient-to-br from-luxury-elevated to-luxury-bg p-8 sm:p-10">
            <div className="absolute inset-0 bg-grid-fade bg-[length:28px_28px] opacity-20" />
            <div className="relative space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-gold shadow-[0_0_12px_rgba(212,175,95,0.7)]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Modular core</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <motion.div
                  whileHover={{ y: -3 }}
                  className="rounded-lg border border-white/10 bg-black/50 p-3 text-center text-[10px] text-luxury-muted"
                >
                  Face modules
                </motion.div>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="rounded-lg border border-gold/30 bg-gold/10 p-3 text-center text-[10px] text-gold"
                >
                  Service spine
                </motion.div>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="rounded-lg border border-white/10 bg-black/50 p-3 text-center text-[10px] text-luxury-muted"
                >
                  Lighting rails
                </motion.div>
              </div>
              <div className="rounded-xl border border-dashed border-gold/30 bg-gold/5 p-4 text-center text-xs text-luxury-muted">
                Low-cost subframe typically replaced for a perfect fit in your next property
              </div>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Relocatable system"
              title="Designed to travel with you"
              description="The visible wall and technology core are engineered for removal and professional reinstallation. In most moves, only the low-cost subframe is replaced — everything else travels, protecting your investment and cutting rediscovery costs."
            />
          </div>
        </div>
      </Container>
    </MotionSection>
  );
}
