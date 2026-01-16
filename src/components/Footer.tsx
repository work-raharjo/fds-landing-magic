const quickLinks = [{
  label: "About",
  href: "#about"
}, {
  label: "Services",
  href: "#services"
}, {
  label: "Projects",
  href: "#projects"
}, {
  label: "Gallery",
  href: "#gallery"
}, {
  label: "Reviews",
  href: "#reviews"
}];
const resources = [{
  label: "Documentation",
  href: "#"
}, {
  label: "API Reference",
  href: "#"
}, {
  label: "Changelog",
  href: "#"
}];
export const Footer = () => {
  return <footer className="border-t border-border bg-secondary/30">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="text-2xl font-display font-medium tracking-wider mb-4 block">
              FDS
            </a>
            <p className="text-sm text-muted-foreground">
              Fraud Detection System
              <br />
              Galactic Indonesia Perkasa @2026
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-medium mb-4">Resources</h4>
            <ul className="space-y-3">
              {resources.map(link => <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@fds-galactic.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">support@gip.co.id</a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} FDS. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>;
};