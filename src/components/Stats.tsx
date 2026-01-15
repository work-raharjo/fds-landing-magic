import { useEffect, useState, useRef } from "react";
const stats = [{
  value: 316,
  suffix: "B+",
  label: "Trx Scanned"
}, {
  value: 20,
  suffix: "M+",
  label: "Nasabah Terlindungi"
}, {
  value: 215,
  suffix: "B+",
  label: "YTD Transactions"
}];
const useCountUp = (end: number, duration: number = 2000, startCounting: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startCounting) return;
    let startTime: number;
    let animationFrame: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);
  return count;
};
const StatItem = ({
  stat,
  startCounting
}: {
  stat: typeof stats[0];
  startCounting: boolean;
}) => {
  const count = useCountUp(stat.value, 2000, startCounting);
  return <div className="text-center">
      <div className="text-display-lg md:text-display-xl mb-2">
        <span className="tabular-nums font-sans">{count}</span>
        <span className="text-accent font-sans">{stat.suffix}</span>
      </div>
      <p className="text-label text-muted-foreground">{stat.label}</p>
    </div>;
};
export const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.3
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <section ref={sectionRef} className="section-padding border-t border-border">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="text-label text-muted-foreground">By the Numbers</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, index) => <StatItem key={index} stat={stat} startCounting={isVisible} />)}
        </div>
      </div>
    </section>;
};