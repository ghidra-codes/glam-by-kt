import logoMark from "@/assets/images/logos/logo-light-compressed.jpg";
import { cn } from "@/lib/utils";

export function BrandMark({ className, size = "sm" }: { className?: string; size?: "sm" | "lg" }) {
  const isLarge = size === "lg";

  return (
    <span className={cn("flex min-w-0 items-center gap-3", className)}>
      <img
        src={logoMark}
        alt=""
        aria-hidden="true"
        width={isLarge ? 96 : 68}
        height={isLarge ? 96 : 68}
        className={cn("shrink-0 rounded-full object-cover", isLarge ? "h-24 w-24" : "h-[68px] w-[68px]")}
      />

      <span
        aria-hidden="true"
        className={cn("bg-champagne-deep/70 w-px shrink-0", isLarge ? "h-12" : "h-8")}
      />

      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "font-brand text-ink truncate",
            isLarge ? "text-[1.75rem] tracking-[0.05em]" : "text-[1.3rem] tracking-[0.035em]",
          )}
        >
          Glam By KT
        </span>

        <span
          className={cn(
            "text-champagne-deep mt-1.5 font-medium tracking-[0.18em] uppercase",
            isLarge ? "text-[0.625rem]" : "text-[0.6rem]",
          )}
        >
          Hair &amp; Makeup
        </span>
      </span>
    </span>
  );
}
