import { useI18n } from "@/lib/i18n";

const slots = [
  { key: "a", ratio: "aspect-[3/4]" },
  { key: "b", ratio: "aspect-square" },
  { key: "c", ratio: "aspect-[3/4]" },
  { key: "d", ratio: "aspect-square" },
];

export function SelectedWork() {
  const { t } = useI18n();

  return (
    <section id="work" aria-labelledby="work-title" className="shell py-20 lg:py-28">
      <div className="max-w-xl">
        <p className="eyebrow">{t.work.eyebrow}</p>
        <h2 id="work-title" className="text-ink mt-5 text-4xl lg:text-5xl">
          {t.work.title}
        </h2>
        <p className="text-muted-foreground mt-6 text-base leading-relaxed">{t.work.lead}</p>
      </div>

      <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {slots.map((slot) => (
          <li key={slot.key}>
            <div
              className={`placeholder-surface border-border/70 flex items-center justify-center border ${slot.ratio}`}
            >
              <span className="eyebrow">{t.work.placeholder}</span>
            </div>
          </li>
        ))}
      </ul>

      <p className="text-muted-foreground mt-8 text-xs">{t.work.pending}</p>
    </section>
  );
}
