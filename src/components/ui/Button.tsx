import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "gold" | "outline" | "ghost" | "white" | "whatsapp";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal/60 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-royal text-white hover:bg-royal-600 shadow-[0_8px_24px_rgba(37,99,235,0.28)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.38)] hover:-translate-y-0.5",
  gold:
    "bg-gradient-to-r from-[#d4af37] to-[#e8c766] text-navy hover:brightness-105 shadow-[0_8px_24px_rgba(212,175,55,0.35)] hover:-translate-y-0.5",
  white:
    "bg-white text-navy hover:bg-light shadow-card hover:-translate-y-0.5",
  outline:
    "border border-line text-ink bg-white hover:border-royal hover:text-royal",
  ghost: "text-ink hover:bg-light",
  whatsapp:
    "bg-[#25D366] text-white hover:brightness-105 shadow-[0_8px_24px_rgba(37,211,102,0.32)] hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-sm px-5 py-2.5",
  lg: "text-base px-7 py-3.5",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  external,
  ...rest
}: CommonProps & {
  href: string;
  external?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
