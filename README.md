# Vraj Soni — Portfolio

A single-page, scroll-driven portfolio site. Bold color-blocked design (khaki-orange
`#f2b759` accent on a dark slate-green-black base `#0a4a3c`-derived palette), heavy
use of scroll-triggered motion — word-by-word headline reveals, character-by-character
paragraph reveals, staggered card entrances, and sticky-stacking project cards.

Built entirely with free, open-source tools. No paid assets, no paid hosting, no
subscriptions required to run or deploy this.

> **Note on project history:** this replaces an earlier in-progress concept — a
> 3D video-game-style portfolio with a walking character (React Three Fiber). That
> approach hit a real constraint (the AI model-generation tool needed for a good
> character required a paid plan) and, separately, Vraj saw reference designs in
> this exact motion/scroll genre that better matched what he wanted. This is a
> full restart on a new, more achievable concept — not an iteration of the 3D one.

## Tech stack

- **React 19** + **TypeScript** + **Vite** — app shell, type safety, dev tooling
- **Tailwind CSS v4** — utility-first styling, configured via CSS `@theme` (not
  `tailwind.config.js` — that's the old v3 approach)
- **Framer Motion** — all animation: word reveals, scroll-linked opacity, card
  entrances, sticky-stack scaling
- **lucide-react** — general UI icons (arrows, mail, phone, etc.)
- **react-icons** (`react-icons/fa6`) — brand icons specifically (GitHub, LinkedIn).
  lucide-react removed all brand/trademark icons in its v1.0 release, so brand
  logos now come from a separate library — this is a real, current constraint,
  not a workaround to avoid.

## Running locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  sections/          # one file per page section, in scroll order
    Hero.tsx          # giant kinetic name typography, rotating role words
    About.tsx          # headline + scroll-driven paragraph reveal + stat counters
    Skills.tsx          # language pills + categorized technical skill cards
    Education.tsx        # numbered list: SSC -> HSC -> B.Tech
    Experience.tsx        # timeline cards: Acorn internship + GCET Robocon
    Projects.tsx            # sticky-stacking cards for all 6 real projects
    Certifications.tsx       # card grid: 3 Forage certifications
    Contact.tsx                # closing CTA + real mailto/tel/social links
  components/
    WordsReveal.tsx     # word-by-word scroll-reveal for headlines
    FadeIn.tsx           # generic fade-up wrapper for cards/paragraphs/buttons
  hooks/
    useCountUp.ts         # animates a number counting up when scrolled into view
  config/
    content.ts              # ALL real resume text/data lives here, fully typed
  App.tsx                     # assembles all 8 sections in order
  index.css                    # Tailwind v4 @theme setup: fonts, full color system
```

**Why `config/content.ts` matters:** every section component imports its text from
here — nothing is hardcoded inline. Update your resume? Edit this one file, not
component logic. It's fully typed (`EducationEntry`, `Project`, `Certification`,
etc.) so a malformed entry fails at build time, not silently at runtime.

## Known placeholders / TODO

- All project descriptions are now final, including `Hisab` and `Core Inventory`
  (written based on their actual tech stack and structure — worth a read-through
  to confirm they match how you'd describe the projects yourself).
- No dedicated mobile-specific pass yet beyond Tailwind's responsive utilities
  (`sm:`/`md:`/`lg:` used throughout) — worth a dedicated real-device check before
  calling this done.
- Not yet deployed. Free deploy options: Vercel or Netlify, both zero-cost for a
  static Vite build like this, connect the GitHub repo and it deploys automatically
  on push.
- Favicon is still the default Vite placeholder (`public/favicon.svg`) — worth
  swapping for something personal (initials, a simple mark) before sharing the
  live link widely.

## Design notes

- **Theme**: brutalist. Lime-green background (`#c4f542`), thick black borders
  (3px, everywhere), hard offset drop-shadows instead of soft blur, zero
  border-radius. Bold accent colors (electric blue, yellow, hot pink, magenta,
  teal) rotate deliberately across sections/cards rather than one single accent.
  Defined in `src/index.css` under `@theme`, plus reusable `.brutal-border`,
  `.brutal-shadow`, and `.brutal-press` utility classes used throughout every
  section instead of repeating the same border/shadow chain inline everywhere.
- **Fonts**: Space Grotesk (display/headings, bold and geometric) + Inter (body
  text). Both loaded free via Google Fonts in `index.html`.
- **Motion**: snappy and mechanical rather than smooth — short durations (0.3-0.4s),
  hard easing curves, and `.brutal-press`'s signature interaction where elements
  move into their own shadow on hover/click instead of fading or color-transitioning.
