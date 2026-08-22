import { Star } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { ReviewData } from "./sections/Reviews";

const REVIEW_PREVIEW_THRESHOLD = 300;

export default function ReviewCard({ review }: { review: ReviewData }) {
  const { t } = useI18n();
  const [isExpanded, setIsExpanded] = useState(false);

  const isLongReview = review.text.length > REVIEW_PREVIEW_THRESHOLD;

  return (
    <li className="bg-background border-border/70 flex flex-col border p-8">
      <div className="mb-5 flex items-center">
        <div role="img" className="flex gap-1" aria-label={`Rating: ${review.rating} out of 5 stars`}>
          {Array.from({ length: review.rating }).map((_, index) => (
            <Star
              key={index}
              className="fill-champagne-deep text-champagne-deep h-4 w-4"
              aria-hidden="true"
              strokeWidth={1}
            />
          ))}
        </div>
      </div>

      <blockquote className="flex-1">
        <p
          className={cn(
            "text-muted-foreground text-base leading-relaxed whitespace-pre-wrap",
            isLongReview && !isExpanded && "line-clamp-4",
          )}
        >
          {review.text}
        </p>

        {isLongReview && (
          <button
            type="button"
            onClick={() => setIsExpanded((expanded) => !expanded)}
            aria-expanded={isExpanded}
            className="text-ink mt-4 cursor-pointer text-sm font-medium underline decoration-transparent underline-offset-4 transition-all hover:decoration-current hover:opacity-70"
          >
            {isExpanded ? t.reviews.showLess : t.reviews.readMore}
          </button>
        )}
      </blockquote>

      <div className="border-border/70 mt-8 flex items-center justify-between border-t pt-4">
        <cite className="font-display text-ink text-base not-italic">{review.author}</cite>

        <span className="eyebrow text-muted-foreground text-[0.625rem]">{t.reviews.attribution}</span>
      </div>
    </li>
  );
}
