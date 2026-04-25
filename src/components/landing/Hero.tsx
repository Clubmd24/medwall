"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { SmartImage } from "@/components/ui/SmartImage";

const HERO_IMAGE = "/images/hero-media-wall.jpg";

function MediaWallMockup() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-luxury-border bg-gradient-to-br from-luxury-elevated via-luxury-bg to-[#0d0a08] shadow-[0_0_80px_rgba(212,175,95,0.08)]">
      <div className="absolute inset-0 bg-grid-fade bg-[length:24px_24px] opacity-40" />
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute inset-0 flex flex-col p-6 sm:p-8">
        <div className="relative flex flex-1 flex-col justify-end rounded-xl border border-white/5 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 sm:p-6">
          <div className="mx-auto mb-4 flex w-full max-w-[90%] flex-col gap-3">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-zinc-800/90 to-zinc-950 shadow-inner ring-1 ring-white/5">
              <SmartImage
                src={HERO_IMAGE}
                alt="Premium living room media wall with integrated lighting"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                imageClassName="rounded-lg"
                fallback={
                  <div className="flex h-full min-h-[8rem] w-full items-center justify-center bg-gradient-to-br from-zinc-800/90 to-zinc-950">
                    <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
                  </div>
                }
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
            </div>
            <div className="flex h-2 w-full overflow-hidden rounded-full">
              <motion.div
                className="h-full flex-[0.35] bg-gradient-to-r from-amber-600 via-gold to-amber-200"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="h-full flex-[0.25] bg-gradient-to-r from-violet-500 to-fuchsia-400 opacity-80" />
              <div className="h-full flex-[0.2] bg-cyan-400/70" />
              <div className="h-full flex-[0.2] bg-emerald-500/60" />
            </div>
            <p className="text-center text-[10px] font-medium uppercase tracking-[0.25em] text-gold/80 sm:text-xs">
              RGBWW scene preview
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-gold-radial" />
      <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-[length:40px_40px] opacity-30" />
      <Container className="relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-gold/90"
          >
            Premium install · Smart living
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55 }}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem]"
          >
            See Your Dream Media Wall In Your Own Home
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.55 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-luxury-muted sm:text-lg"
          >
            Upload a photo of your room, choose a design, preview your wall with lighting scenes, and get an instant
            estimated price range before we visit.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.55 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <ButtonLink href="#contact">Start My Design</ButtonLink>
            <ButtonLink href="#designs" variant="secondary">
              View Designs
            </ButtonLink>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="mt-8 flex items-center gap-2 text-sm text-luxury-muted"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_12px_rgba(212,175,95,0.8)]" />
            Most installs completed in 1–2 days
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/20 via-transparent to-transparent opacity-50 blur-2xl" />
          <MediaWallMockup />
        </motion.div>
      </Container>
    </section>
  );
}
