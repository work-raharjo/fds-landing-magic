const galleryImages = [{
  src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
  alt: "Dashboard View"
}, {
  src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop",
  alt: "Analytics"
}, {
  src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
  alt: "Monitoring"
}, {
  src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
  alt: "Reports"
}];
export const Gallery = () => {
  return <section id="gallery" className="section-padding border-t border-border">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-label mb-4 text-xl font-medium text-primary">Gallery</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2 image-hover">
            <img src={galleryImages[0].src} alt={galleryImages[0].alt} className="w-full h-full object-cover aspect-square" />
          </div>
          
          <div className="image-hover">
            <img src={galleryImages[1].src} alt={galleryImages[1].alt} className="w-full h-full object-cover aspect-square" />
          </div>
          
          <div className="image-hover">
            <img src={galleryImages[2].src} alt={galleryImages[2].alt} className="w-full h-full object-cover aspect-square" />
          </div>
          
          <div className="col-span-2 image-hover">
            <img src={galleryImages[3].src} alt={galleryImages[3].alt} className="w-full h-48 object-cover" />
          </div>
        </div>
      </div>
    </section>;
};