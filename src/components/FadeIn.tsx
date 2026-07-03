import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  /** If true, animates every time it scrolls into view, not just once */
  repeat?: boolean;
}

/**
 * FadeIn — generic scroll-triggered reveal wrapper for anything that isn't
 * headline text (cards, paragraphs, images, buttons). Wraps children in a
 * motion.div that animates from an offset + faded state into place once
 * ~15% of it is visible in the viewport.
 */
export default function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.4,
  y = 24,
  x = 0,
  repeat = false,
}: FadeInProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y, x },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration, delay, ease: [0.2, 0.8, 0.3, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !repeat, margin: "-60px", amount: 0.15 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
