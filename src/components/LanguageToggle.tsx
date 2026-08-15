import { type Language, useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const options: { value: Language; short: string }[] = [
  { value: "sv", short: "SV" },
  { value: "en", short: "EN" },
];

export function LanguageToggle({ className }: { className?: string }) {
  const { language, setLanguage, t } = useI18n();

  return (
    <div role="group" aria-label={t.language.label} className={cn("flex items-center gap-1", className)}>
      {options.map((option, index) => (
        <span key={option.value} className="flex items-center gap-1">
          {index > 0 && (
            <span aria-hidden="true" className="text-muted-foreground/50 text-[0.625rem]">
              /
            </span>
          )}
          <button
            type="button"
            lang={option.value}
            aria-pressed={language === option.value}
            onClick={() => setLanguage(option.value)}
            className={cn(
              "cursor-pointer rounded-sm px-1.5 py-1 text-[0.6875rem] font-medium tracking-editorial uppercase transition-colors duration-300",
              language === option.value ? "text-ink" : "text-muted-foreground hover:text-champagne-deep",
            )}
          >
            {option.short}
            <span className="sr-only"> — {option.value === "sv" ? t.language.sv : t.language.en}</span>
          </button>
        </span>
      ))}
    </div>
  );
}
