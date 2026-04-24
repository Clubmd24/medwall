"use client";

import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";

export const buttonBaseClass =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-luxury-bg shadow-[0_0_0_1px_rgba(212,175,95,0.4)] hover:brightness-110 hover:shadow-[0_0_32px_rgba(212,175,95,0.25)]",
  secondary:
    "border border-gold/40 bg-transparent text-gold hover:border-gold hover:bg-gold/10",
  ghost: "text-luxury-muted hover:text-white hover:bg-white/5",
};

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ComponentProps<typeof motion.button> & { variant?: Variant }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={cn(buttonBaseClass, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export function ButtonLink({
  href,
  className,
  variant = "primary",
  children,
  ...props
}: Omit<ComponentProps<typeof motion.a>, "href"> & { href: string; variant?: Variant }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={cn(buttonBaseClass, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.a>
  );
}
