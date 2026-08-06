import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { BookingCta } from "@/components/sections/BookingCta";
import { I18nProvider } from "@/lib/i18n";

const title = "Glam By KT — Hair & Makeup Artist in Stockholm";
const description =
  "Glam By KT is Kela's Stockholm studio for hair colour — bleaching, highlights, toning, colouring, cutting and makeup. Book through BokaDirekt.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
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
          <AboutPreview />
          <SelectedWork />
          <BookingCta />
        </main>
        <SiteFooter />
      </div>
    </I18nProvider>
  );
}
