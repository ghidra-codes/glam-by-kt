import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { About } from "@/components/sections/About";
import { BookingCta } from "@/components/sections/BookingCta";
import { Education } from "@/components/sections/Education";
import { Hero } from "@/components/sections/Hero";
import { Reviews } from "@/components/sections/Reviews";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Services } from "@/components/sections/Services";
import { I18nProvider } from "@/lib/i18n";

const title = "Glam By KT | Frisör & makeupartist i Stockholm";
const description =
  "Boka tid hos Kela, frisör och makeupartist i Stockholm med 25 års erfarenhet. Specialist på blekning, slingor, toning och hårfärg.";
const canonicalUrl = "https://glambykt.se/";
const socialImageUrl = "https://glambykt.se/og.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:site_name", content: "Glam By KT" },
      { property: "og:locale", content: "sv_SE" },
      { property: "og:image", content: socialImageUrl },
      { property: "og:image:width", content: "1729" },
      { property: "og:image:height", content: "910" },
      {
        property: "og:image:alt",
        content: "Glam By KT — Frisör och makeupartist i Stockholm",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: socialImageUrl },
      {
        name: "twitter:image:alt",
        content: "Glam By KT — Frisör och makeupartist i Stockholm",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Hero />
          <Services />
          <About />
          <Education />
          <SelectedWork />
          <Reviews />
          <BookingCta />
        </main>
        <SiteFooter />
      </div>
    </I18nProvider>
  );
}
