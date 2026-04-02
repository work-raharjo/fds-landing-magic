import { useLanguage } from "@/contexts/LanguageContext";

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding border-t border-border">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-label mb-4 font-sans text-primary text-xl font-medium">
              {t("about.title")}
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-body-lg text-foreground leading-relaxed font-sans text-base font-light">
              {t("about.p1")}
            </p>

            <p className="text-body leading-relaxed font-sans font-light text-primary">
              {t("about.p2")}
            </p>

            <p className="text-body leading-relaxed font-sans font-light text-primary">
              {t("about.p3")}
            </p>

            <div className="pt-6 flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-secondary text-secondary-foreground text-sm">{t("about.badge1")}</span>
              <span className="px-4 py-2 bg-secondary text-secondary-foreground text-sm">{t("about.badge2")}</span>
              <span className="px-4 py-2 bg-secondary text-secondary-foreground text-sm">{t("about.badge3")}</span>
              <span className="px-4 py-2 bg-secondary text-secondary-foreground text-sm">{t("about.badge4")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
