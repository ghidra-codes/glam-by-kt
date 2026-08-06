import portraitAsset from "@/assets/kela-portrait.png.asset.json";
import { useI18n } from "@/lib/i18n";

export function AboutPreview() {
  const { t } = useI18n();

  return (
    <section id="about" aria-labelledby="about-title" className="shell py-20 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <figure className="order-2 lg:order-1">
          <img
            src="images/kela-01.png"
            alt={t.about.portraitAlt}
            className="aspect-[4/5] w-full object-cover"
            loading="lazy"
          />
        </figure>

        <div className="order-1 max-w-lg lg:order-2">
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2 id="about-title" className="text-ink mt-5 text-4xl lg:text-5xl">
            {t.about.title}
          </h2>
          <p className="text-muted-foreground mt-8 text-base leading-relaxed">{t.about.body}</p>
          <p className="border-champagne/70 text-muted-foreground mt-6 border-l pl-4 text-xs leading-relaxed">
            {t.about.note}
          </p>
        </div>
      </div>
    </section>
  );
}
