import FadeIn from "../components/FadeIn";
import WordsReveal from "../components/WordsReveal";
import { education } from "../config/content";

const STAGE_COLORS = ["bg-yellow-500", "bg-pink-500", "bg-blue-500"];

export default function Education() {
  return (
    <section id="education" className="relative bg-transparent px-4 sm:px-6 md:px-12 py-20 md:py-28 border-t-4 border-ink-950">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="inline-block font-bold text-xs md:text-sm uppercase tracking-widest bg-ink-950 text-lime-500 px-4 py-1.5 mb-8 brutal-border">
            Education
          </p>
        </FadeIn>

        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.05] uppercase text-ink-950 mb-12 md:mb-16 max-w-3xl">
          <WordsReveal text="The academic road so far." accentWords={["road"]} accentClassName="bg-magenta-500 px-1" />
        </h2>

        <div className="space-y-4 md:space-y-5">
          {education.map((entry, i) => (
            <FadeIn key={entry.stage} delay={i * 0.1}>
              <div className="bg-paper brutal-border brutal-shadow-sm p-5 md:p-7 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <span
                  className={`font-display text-3xl md:text-5xl font-bold text-chip-ink ${STAGE_COLORS[i % STAGE_COLORS.length]} px-4 py-2 brutal-border shrink-0 w-fit`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-ink-950 uppercase tracking-wide">
                      {entry.stage}
                    </h3>
                    <span className="text-xs md:text-sm text-ink-700 font-bold uppercase tracking-widest shrink-0">
                      {entry.date}
                    </span>
                  </div>
                  <p className="text-ink-700 text-sm md:text-base mt-2 font-medium">{entry.board}</p>
                  {entry.detail && (
                    <p className="text-ink-950 text-sm md:text-base mt-1 font-bold">{entry.detail}</p>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}