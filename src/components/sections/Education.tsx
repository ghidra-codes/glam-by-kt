import lisapAsset from "@/assets/edu-lisap.png.asset.json";
import masterclassAsset from "@/assets/edu-masterclass.png.asset.json";
import { useI18n } from "@/lib/i18n";

export function Education() {
  const { t } = useI18n();
  const images = [masterclassAsset.url, lisapAsset.url];


  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="bg-sand/60 py-20 lg:py-28"
    >
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-24">
          <div>
            <p className="eyebrow">{t.education.eyebrow}</p>
            <h2 id="education-title" className="text-ink mt-5 text-4xl lg:text-5xl">
              {t.education.title}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-lg self-end text-base leading-relaxed">
            {t.education.lead}
          </p>
        </div>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {images.map((src, index) => (
            <li key={src} className="mx-auto w-full max-w-[21rem]">
              <figure>
                <img
                  src={src}
                  alt={t.education.captions[index]}
                  width={332}
                  height={443}
                  className="aspect-[3/4] w-full object-cover"
                  loading="lazy"
                  sizes="(min-width: 640px) 21rem, 100vw"
                />

                <figcaption className="text-muted-foreground mt-4 text-xs leading-relaxed">
                  {t.education.captions[index]}
                </figcaption>
              </figure>
            </li>
          ))}
          <li className="mx-auto w-full max-w-[21rem]">
            <figure>
              <div className="placeholder-surface border-border/70 flex aspect-[3/4] w-full items-center justify-center border">
                <span className="eyebrow">{t.education.placeholder}</span>
              </div>
              <figcaption className="text-muted-foreground mt-4 text-xs leading-relaxed">
                {t.education.placeholderCaption}
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
}
