import { useState } from "react";
import { Plus, Minus } from "lucide-react";
const services = [{
  number: "01",
  title: "Fraud Monitoring & Detection",
  description: "Pemantauan transaksi dan aktivitas operasional secara berkelanjutan untuk mengidentifikasi anomali, pola tidak wajar, dan indikasi fraud sejak dini.",
  features: ["Real-time Transaction Scanning", "Behavioral Analysis", "Anomaly Detection", "Pattern Recognition"],
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
}, {
  number: "02",
  title: "Early Warning System",
  description: "Sistem peringatan dini yang proaktif mendeteksi potensi risiko fraud sebelum terjadi kerugian material.",
  features: ["Risk Scoring", "Alert Management", "Threshold Configuration", "Predictive Analytics"],
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
}, {
  number: "03",
  title: "Case Management",
  description: "Pengelolaan kasus fraud secara terstruktur dari investigasi hingga resolusi dengan dokumentasi lengkap.",
  features: ["Case Tracking", "Evidence Collection", "Investigation Workflow", "Resolution Documentation"],
  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
}, {
  number: "04",
  title: "Regulatory Readiness",
  description: "Memastikan kepatuhan terhadap regulasi OJK dengan pelaporan otomatis dan dokumentasi audit yang komprehensif.",
  features: ["POJK Compliance", "Automated Reporting", "Audit Trail", "Regulatory Dashboard"],
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
}];
export const Services = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return <section id="services" className="section-padding border-t border-border">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-20">
          {/* Section Title */}
          <div>
            <h2 className="text-display-lg sticky top-24 text-primary font-sans mx-0 px-0 text-xl font-medium text-left">SERVICES</h2>
          </div>

          {/* Services List */}
          <div className="space-y-0">
            {services.map((service, index) => <div key={index} className="border-t border-border">
                <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full py-8 flex items-start justify-between text-left group">
                  <div className="flex gap-8">
                    <span className="service-number text-3xl font-thin font-sans text-center">{service.number}</span>
                    <h3 className="text-xl md:text-2xl group-hover:text-accent transition-colors duration-300 font-sans text-justify font-light">
                      {service.title}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-500 ease-smooth ${openIndex === index ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="pb-8 pl-0 md:pl-16 grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <p className="text-body text-muted-foreground font-sans text-sm">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => <li key={idx} className="flex items-center gap-2 text-sm">
                            <span className="w-1 h-1 bg-foreground rounded-full" />
                            {feature}
                          </li>)}
                      </ul>
                    </div>
                    <div className="image-hover">
                      <img src={service.image} alt={service.title} className="w-full h-48 md:h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </div>)}
            <div className="border-t border-border" />
          </div>
        </div>
      </div>
    </section>;
};