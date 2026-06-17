import {
  Receipt,
  Percent,
  Building2,
  ShieldCheck,
  Calculator,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  receipt: Receipt,
  percent: Percent,
  building: Building2,
  "shield-check": ShieldCheck,
  calculator: Calculator,
  "trending-up": TrendingUp,
};

export function ServiceIcon({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  const Icon = map[icon] ?? Receipt;
  return <Icon className={className} strokeWidth={1.75} aria-hidden />;
}
