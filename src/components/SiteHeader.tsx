import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { BookingButton } from "@/components/BookingButton";
import { BrandMark } from "@/components/BrandMark";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useI18n } from "@/lib/i18n";

export function SiteHeader() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#about", label: t.nav.about },
    { href: "#education", label: t.nav.education },
    { href: "#work", label: t.nav.work },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    if (!open) return;

    firstMobileLinkRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      setOpen(false);
      menuButtonRef.current?.focus();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <header className="bg-background/85 sticky top-0 z-50 backdrop-blur-md md:border-b md:border-border/70">
      <div className="shell relative grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-4 py-2.5 sm:px-6">
        <a href="#top" className="-ml-2 min-w-0 md:ml-0" aria-label="Glam By KT">
          <BrandMark />
        </a>

        <div className="flex items-center gap-6">
          <nav aria-label={t.nav.menu} className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-rule text-ink/80 hover:text-ink text-xs font-medium tracking-[0.16em] uppercase transition-colors"
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
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="text-ink flex w-[4.75rem] shrink-0 cursor-pointer items-center justify-end gap-2 py-2 text-xs font-medium tracking-[0.16em] uppercase lg:hidden"
          >
            {open ? t.nav.close : t.nav.menu}

            {open ? (
              <X aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
            ) : (
              <Menu aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
            )}
          </button>
        </div>

        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 md:hidden">
          <span className="border-border/70 absolute bottom-0 left-0 w-2.5 border-b" />

          <span
            className="
              border-border/70 absolute right-0 bottom-0 border-b
              left-[132px]
              min-[420px]:left-[144px]
              sm:left-[152px]
            "
          />
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="bg-background lg:hidden">
          <nav aria-label={t.nav.menu} className="shell px-4 py-8 sm:px-6">
            <ul className="flex flex-col items-end gap-6">
              {links.map((link, index) => (
                <li key={link.href}>
                  <a
                    ref={index === 0 ? firstMobileLinkRef : undefined}
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
