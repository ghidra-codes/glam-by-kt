import logoAsset from "@/assets/logo-glam-by-kt.jpg.asset.json";
import { cn } from "@/lib/utils";

/**
 * Reserved slot for the existing Glam By KT logo (client-supplied asset).
 * Never replace this mark with a generated alternative.
 */
export function BrandMark({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <span className={cn("flex min-w-0 items-center gap-3", className)}>
      <img
        src={logoAsset.url}
        alt=""
        aria-hidden="true"
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 rounded-full object-cover"
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "font-display truncate text-lg tracking-wide",
            invert ? "text-background" : "text-ink",
          )}
        >
          Glam By KT
        </span>
        <span className="eyebrow mt-1 text-[0.5625rem]">Hair &amp; Makeup</span>
      </span>
    </span>
  );
}
