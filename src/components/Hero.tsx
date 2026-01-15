import { useEffect, useState } from "react";
export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-foreground rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-foreground rounded-full" />
      </div>

      <div className="container-custom text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          
        </div>

        <div className="font-mono font-thin px-0 text-6xl my-[9px]">
          <p className="text-label text-muted-foreground mb-12 text-2xl">
            Fraud Detection System
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#about" className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105">
              Learn More
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              Partner with Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-muted-foreground to-transparent animate-pulse" />
      </div>
    </section>;
};