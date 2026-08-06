import { BookingButton } from "@/components/BookingButton";
import { BrandMark } from "@/components/BrandMark";
import { LanguageToggle } from "@/components/LanguageToggle";
import { INSTAGRAM_URL, useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer id="contact" className="border-border/70 border-t">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <BrandMark />
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
            data-instagram-placeholder="true"
            className="link-rule text-ink mt-4 inline-block text-sm"
          >
            {t.footer.instagram}
            <span className="sr-only"> ({t.booking.newTab})</span>
          </a>
          <p className="text-muted-foreground mt-3 max-w-xs text-xs leading-relaxed">
            {t.footer.instagramPlaceholder}
          </p>
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
