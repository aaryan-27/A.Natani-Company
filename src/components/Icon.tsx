import {
  Award,
  Percent,
  Rocket,
  Zap,
  UserCheck,
  BadgeIndianRupee,
  GraduationCap,
  Timer,
  ShieldCheck,
  Headphones,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  award: Award,
  percent: Percent,
  rocket: Rocket,
  zap: Zap,
  "user-check": UserCheck,
  "badge-indian-rupee": BadgeIndianRupee,
  "graduation-cap": GraduationCap,
  timer: Timer,
  "shield-check": ShieldCheck,
  headphones: Headphones,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const C = map[name] ?? Award;
  return <C className={className} strokeWidth={1.75} aria-hidden />;
}
