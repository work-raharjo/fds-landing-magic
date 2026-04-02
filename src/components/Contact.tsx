import { useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

export const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    jobTitle: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success(t("contact.success"));
    setFormData({ name: "", email: "", company: "", jobTitle: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding border-t border-border">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-label text-muted-foreground mb-4">{t("contact.title")}</h2>
            <p className="text-body-lg text-muted-foreground max-w-md">
              {t("contact.subtitle")}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="text-sm font-medium mb-2 block">{t("contact.name")}</label>
              <input type="text" id="name" required value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-border focus:border-foreground focus:outline-none transition-colors"
                placeholder="John Doe" />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium mb-2 block">{t("contact.email")}</label>
              <input type="email" id="email" required value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-border focus:border-foreground focus:outline-none transition-colors"
                placeholder="john@company.com" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="text-sm font-medium mb-2 block">{t("contact.company")}</label>
                <input type="text" id="company" value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-border focus:border-foreground focus:outline-none transition-colors"
                  placeholder="PT ABC" />
              </div>
              <div>
                <label htmlFor="jobTitle" className="text-sm font-medium mb-2 block">{t("contact.jobTitle")}</label>
                <input type="text" id="jobTitle" value={formData.jobTitle}
                  onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-border focus:border-foreground focus:outline-none transition-colors"
                  placeholder="IT Director" />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium mb-2 block">{t("contact.message")}</label>
              <textarea id="message" required rows={4} value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-border focus:border-foreground focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your fraud detection needs..." />
            </div>

            <button type="submit" disabled={isSubmitting}
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? t("contact.sending") : t("contact.send")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
