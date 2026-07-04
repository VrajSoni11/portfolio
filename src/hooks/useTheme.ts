import { useCallback, useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

/**
 * Reads the theme to use on first render, in priority order:
 * 1. A previously saved choice in localStorage (the user has toggled before)
 * 2. The OS-level `prefers-color-scheme` setting (first-ever visit)
 * 3. "light" as a final fallback (matches the site's original default)
 *
 * Wrapped in a try/catch because localStorage can throw in some privacy
 * modes / sandboxed iframes — a broken storage read shouldn't crash the
 * whole page, it should just fall through to the OS preference.
 */
function getInitialTheme(): Theme {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // localStorage unavailable — fall through to OS preference
  }

  if (typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}

/**
 * Site-wide theme controller. Adds/removes the `dark` class on
 * `document.documentElement` (the <html> tag), which is what every
 * `.dark { ... }` override in index.css keys off. Persists the user's
 * explicit choice to localStorage so a toggle survives a page reload.
 *
 * Usage: const { theme, toggleTheme } = useTheme();
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Best-effort persistence only — if storage is unavailable, the
      // toggle still works for the current session via React state.
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }, []);

  return { theme, toggleTheme };
}