"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/landing/MotionSection";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { Button } from "@/components/ui/Button";

const roomTypes = ["Living room", "Bedroom", "Cinema / media room", "Other"];
const styles = ["Contemporary minimal", "Warm timber-led", "Bold statement", "Cinema dark", "Not sure yet"];

export function LeadCapture() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileLabel, setFileLabel] = useState<string | null>(null);

  return (
    <MotionSection id="contact" className="border-t border-luxury-border bg-luxury-surface/30 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Get started"
          title="Begin your online design journey"
          description="Tell us where you are and what you’re planning — we’ll follow up with next steps for your estimate and optional design pack."
          align="center"
          className="mx-auto max-w-2xl"
        />
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="mx-auto max-w-2xl space-y-5 rounded-2xl border border-luxury-border bg-luxury-bg/80 p-6 shadow-[0_0_60px_rgba(0,0,0,0.35)] sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1.5 block text-luxury-muted">Name</span>
              <input
                required
                name="name"
                type="text"
                autoComplete="name"
                className="w-full rounded-xl border border-luxury-border bg-luxury-elevated px-4 py-3 text-sm text-white outline-none transition placeholder:text-luxury-muted/60 focus:border-gold/50 focus:ring-1 focus:ring-gold/40"
                placeholder="Alex Morgan"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block text-luxury-muted">Email</span>
              <input
                required
                name="email"
                type="email"
                autoComplete="email"
                className="w-full rounded-xl border border-luxury-border bg-luxury-elevated px-4 py-3 text-sm text-white outline-none transition placeholder:text-luxury-muted/60 focus:border-gold/50 focus:ring-1 focus:ring-gold/40"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1.5 block text-luxury-muted">Phone</span>
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                className="w-full rounded-xl border border-luxury-border bg-luxury-elevated px-4 py-3 text-sm text-white outline-none transition placeholder:text-luxury-muted/60 focus:border-gold/50 focus:ring-1 focus:ring-gold/40"
                placeholder="07xxx xxxxxx"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block text-luxury-muted">Postcode</span>
              <input
                required
                name="postcode"
                type="text"
                autoComplete="postal-code"
                className="w-full rounded-xl border border-luxury-border bg-luxury-elevated px-4 py-3 text-sm uppercase outline-none transition placeholder:normal-case placeholder:text-luxury-muted/60 focus:border-gold/50 focus:ring-1 focus:ring-gold/40"
                placeholder="B1 2JP"
              />
            </label>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1.5 block text-luxury-muted">Room type</span>
              <select
                name="roomType"
                className="w-full appearance-none rounded-xl border border-luxury-border bg-luxury-elevated px-4 py-3 text-sm text-white outline-none transition focus:border-gold/50 focus:ring-1 focus:ring-gold/40"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select…
                </option>
                {roomTypes.map((r) => (
                  <option key={r} value={r} className="bg-luxury-bg">
                    {r}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block text-luxury-muted">Approx. wall width</span>
              <input
                name="wallWidth"
                type="text"
                className="w-full rounded-xl border border-luxury-border bg-luxury-elevated px-4 py-3 text-sm text-white outline-none transition placeholder:text-luxury-muted/60 focus:border-gold/50 focus:ring-1 focus:ring-gold/40"
                placeholder="e.g. 3.6m"
              />
            </label>
          </div>
          <label className="block text-sm">
            <span className="mb-1.5 block text-luxury-muted">Preferred style</span>
            <select
              name="preferredStyle"
              required
              className="w-full appearance-none rounded-xl border border-luxury-border bg-luxury-elevated px-4 py-3 text-sm text-white outline-none transition focus:border-gold/50 focus:ring-1 focus:ring-gold/40"
              defaultValue=""
            >
              <option value="" disabled>
                Select…
              </option>
              {styles.map((s) => (
                <option key={s} value={s} className="bg-luxury-bg">
                  {s}
                </option>
              ))}
            </select>
          </label>
          <div>
            <span className="mb-1.5 block text-sm text-luxury-muted">Room photo</span>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={(e) => {
                const f = e.target.files?.[0];
                setFileLabel(f ? f.name : null);
              }}
            />
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-gold/35 bg-gold/5 px-4 py-4 text-sm font-medium text-gold transition hover:border-gold/60 hover:bg-gold/10"
            >
              <span>{fileLabel ?? "Upload photo (optional demo)"}</span>
            </button>
            <p className="mt-2 text-xs text-luxury-muted">Demo only — files are not uploaded or stored.</p>
          </div>
          <div className="pt-2">
            <Button type="submit" className="w-full sm:w-auto">
              Get My Estimate
            </Button>
          </div>
        </motion.form>
      </Container>
    </MotionSection>
  );
}
