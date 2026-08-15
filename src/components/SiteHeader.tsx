import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { BookingButton } from "@/components/BookingButton";
import { BrandMark } from "@/components/BrandMark";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useI18n } from "@/lib/i18n";

export function SiteHeader() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#about", label: t.nav.about },
    { href: "#education", label: t.nav.education },
    { href: "#work", label: t.nav.work },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="bg-background/85 border-border/70 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 lg:py-5">
        <a href="#top" className="min-w-0" aria-label="Glam By KT">
          <BrandMark />
        </a>

        <div className="flex items-center gap-6">
          <nav aria-label={t.nav.menu} className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-rule text-ink/80 hover:text-ink text-[0.6875rem] font-medium tracking-editorial uppercase transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <LanguageToggle className="hidden sm:flex" />
          <BookingButton size="sm" className="hidden sm:inline-flex" />

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="text-ink flex shrink-0 cursor-pointer items-center gap-2 py-2 text-[0.6875rem] font-medium tracking-editorial uppercase lg:hidden"
          >
            {open ? t.nav.close : t.nav.menu}
            {open ? (
              <X aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
            ) : (
              <Menu aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-border/70 bg-background border-t lg:hidden">
          <nav aria-label={t.nav.menu} className="shell py-8">
            <ul className="flex flex-col gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-ink block text-3xl"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="border-border/70 mt-8 flex flex-wrap items-center justify-between gap-4 border-t pt-6">
              <LanguageToggle />
              <BookingButton size="sm" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
