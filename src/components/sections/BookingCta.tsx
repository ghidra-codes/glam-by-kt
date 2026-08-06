import { BookingButton } from "@/components/BookingButton";
import { useI18n } from "@/lib/i18n";

export function BookingCta() {
  const { t } = useI18n();

  return (
    <section aria-labelledby="cta-title" className="bg-ink py-24 lg:py-32">
      <div className="shell text-center">
        <p className="eyebrow text-background/60">{t.cta.eyebrow}</p>
        <h2
          id="cta-title"
          className="text-background mx-auto mt-6 max-w-2xl text-[clamp(2.25rem,6vw,4rem)] leading-[1.05]"
        >
          {t.cta.title}
        </h2>
        <p className="text-background/70 mx-auto mt-6 max-w-md text-sm leading-relaxed">
          {t.cta.body}
        </p>
        <div className="mt-10 flex justify-center">
          <BookingButton size="lg" variant="inverted" />
        </div>
      </div>
    </section>
  );
}
