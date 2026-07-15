"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Fade({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delayChildren: 1,
        delay: delay,
      }}
      className={`${className}`}
    >
      {children}
    </motion.div>

  );
}