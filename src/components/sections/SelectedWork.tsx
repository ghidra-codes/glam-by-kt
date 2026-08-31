import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { siInstagram } from "simple-icons";
import workImage1 from "@/assets/images/work/work-01.webp";
import workImage2 from "@/assets/images/work/work-02.webp";
import workImage3 from "@/assets/images/work/work-03.webp";
import workImage4 from "@/assets/images/work/work-04.webp";
import workImage5 from "@/assets/images/work/work-05.webp";
import workImage6 from "@/assets/images/work/work-06.webp";
import workImage7 from "@/assets/images/work/work-07.webp";
import { SimpleIcon } from "@/components/SimpleIcon";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, useI18n } from "@/lib/i18n";

const workImages = [
  workImage1,
  workImage2,
  workImage3,
  workImage4,
  workImage5,
  workImage6,
  workImage7,
] as const;

export function SelectedWork() {
  const { t } = useI18n();
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateControls = useCallback(() => {
    if (!emblaApi) return;

    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateControls();
    emblaApi.on("select", updateControls);
    emblaApi.on("reInit", updateControls);

    return () => {
      emblaApi.off("select", updateControls);
      emblaApi.off("reInit", updateControls);
    };
  }, [emblaApi, updateControls]);

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
            <SimpleIcon
              icon={siInstagram}
              aria-hidden="true"
              className="h-3.5 w-3.5 shrink-0 translate-y-[0.5px]"
            />
            {INSTAGRAM_HANDLE}
            <span className="sr-only">
              {" "}
              — {t.work.instagram} ({t.booking.newTab})
            </span>
          </a>
        </div>
      </div>

      <div className="mt-14" role="region" aria-roledescription="carousel" aria-label={t.work.carouselLabel}>
        <div ref={emblaRef} className="overflow-hidden">
          <ul className="-ml-6 flex touch-pan-y lg:-ml-8">
            {workImages.map((src, index) => (
              <li
                key={src}
                className="min-w-0 flex-[0_0_100%] pl-6 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] lg:pl-8"
                aria-roledescription="slide"
                aria-label={`${index + 1} / ${workImages.length}`}
              >
                <div className="border-border/70 aspect-[3/4] overflow-hidden border">
                  <img
                    src={src}
                    alt={t.work.imageAlts[index]}
                    width={600}
                    height={800}
                    loading="lazy"
                    draggable="false"
                    className="h-full w-full object-cover"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            aria-label={t.work.previous}
            className="border-border text-ink hover:border-champagne-deep hover:text-champagne-deep inline-flex h-11 w-11 items-center justify-center border transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-border disabled:hover:text-ink"
          >
            <ChevronLeft aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            aria-label={t.work.next}
            className="border-border text-ink hover:border-champagne-deep hover:text-champagne-deep inline-flex h-11 w-11 items-center justify-center border transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-border disabled:hover:text-ink"
          >
            <ChevronRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
