import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import WordsReveal from "../components/WordsReveal";
import FadeIn from "../components/FadeIn";
import { useCountUp } from "../hooks/useCountUp";
import { personal } from "../config/content";

const STAT_COLORS = ["bg-blue-500", "bg-yellow-500", "bg-teal-500", "bg-pink-500"];

export default function About() {
  return (
    <section id="about" className="relative bg-transparent px-4 sm:px-6 md:px-12 py-20 md:py-28 border-t-4 border-ink-950">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="inline-block font-bold text-xs md:text-sm uppercase tracking-widest bg-ink-950 text-lime-500 px-4 py-1.5 mb-8 brutal-border">
            About
          </p>
        </FadeIn>

        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] uppercase text-ink-950 mb-10 md:mb-14">
          <WordsReveal
            text="Building things that connect artificial intelligence to real problems — and real code to real people."
            accentWords={["artificial", "intelligence"]}
            accentClassName="bg-blue-500 px-1"
          />
        </h2>

        <div className="bg-paper brutal-border brutal-shadow p-6 md:p-10 mb-14 md:mb-20">
          <ScrollRevealParagraph text={personal.summary} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          <Stat value={8.98} decimals={2} label="CGPA" color={STAT_COLORS[0]} />
          <Stat value={7} label="Projects Done" color={STAT_COLORS[1]} />
          <Stat value={2} label="Internships" color={STAT_COLORS[2]} />
          <Stat value={2} label="Hackathon Finals" color={STAT_COLORS[3]} />
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  decimals = 0,
  suffix = "",
  label,
  color,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
  color: string;
}) {
  const { ref, value: animated } = useCountUp(value, 1000, decimals);
  return (
    <div ref={ref} className={`${color} brutal-border brutal-shadow-sm p-4 md:p-6`}>
      <p className="font-display text-2xl md:text-4xl font-bold text-ink-950">
        {animated}
        {suffix}
      </p>
      <p className="text-xs md:text-sm text-ink-950 mt-1 font-bold uppercase tracking-wide">{label}</p>
    </div>
  );
}

function ScrollRevealParagraph({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.35"],
  });

  const characters = text.split("");

  return (
    <p ref={ref} className="text-ink-950 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
      {characters.map((char, i) => (
        <Character key={i} char={char} index={i} total={characters.length} progress={scrollYProgress} />
      ))}
    </p>
  );
}

function Character({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const charProgress = index / total;
  const opacity = useTransform(progress, [charProgress - 0.08, charProgress + 0.05], [0.15, 1]);
  return <motion.span style={{ opacity }}>{char}</motion.span>;
}
