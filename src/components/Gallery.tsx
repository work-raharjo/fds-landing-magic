import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const galleryImages = [{
  src: gallery1,
  alt: "Digital Fraud Detection Shield"
}, {
  src: gallery2,
  alt: "Financial Security Monitoring Dashboard"
}, {
  src: gallery3,
  alt: "Anti-Money Laundering Detection System"
}, {
  src: gallery4,
  alt: "Secure Banking Infrastructure"
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