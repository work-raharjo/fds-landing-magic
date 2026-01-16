const partners = [{
  name: "Partner 1",
  logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop&grayscale"
}, {
  name: "Partner 2",
  logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop&grayscale"
}, {
  name: "Partner 3",
  logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop&grayscale"
}];
export const Partners = () => {
  return (
    <section id="partners" className="section-padding border-t border-border">
      <div className="container-custom">
        <h2 className="text-label mb-8 text-primary font-sans font-medium text-xl text-center">Our Partners</h2>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {partners.map((partner, index) => (
            <img key={index} src={partner.logo} alt={partner.name} className="h-12 opacity-60 hover:opacity-100 transition-opacity" />
          ))}
        </div>
      </div>
    </section>
  );
};