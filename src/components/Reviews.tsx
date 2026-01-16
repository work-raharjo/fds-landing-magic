import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
const reviews = [{
  quote: "Implementasi FDS di bank kami sangat membantu dalam meningkatkan kemampuan deteksi fraud kami. Sistem yang intuitif dan dokumentasi yang lengkap memudahkan tim kami dalam mengadopsi platform ini.",
  author: "IT Director",
  company: "Bank Jatim"
}, {
  quote: "FDS memberikan visibilitas penuh terhadap aktivitas transaksi dan membantu kami memenuhi persyaratan regulasi OJK dengan lebih efisien. Highly recommended untuk institusi keuangan.",
  author: "Compliance Manager",
  company: "Financial Institution"
}, {
  quote: "Platform yang sangat powerful namun mudah digunakan. Early warning system-nya sangat efektif dalam mendeteksi potensi fraud sebelum terjadi kerugian material.",
  author: "Risk Management Head",
  company: "Banking Sector"
}];
export const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextReview = () => {
    setCurrentIndex(prev => (prev + 1) % reviews.length);
  };
  const prevReview = () => {
    setCurrentIndex(prev => (prev - 1 + reviews.length) % reviews.length);
  };
  return <section id="reviews" className="section-padding border-t border-border bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[200px_1fr] gap-12 lg:gap-20">
          <div>
            <h2 className="text-label text-muted-foreground mb-2">Hear Our</h2>
            <h3 className="text-display-md font-sans">Reviews</h3>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-smooth" style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}>
                {reviews.map((review, index) => <div key={index} className="w-full flex-shrink-0 px-4">
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
                  </div>)}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-12">
              <button onClick={prevReview} className="p-3 border border-border hover:bg-secondary transition-colors" aria-label="Previous review">
                <ChevronLeft size={20} />
              </button>
              <button onClick={nextReview} className="p-3 border border-border hover:bg-secondary transition-colors" aria-label="Next review">
                <ChevronRight size={20} />
              </button>
              
              {/* Dots */}
              <div className="flex gap-2 ml-auto">
                {reviews.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-foreground" : "bg-border"}`} aria-label={`Go to review ${index + 1}`} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};