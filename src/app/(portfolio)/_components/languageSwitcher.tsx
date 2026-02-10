"use client";

import { useRouter, usePathname } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1];

  const handleChange = (value: string) => {
    const segments = pathname.split("/");
    segments[1] = value;
    router.push(segments.join("/"));
  };

  return (
    <div className="absolute top-6 right-6">
      <Select value={currentLocale} onValueChange={handleChange}>
        <SelectTrigger className="w-[160px]git add .
 bg-white/10 border border-white/20 text-white backdrop-blur-md rounded-xl hover:bg-white/20 transition">
          <SelectValue />
        </SelectTrigger>

        <SelectContent className="bg-slate-900 text-white border border-white/10 rounded-xl">
          <SelectItem value="pt">Português - BR</SelectItem>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="es">Español</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
