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
    <section id="partners" className="py-20 bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
          <p className="text-muted-foreground">Trusted by leading organizations</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {partners.map((partner, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};