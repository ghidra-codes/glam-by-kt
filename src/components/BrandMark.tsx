import logoMark from "@/assets/images/logos/logo-light.png";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  variant?: "header" | "footer";
};

export function BrandMark({ className, variant = "header" }: BrandMarkProps) {
  if (variant === "footer") {
    return (
      <span className={cn("flex w-max shrink-0 items-center gap-3", className)}>
        <span className="h-24 w-24 shrink-0 overflow-hidden rounded-full bg-black p-0.5">
          <img
            src={logoMark}
            alt=""
            aria-hidden="true"
            width={1200}
            height={1199}
            className="h-full w-full object-contain"
          />
        </span>

        <span aria-hidden="true" className="bg-champagne-deep/70 h-12 w-px shrink-0" />

        <span className="flex shrink-0 flex-col leading-none">
          <span className="font-brand text-ink whitespace-nowrap text-[1.75rem] tracking-[0.05em]">
            Glam By KT
          </span>

          <span className="text-champagne-deep mt-1.5 whitespace-nowrap text-[0.625rem] font-medium tracking-[0.18em] uppercase">
            Hair &amp; Makeup
          </span>
        </span>
      </span>
    );
  }

  return (
    <span
      className={cn(
        "relative flex h-16 min-w-0 items-center pl-[120px] min-[420px]:pl-[132px] md:pl-[152px]",
        className,
      )}
    >
      <span
        className="
          absolute -top-1 left-0 z-10 flex
          h-[124px] w-[124px] items-start justify-center pt-1.5
          min-[420px]:-top-1.5 min-[420px]:h-[136px] min-[420px]:w-[136px] min-[420px]:pt-2
          md:-top-2.5 md:h-[160px] md:w-[160px]
        "
      >
        <span
          aria-hidden="true"
          className="bg-background/85 border-border/70 pointer-events-none absolute inset-x-0 top-[84px] bottom-0 hidden rounded-b-full border-x border-b backdrop-blur-md md:block"
        />

        <img
          src={logoMark}
          alt=""
          aria-hidden="true"
          width={1200}
          height={1199}
          className="
            relative z-10 h-28 w-28 shrink-0 rounded-full object-contain
            min-[420px]:h-[124px] min-[420px]:w-[124px]
            md:h-36 md:w-36
          "
        />
      </span>

      <span className="inline-flex w-max shrink-0 flex-col leading-none">
        <span className="font-brand text-ink whitespace-nowrap text-[1.35rem] tracking-[0.035em]">
          Glam By KT
        </span>

        <span className="relative mt-1.5 h-3 w-full">
          <span className="text-champagne-deep absolute top-[2px] left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.62rem] font-medium tracking-[0.18em] uppercase">
            Hair &amp; Makeup
          </span>
        </span>
      </span>
    </span>
  );
}
