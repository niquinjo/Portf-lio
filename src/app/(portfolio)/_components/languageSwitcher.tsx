"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const segments = pathname.split("/");
  const currentLocale = segments[1] || "pt";

  const handleChange = (value: string) => {
    const newSegments = [...segments];

    // garante que estamos substituindo o locale
    if (["pt", "en", "es"].includes(newSegments[1])) {
      newSegments[1] = value;
    } else {
      newSegments.splice(1, 0, value);
    }

    const newPath = newSegments.join("/") || `/${value}`;
    router.push(newPath);
  };

  return (
    <div className="absolute top-6 right-6">
      <Select value={currentLocale} onValueChange={handleChange}>
        <SelectTrigger className="w-40 bg-white/10 border border-white/20 text-white backdrop-blur-md rounded-xl hover:bg-white/20 transition">
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
