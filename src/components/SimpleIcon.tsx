import type { SimpleIcon as SimpleIconType } from "simple-icons";
import { cn } from "@/lib/utils";

type SimpleIconProps = {
  icon: SimpleIconType;
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
};

export function SimpleIcon({ icon, className, ...props }: SimpleIconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-current", className)}
      {...props}
    >
      <path d={icon.path} />
    </svg>
  );
}
