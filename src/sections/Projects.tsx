import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import FadeIn from "../components/FadeIn";
import WordsReveal from "../components/WordsReveal";
import { projects } from "../config/content";

const NUMBER_COLORS = ["bg-blue-500", "bg-yellow-500", "bg-pink-500", "bg-magenta-500", "bg-teal-500"];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-lime-500 px-4 sm:px-6 md:px-12 pt-20 md:pt-28 pb-16 border-t-4 border-ink-950">
      <div className="max-w-5xl mx-auto mb-14 md:mb-20">
        <FadeIn>
          <p className="inline-block font-bold text-xs md:text-sm uppercase tracking-widest bg-ink-950 text-lime-500 px-4 py-1.5 mb-8 brutal-border">
            Projects
          </p>
        </FadeIn>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.05] uppercase text-ink-950 max-w-3xl">
          <WordsReveal text="Six builds, each one a different problem." accentWords={["Six", "builds,"]} accentClassName="bg-teal-500 px-1" />
        </h2>
      </div>

      <div className="max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <StackCard key={project.title} project={project} index={i} total={projects.length} color={NUMBER_COLORS[i % NUMBER_COLORS.length]} />
        ))}
      </div>
    </section>
  );
}

function StackCard({
  project,
  index,
  total,
  color,
}: {
  project: (typeof projects)[number];
  index: number;
  total: number;
  color: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const targetScale = 1 - (total - 1 - index) * 0.025;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={ref} className="sticky top-14 md:top-20 pb-8" style={{ zIndex: index + 1 }}>
      <motion.div
        style={{ scale, top: `${index * 14}px` }}
        className="relative bg-paper brutal-border brutal-shadow-lg p-6 md:p-10 origin-top"
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div className="flex items-start gap-4 md:gap-6">
            <span className={`font-display text-2xl md:text-4xl font-bold text-ink-950 ${color} px-3 py-1.5 brutal-border shrink-0`}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-xl md:text-3xl font-bold text-ink-950 leading-tight uppercase">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] md:text-xs px-2.5 py-1 bg-lime-500 text-ink-950 font-bold uppercase tracking-wide border-2 border-ink-950"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 md:px-5 md:py-3 bg-ink-950 text-lime-500 text-xs md:text-sm font-bold uppercase tracking-widest brutal-border brutal-shadow-sm brutal-press"
          >
            {project.isLiveDemo ? <ExternalLink size={14} /> : <FaGithub size={14} />}
            {project.isLiveDemo ? "Live Demo" : "GitHub"}
            <ArrowUpRight size={14} />
          </a>
        </div>

        <p className="text-sm md:text-base text-ink-700 leading-relaxed font-medium">{project.description}</p>
      </motion.div>
    </div>
  );
}
