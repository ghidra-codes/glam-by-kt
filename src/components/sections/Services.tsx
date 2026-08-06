import { useI18n } from "@/lib/i18n";

export function Services() {
  const { t } = useI18n();

  return (
    <section id="services" aria-labelledby="services-title" className="bg-sand/60 py-20 lg:py-28">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <div>
            <p className="eyebrow">{t.services.eyebrow}</p>
            <h2 id="services-title" className="text-ink mt-5 text-4xl lg:text-5xl">
              {t.services.title}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md self-end text-base leading-relaxed">
            {t.services.lead}
          </p>
        </div>

        <ul className="border-border/70 mt-14 border-t">
          {t.services.items.map((item, index) => (
            <li
              key={item.title}
              className="border-border/70 grid gap-3 border-b py-7 md:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1.1fr)] md:items-baseline md:gap-8"
            >
              <span aria-hidden="true" className="eyebrow">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-ink text-2xl">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
            </li>
          ))}
        </ul>

        <p className="text-muted-foreground mt-8 text-xs">{t.services.note}</p>
      </div>
    </section>
  );
}
