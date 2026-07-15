"use client";

import { motion } from "motion/react";

interface WordRevealProps {
  text: string;
  stagger?: number;
  duration?: number;
  className?: string;
}

export default function WordReveal({
  text,
  stagger = 0.045,
  duration = 0.4,
  className = "",
}: WordRevealProps) {
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={{ visible: { transition: { staggerChildren: stagger } } }}
    >
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          transition={{ duration, ease: "easeOut" }}
          className={`inline-block ${i !== text.split(" ").length - 1 ? "mr-[0.28em]" : ""}`}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}