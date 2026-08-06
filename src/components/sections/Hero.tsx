import salonAsset from "@/assets/kela-salon.png.asset.json";
import { BookingButton } from "@/components/BookingButton";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" aria-labelledby="hero-title" className="shell pt-16 pb-20 lg:pt-24 lg:pb-32">
      <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-20">
        <div className="max-w-xl">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1
            id="hero-title"
            className="text-ink mt-6 text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95]"
          >
            {t.hero.title}
          </h1>
          <p className="text-muted-foreground mt-8 max-w-md text-base leading-relaxed">
            {t.hero.lead}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <BookingButton size="lg" />
            <a
              href="#services"
              className="link-rule text-ink text-[0.6875rem] font-medium tracking-editorial uppercase"
            >
              {t.hero.secondary}
            </a>
          </div>
          <p className="text-muted-foreground mt-6 text-xs">{t.booking.via}</p>
        </div>

        <figure className="relative">
          <img
            src="images/kela-02.png"
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
    </section>
  );
}
