import { useState } from "react";
import { Menu, X } from "lucide-react";
import galacticLogo from "@/assets/galactic-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.features"), href: "#features" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.gallery"), href: "#gallery" },
    { label: t("nav.reviews"), href: "#reviews" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center">
            <img src={galacticLogo} alt="Galactic" className="h-8 md:h-10 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle */}
            <div className="flex items-center border border-border rounded-none overflow-hidden">
              <button
                onClick={() => setLang("id")}
                className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                  lang === "id"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                  lang === "en"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
            >
              {t("nav.getStarted")}
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
          <nav className="container-custom py-6 flex flex-col gap-4">
            {/* Mobile Language Toggle */}
            <div className="flex items-center gap-2 mb-2">
              <button
                onClick={() => setLang("id")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  lang === "id"
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground"
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  lang === "en"
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground"
                }`}
              >
                EN
              </button>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-primary text-primary-foreground mt-4"
            >
              {t("nav.getStarted")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
