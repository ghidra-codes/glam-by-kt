import { BookingButton } from "@/components/BookingButton";
import { useI18n } from "@/lib/i18n";
import ReviewCard from "../ReviewCard";

export type ReviewData = {
  id: string;
  author: string;
  text: string;
  rating: number;
};

const reviewsData: ReviewData[] = [
  {
    id: "1",
    author: "Linnea Å.",
    rating: 5,
    text: "Klippte mig och fixade håret inför ett bröllop hos Kela. Fantastiskt mottagande och fixande för att få mitt motsträviga hår att locka sig. Dear Beauty har fantastisk atmosfär och Zerina som äger salong bjuder alltid på varmt välkomnande, kaffe och god service.",
  },
  {
    id: "2",
    author: "Christina N.",
    rating: 5,
    text: "Har behövt klippas och fixas till efter en längre tid av sjukdom men haft svårt att orka gå till frisör och framför allt tyckte jag det var svårt att hitta något som kändes bra. När jag kom in på den här skönhetssalongen, kändes det bra direkt och jag blev så väl omhändertagen. Frisörskan var verkligen jätteduktig. Jag gick in som en gammal kvinna och kom ut 10 år yngre... på riktigt! Hon förstod direkt vad som behövdes och jag fick en snygg lättskött klippning. Imponerande proffsigt. Jag rekommenderar verkligen Dear Beauty. Är så tacksam för mitt nya utseende.\nChristina",
  },
];

export function Reviews() {
  const { t } = useI18n();

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="bg-sand/60 py-20 lg:py-28">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-24">
          <div>
            <p className="eyebrow">{t.reviews.eyebrow}</p>

            <h2 id="reviews-title" className="text-ink mt-5 text-4xl lg:text-5xl">
              {t.reviews.title}
            </h2>
          </div>

          <div className="flex flex-col items-start justify-end lg:items-end">
            <BookingButton variant="outline" className="hidden lg:inline-flex">
              {t.reviews.cta}
            </BookingButton>
          </div>
        </div>

        <ul className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {reviewsData.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </ul>

        <div className="mt-10 flex justify-center lg:hidden">
          <BookingButton variant="outline" className="w-full sm:w-auto">
            {t.reviews.cta}
          </BookingButton>
        </div>
      </div>
    </section>
  );
}
