import logoMark from "@/assets/images/logos/Logo-GlamByKT.png";
import { cn } from "@/lib/utils";

export function BrandMark({ className, size = "sm" }: { className?: string; size?: "sm" | "lg" }) {
  const isLarge = size === "lg";

  return (
    <span className={cn("relative flex min-w-0 items-center", !isLarge && "h-16 pl-[158px]", className)}>
      {!isLarge && (
        <span className="absolute -top-2.5 left-0 z-10 flex h-[160px] w-[160px] items-start justify-center pt-2">
          <span
            aria-hidden="true"
            className="bg-background/85 border-border/70 pointer-events-none absolute inset-x-0 top-[84px] bottom-0 rounded-b-full border-x border-b backdrop-blur-md"
          />

          <img
            src={logoMark}
            alt=""
            aria-hidden="true"
            width={144}
            height={144}
            className="relative z-10 h-36 w-36 shrink-0 rounded-full object-cover"
          />
        </span>
      )}

      <span className="inline-flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "font-brand text-ink whitespace-nowrap",
            isLarge ? "text-[2rem] tracking-[0.055em]" : "text-[1.35rem] tracking-[0.035em]",
          )}
        >
          Glam By KT
        </span>

        <span className={cn("relative w-full", isLarge ? "mt-2 h-8" : "mt-1.5 h-3")}>
          <span
            className={cn(
              "text-champagne-deep absolute top-[2px] left-1/2 -translate-x-1/2 whitespace-nowrap font-medium tracking-[0.18em] uppercase",
              isLarge ? "text-[0.75rem]" : "text-[0.62rem]",
            )}
          >
            Hair &amp; Makeup
          </span>

          {isLarge && (
            <span aria-hidden="true" className="absolute inset-x-0 bottom-0 flex items-center gap-2">
              <span className="bg-champagne-deep/60 h-px flex-1" />
              <span className="border-champagne-deep/70 h-1.5 w-1.5 shrink-0 rotate-45 border" />
              <span className="bg-champagne-deep/60 h-px flex-1" />
            </span>
          )}
        </span>
      </span>
    </span>
  );
}
