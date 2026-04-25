"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/landing/MotionSection";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { SmartImage } from "@/components/ui/SmartImage";

const spaces = [
  {
    title: "Living Room Media Walls",
    desc: "Statement storage, concealed soundbars, and cinema-grade finishes for the heart of the home.",
    image: "/images/catalogue-living-room.jpg",
    imageAlt: "Living room media wall with integrated storage and lighting",
    gradient: "from-zinc-800 via-zinc-900 to-black",
    accent: "from-gold/30 to-transparent",
  },
  {
    title: "Bedroom TV Walls",
    desc: "Soft lighting, integrated bedside rhythm, and whisper-quiet ventilation for overnight comfort.",
    image: "/images/catalogue-bedroom.jpg",
    imageAlt: "Bedroom wall with mounted television and ambient lighting",
    gradient: "from-stone-800 via-neutral-900 to-black",
    accent: "from-amber-200/20 to-transparent",
  },
  {
    title: "Headboard Feature Walls",
    desc: "Upholstered panels, indirect RGBWW, and discreet power for reading and charging.",
    image: "/images/catalogue-headboard.jpg",
    imageAlt: "Headboard feature wall with panels and soft lighting",
    gradient: "from-neutral-800 via-stone-950 to-black",
    accent: "from-rose-200/15 to-transparent",
  },
  {
    title: "Cinema & AV Walls",
    desc: "Acoustic treatment, speaker placement, projector niches, and rack-ready cable paths.",
    image: "/images/catalogue-cinema.jpg",
    imageAlt: "Home cinema wall with screen and architectural speakers",
    gradient: "from-slate-900 via-zinc-950 to-black",
    accent: "from-violet-400/20 to-transparent",
  },
];

export function Catalogue() {
  return (
    <MotionSection id="designs" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Signature spaces"
          title="Catalogue"
          description="Curated systems engineered for real homes — not flat-pack compromises."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {spaces.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-luxury-border bg-luxury-surface transition hover:border-gold/30"
            >
              <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${card.gradient}`}>
                <SmartImage
                  src={card.image}
                  alt={card.imageAlt}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  imageClassName="transition duration-500 group-hover:scale-[1.03]"
                  fallback={
                    <div
                      className={`relative h-full min-h-[10rem] w-full overflow-hidden bg-gradient-to-br ${card.gradient}`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-tr ${card.accent} opacity-80`} />
                      <div className="absolute inset-0 bg-grid-fade bg-[length:20px_20px] opacity-25" />
                    </div>
                  }
                />
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-tr ${card.accent} opacity-50 mix-blend-soft-light`} />
                <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-[length:20px_20px] opacity-20" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{card.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-luxury-muted sm:text-base">{card.desc}</p>
                <div className="mt-6">
                  <ButtonLink href="#contact" variant="secondary" className="w-full sm:w-auto">
                    Start this style
                  </ButtonLink>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
}
