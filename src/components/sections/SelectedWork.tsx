import { INSTAGRAM_HANDLE, INSTAGRAM_URL, useI18n } from "@/lib/i18n";

const slots = ["a", "b", "c", "d"];

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
            className="link-rule text-ink mt-5 inline-block text-[0.6875rem] font-medium tracking-editorial uppercase"
          >
            {t.work.instagram} — {INSTAGRAM_HANDLE}
            <span className="sr-only"> ({t.booking.newTab})</span>
          </a>
        </div>
      </div>

      <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {slots.map((slot) => (
          <li key={slot}>
            <div className="placeholder-surface border-border/70 flex aspect-[3/4] items-center justify-center border">
              <span className="eyebrow">{t.work.placeholder}</span>
            </div>
          </li>
        ))}
      </ul>

      <p className="text-muted-foreground mt-8 text-xs">{t.work.pending}</p>
    </section>
  );
}
