import diplomaImage from "@/assets/images/education/education-diploma.webp";
import lisapImage from "@/assets/images/education/lisap-milano.webp";
import masterclassImage from "@/assets/images/education/masterclass-milan.webp";
import { useI18n } from "@/lib/i18n";

export function Education() {
  const { t } = useI18n();
  const images = [diplomaImage, lisapImage, masterclassImage];

  return (
    <section id="education" aria-labelledby="education-title" className="bg-sand/60 py-20 lg:py-28">
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
                <div className="border-border/70 aspect-[3/4] overflow-hidden border">
                  <img
                    src={src}
                    alt={t.education.captions[index]}
                    width={332}
                    height={443}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    sizes="(min-width: 640px) 21rem, 100vw"
                  />
                </div>

                <figcaption className="text-muted-foreground mt-4 text-xs leading-relaxed">
                  {t.education.captions[index]}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
