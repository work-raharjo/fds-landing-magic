import { useLanguage } from "@/contexts/LanguageContext";
import { BarChart3, Activity, Target } from "lucide-react";

export const RiskManagement = () => {
  const { t } = useLanguage();

  const metrics = [
    { icon: BarChart3, title: t("risk.metric1"), desc: t("risk.metric1.desc") },
    { icon: Activity, title: t("risk.metric2"), desc: t("risk.metric2.desc") },
    { icon: Target, title: t("risk.metric3"), desc: t("risk.metric3.desc") },
  ];

  return (
    <section className="section-padding border-t border-border">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-label mb-4 text-primary font-sans font-medium text-xl text-left">
              {t("risk.title")}
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-body-lg text-foreground leading-relaxed font-sans text-base font-light">
              {t("risk.p1")}
            </p>
            <p className="text-body leading-relaxed font-sans font-light text-primary">
              {t("risk.p2")}
            </p>

            <div className="grid gap-6 pt-4">
              {metrics.map((metric, index) => (
                <div key={index} className="flex gap-4 items-start p-4 border border-border hover:border-foreground transition-colors duration-300">
                  <metric.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium font-sans mb-1">{metric.title}</h4>
                    <p className="text-sm text-muted-foreground">{metric.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
