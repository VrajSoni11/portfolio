import { Briefcase } from "lucide-react";
import FadeIn from "../components/FadeIn";
import WordsReveal from "../components/WordsReveal";
import { experience } from "../config/content";

const NODE_COLORS = ["bg-blue-500", "bg-teal-500"];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-transparent px-4 sm:px-6 md:px-12 py-20 md:py-28 border-t-4 border-ink-950">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="inline-block font-bold text-xs md:text-sm uppercase tracking-widest bg-ink-950 text-lime-500 px-4 py-1.5 mb-8 brutal-border">
            Experience
          </p>
        </FadeIn>

        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.05] uppercase text-ink-950 mb-12 md:mb-16 max-w-3xl">
          <WordsReveal text="Where the theory met production code." accentWords={["production"]} accentClassName="bg-yellow-500 px-1" />
        </h2>

        <div className="space-y-6 md:space-y-8">
          {experience.map((role, i) => (
            <FadeIn key={role.role} delay={i * 0.15}>
              <div className="relative md:pl-20">
                <div
                  className={`hidden md:flex absolute left-0 top-1 w-14 h-14 ${NODE_COLORS[i % NODE_COLORS.length]} brutal-border items-center justify-center`}
                >
                  <Briefcase size={20} className="text-chip-ink" />
                </div>

                <div className="bg-paper brutal-border brutal-shadow p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h3 className="font-display text-lg md:text-xl font-bold text-ink-950">{role.role}</h3>
                    <span className="text-xs md:text-sm font-bold text-chip-ink bg-yellow-500 px-2 py-0.5 uppercase tracking-widest shrink-0 border-2 border-ink-950 w-fit">
                      {role.date}
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-ink-700 font-medium mb-4">
                    {role.org} · {role.location}
                  </p>
                  <ul className="space-y-2.5">
                    {role.points.map((point, pi) => (
                      <li key={pi} className="flex gap-3 text-sm md:text-base text-ink-950 leading-relaxed">
                        <span className="text-pink-500 shrink-0 mt-1 font-bold text-lg">▸</span>
                        <span className="font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}