"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  // Using resolvedTheme ensures it accurately detects system preferences too
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by ensuring it only renders after mounting
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-10 h-10" />; // Fixed empty return
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors overflow-hidden"
      aria-label="Toggle theme"
    >
      {/* Animated Sun Icon */}
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 0 : 1,
          rotate: isDark ? -90 : 0,
          opacity: isDark ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
        className="absolute"
      >
        <Sun size={20} />
      </motion.div>

      {/* Animated Moon Icon */}
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 1 : 0,
          rotate: isDark ? 0 : 90,
          opacity: isDark ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
        className="absolute"
      >
        <Moon size={20} />
      </motion.div>
    </button>
  );
}