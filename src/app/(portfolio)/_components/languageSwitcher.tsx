"use client";

import { useRouter, usePathname } from "next/navigation";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const locale = e.target.value;

    const segments = pathname.split("/");
    segments[1] = locale;

    router.push(segments.join("/"));
  }

  return (
    <div className="absolute top-6 right-6">
      <div className="relative">
        <select
          onChange={handleChange}
          defaultValue={pathname.split("/")[1]}
          className="
            appearance-none
            bg-white/15
            backdrop-blur-md
            border border-white/20
            text-white
            text-sm
            font-medium
            px-4 py-2 pr-10
            rounded-xl
            shadow-lg
            hover:bg-white/25
            transition
            focus:outline-none
            focus:ring-2
            focus:ring-sky-300
            cursor-pointer
          "
        >
          <option value="pt" className="text-black">Português - BR</option>
          <option value="en" className="text-black">English</option>
          <option value="es" className="text-black">Español</option>
        </select>

        {/* Ícone customizado */}
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/70 text-xs">
          ▼
        </span>
      </div>
    </div>
  );
}
