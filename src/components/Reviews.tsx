import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  const reviews = [
    {
      quote: t("reviews.r1.quote"),
      author: t("reviews.r1.author"),
      company: t("reviews.r1.company"),
    },
    {
      quote: t("reviews.r2.quote"),
      author: t("reviews.r2.author"),
      company: t("reviews.r2.company"),
    },
    {
      quote: t("reviews.r3.quote"),
      author: t("reviews.r3.author"),
      company: t("reviews.r3.company"),
    },
  ];

  const nextReview = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="section-padding border-t border-border bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[200px_1fr] gap-12 lg:gap-20">
          <div>
            <h2 className="text-label text-muted-foreground mb-2">{t("reviews.label")}</h2>
            <h3 className="text-display-md font-sans">{t("reviews.title")}</h3>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-smooth"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <blockquote className="space-y-8">
                      <p className="text-xl md:text-2xl leading-relaxed font-sans lg:text-xl">
                        "{review.quote}"
                      </p>
                      <footer className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">{review.author}</span>
                        <span className="mx-2">—</span>
                        <span>{review.company}</span>
                      </footer>
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mt-12">
              <button onClick={prevReview} className="p-3 border border-border hover:bg-secondary transition-colors" aria-label="Previous review">
                <ChevronLeft size={20} />
              </button>
              <button onClick={nextReview} className="p-3 border border-border hover:bg-secondary transition-colors" aria-label="Next review">
                <ChevronRight size={20} />
              </button>
              <div className="flex gap-2 ml-auto">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-foreground" : "bg-border"}`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
