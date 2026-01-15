export const About = () => {
  return <section id="about" className="section-padding border-t border-border">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-label mb-4 font-sans text-primary text-xl font-medium">About</h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-body-lg text-foreground leading-relaxed font-sans text-base">
              <strong>FDS (Fraud Detection System)</strong> adalah platform pemantauan dan deteksi fraud yang dirancang untuk membantu Lembaga Jasa Keuangan dalam memenuhi kewajiban <strong>Strategi Anti Fraud</strong> sesuai <strong>POJK No. 12 Tahun 2024</strong>.
            </p>
            
            <p className="text-body text-muted-foreground leading-relaxed font-sans">
              FDS mengintegrasikan data transaksi, operasional, dan perilaku pengguna ke dalam satu tampilan terpadu untuk mendukung pencegahan, deteksi dini, serta tindak lanjut atas potensi fraud secara terstruktur dan terdokumentasi.
            </p>
            
            <p className="text-body text-muted-foreground leading-relaxed font-sans">
              Dirancang dengan prinsip <strong className="text-foreground">sederhana, transparan, dan dapat diaudit</strong>, FDS membantu manajemen dan unit kerja terkait mengambil keputusan berbasis data tanpa menambah kompleksitas operasional.
            </p>

            <div className="pt-6 flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-secondary text-secondary-foreground text-sm">POJK Compliant</span>
              <span className="px-4 py-2 bg-secondary text-secondary-foreground text-sm">Real-time Monitoring</span>
              <span className="px-4 py-2 bg-secondary text-secondary-foreground text-sm">Audit Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};