"use client";

import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="text-lg hover:text-accent-cyan transition-colors"
    >
      {/* แสดงไอคอนตรงข้ามกับ theme ปัจจุบัน เพื่อสื่อว่าจะสลับไปทางไหน */}
      {mounted && theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
}
