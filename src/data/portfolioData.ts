import { Project, ServiceItem, ExperienceItem, TestimonialItem, ProfileData } from '../types/portfolio';

export const defaultProfile: ProfileData = {
  name: 'Raehani Azkia Fauziah',
  role: 'Mahasiswi Sistem Informasi di Universitas Komputama & UI/UX Designer',
  tagline: 'Bridging Information Systems, Intuitive Design & Modern Technology',
  philosophy:
    'Sebagai mahasiswi Sistem Informasi di Universitas Komputama, saya meyakini bahwa teknologi terbaik adalah teknologi yang ramah dan mudah dipahami manusia. Filosofi saya adalah menyelaraskan kekuatan arsitektur data dengan antarmuka yang bersih, intuitif, dan memberi dampak nyata bagi pengguna maupun organisasi.',
  location: 'Universitas Komputama · Indonesia',
  email: 'raehani.azkia@gmail.com',
  availableForHire: true,
  avatarUrl: '/assets/aistudio/image_9ed42dfe.png',
  socials: {
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com/in/raehani-azkia',
    dribbble: 'https://dribbble.com',
    github: 'https://github.com/raehani-azkia',
    instagram: 'https://instagram.com/raehani.azkia',
    youtube: 'https://youtube.com',
    behance: 'https://behance.net',
  },
};

export const alternateProfileNatasha: ProfileData = {
  name: 'Natasha Benjamin',
  role: 'freelance UX/UI designer & product strategist',
  tagline: 'Take Your Freelancing Career To Another Level',
  philosophy:
    'I have a personal philosophy in life: If somebody else can do something that I\'m doing, they should do it. And what I want to do is find things that would represent a unique contribution to the world - the contribution that only I, and my portfolio of talents, can make happen. Those are my priorities in life.',
  location: 'Global Remote',
  email: 'natasha.benjamin@design.dev',
  availableForHire: true,
  avatarUrl: '/src/assets/images/designer_hero_portrait_1793591813971.jpg',
  socials: {
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    dribbble: 'https://dribbble.com',
    github: 'https://github.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
    behance: 'https://behance.net',
  },
};

export const statsData = [
  { label: 'IPK Kumulatif', value: '3.86' },
  { label: 'Proyek Selesai', value: '16+' },
  { label: 'Kepuasan Pengguna', value: '99.4%' },
  { label: 'Sertifikasi Profesi', value: '4' },
];

export const projectsData: Project[] = [
  {
    id: 'siakad-komputama',
    title: 'SiAkad Komputama Re-Design',
    subtitle: 'Sistem Informasi Akademik & Portal Mahasiswa Universitas Komputama',
    category: 'saas',
    categoryLabel: 'Sistem Informasi · Web App',
    image: '/src/assets/images/portfolio_saas_dashboard_1793591756872.jpg',
    client: 'Universitas Komputama (Proyek Inovasi Akademik)',
    year: '2024',
    impactMetric: '+85% Kecepatan Pengisian KRS · 0 Frustrasi Navigasi',
    summary:
      'Merancang ulang arsitektur informasi dan UI/UX Sistem Informasi Akademik Universitas Komputama agar mahasiswa dan dosen dapat mengakses jadwal kuliah, kartu rencana studi (KRS), dan rekap nilai dengan navigasi yang sangat bersih dan bebas hambatan.',
    challenge:
      'Portal akademik sebelumnya memiliki tata letak tabel yang padat, menu bertingkat yang membingungkan mahasiswa baru, serta waktu pemuatan data yang lambat saat periode pengisian KRS serentak.',
    solution:
      'Menerapkan riset pengguna (survey & user testing ke 40+ mahasiswa), merapikan hierarki basis data ke dalam dashboard modular, menambahkan kalender jadwal interaktif, dan menerapkan dark/light theme yang ramah mata.',
    tags: ['Sistem Informasi', 'UI/UX Research', 'Dashboard Akademik', 'Figma Prototyping'],
    role: 'Lead UI/UX Designer & System Analyst',
    deliverables: ['Audit Masalah & Riset Mahasiswa', 'Pemodelan Proses Bisnis (BPMN)', 'Desain UI High-Fidelity', 'Design System Token Komputama'],
    testimonial: {
      quote: 'Rancangan Raehani untuk portal SiAkad membuktikan pemahaman mendalam tentang arsitektur sistem informasi sekaligus kepedulian tinggi terhadap pengalaman pengguna mahasiswa.',
      author: 'Dr. Hendra Gunawan, M.Kom',
      role: 'Dosen Pembimbing Sistem Informasi, Universitas Komputama',
    },
  },
  {
    id: 'neo-fintech',
    title: 'NEO: Smart Student Cashflow',
    subtitle: 'Sistem Informasi Pengelolaan Anggaran & Tabungan Mahasiswa',
    category: 'mobile',
    categoryLabel: 'Mobile App · Fintech',
    image: '/src/assets/images/portfolio_fintech_app_1793591756147.jpg',
    client: 'NEO Financial Incubator',
    year: '2024',
    impactMetric: '+42% Peningkatan Rutinitas Menabung · 1.2k+ Pengguna Uji Coba',
    summary:
      'Aplikasi perbankan & dompet digital pintar yang membantu mahasiswa mengatur uang saku, memantau pengeluaran harian, dan menetapkan target tabungan kuliah secara otomatis.',
    challenge:
      'Banyak mahasiswa kesulitan melacak alokasi uang bulanan karena pencatatan manual sering terabaikan dan grafik keuangan konvensional sulit dipahami secara cepat.',
    solution:
      'Merancang interface minimalis berbasis visual kartu, kategorisasi transaksi otomatis, dan sistem rekomendasi alokasi dana dengan mikro-animasi positif.',
    tags: ['Mobile UX', 'Fintech', 'Gamifikasi Edukatif', 'iOS & Android'],
    role: 'Product Designer & UI Specialist',
    deliverables: ['User Flow Transaksi', 'Wireframing', 'Prototipe Interaktif', 'Design System'],
    testimonial: {
      quote: 'Aplikasi ini sangat intuitif dan menyenangkan digunakan. Pengelolaan uang saku jadi tidak membosankan berkat desain Raehani.',
      author: 'Annisa Putri',
      role: 'Koordinator Beta Tester Mahasiswa',
    },
  },
  {
    id: 'invenflow-umkm',
    title: 'InvenFlow: SIM Logistik UMKM',
    subtitle: 'Sistem Informasi Manajemen Inventaris & Pasokan Barang Berbasis Web',
    category: 'saas',
    categoryLabel: 'Sistem Informasi · Web Enterprise',
    image: '/src/assets/images/portfolio_luxury_ecommerce_1793591757003.jpg',
    client: 'Mitra Usaha Dagang UMKM',
    year: '2023',
    impactMetric: '3.5x Lebih Cepat Pencatatan Stok · 0 Selisih Barang Fisik',
    summary:
      'Sistem Informasi Manajemen (SIM) terintegrasi untuk melacak persediaan gudang, purchase order, dan peramalan kebutuhan stok barang dagangan bagi pelaku usaha mikro dan menengah.',
    challenge:
      'Pemilik usaha sering mengalami keterlambatan restocking dan selisih data akibat catatan gudang manual yang tercecer di berbagai buku nota fisik.',
    solution:
      'Membangun antarmuka dashboard terpadu dengan scanner barcode barcode-friendly, notifikasi stok menipis otomatis, dan relasi tabel basis data yang bersih.',
    tags: ['Sistem Informasi Manajemen', 'PostgreSQL', 'Web Dashboard', 'B2B UX'],
    role: 'System Analyst & Frontend Developer',
    deliverables: ['Diagram ERD & Normalisasi Database', 'Mockup UI Web', 'Komponen React & Tailwind', 'Dokumentasi Sistem'],
    testimonial: {
      quote: 'Sistem inventaris yang dirancang Raehani memudahkan pencatatan toko kami hingga menghemat waktu rekap harian secara signifikan.',
      author: 'Bapak Rahmat Hidayat',
      role: 'Owner, Toko Berkah Mandiri UMKM',
    },
  },
  {
    id: 'vitality-study',
    title: 'StudyVitality: Study & Habit Tracker',
    subtitle: 'Aplikasi Pelacak Fokus Belajar & Kesejahteraan Mental Mahasiswa',
    category: 'mobile',
    categoryLabel: 'Mobile App · Health & Productivity',
    image: '/src/assets/images/portfolio_health_tracker_1793591756614.jpg',
    client: 'Student Wellbeing Project',
    year: '2023',
    impactMetric: '4.9/5 Rating Kepuasan · 250+ Daily Habit Streaks',
    summary:
      'Aplikasi mobile pendamping studi mahasiswa yang mengintegrasikan teknik Pomodoro cerdas, pemantauan jam tidur, dan jurnal evaluasi belajar bebas burnout.',
    challenge:
      'Tingkat stres akademis mahasiswa sering meningkat saat ujian karena tidak adanya manajemen waktu dan istirahat yang terukur.',
    solution:
      'Menyusun pengalaman pengguna yang menenangkan dengan palet warna hangat, visualisasi progress melingkar, dan afirmasi harian sederhana.',
    tags: ['Productivity UX', 'Mobile UI', 'Human-Computer Interaction', 'Design Tokens'],
    role: 'UI/UX Designer',
    deliverables: ['Riset Kebiasaan Mahasiswa', 'High-Fidelity Screens', 'Micro-interactions', 'Usability Testing'],
    testimonial: {
      quote: 'Desainnya begitu menenangkan dan sangat mendukung mahasiswa dalam menjaga ritme belajar tanpa merasa tertekan.',
      author: 'Farhan Maulana',
      role: 'Ketua Divisi Pengembangan Mahasiswa HIMASI',
    },
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'service-1',
    number: '01',
    title: 'Analisis Sistem Informasi & Pemodelan Proses Bisnis',
    description:
      'Menganalisis kebutuhan operasional, merancang Entity Relationship Diagram (ERD), Data Flow Diagram (DFD), dan proses bisnis BPMN untuk memastikan sistem berjalan efisien.',
    deliverables: ['Analisis Kebutuhan Sistem (SRS)', 'Pemodelan Proses Bisnis (BPMN)', 'Perancangan Relasi Basis Data (ERD)', 'User Journey & Information Architecture'],
    tools: ['Figma', 'Draw.io', 'Miro', 'Notion'],
  },
  {
    id: 'service-2',
    number: '02',
    title: 'Perancangan Antarmuka UI/UX & Design Systems',
    description:
      'Mendesain antarmuka aplikasi web dan mobile yang estetik, bersih, dan memprioritaskan kemudahan pengguna dengan standar token desain yang rapi.',
    deliverables: ['Wireframing & Alur Interaksi', 'High-Fidelity Mockup', 'Design System & Style Guide', 'Spesifikasi Aksesibilitas WCAG'],
    tools: ['Figma', 'Tokens Studio', 'Adobe Illustrator'],
  },
  {
    id: 'service-3',
    number: '03',
    title: 'Pengembangan Frontend & Implementasi Komponen Web',
    description:
      'Menerjemahkan ide desain ke dalam kode nyata dengan React, TypeScript, dan Tailwind CSS yang responsif, berkinerja tinggi, dan terstruktur rapi.',
    deliverables: ['Kode Komponen React & Tailwind', 'Desain Web Responsif Mobile-First', 'Integrasi API & Data Fetching', 'Design QA & Cross-browser Check'],
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Git & GitHub'],
  },
  {
    id: 'service-4',
    number: '04',
    title: 'Riset Pengguna & Pengujian Kegunaan (Usability Testing)',
    description:
      'Melakukan wawancara pengguna, kuesioner System Usability Scale (SUS), dan task-based testing untuk memvalidasi kenyamanan antarmuka sebelum tahap peluncuran.',
    deliverables: ['Skenario Usability Testing', 'Analisis Skor SUS & Heuristik', 'Laporan Rekomendasi Perbaikan UI', 'Peta Pengujian A/B'],
    tools: ['Maze', 'Google Forms', 'Figma Mirror', 'Loom'],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Asisten Laboratorium & Praktikum Sistem Informasi',
    company: 'Universitas Komputama · Laboratorium Komputer',
    period: '2024 — Sekarang',
    location: 'Universitas Komputama',
    description:
      'Membantu dosen dalam memfasilitasi sesi praktikum mahasiswa untuk mata kuliah Perancangan Basis Data, Pemrograman Web, dan Analisis & Perancangan Sistem Informasi.',
    highlights: [
      'Membimbing 60+ mahasiswa dalam memahami konsep query SQL, normalisasi basis data, dan pembuatan antarmuka web modern.',
      'Menyusun modul praktikum perancangan UI/UX menggunakan Figma untuk tugas akhir mata kuliah rekayasa perangkat lunak.',
      'Melakukan evaluasi berkala terhadap kode proyek dan desain antarmuka mahasiswa.',
    ],
  },
  {
    id: 'exp-2',
    role: 'Koordinator Divisi Media, Informasi & UI/UX',
    company: 'Himpunan Mahasiswa Sistem Informasi (HIMASI) Universitas Komputama',
    period: '2023 — Sekarang',
    location: 'Universitas Komputama',
    description:
      'Memimpin perancangan aset digital, publikasi informasi kegiatan organisasi, serta portal web resmi himpunan.',
    highlights: [
      'Merancang identitas visual dan prototipe portal digital HIMASI Universitas Komputama.',
      'Meningkatkan engagement media sosial organisasi sebesar 65% melalui infografis edukatif seputar teknologi dan sistem informasi.',
      'Menyelenggarakan workshop pengenalan UI/UX Dasar untuk mahasiswa baru.',
    ],
  },
  {
    id: 'exp-3',
    role: 'Freelance UI/UX Designer & Frontend Developer',
    company: 'Praktik Mandiri & Kolaborasi Digital',
    period: '2023 — Sekarang',
    location: 'Remote · Indonesia',
    description:
      'Membantu pelaku UMKM dan startup kampus merancang antarmuka sistem informasi kasir, katalog produk, dan landing page profesional.',
    highlights: [
      'Menyelesaikan 10+ proyek landing page dan purwarupa aplikasi dengan tingkat kepuasan klien 100%.',
      'Mengimplementasikan desain menggunakan Tailwind CSS dan React untuk kecepatan deployment.',
    ],
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'test-1',
    quote:
      'Raehani adalah salah satu mahasiswi Sistem Informasi Universitas Komputama yang memiliki perpaduan langka: logika analisis sistem yang tajam sekaligus rasa estetika desain antarmuka yang sangat matang.',
    author: 'Drs. Supriyanto, M.T.',
    role: 'Ketua Jurusan Sistem Informasi',
    company: 'Universitas Komputama',
    rating: 5,
  },
  {
    id: 'test-2',
    quote:
      'Kolaborasi bersama Raehani di HIMASI selalu memuaskan. Setiap ide prototipe UI yang ia rancang selalu rapi, terstruktur, dan sangat mudah dipahami oleh anggota tim lainnya.',
    author: 'Dimas Aditya',
    role: 'Ketua Himpunan Mahasiswa Sistem Informasi',
    company: 'HIMASI Universitas Komputama',
    rating: 5,
  },
  {
    id: 'test-3',
    quote:
      'Sistem informasi pencatatan barang yang dirancang Raehani sangat membantu toko kami. Tampilannya bersih, tidak rumit, dan staf kasir kami langsung bisa menggunakannya tanpa kendala.',
    author: 'Ibu Siti Rahmawati',
    role: 'Pemilik Usaha',
    company: 'Mitra UMKM Digital',
    rating: 5,
  },
];
