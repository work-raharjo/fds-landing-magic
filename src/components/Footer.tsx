import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.features"), href: "#features" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.gallery"), href: "#gallery" },
    { label: t("nav.reviews"), href: "#reviews" },
  ];

  const resources = [
    { label: t("footer.doc"), href: "#" },
    { label: t("footer.api"), href: "#" },
    { label: t("footer.changelog"), href: "#" },
  ];

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <a className="text-2xl font-medium tracking-wider mb-4 block font-sans" href="">FDS</a>
            <p className="text-muted-foreground font-sans mx-0 my-0 py-0 font-light text-xs whitespace-pre-line">
              {t("footer.desc")}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 font-sans">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 font-sans">{t("footer.resources")}</h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 font-sans">{t("footer.contact")}</h4>
            <ul className="space-y-3">
              <li><a href="mailto:support@gip.co.id" className="text-sm text-muted-foreground hover:text-foreground transition-colors">support@gip.co.id</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {t("footer.rights")}</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{t("footer.privacy")}</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{t("footer.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
