import { ExternalLink } from "lucide-react";
import { siInstagram } from "simple-icons";
import { BookingButton } from "@/components/BookingButton";
import { BrandMark } from "@/components/BrandMark";
import { SimpleIcon } from "@/components/SimpleIcon";
import { DEAR_BEAUTY_URL, INSTAGRAM_HANDLE, INSTAGRAM_URL, useI18n } from "@/lib/i18n";

const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=Dear+Beauty,+Alstr%C3%B6mergatan+32,+112+47+Stockholm";

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer id="contact" className="border-border/70 border-t">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_0.8fr] lg:py-20">
        <div className="flex items-center justify-center">
          <BrandMark size="lg" />
        </div>

        <div className="flex flex-col">
          <h2 className="eyebrow">{t.footer.contact}</h2>

          <address className="mt-4 flex flex-col gap-1 text-sm leading-relaxed not-italic">
            <span className="text-ink font-medium">Glam By KT / Dear Beauty</span>
            <span className="text-muted-foreground">Alströmergatan 32</span>
            <span className="text-muted-foreground">112 47 Stockholm</span>

            <a
              href="tel:0733131309"
              className="text-muted-foreground hover:text-champagne-deep mt-1 w-fit transition-colors duration-300"
            >
              073-313 13 09
            </a>
          </address>

          <BookingButton url={DIRECTIONS_URL} size="sm" variant="outline" className="mt-5 w-fit">
            {t.footer.directions}
          </BookingButton>
        </div>

        <div className="flex flex-col items-start">
          <h2 className="eyebrow">{t.footer.links}</h2>

          <div className="mt-4 flex flex-col items-start gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram ${INSTAGRAM_HANDLE}`}
              className="text-ink hover:text-champagne-deep inline-flex items-center gap-2 text-sm leading-none transition-colors duration-300"
            >
              <SimpleIcon icon={siInstagram} aria-hidden="true" className="h-4 w-4 shrink-0" />
              {INSTAGRAM_HANDLE}
              <span className="sr-only"> ({t.booking.newTab})</span>
            </a>

            <a
              href={DEAR_BEAUTY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:text-champagne-deep inline-flex items-center gap-2 text-sm leading-none uppercase tracking-wide transition-colors duration-300"
            >
              <ExternalLink aria-hidden="true" className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              Dear Beauty
              <span className="sr-only"> ({t.booking.newTab})</span>
            </a>
          </div>
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
