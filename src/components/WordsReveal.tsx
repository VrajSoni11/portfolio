import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface WordsRevealProps {
  text: string;
  className?: string;
  /** Delay before the first word starts, in seconds */
  startDelay?: number;
  /** Delay between each word, in seconds */
  stagger?: number;
  /** Accent color applied to specific words, matched by exact string */
  accentWords?: string[];
  accentClassName?: string;
}

/**
 * WordsReveal — splits text by spaces, each word slides up from y:20
 * with staggered delay as the element scrolls into view. This is the
 * core headline animation used throughout: About heading, Skills heading,
 * Projects heading, etc. Triggers once (won't re-animate on scroll-back-up).
 *
 * accentWords lets specific words (e.g. "AI/ML", "Vision") render in the
 * accent color while the rest stays primary ink color — used for headlines
 * that want one or two words to visually pop.
 */
export default function WordsReveal({
  text,
  className = "",
  startDelay = 0,
  stagger = 0.08,
  accentWords = [],
  accentClassName = "bg-blue-500 px-1",
}: WordsRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const isAccent = accentWords.includes(word.replace(/[.,!?]/g, ""));
        return (
          <span key={i} className="overflow-hidden inline-block pb-1">
            <motion.span
              className={`inline-block ${isAccent ? accentClassName : ""}`}
              initial={{ y: "110%" }}
              animate={isInView ? { y: 0 } : { y: "110%" }}
              transition={{
                duration: 0.4,
                delay: startDelay + i * stagger,
                ease: [0.2, 0.8, 0.3, 1],
              }}
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
