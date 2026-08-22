import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { BOOKING_URL, useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type BookingButtonProps = {
  url?: string;
  variant?: "solid" | "outline" | "inverted";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm font-sans uppercase tracking-editorial transition-colors duration-300";

const variants: Record<NonNullable<BookingButtonProps["variant"]>, string> = {
  solid: "bg-ink text-background hover:bg-champagne-deep",
  outline: "border border-ink/25 text-ink hover:border-champagne-deep hover:text-champagne-deep",
  inverted: "bg-background text-ink hover:bg-champagne hover:text-ink",
};

const sizes: Record<NonNullable<BookingButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-[0.625rem]",
  md: "px-6 py-3 text-[0.6875rem]",
  lg: "px-9 py-4 text-xs",
};

/**
 * Single entry point for every booking action.
 * Always external, always a new tab.
 */
export function BookingButton({
  url,
  variant = "solid",
  size = "md",
  className,
  children,
}: BookingButtonProps) {
  const { t } = useI18n();

  return (
    <a
      href={url || BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, variants[variant], sizes[size], className)}
    >
      <span>{children ?? t.booking.cta}</span>
      <span className="sr-only"> ({t.booking.newTab})</span>
      <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.5} />
    </a>
  );
}
