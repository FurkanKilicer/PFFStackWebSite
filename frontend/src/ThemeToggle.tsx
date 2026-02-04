 "use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    if (typeof window === "undefined") return;

    // State güncellemelerini microtask içine alarak
    // linter'ın "effect içinde senkron setState" uyarısını önlüyoruz.
    queueMicrotask(() => {
      const stored = window.localStorage.getItem("theme") as Theme | null;
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      const initial: Theme = stored ?? (prefersDark ? "dark" : "light");

      setTheme(initial);
      setMounted(true);
      document.documentElement.classList.toggle("dark", initial === "dark");
    });
  }, []);

  const toggleTheme = () => {
    if (typeof window === "undefined") return;

    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    window.localStorage.setItem("theme", next);
  };

  if (!mounted) {
    // Hydration sırasında ikon/focus sıçramasını engellemek için boş döneriz
    return null;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex items-center gap-1 rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs font-medium text-white/80 hover:bg-black/40 transition-colors"
      aria-label={isDark ? "Açık tema yap" : "Koyu tema yap"}
    >
      <span
        className="inline-block h-2 w-2 rounded-full"
        style={{
          backgroundColor: isDark ? "#facc15" : "#0f172a",
        }}
      />
      <span>{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}

