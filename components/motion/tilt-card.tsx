"use client";

import { useRef, useState, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

export function TiltCard({
  children,
  className,
  max = 7,
  rounded = "rounded-[1.75rem]",
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  rounded?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const springX = useSpring(x, { stiffness: 180, damping: 20 });
  const springY = useSpring(y, { stiffness: 180, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [max, -max]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-max, max]);
  const glare = useMotionTemplate`radial-gradient(380px circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.4), transparent 58%)`;

  return (
    <motion.div
      ref={ref}
      className={cn("relative [transform-style:preserve-3d]", className)}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={(event) => {
        if (reduce || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        x.set(px - 0.5);
        y.set(py - 0.5);
        glareX.set(px * 100);
        glareY.set(py * 100);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
        setHovered(false);
      }}
    >
      {children}
      <motion.span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 z-30 mix-blend-soft-light transition-opacity duration-500",
          rounded,
        )}
        style={{ background: glare, opacity: hovered && !reduce ? 1 : 0 }}
      />
    </motion.div>
  );
}
