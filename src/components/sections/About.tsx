import portraitImage from "@/assets/images/kela/kela-portrait.webp";
import { useI18n } from "@/lib/i18n";

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" aria-labelledby="about-title" className="shell py-20 lg:py-28">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2 id="about-title" className="text-ink mt-5 text-4xl lg:text-5xl">
            {t.about.title}
          </h2>
          <figure className="mt-10">
            <img
              src={portraitImage}
              alt={t.about.portraitAlt}
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </figure>
        </div>

        <div>
          <div className="max-w-xl space-y-6">
            {t.about.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 24)}
                className={
                  index === 0
                    ? "text-ink font-display text-2xl leading-snug lg:text-[1.75rem]"
                    : "text-muted-foreground text-base leading-relaxed"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          <blockquote className="border-champagne/70 mt-12 max-w-xl border-l pl-6">
            <p className="eyebrow">{t.about.missionTitle}</p>
            <p className="font-display text-ink mt-3 text-xl leading-snug lg:text-2xl">{t.about.mission}</p>
          </blockquote>

          <h3 className="eyebrow mt-16">{t.about.credentialsTitle}</h3>
          <ul className="border-border/70 mt-6 border-t">
            {t.about.credentials.map((item) => (
              <li
                key={item.title}
                className="border-border/70 grid gap-1 border-b py-5 sm:grid-cols-[7rem_minmax(0,1fr)] sm:items-baseline sm:gap-8"
              >
                <span className="eyebrow">{item.year}</span>
                <span>
                  <span className="text-ink block text-base">{item.title}</span>
                  <span className="text-muted-foreground mt-1 block text-sm leading-relaxed">
                    {item.body}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
