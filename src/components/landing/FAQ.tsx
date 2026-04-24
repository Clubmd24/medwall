"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/landing/MotionSection";
import { SectionHeading } from "@/components/landing/SectionHeading";

const faqs = [
  {
    q: "How accurate is the online estimate?",
    a: "It is a guided range based on typical scopes and your inputs. Final pricing follows a site survey or your design pack — we never pretend an algorithm replaces a tape measure.",
  },
  {
    q: "Is the design pack refundable?",
    a: "The design & fixed quote pack is a professional service. If you proceed with installation, the fee is fully redeemable against that contract — see your proposal for full terms.",
  },
  {
    q: "How long does installation take?",
    a: "Most residential media walls complete in 1–2 days on site thanks to pre-built modules. Larger cinema or multi-room programmes may run longer — we’ll spell it out in your schedule.",
  },
  {
    q: "Can you hide all my AV equipment?",
    a: "Yes — that is the default. Sources live in a ventilated rack with structured cabling to the display and architectural speakers.",
  },
  {
    q: "Can I control the lighting with Alexa?",
    a: "Absolutely. We commission scenes like Movie, Relax, and Gaming, and can bridge to other assistants if required.",
  },
  {
    q: "Can I take the wall with me if I move?",
    a: "The system is designed to be removed and reinstalled. Typically only the low-cost subframe is replaced for a perfect fit in the new room.",
  },
  {
    q: "Do you cover my area?",
    a: "We work from Birmingham through the North of England and Scotland. Drop your postcode in the form — if you’re outside core routes we’ll advise honestly.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <MotionSection className="border-t border-luxury-border py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered plainly"
          align="center"
          className="mx-auto max-w-2xl"
        />
        <div className="mx-auto mt-4 max-w-3xl divide-y divide-luxury-border rounded-2xl border border-luxury-border bg-luxury-bg/60">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="px-4 sm:px-6">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-lg font-medium text-white sm:text-xl">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-luxury-muted sm:text-base">{item.a}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </MotionSection>
  );
}
