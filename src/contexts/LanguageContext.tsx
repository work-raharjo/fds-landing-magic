import { createContext, useContext, useState, ReactNode } from "react";

type Language = "id" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (id: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Header
  "nav.about": { id: "Tentang", en: "About" },
  "nav.services": { id: "Layanan", en: "Services" },
  "nav.features": { id: "Fitur", en: "Features" },
  "nav.projects": { id: "Proyek", en: "Projects" },
  "nav.gallery": { id: "Galeri", en: "Gallery" },
  "nav.reviews": { id: "Ulasan", en: "Reviews" },
  "nav.getStarted": { id: "Mulai Sekarang", en: "Get Started" },

  // Hero
  "hero.title": { id: "Fraud Detection System", en: "Fraud Detection System" },
  "hero.subtitle": {
    id: "Deteksi dan perangi fraud dengan presisi dan efisiensi deteksi berbasis AI.",
    en: "Detect and combat fraud with AI-powered detection precision and efficiency.",
  },
  "hero.learnMore": { id: "Pelajari Lebih Lanjut", en: "Learn More" },
  "hero.partnerWithUs": { id: "Hubungi Kami", en: "Partner with Us" },

  // About
  "about.title": { id: "Tentang", en: "About" },
  "about.p1": {
    id: "Deteksi fraud memiliki signifikansi tinggi di berbagai domain karena dampaknya terhadap stabilitas keuangan, integritas organisasi, dan kepercayaan konsumen. FDS menyediakan pemantauan berkelanjutan yang dapat dikonfigurasi untuk transaksi, aktivitas, dan perilaku anomali guna membantu organisasi mengidentifikasi dan menangani potensi risiko fraud secara cepat.",
    en: "Fraud detection holds significant importance across various domains due to its impact on financial stability, organizational integrity, and consumer trust. FDS provides configurable, on-going monitoring for anomalous transactions, activities, and behaviors to help organizations promptly identify and address potential fraud risks.",
  },
  "about.p2": {
    id: "Dengan memanfaatkan analitik lanjutan dan model AI/ML, FDS dapat meningkatkan akurasi dan efisiensi proses deteksi fraud, serta melindungi aset dan mempertahankan kepercayaan pemangku kepentingan. Platform ini dirancang sesuai dengan POJK No. 12 Tahun 2024 tentang Strategi Anti Fraud bagi Lembaga Jasa Keuangan.",
    en: "By leveraging advanced analytics and AI/ML models, FDS enhances the accuracy and efficiency of fraud detection processes, ultimately safeguarding assets and maintaining trust among stakeholders. The platform is designed in compliance with POJK No. 12/2024 on Anti-Fraud Strategy for Financial Service Institutions.",
  },
  "about.p3": {
    id: "FDS mengakomodasi data jenis dan volume apapun serta mengotomasi banyak fungsi integrasi data, transformasi, peringatan, dan pelaporan yang biasanya memakan ribuan jam waktu analis. Dirancang dengan prinsip sederhana, transparan, dan dapat diaudit.",
    en: "FDS accommodates data of any kind or volume and automates many of the data integration, transformation, alerting, and reporting functions that typically consume thousands of hours of analyst time. Designed with principles of simplicity, transparency, and auditability.",
  },
  "about.badge1": { id: "Sesuai POJK", en: "POJK Aligned" },
  "about.badge2": { id: "Pemantauan Real-time", en: "Real-time Monitoring" },
  "about.badge3": { id: "Siap Audit", en: "Audit Ready" },
  "about.badge4": { id: "AI/ML Powered", en: "AI/ML Powered" },

  // Services
  "services.title": { id: "LAYANAN", en: "SERVICES" },
  "services.s1.title": { id: "Fraud Monitoring & Detection", en: "Fraud Monitoring & Detection" },
  "services.s1.desc": {
    id: "Pemantauan transaksi dan aktivitas operasional secara berkelanjutan untuk mengidentifikasi anomali, pola tidak wajar, dan indikasi fraud sejak dini. Mendukung kepatuhan terhadap POJK No. 12/2024.",
    en: "Continuous monitoring of transactions and operational activities to identify anomalies, unusual patterns, and early fraud indicators. Supports POJK No. 12/2024 compliance.",
  },
  "services.s2.title": { id: "Risk Rating & Kategorisasi", en: "Risk Rating & Categorization" },
  "services.s2.desc": {
    id: "Menggunakan kategori risiko yang dapat dikonfigurasi seperti risiko nasabah, geografis, produk, dan kanal pengiriman untuk menghasilkan Risk Rating komprehensif sesuai kerangka regulasi.",
    en: "Using configurable risk categories such as customer risk, geographical risk, product risk, and delivery channel risk to produce comprehensive Risk Ratings aligned with regulatory frameworks.",
  },
  "services.s3.title": { id: "Case Management", en: "Case Management" },
  "services.s3.desc": {
    id: "Pengelolaan kasus fraud secara terstruktur dari investigasi hingga resolusi. Setiap alert dilengkapi fitur skenario, nasabah, counterparty, transaksi, dan yurisdiksi untuk investigasi mendalam.",
    en: "Structured fraud case management from investigation through resolution. Each alert incorporates features from scenarios, customers, counterparties, transactions, and jurisdictions for deep investigation.",
  },
  "services.s4.title": { id: "Dashboard & Pelaporan", en: "Dashboard & Reporting" },
  "services.s4.desc": {
    id: "Kemampuan dashboard dan pembuatan laporan komprehensif untuk memvisualisasikan dan memantau fraud concerns. Mendukung pelaporan regulasi, whitelisting, dan blacklisting sesuai POJK.",
    en: "Comprehensive dashboard and report-building capabilities to visualize and monitor fraud concerns. Supports regulatory reporting, whitelisting, and blacklisting in compliance with POJK.",
  },

  // Fraud Concerns (Features section)
  "features.title": { id: "JENIS FRAUD YANG DITANGANI", en: "COMMON FRAUD CONCERNS" },
  "features.financial": { id: "Fraud Institusi Keuangan", en: "Financial Institution Fraud" },
  "features.financial.items": {
    id: "Transaction Fraud|Mortgage Fraud|Lending Fraud",
    en: "Transaction Fraud|Mortgage Fraud|Lending Fraud",
  },
  "features.payment": { id: "Fraud Pembayaran", en: "Payment Fraud" },
  "features.payment.items": {
    id: "Unauthorized Payment Fraud|Account Takeover|Chargeback Fraud|Merchant Fraud",
    en: "Unauthorized Payment Fraud|Account Takeover|Chargeback Fraud|Merchant Fraud",
  },
  "features.securities": { id: "Fraud Sekuritas", en: "Securities Fraud" },
  "features.securities.items": {
    id: "Insider Trading|Pump and Dump Schemes|Ponzi Schemes|Misleading Financial Statements",
    en: "Insider Trading|Pump and Dump Schemes|Ponzi Schemes|Misleading Financial Statements",
  },
  "features.trade": { id: "Fraud Berbasis Perdagangan", en: "Trade-Based Fraud" },
  "features.trade.items": {
    id: "Over/Under Invoicing|Multiple Invoicing|False Description of Goods",
    en: "Over/Under Invoicing|Multiple Invoicing|False Description of Goods",
  },
  "features.contract": { id: "Fraud Kontrak & Pengadaan", en: "Contract & Procurement Fraud" },
  "features.contract.items": {
    id: "Bid Rigging|Kickbacks|False Invoicing|Ghost Employees|Timesheet Manipulation",
    en: "Bid Rigging|Kickbacks|False Invoicing|Ghost Employees|Timesheet Manipulation",
  },
  "features.insurance": { id: "Fraud Asuransi & Kesehatan", en: "Insurance & Healthcare Fraud" },
  "features.insurance.items": {
    id: "False Claims|Billing Fraud|Inflated Claims|Upcoding",
    en: "False Claims|Billing Fraud|Inflated Claims|Upcoding",
  },

  // Risk Management Features
  "risk.title": { id: "FITUR MANAJEMEN RISIKO", en: "RISK MANAGEMENT FEATURES" },
  "risk.p1": {
    id: "FDS secara otomatis mengkategorikan alert berdasarkan skor risiko ke dalam probabilitas hasil (misalnya, disposisi L1, eskalasi L2, dll.) untuk membantu investigasi, memungkinkan analis fokus pada alert berisiko tinggi sementara otomasi proses dapat secara otomatis membuang alert berisiko rendah.",
    en: "FDS automatically categorizes risk-scored alerts into outcome probabilities (e.g., L1 disposition, L2 escalation, etc.) to aid investigation, enabling analysts to focus on high-risk alerts while process automation can automatically discard low-risk alerts.",
  },
  "risk.p2": {
    id: "Model risiko AI/ML menerima umpan balik dari semua keputusan manusia untuk melatih ulang dan meningkatkan kinerja dari waktu ke waktu. FDS juga dapat berbagi alert dengan sistem eksternal dan/atau memblokir transaksi sesuai kebutuhan.",
    en: "AI/ML risk models receive feedback from all human decisions to retrain and improve performance over time. FDS can also share alerts with external systems and/or block transactions as required.",
  },
  "risk.metric1": { id: "Metrik Fraud Utama", en: "Key Fraud Metrics" },
  "risk.metric1.desc": {
    id: "Gross loss, net loss, nilai refund, pembayaran yang melewati batas rilis",
    en: "Gross loss, net loss, refund value, payments that missed release cut-off",
  },
  "risk.metric2": { id: "Metrik Operasional", en: "Operational Metrics" },
  "risk.metric2.desc": {
    id: "Alert terbuka/tertutup, volume transaksi",
    en: "Alerts open/closed, transaction volume",
  },
  "risk.metric3": { id: "KPI Fraud", en: "Fraud KPIs" },
  "risk.metric3.desc": {
    id: "Aktivitas pengguna/tim, kecepatan/akurasi, performa rule/ML",
    en: "User/team activity, speed/accuracy, rule/ML performance",
  },

  // Projects
  "projects.title": { id: "Proyek", en: "Projects" },
  "projects.viewCase": { id: "Lihat Studi Kasus", en: "View Case Study" },

  // Gallery
  "gallery.title": { id: "Galeri", en: "Gallery" },

  // Reviews
  "reviews.label": { id: "Dengarkan", en: "Hear Our" },
  "reviews.title": { id: "Ulasan", en: "Reviews" },
  "reviews.r1.quote": {
    id: "Implementasi FDS di bank kami sangat membantu dalam meningkatkan kemampuan deteksi fraud kami. Sistem yang intuitif dan dokumentasi yang lengkap memudahkan tim kami dalam mengadopsi platform ini.",
    en: "The FDS implementation at our bank has greatly helped improve our fraud detection capabilities. The intuitive system and comprehensive documentation made it easy for our team to adopt the platform.",
  },
  "reviews.r1.author": { id: "IT Director", en: "IT Director" },
  "reviews.r1.company": { id: "Bank Pembangunan Daerah", en: "Regional Development Bank" },
  "reviews.r2.quote": {
    id: "FDS memberikan visibilitas penuh terhadap aktivitas transaksi dan membantu kami memenuhi persyaratan regulasi OJK dengan lebih efisien. Highly recommended untuk institusi keuangan.",
    en: "FDS provides full visibility into transaction activity and helps us meet OJK regulatory requirements more efficiently. Highly recommended for financial institutions.",
  },
  "reviews.r2.author": { id: "Compliance Manager", en: "Compliance Manager" },
  "reviews.r2.company": { id: "Institusi Keuangan", en: "Financial Institution" },
  "reviews.r3.quote": {
    id: "Platform yang sangat powerful namun mudah digunakan. Early warning system-nya sangat efektif dalam mendeteksi potensi fraud sebelum terjadi kerugian material.",
    en: "An extremely powerful yet easy-to-use platform. The early warning system is very effective at detecting potential fraud before material losses occur.",
  },
  "reviews.r3.author": { id: "Risk Management Head", en: "Risk Management Head" },
  "reviews.r3.company": { id: "Sektor Perbankan", en: "Banking Sector" },

  // Contact
  "contact.title": { id: "Hubungi Kami", en: "Get in Touch" },
  "contact.subtitle": {
    id: "Jika Anda ingin memperkuat kemampuan deteksi fraud organisasi Anda, bagikan beberapa detail dan kami akan mendiskusikan bagaimana FDS dapat membantu melindungi organisasi Anda.",
    en: "If you're looking to strengthen your fraud detection capabilities, share a few details and we'll discuss how FDS can help protect your organization.",
  },
  "contact.name": { id: "Nama lengkap", en: "Your full name" },
  "contact.email": { id: "Alamat email", en: "Your email address" },
  "contact.company": { id: "Nama perusahaan", en: "Company name" },
  "contact.jobTitle": { id: "Jabatan", en: "Job title" },
  "contact.message": { id: "Tentang kebutuhan Anda", en: "A little bit about your project" },
  "contact.send": { id: "Kirim Pesan", en: "Send Message" },
  "contact.sending": { id: "Mengirim...", en: "Sending..." },
  "contact.success": {
    id: "Terima kasih telah menghubungi kami! Kami akan segera merespons.",
    en: "Thanks for reaching out! We'll get back to you soon.",
  },

  // Footer
  "footer.desc": {
    id: "Fraud Detection System\nMendukung Strategi Anti Fraud bagi Lembaga Jasa Keuangan\n\nDirancang untuk mendukung implementasi POJK No.12/2024",
    en: "Fraud Detection System\nSupporting Anti-Fraud Strategy for Financial Institutions\n\nDesigned to support POJK No.12/2024 implementation",
  },
  "footer.quickLinks": { id: "Tautan Cepat", en: "Quick Links" },
  "footer.resources": { id: "Sumber Daya", en: "Resources" },
  "footer.contact": { id: "Kontak", en: "Contact" },
  "footer.privacy": { id: "Kebijakan Privasi", en: "Privacy Policy" },
  "footer.terms": { id: "Ketentuan Layanan", en: "Terms of Service" },
  "footer.rights": { id: "Semua hak dilindungi.", en: "All rights reserved." },
  "footer.doc": { id: "Dokumentasi", en: "Documentation" },
  "footer.api": { id: "Referensi API", en: "API Reference" },
  "footer.changelog": { id: "Changelog", en: "Changelog" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("id");

  const t = (id: string): string => {
    return translations[id]?.[lang] ?? id;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
