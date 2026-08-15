import logoMark from "@/assets/images/logos/Logo-GlamByKT.png";
import { cn } from "@/lib/utils";

/**
 * Supplied Glam By KT logo. The circular medallion is used at small sizes
 * (header, footer) alongside a typeset wordmark for legibility.
 * Never replace this mark with a generated alternative.
 */
export function BrandMark({
  className,
  invert = false,
  size = "sm",
}: {
  className?: string;
  invert?: boolean;
  size?: "sm" | "lg";
}) {
  const markSize = size === "lg" ? "h-16 w-16" : "h-11 w-11";

  return (
    <span className={cn("flex min-w-0 items-center gap-3.5", className)}>
      <img
        src={logoMark}
        alt=""
        aria-hidden="true"
        width={size === "lg" ? 64 : 44}
        height={size === "lg" ? 64 : 44}
        className={cn("shrink-0 rounded-full object-cover", markSize)}
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "font-brand truncate",
            size === "lg" ? "text-2xl tracking-[0.06em]" : "text-lg tracking-[0.04em]",
            invert ? "text-background" : "text-ink",
          )}
        >
          Glam By KT
        </span>
        <span className={cn("eyebrow mt-1.5 text-[0.5625rem]", invert && "text-background/60")}>
          Hair &amp; Makeup
        </span>
      </span>
    </span>
  );
}
