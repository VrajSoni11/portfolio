import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { personal, heroWords } from "../config/content";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const WORD_COLORS = ["bg-blue-500", "bg-pink-500", "bg-teal-500"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % heroWords.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col bg-transparent">
      {/* ---------- NAVBAR ---------- */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-20 flex items-center justify-end px-4 sm:px-6 md:px-12 pt-5 md:pt-8 gap-4 md:gap-6"
      >
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs lg:text-sm font-bold uppercase tracking-wide text-ink-950 px-3 py-2 border-2 border-transparent hover:border-ink-950 hover:bg-yellow-500 transition-colors duration-100"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-paper text-ink-950 brutal-border brutal-shadow-sm brutal-press"
          >
            <FaGithub size={16} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-paper text-ink-950 brutal-border brutal-shadow-sm brutal-press"
          >
            <FaLinkedin size={16} />
          </a>
        </div>
      </motion.nav>

      {/* ---------- GIANT NAME + PHOTO ---------- */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16 px-4 py-16 lg:py-0">
        <PortraitBlock />

        <div className="flex flex-col items-center lg:items-start">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="font-bold text-xs md:text-sm uppercase tracking-widest bg-ink-950 text-yellow-500 px-4 py-1.5 mb-6 md:mb-8 brutal-border"
          >
            {personal.tagline}
          </motion.p>

          <h1 className="font-display font-bold uppercase leading-[0.88] tracking-tight text-center lg:text-left text-ink-950">
            <NameLine text="Vraj" delay={0.25} />
            <NameLine text="Soni" delay={0.4} highlight />
          </h1>

          {/* Rotating role words — hard color-block instead of soft fade */}
          <div className="mt-8 md:mt-10 h-10 md:h-12 relative overflow-hidden flex items-center">
            <motion.div
              key={wordIndex}
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -40, opacity: 0 }}
              transition={{ duration: 0.25, ease: "linear" }}
              className={`font-display font-bold text-sm md:text-lg text-ink-950 px-4 py-2 brutal-border ${WORD_COLORS[wordIndex]}`}
            >
              {heroWords[wordIndex]}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ---------- SCROLL CUE ---------- */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="relative z-20 self-center mb-8 md:mb-10 flex flex-col items-center gap-2 group"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink-950">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 flex items-center justify-center bg-ink-950 text-lime-500 brutal-border"
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}

function NameLine({ text, delay, highlight = false }: { text: string; delay: number; highlight?: boolean }) {
  const letters = text.split("");
  return (
    <div className="overflow-hidden">
      <div className="flex justify-center lg:justify-start text-[17vw] sm:text-[15vw] md:text-[12vw] lg:text-[10vw]">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.4,
              delay: delay + i * 0.03,
              ease: [0.2, 0.8, 0.3, 1],
            }}
            className={`inline-block ${highlight ? "bg-pink-500 px-1" : ""}`}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

/**
 * PortraitBlock — the hero photo slot. Deliberately NOT a circle or square:
 * uses an irregular clip-path polygon so the photo reads as a hand-cut
 * brutalist shape rather than a default avatar. Hard black border + offset
 * shadow + slight rotation match every other bordered element on the page.
 *
 * PHOTO SETUP: drop the actual photo file into `public/photo.jpg` (or
 * `.png`) and it will render automatically — no code change needed beyond
 * that, since the <img> src below already points at `/photo.jpg`. Until
 * that file exists, a bordered placeholder renders instead so the layout
 * never breaks on a missing image.
 */
function PortraitBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
      animate={{ opacity: 1, scale: 1, rotate: -4 }}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0.8, 0.3, 1] }}
      className="relative shrink-0 w-48 h-56 sm:w-56 sm:h-64 md:w-64 md:h-72 lg:w-72 lg:h-80"
    >
      {/* Offset shadow block sits behind, at the same clip shape, slightly
          displaced — the brutalist hard-shadow treatment applied to an
          irregular shape instead of a rectangle */}
      <div
        className="absolute inset-0 bg-ink-950 translate-x-2.5 translate-y-2.5"
        style={{ clipPath: PORTRAIT_CLIP }}
      />
      <div
        className="absolute inset-0 bg-paper border-[3px] border-ink-950 overflow-hidden"
        style={{ clipPath: PORTRAIT_CLIP }}
      >
        <img
          src="/photo.jpeg"
          alt="Vraj Soni"
          className="w-full h-full object-cover"
          onError={(e) => {
            // No photo uploaded yet — hide the broken image and let the
            // placeholder background + label show instead of a broken-image icon.
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-yellow-500 -z-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-ink-950 text-center px-4">
            Add photo.jpg
            <br />
            to /public
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// Hand-picked irregular polygon — reads as a deliberate angular cut, not a
// recognizable rectangle-with-corners-trimmed or a soft blob.
const PORTRAIT_CLIP =
  "polygon(12% 0%, 100% 0%, 100% 82%, 88% 100%, 0% 100%, 0% 18%)";
