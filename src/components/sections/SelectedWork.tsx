import { Instagram } from "lucide-react";
import workImage1 from "@/assets/images/work/image001.png";
import workImage2 from "@/assets/images/work/image002.png";
import workImage5 from "@/assets/images/work/image005.png";
import workImage6 from "@/assets/images/work/image006.png";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, useI18n } from "@/lib/i18n";

const workImages = [workImage1, workImage2, workImage5, workImage6] as const;

export function SelectedWork() {
  const { t } = useI18n();

  return (
    <section id="work" aria-labelledby="work-title" className="shell py-20 lg:py-28">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-24">
        <div>
          <p className="eyebrow">{t.work.eyebrow}</p>
          <h2 id="work-title" className="text-ink mt-5 text-4xl lg:text-5xl">
            {t.work.title}
          </h2>
        </div>

        <div className="max-w-lg self-end">
          <p className="text-muted-foreground text-base leading-relaxed">{t.work.lead}</p>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink hover:text-champagne-deep mt-5 inline-flex items-center gap-2 text-[0.6875rem] leading-none font-medium tracking-editorial uppercase transition-colors duration-300"
          >
            <Instagram
              aria-hidden="true"
              className="h-3.5 w-3.5 shrink-0 translate-y-[0.5px]"
              strokeWidth={1.5}
            />
            {INSTAGRAM_HANDLE}
            <span className="sr-only">
              {" "}
              — {t.work.instagram} ({t.booking.newTab})
            </span>
          </a>
        </div>
      </div>

      <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {workImages.map((src) => (
          <li key={src}>
            <div className="border-border/70 aspect-[3/4] overflow-hidden border">
              <img
                src={src}
                alt="Hair work by Glam By KT"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
