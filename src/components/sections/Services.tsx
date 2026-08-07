import { BookingButton } from "@/components/BookingButton";
import { useI18n } from "@/lib/i18n";

export function Services() {
  const { t } = useI18n();

  return (
    <section id="services" aria-labelledby="services-title" className="bg-sand/60 py-20 lg:py-28">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-24">
          <div>
            <p className="eyebrow">{t.services.eyebrow}</p>
            <h2 id="services-title" className="text-ink mt-5 text-4xl lg:text-5xl">
              {t.services.title}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-lg self-end text-base leading-relaxed">
            {t.services.lead}
          </p>
        </div>

        {/* Colour specialisation — Kela's strongest expertise, given visual priority */}
        <h3 className="eyebrow border-border/70 mt-16 border-t pt-6">{t.services.colourTitle}</h3>
        <ul className="mt-2">
          {t.services.colourItems.map((item, index) => (
            <li
              key={item.title}
              className="border-border/70 grid gap-3 border-b py-8 md:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1.15fr)] md:items-baseline md:gap-10"
            >
              <span aria-hidden="true" className="eyebrow">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h4 className="font-display text-ink text-2xl lg:text-3xl">{item.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
            </li>
          ))}
        </ul>

        <h3 className="eyebrow mt-14">{t.services.moreTitle}</h3>
        <ul className="border-border/70 mt-6 grid gap-x-14 gap-y-8 border-t pt-8 sm:grid-cols-2">
          {t.services.moreItems.map((item) => (
            <li key={item.title}>
              <h4 className="font-display text-ink text-xl">{item.title}</h4>
              <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">{item.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4">
          <BookingButton />
          <p className="text-muted-foreground text-xs">{t.services.note}</p>
        </div>
      </div>
    </section>
  );
}
