"use client";
import { motion } from "framer-motion";
import React from "react";

export default function TransitionVertical(
  { children, direction, duration = 1.5, className }: { children: React.ReactNode; direction: "up" | "down"; duration?: number; className?: string }
) {
  return (
    <motion.div
      className={className}
      initial={{ y: direction === "up" ? "-100%" : "100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ ease: "easeInOut", duration, delayChildren: 1 }}
    >
      {children}
    </motion.div>
  );
}