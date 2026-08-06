import type { ReactNode } from "react";
import { BOOKING_URL, useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type BookingButtonProps = {
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
  variant = "solid",
  size = "md",
  className,
  children,
}: BookingButtonProps) {
  const { t } = useI18n();

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-booking-placeholder="true"
      className={cn(base, variants[variant], sizes[size], className)}
    >
      <span>{children ?? t.booking.cta}</span>
      <span className="sr-only"> ({t.booking.newTab})</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 12 12"
        className="h-2.5 w-2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
      >
        <path d="M3 9 9 3M9 3H4.5M9 3v4.5" />
      </svg>
    </a>
  );
}
