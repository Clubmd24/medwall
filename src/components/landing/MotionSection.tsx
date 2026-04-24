"use client";

import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function MotionSection({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-72px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      variants={fade}
      className={className}
    >
      {children}
    </motion.section>
  );
}
