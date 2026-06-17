import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const isLight = tone === "light";
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3", className)}
      aria-label="Yogendra Jain & Company — Home"
    >
      <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-navy to-royal-600 shadow-[0_6px_18px_rgba(37,99,235,0.35)]">
        <span className="font-display text-lg font-extrabold text-white">YJ</span>
        <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-gold ring-2 ring-white" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-[0.95rem] font-bold tracking-tight",
            isLight ? "text-white" : "text-navy"
          )}
        >
          YOGENDRA JAIN <span className="text-gold">& CO.</span>
        </span>
        <span
          className={cn(
            "mt-1 text-[0.62rem] font-medium uppercase tracking-[0.18em]",
            isLight ? "text-slate-300" : "text-muted"
          )}
        >
          Chartered Accountants
        </span>
      </span>
    </Link>
  );
}
