import { Award, FileText } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "../components/FadeIn";
import WordsReveal from "../components/WordsReveal";
import { certifications } from "../config/content";

const BADGE_COLORS = ["bg-magenta-500", "bg-blue-500", "bg-yellow-500", "bg-teal-500"];

export default function Certifications() {
  return (
    <section id="certifications" className="relative bg-transparent px-4 sm:px-6 md:px-12 py-20 md:py-28 border-t-4 border-ink-950">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="inline-block font-bold text-xs md:text-sm uppercase tracking-widest bg-ink-950 text-lime-500 px-4 py-1.5 mb-8 brutal-border">
            Certifications
          </p>
        </FadeIn>

        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.05] uppercase text-ink-950 mb-12 md:mb-16 max-w-3xl">
          <WordsReveal text="Keeping the fundamentals sharp." accentWords={["sharp."]} accentClassName="bg-pink-500 px-1" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} color={BADGE_COLORS[i % BADGE_COLORS.length]} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertCard({
  cert,
  index,
  color,
}: {
  cert: (typeof certifications)[number];
  index: number;
  color: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, delay: index * 0.1, ease: [0.2, 0.8, 0.3, 1] }}
      className="bg-paper brutal-border brutal-shadow p-6 md:p-7 flex flex-col"
    >
      <div className={`w-11 h-11 ${color} brutal-border flex items-center justify-center mb-5`}>
        <Award size={18} className="text-ink-950" />
      </div>
      <h3 className="font-display text-base md:text-lg font-bold text-ink-950 mb-2 leading-snug">{cert.title}</h3>
      <p className="text-xs md:text-sm font-bold text-ink-950 bg-lime-500 border-2 border-ink-950 px-2 py-0.5 w-fit uppercase tracking-wide mb-3">
        {cert.issuer} · {cert.date}
      </p>
      <p className="text-sm text-ink-700 leading-relaxed font-medium">{cert.description}</p>
      {cert.certificateUrl && (
        <a
          href={cert.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 self-start text-xs md:text-sm font-bold uppercase tracking-widest bg-teal-500 text-ink-950 px-3 py-2 brutal-border brutal-press"
        >
          <FileText size={14} />
          View Certificate
        </a>
      )}
    </motion.div>
  );
}
