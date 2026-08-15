import logoMark from "@/assets/images/logos/Logo-GlamByKT.png";
import { cn } from "@/lib/utils";

export function BrandMark({ className, size = "sm" }: { className?: string; size?: "sm" | "lg" }) {
  const isLarge = size === "lg";

  return (
    <span className={cn("flex min-w-0 items-center gap-3", className)}>
      <img
        src={logoMark}
        alt=""
        aria-hidden="true"
        width={isLarge ? 88 : 56}
        height={isLarge ? 88 : 56}
        className={cn("shrink-0 rounded-full object-cover", isLarge ? "h-[88px] w-[88px]" : "h-14 w-14")}
      />

      <span
        aria-hidden="true"
        className={cn("bg-champagne-deep/70 w-px shrink-0", isLarge ? "h-12" : "h-8")}
      />

      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "font-brand text-ink truncate",
            isLarge ? "text-[1.85rem] tracking-[0.05em]" : "text-[1.3rem] tracking-[0.035em]",
          )}
        >
          Glam By KT
        </span>

        <span
          className={cn(
            "text-champagne-deep mt-1.5 font-medium tracking-[0.18em] uppercase",
            isLarge ? "text-[0.65rem]" : "text-[0.6rem]",
          )}
        >
          Hair &amp; Makeup
        </span>
      </span>
    </span>
  );
}
