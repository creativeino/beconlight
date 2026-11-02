"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function HeroBackdrop({
  src,
  alt,
  sizes = "100vw",
  priority = true,
  imagePosition,
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  imagePosition?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-x-0 -top-[8%] h-[116%]"
        style={reduce ? undefined : { y, scale }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover opacity-35"
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
        />
      </motion.div>
    </div>
  );
}
