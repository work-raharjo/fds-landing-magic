import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, CreditCard, TrendingUp, FileText, Briefcase, Heart } from "lucide-react";

export const FraudConcerns = () => {
  const { t } = useLanguage();

  const concerns = [
    {
      icon: Shield,
      title: t("features.financial"),
      items: t("features.financial.items").split("|"),
    },
    {
      icon: CreditCard,
      title: t("features.payment"),
      items: t("features.payment.items").split("|"),
    },
    {
      icon: TrendingUp,
      title: t("features.securities"),
      items: t("features.securities.items").split("|"),
    },
    {
      icon: FileText,
      title: t("features.trade"),
      items: t("features.trade.items").split("|"),
    },
    {
      icon: Briefcase,
      title: t("features.contract"),
      items: t("features.contract.items").split("|"),
    },
    {
      icon: Heart,
      title: t("features.insurance"),
      items: t("features.insurance.items").split("|"),
    },
  ];

  return (
    <section id="features" className="section-padding border-t border-border bg-secondary/30">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="text-label mb-4 text-primary font-sans font-medium text-xl text-left">
            {t("features.title")}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {concerns.map((concern, index) => (
            <div key={index} className="group border border-border p-8 hover:border-foreground transition-colors duration-300">
              <concern.icon className="w-6 h-6 mb-6 text-accent" />
              <h3 className="text-lg font-medium font-sans mb-4">{concern.title}</h3>
              <ul className="space-y-2">
                {concern.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1 h-1 bg-accent rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
