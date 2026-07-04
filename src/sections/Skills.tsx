import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import WordsReveal from "../components/WordsReveal";
import FadeIn from "../components/FadeIn";
import { languages, technicalSkills } from "../config/content";

const ACCENT_COLORS = ["bg-blue-500", "bg-yellow-500", "bg-pink-500", "bg-magenta-500", "bg-teal-500"];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-transparent px-4 sm:px-6 md:px-12 py-20 md:py-28 border-t-4 border-ink-950">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="inline-block font-bold text-xs md:text-sm uppercase tracking-widest bg-ink-950 text-lime-500 px-4 py-1.5 mb-8 brutal-border">
            Skills
          </p>
        </FadeIn>

        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.05] uppercase text-ink-950 mb-12 md:mb-16 max-w-3xl">
          <WordsReveal text="Languages I speak, tools I reach for." accentWords={["speak,"]} accentClassName="bg-teal-500 px-1" />
        </h2>

        <div className="mb-14 md:mb-20">
          <p className="text-xs font-bold uppercase tracking-widest text-ink-950 mb-5">Languages</p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {languages.map((lang, i) => (
              <LanguagePill key={lang} label={lang} index={i} color={ACCENT_COLORS[i % ACCENT_COLORS.length]} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {technicalSkills.map((category, i) => (
            <SkillCard
              key={category.label}
              label={category.label}
              skills={category.skills}
              index={i}
              accent={ACCENT_COLORS[i % ACCENT_COLORS.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function LanguagePill({ label, index, color }: { label: string; index: number; color: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.3, delay: index * 0.05, ease: [0.2, 0.8, 0.3, 1] }}
      className={`${color} px-5 py-2.5 md:px-6 md:py-3 brutal-border brutal-shadow-sm brutal-press text-chip-ink font-display font-bold text-sm md:text-base cursor-default select-none`}
    >
      {label}
    </motion.span>
  );
}

function SkillCard({
  label,
  skills,
  index,
  accent,
}: {
  label: string;
  skills: string[];
  index: number;
  accent: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, delay: index * 0.1, ease: [0.2, 0.8, 0.3, 1] }}
      className="bg-paper brutal-border brutal-shadow p-6 md:p-8"
    >
      <h3 className="font-display text-lg md:text-xl font-bold text-ink-950 mb-4 flex items-center gap-2 uppercase">
        <span className={`w-3 h-3 ${accent} brutal-border`} />
        {label}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="text-xs md:text-sm px-3 py-1.5 bg-chip-bg text-chip-ink font-medium border-2 border-ink-950">{skill}</span>
        ))}
      </div>
    </motion.div>
  );
}