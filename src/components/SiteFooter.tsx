import { Instagram } from "lucide-react";
import { BookingButton } from "@/components/BookingButton";

import { BrandMark } from "@/components/BrandMark";
import { LanguageToggle } from "@/components/LanguageToggle";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer id="contact" className="border-border/70 border-t">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:py-20">
        <div>
          <BrandMark size="lg" />
          <p className="text-muted-foreground mt-5 max-w-xs text-sm leading-relaxed">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <h2 className="eyebrow">{t.footer.contact}</h2>
          <p className="text-muted-foreground mt-4 max-w-xs text-sm leading-relaxed">
            {t.footer.contactPlaceholder}
          </p>
        </div>

        <div>
          <h2 className="eyebrow">{t.footer.follow}</h2>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram ${INSTAGRAM_HANDLE}`}
            className="text-ink hover:text-champagne-deep mt-4 inline-flex items-center gap-2 text-sm leading-none transition-colors duration-300"
          >
            <Instagram aria-hidden="true" className="h-4 w-4 shrink-0" strokeWidth={1.5} />
            {INSTAGRAM_HANDLE}
            <span className="sr-only"> ({t.booking.newTab})</span>
          </a>
        </div>


        <div className="flex flex-col items-start gap-5">
          <h2 className="eyebrow">{t.footer.book}</h2>
          <BookingButton size="sm" variant="outline" />
          <LanguageToggle />
        </div>
      </div>

      <div className="border-border/70 border-t">
        <div className="shell flex flex-wrap items-center justify-between gap-3 py-6">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Glam By KT. {t.footer.rights}
          </p>
          <p className="text-muted-foreground text-xs">{t.booking.via}</p>
        </div>
      </div>
    </footer>
  );
}
