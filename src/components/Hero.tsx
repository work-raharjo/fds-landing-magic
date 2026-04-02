import { useEffect, useState } from "react";
import { HeroBackground } from "./HeroBackground";
import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <HeroBackground />

      <div className="container-custom text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="font-thin px-0 text-6xl my-[29px] text-foreground font-sans">
            <p className="text-label text-muted-foreground mb-6 text-6xl font-thin font-sans">
              {t("hero.title")}
            </p>
          </div>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            {t("hero.subtitle")}
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#about" className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105">
              {t("hero.learnMore")}
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              {t("hero.partnerWithUs")}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-muted-foreground to-transparent animate-pulse" />
      </div>
    </section>
  );
};
