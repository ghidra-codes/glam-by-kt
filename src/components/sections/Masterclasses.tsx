import { useI18n } from "@/lib/i18n";

export function Masterclasses() {
  const { t } = useI18n();

  return (
    <section id="masterclasses" aria-labelledby="masterclass-title" className="border-border/70 border-y">
      <div className="shell grid gap-8 py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-24 lg:py-20">
        <div>
          <p className="eyebrow">{t.masterclass.eyebrow}</p>
          <h2 id="masterclass-title" className="text-ink mt-5 text-3xl lg:text-4xl">
            {t.masterclass.title}
          </h2>
        </div>
        <div className="max-w-lg self-end">
          <p className="text-muted-foreground text-base leading-relaxed">{t.masterclass.body}</p>
          <p className="border-champagne/70 text-muted-foreground mt-5 border-l pl-4 text-xs leading-relaxed">
            {t.masterclass.tbd}
          </p>
        </div>
      </div>
    </section>
  );
}
