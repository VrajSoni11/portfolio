import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

/**
 * Site-wide dark/light toggle. Sized and styled to match the existing
 * GitHub/LinkedIn icon buttons in Hero.tsx exactly (w-9/h-9, brutal-border,
 * brutal-shadow-sm, brutal-press) so it reads as part of the same nav
 * button group rather than a bolted-on control.
 *
 * Icon choice: shows the icon for the mode you'd SWITCH TO (moon while
 * light, sun while dark) — the common convention for theme toggles, so the
 * icon reads as "tap this to go dark" rather than "you are in light mode."
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-paper text-ink-950 brutal-border brutal-shadow-sm brutal-press"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}