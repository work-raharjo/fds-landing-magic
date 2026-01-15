const partners = [
  { name: "Partner 1", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop&grayscale" },
  { name: "Partner 2", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop&grayscale" },
  { name: "Partner 3", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop&grayscale" },
];

export const Partners = () => {
  return (
    <section className="py-16 border-t border-border bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-label text-muted-foreground">Trusted By</h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-60">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-32 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <span className="text-xl font-display font-medium tracking-wider">
                PARTNER {index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
