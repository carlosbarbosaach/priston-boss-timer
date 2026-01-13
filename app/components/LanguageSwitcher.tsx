"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const languages = [
  { code: "pt", label: "PT", flag: "🇧🇷" },
  { code: "es", label: "ES", flag: "🇪🇸" },
  { code: "en", label: "EN", flag: "🇺🇸" },
];

export default function LanguageSwitcher({
  currentLocale,
}: {
  currentLocale: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  function changeLanguage(lang: string) {
    if (!pathname) return;

    const segments = pathname.split("/");
    segments[1] = lang; // troca o locale
    router.push(segments.join("/"));
    setOpen(false);
  }

  // fecha ao clicar fora (UX)
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const active =
    languages.find((l) => l.code === currentLocale) || languages[0];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="
          flex items-center gap-2
          rounded-full border border-zinc-700
          bg-zinc-900/80 px-3 py-2
          text-sm text-white
          hover:bg-zinc-800
          transition
        "
      >
        <span className="text-lg">{active.flag}</span>
        <span className="font-medium">{active.label}</span>
        <span className="opacity-70">▾</span>
      </button>

      {open && (
        <div
          className="
      absolute right-0 mt-2 w-28
      rounded-xl border border-zinc-700
      bg-zinc-900
      shadow-lg
      overflow-hidden
      z-50
    "
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="
          w-full flex items-center gap-2
          px-3 py-2 text-sm text-left
          text-white
          hover:bg-zinc-800
          transition
        "
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="font-medium">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
