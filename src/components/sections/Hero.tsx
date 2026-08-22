import salonImage from "@/assets/images/Kela-image002.png";
import { BookingButton } from "@/components/BookingButton";
import { DEAR_BEAUTY_URL, useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" aria-labelledby="hero-title" className="shell pt-14 pb-20 lg:pt-20 lg:pb-28">
      <div className="grid items-end gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.85fr)] lg:gap-24">
        <div className="max-w-xl">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 id="hero-title" className="text-ink mt-7 text-[clamp(2.75rem,7.5vw,5.25rem)] leading-[0.95]">
            {t.hero.title}
          </h1>
          <p className="text-muted-foreground mt-8 max-w-md text-base leading-relaxed">
            {t.hero.lead} {t.hero.salonPrefix}{" "}
            <a
              href={DEAR_BEAUTY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-link whitespace-nowrap"
            >
              {t.hero.salonName}
            </a>{" "}
            {t.hero.salonSuffix}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <BookingButton size="lg" />
            <a
              href="#services"
              className="link-rule text-ink text-[0.6875rem] font-medium tracking-editorial uppercase"
            >
              {t.hero.secondary}
            </a>
          </div>
          <p className="text-muted-foreground mt-5 text-xs">{t.booking.via}</p>
        </div>

        <figure className="relative">
          <img
            src={salonImage}
            alt={t.hero.portraitAlt}
            className="aspect-[4/5] w-full object-cover"
            loading="eager"
          />
          <span
            aria-hidden="true"
            className="border-champagne/60 pointer-events-none absolute -bottom-4 -left-4 hidden h-24 w-24 border-b border-l lg:block"
          />
        </figure>
      </div>

      <dl className="border-border/70 mt-16 grid gap-8 border-t pt-8 sm:grid-cols-3 lg:mt-20">
        {t.hero.facts.map((fact) => (
          <div key={fact.label}>
            <dt className="eyebrow">{fact.label}</dt>
            <dd className="font-display text-ink mt-2 text-3xl lg:text-4xl">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
