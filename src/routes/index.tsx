import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Masterclasses } from "@/components/sections/Masterclasses";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { BookingCta } from "@/components/sections/BookingCta";
import { I18nProvider } from "@/lib/i18n";

const title = "Glam By KT — Hair & Makeup Artist in Stockholm";
const description =
  "Kela — hair stylist and makeup artist in Stockholm with 25+ years of experience. Specialist in bleaching, highlights, toning and colour. Book via BokaDirekt.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
          <About />
          <Education />
          <Masterclasses />
          <SelectedWork />
          <BookingCta />
        </main>
        <SiteFooter />
      </div>
    </I18nProvider>
  );
}
