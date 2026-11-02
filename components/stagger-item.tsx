"use client";

import { motion } from "framer-motion";
import { staggerChild } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function StaggerItem({
  children,
  className,
  hFull = true,
}: {
  children: React.ReactNode;
  className?: string;
  hFull?: boolean;
}) {
  return (
    <motion.div variants={staggerChild} className={cn(hFull && "h-full", className)}>
      {children}
    </motion.div>
  );
}
