import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import FadeIn from "../components/FadeIn";
import WordsReveal from "../components/WordsReveal";
import { personal } from "../config/content";

const CONTACT_LINKS = [
  { icon: Mail, label: personal.email, href: `mailto:${personal.email}` },
  { icon: Phone, label: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
];

const SOCIAL_LINKS = [
  { icon: FaGithub, label: "GitHub", href: personal.github },
  { icon: FaLinkedin, label: "LinkedIn", href: personal.linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-lime-500 px-4 sm:px-6 md:px-12 pt-20 md:pt-28 pb-10 border-t-4 border-ink-950">
      <div className="max-w-5xl mx-auto text-center">
        <FadeIn>
          <p className="inline-block font-bold text-xs md:text-sm uppercase tracking-widest bg-ink-950 text-lime-500 px-4 py-1.5 mb-8 brutal-border">
            Contact
          </p>
        </FadeIn>

        <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl leading-[1.0] uppercase text-ink-950 mb-8 md:mb-10">
          <WordsReveal text="Let's build something worth shipping." accentWords={["shipping."]} accentClassName="bg-pink-500 px-2" />
        </h2>

        <FadeIn delay={0.3}>
          <p className="text-ink-700 text-sm md:text-lg max-w-xl mx-auto mb-10 md:mb-14 font-medium">
            Open to internships, collaborations, and interesting problems. Reach out — I reply fast.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <a
            href={`mailto:${personal.email}`}
            className="group inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-blue-500 text-ink-950 font-display font-bold text-base md:text-lg mb-14 md:mb-20 brutal-border brutal-shadow brutal-press"
          >
            Say hello
            <span className="w-8 h-8 md:w-9 md:h-9 bg-ink-950 text-lime-500 flex items-center justify-center brutal-border">
              <ArrowUpRight size={16} />
            </span>
          </a>
        </FadeIn>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 md:mb-14">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-2 text-sm md:text-base text-ink-950 font-bold bg-paper px-4 py-2 brutal-border brutal-press"
            >
              <link.icon size={16} />
              {link.label}
            </a>
          ))}
          <span className="flex items-center gap-2 text-sm md:text-base text-ink-950 font-bold bg-yellow-500 px-4 py-2 brutal-border w-fit">
            <MapPin size={16} />
            {personal.location}
          </span>
        </div>

        <div className="flex items-center justify-center gap-4 mb-14 md:mb-20">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-12 h-12 md:w-14 md:h-14 bg-paper flex items-center justify-center text-ink-950 brutal-border brutal-shadow-sm brutal-press"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t-4 border-ink-950 pt-6 md:pt-8 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-950 font-bold uppercase tracking-wide">
        <span>© {new Date().getFullYear()} {personal.name}. Built from scratch.</span>
        <span>{personal.role}</span>
      </div>
    </section>
  );
}
