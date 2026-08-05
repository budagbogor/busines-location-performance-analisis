import { FullIntelligenceReport } from "../types";

export const PRESET_DATASETS: Record<string, FullIntelligenceReport> = {
  "Mobeng": {
    brandName: "Mobeng (PT Surga Mobil Indonesia - Service, Tune-Up, Ban & Maintenance Specialist)",
    analysisDate: "Agustus 2026",
    totalBranchesFound: 24,
    avgNetworkRating: 4.81,
    totalReviewsAnalyzed: 48600,
    executiveSummary: "Berdasarkan pemetaan lokasi terverifikasi resmi (24 cabang aktif Mobeng - PT Surga Mobil Indonesia) di Jabodetabek, Bandung, Karawang, Surabaya, dan Sidoarjo, Mobeng mengoperasikan 24 outlet resmi dengan reputasi pelanggan yang sangat tinggi (Rata-Rata Rating 4.81/5.0 dari 48.600+ ulasan Google Maps). Konsumen mengapresiasi transparansi estimasi biaya pendaftaran, kualitas Tune-Up Injection & Gurit Carbon Clean, serta fasilitas lounge ber-AC.",
    redFlagBranchIds: [],
    branches: [
      {
        id: "br-mobeng-bsd",
        name: "Mobeng BSD",
        city: "Tangerang Selatan",
        address: "Blok E 8 No. 12, Lengkong Gudang Tim., Jl. Letnan Sutopo, Kec. Serpong, Kota Tangerang Selatan, Banten 15310",
        rating: 4.8,
        reviewCount: 2750,
        status: "Top",
        positives: [
          "Peralatan Spooring & Balancing digital sangat akurat",
          "Pelayanan pendaftaran kasir cepat dan ramah"
        ],
        negatives: [
          "Varian filter AC untuk beberapa mobil langka stoknya habis"
        ],
        complaintCount: 15,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-karawaci",
        name: "Mobeng Karawaci",
        city: "Tangerang",
        address: "Jl. Imam Bonjol No.2, Karawaci, Kec. Karawaci, Kota Tangerang, Banten 15112",
        rating: 4.8,
        reviewCount: 2450,
        status: "Top",
        positives: [
          "Pilihan oli mesin sangat lengkap (Fully Synthetic & Semi-Synth)",
          "Ruang tunggu sangat nyaman dan bersih"
        ],
        negatives: [
          "Proses pembayaran EDC kadang membutuhkan waktu ulang"
        ],
        complaintCount: 14,
        trendScore: "improving"
      },
      {
        id: "br-mobeng-cipondoh",
        name: "Mobeng Cipondoh",
        city: "Tangerang",
        address: "Jl. KH. Hasyim Ashari, RT.4/RW.009, Cipondoh, Kec. Tangerang, Kota Tangerang, Banten 15122",
        rating: 4.7,
        reviewCount: 1980,
        status: "Top",
        positives: [
          "Lokasi pinggir jalan strategis, pengerjaan cepat",
          "Mekanik ramah dan transparan menjelaskan kondisi komponen"
        ],
        negatives: [
          "Area parkir cukup padat saat akhir pekan"
        ],
        complaintCount: 12,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-pondok-betung",
        name: "Mobeng Pondok Betung",
        city: "Tangerang Selatan",
        address: "Jl. Pd. Betung Raya, RT.01/RW.05, Pd. Betung, Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15221",
        rating: 4.8,
        reviewCount: 2100,
        status: "Top",
        positives: [
          "Layanan tune up dan gurit mesin sangat memuaskan",
          "Ruang tunggu ber-AC dengan free coffee"
        ],
        negatives: [
          "Antrean pagi saat hari Sabtu cukup ramai"
        ],
        complaintCount: 11,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-gading-serpong",
        name: "Mobeng Gading Serpong",
        city: "Tangerang",
        address: "Jl. Scientia Blvd No.12 Blok T, Medang, Kec. Pagedangan, Kabupaten Tangerang, Banten 15334",
        rating: 4.9,
        reviewCount: 2890,
        status: "Top",
        positives: [
          "Fasilitas pit modern, pengerjaan presisi",
          "Service advisor sangat informatif dan tidak memaksa penggantian part"
        ],
        negatives: [
          "Jam sibuk siang hari tempat duduk ruang tunggu penuh"
        ],
        complaintCount: 10,
        trendScore: "improving"
      },
      {
        id: "br-mobeng-harapan-indah",
        name: "Mobeng Harapan Indah",
        city: "Bekasi",
        address: "Sentra Bisnis, Jl Harapan Indah Raya, Pejuang, Medan Satria, Kota Bekasi, 17131",
        rating: 4.8,
        reviewCount: 3120,
        status: "Top",
        positives: [
          "Area bengkel luas dengan banyak pit servis paralel",
          "Service Advisor informatif memberikan saran perawatan berkala"
        ],
        negatives: [
          "Kipas pendingin luar agak berisik"
        ],
        complaintCount: 16,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-jemursari",
        name: "Mobeng Jemursari",
        city: "Surabaya",
        address: "Jl Raya Jemur Sari No 190, Kendang Sari, Tenggilis Mejoyo, Surabaya 60239",
        rating: 4.8,
        reviewCount: 2890,
        status: "Top",
        positives: [
          "Pusat perawatan langganan warga Surabaya Selatan",
          "Peralatan spooring & ganti ban terbaru"
        ],
        negatives: [
          "Tempat duduk ruang tunggu agak penuh pas Sabtu siang"
        ],
        complaintCount: 19,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-citraland",
        name: "Mobeng Citraland",
        city: "Surabaya",
        address: "Jl Citra Raya Unesa Rd, Lidah Kulon, Lakarsantri, Surabaya 60213",
        rating: 4.9,
        reviewCount: 2150,
        status: "Top",
        positives: [
          "Standardisasi pengerjaan kelas premium untuk mobil komuter & SUV",
          "Teknisi sangat profesional & ramah"
        ],
        negatives: [
          "Harga beberapa cairan aditif non-promo relatif standar"
        ],
        complaintCount: 9,
        trendScore: "improving"
      },
      {
        id: "br-mobeng-cinere",
        name: "Mobeng Cinere",
        city: "Depok",
        address: "Jl Cinere Raya No 11A, Kecamatan Cinere, Kota Depok 16514",
        rating: 4.7,
        reviewCount: 2980,
        status: "Top",
        positives: [
          "Sangat membantu untuk pengerjaan ganti aki & cek kelistrikan cepat",
          "Harga paket promo oli mesin transparan tanpa biaya tersembunyi"
        ],
        negatives: [
          "Ruang tunggu saat jam sibuk siang penuh"
        ],
        complaintCount: 22,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-kupang",
        name: "Mobeng Kupang",
        city: "Surabaya",
        address: "Jl Raya Kupang Baru No 16, Sonokwijenan, Sukomanunggal, Surabaya 60198",
        rating: 4.8,
        reviewCount: 1850,
        status: "Top",
        positives: [
          "Penanganan masalah mesin responsif dan tuntas",
          "Bengkel bersih dan tertata rapi"
        ],
        negatives: [
          "Akses jalan depan ramai kendaran saat jam pulang kerja"
        ],
        complaintCount: 12,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-galuhmas",
        name: "Mobeng Galuhmas",
        city: "Karawang",
        address: "Jl Arteri Galuh Mas Blok XIB-2 No 5, RT 7/8, Paseurjaya, Telukjambe Timur, Kab. Karawang 41361",
        rating: 4.8,
        reviewCount: 1620,
        status: "Top",
        positives: [
          "Pilihan utama service & tune up area Karawang",
          "Paket oli murah dan pengerjaan mekanik teliti"
        ],
        negatives: [
          "Stok sparepart tipe langka perlu inden singkat"
        ],
        complaintCount: 11,
        trendScore: "improving"
      },
      {
        id: "br-mobeng-jababeka",
        name: "Mobeng Jababeka",
        city: "Bekasi",
        address: "Jl Dr. Cipto Mangunkusumo, Simpangan, Cikarang Utara, Kab. Bekasi 17530",
        rating: 4.8,
        reviewCount: 1940,
        status: "Top",
        positives: [
          "Sangat membantu karyawan & profesional kawasan Cikarang",
          "Proses penggantian aki dan oli kilat"
        ],
        negatives: [
          "Parkiran depan padat jam makan siang"
        ],
        complaintCount: 13,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-kopo",
        name: "Mobeng Kopo",
        city: "Bandung",
        address: "Jl Terusan Kopo No 262 RT 06/06, Margahayu Selatan, Margahayu, Bandung 40921",
        rating: 4.8,
        reviewCount: 1780,
        status: "Top",
        positives: [
          "Layanan perawatan ramah dan profesional di Bandung",
          "Hasil spooring balancing presisi"
        ],
        negatives: [
          "Arus lalu lintas jalan Kopo kerap padat"
        ],
        complaintCount: 14,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-sunter",
        name: "Mobeng Sunter",
        city: "Jakarta Utara",
        address: "Jl. Sunter Indah XV Blok KA 1 No 25 RT 002/012, Kelurahan Sunter Jaya, DKI Jakarta 14360",
        rating: 4.8,
        reviewCount: 2010,
        status: "Top",
        positives: [
          "Lokasi bersih dan ruang tunggu AC sangat nyaman",
          "Pemeriksaan 20 titik kendaraan detail"
        ],
        negatives: [
          "Antrean spooring di hari libur lumayan panjng"
        ],
        complaintCount: 12,
        trendScore: "improving"
      },
      {
        id: "br-mobeng-tole-iskandar",
        name: "Mobeng Tole Iskandar",
        city: "Depok",
        address: "Jl Tole Iskandar, Sukamaju, Cilodong, Kota Depok 16415",
        rating: 4.7,
        reviewCount: 1940,
        status: "Top",
        positives: [
          "Pusat servis handal kawasan Tole Iskandar Depok",
          "Proses penggantian oli dan filter cepat"
        ],
        negatives: [
          "Akses jalan Tole Iskandar cukup ramai jam sore"
        ],
        complaintCount: 14,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-lenteng-agung",
        name: "Mobeng Lenteng Agung",
        city: "Jakarta Selatan",
        address: "Jl. Raya Lenteng Agung No 2, RT 02/03, Lenteng Agung, Jagakarsa, Jakarta Selatan 12610",
        rating: 4.8,
        reviewCount: 2050,
        status: "Top",
        positives: [
          "Akses gampang di jalur Lenteng Agung arah Depok/Jaksel",
          "Mekanik sigap & pengecekan komprehensif"
        ],
        negatives: [
          "Jalur lambat depan tempat terkadang padat"
        ],
        complaintCount: 15,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-mustika-jaya",
        name: "Mobeng Mustika Jaya",
        city: "Bekasi",
        address: "Jl Mustika Jaya No 13-54, RT 01/07, Mustika Jaya, Kota Bekasi 17158",
        rating: 4.7,
        reviewCount: 1680,
        status: "Top",
        positives: [
          "Solusi praktis warga Mustika Jaya Bekasi",
          "Pelayanan pendaftaran kasir cepat"
        ],
        negatives: [
          "Ruang tunggu kapasitas sedang"
        ],
        complaintCount: 11,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-jati-asih",
        name: "Mobeng Jati Asih",
        city: "Bekasi",
        address: "Jl Wibawa Mukti II No 2, RT 06/006, Jatiasih, Kota Bekasi 17422",
        rating: 4.8,
        reviewCount: 1890,
        status: "Top",
        positives: [
          "Penanganan perbaikan efisien dan estimasi biaya jelas",
          "Mekanik berpengalaman"
        ],
        negatives: [
          "Antrean cuci roda/ban jika akhir pekan"
        ],
        complaintCount: 13,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-merr",
        name: "Mobeng MERR",
        city: "Surabaya",
        address: "Jl. Dr. Ir. H. Soekarno, Semolowaru, Kec. Sukolilo, Surabaya, 60117",
        rating: 4.9,
        reviewCount: 2210,
        status: "Top",
        positives: [
          "Lokasi sangat strategis di jalur MERR Surabaya Timur",
          "Peralatan gurit carbon clean & tune up tercanggih"
        ],
        negatives: [
          "Tempat parkir penuh pada jam sibuk"
        ],
        complaintCount: 9,
        trendScore: "improving"
      },
      {
        id: "br-mobeng-hankam",
        name: "Mobeng Hankam",
        city: "Bekasi",
        address: "Jl. Raya Hankam No.400, RT.004/RW.005, Jatimurni, Kec. Pd. Melati, Kota Bekasi, Jawa Barat 17341",
        rating: 4.8,
        reviewCount: 1760,
        status: "Top",
        positives: [
          "Sangat strategis untuk warga Pondok Melati & Jatiwarna",
          "Pekerjaan rapi dan transparan"
        ],
        negatives: [
          "Jalan raya Hankam agak padat jam sibuk"
        ],
        complaintCount: 12,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-cileungsi",
        name: "Mobeng Cileungsi",
        city: "Bogor",
        address: "Cileungsi Kidul, Cileungsi, Kab. Bogor, Jawa Barat 16820",
        rating: 4.7,
        reviewCount: 1540,
        status: "Top",
        positives: [
          "Pilihan utama service berkala area Cileungsi & Cibubur Selatan",
          "Mekanik cepat dan edukatif"
        ],
        negatives: [
          "Koneksi WiFi kadang kurang kencang"
        ],
        complaintCount: 13,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-duren-sawit",
        name: "Mobeng Duren Sawit",
        city: "Jakarta Timur",
        address: "Jl. Raya Kol. Sugiono No. 33, RT 003/012, Kel. Duren Sawit, Kec. Duren Sawit, Jakarta Timur, DKI Jakarta",
        rating: 4.9,
        reviewCount: 1650,
        status: "Top",
        positives: [
          "Fasilitas gedung baru, sangat modern & bersih",
          "Promo pembukaan ganti oli + gurit mesin sangat menguntungkan"
        ],
        negatives: [
          "Antrean cukup panjang di sore hari"
        ],
        complaintCount: 8,
        trendScore: "improving"
      },
      {
        id: "br-mobeng-brigjen-katamso",
        name: "Mobeng Brigjen Katamso Sidoarjo",
        city: "Sidoarjo",
        address: "Jl. Brigjend Katamso No.169, Wedoro, Kec. Waru, Kabupaten Sidoarjo, Jawa Timur 61256",
        rating: 4.8,
        reviewCount: 1510,
        status: "Top",
        positives: [
          "Sangat membantu untuk warga Sidoarjo & Surabaya Selatan",
          "Persetujuan nota transparan sebelum kunci diserahkan ke mekanik"
        ],
        negatives: [
          "Lahan parkir depan terbatas saat mobil besar masuk bersamaan"
        ],
        complaintCount: 11,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-mulyosari",
        name: "Mobeng Mulyosari Surabaya",
        city: "Surabaya",
        address: "Jl. Raya Tempurejo No.63, Dukuh Sutorejo, Kec. Mulyorejo, Surabaya, Jawa Timur 60113",
        rating: 4.8,
        reviewCount: 1930,
        status: "Top",
        positives: [
          "Sangat membantu untuk warga Surabaya Timur",
          "Pemeriksaan rem dan ganti oli transparan"
        ],
        negatives: [
          "Jam istirahat mekanik berbarengan di jam 12.00"
        ],
        complaintCount: 13,
        trendScore: "stable"
      }
    ],
    complaintCategories: [
      {
        category: "Waktu Tunggu & Antrean Overload Jam Sibuk",
        percentage: 44,
        count: 172,
        severity: "High",
        sampleQuotes: ["Pengerjaan di hari Sabtu terhambat karena pit terisi penuh oleh antrean mobil."]
      },
      {
        category: "Kapasitas Lahan Parkir & Pit Cabang Padat",
        percentage: 24,
        count: 94,
        severity: "Medium",
        sampleQuotes: ["Mobil antre di bahu jalan karena parkiran depan bengkel terbatas."]
      },
      {
        category: "Ketersediaan Stok Filter & Viskositas Khusus",
        percentage: 18,
        count: 70,
        severity: "Medium",
        sampleQuotes: ["Oli encer spesifikasi mobil hybrid/LCGC terkadang kosong."]
      },
      {
        category: "Kecepatan Konfirmasi Booking WhatsApp",
        percentage: 14,
        count: 55,
        severity: "Low",
        sampleQuotes: ["Respon admin WA agak terlambat saat mengonfirmasi slot pendaftaran."]
      }
    ],
    trafficPattern: {
      busyDays: ["Sabtu", "Minggu", "Jumat SORE"],
      peakHours: "09.00 - 12.00 WIB & 13.30 - 16.00 WIB",
      quietHours: "Selasa & Rabu (09.00 - 11.30 WIB)",
      hourlyDistribution: [
        { hour: "08:00", trafficLevel: 40, label: "Awal Buka" },
        { hour: "09:00", trafficLevel: 88, label: "Puncak Kedatangan" },
        { hour: "10:00", trafficLevel: 98, label: "Kapasitas Maksimal" },
        { hour: "11:00", trafficLevel: 85, label: "Padat" },
        { hour: "12:00", trafficLevel: 52, label: "Istirahat Siang" },
        { hour: "13:00", trafficLevel: 86, label: "Gelombang II" },
        { hour: "14:00", trafficLevel: 82, label: "Padat" },
        { hour: "15:00", trafficLevel: 62, label: "Sedang" },
        { hour: "16:00", trafficLevel: 38, label: "Penurunan" }
      ],
      summary: "Trafik pengunjung terpusat pada akhir pekan (Sabtu-Minggu) pagi hingga siang hari, di mana pemilik kendaraan memanfaatkan hari libur untuk perawatan mesin & ganti oli berkala.",
      recommendations: [
        "Terapkan kuota booking digital jam presisi untuk menekan antrean di cabang dengan trafik tinggi saat weekend.",
        "Buka Jalur Express Pit khusus pengerjaan ganti oli mesin di bawah 25 menit."
      ]
    },
    socialSentiment: {
      overallPositivePercentage: 88,
      overallNeutralPercentage: 9,
      overallNegativePercentage: 3,
      channels: [
        {
          platform: "Instagram",
          mentionCount: 4200,
          sentimentScore: 89,
          viralTopics: ["Promo Paket Ganti Oli Mobeng", "Gurit Carbon Clean Mesin"],
          recentHeadline: "Kanal Instagram Mobeng aktif membagikan edukasi perawatan mesin & paket diskon oli."
        },
        {
          platform: "TikTok",
          mentionCount: 4800,
          sentimentScore: 84,
          viralTopics: ["Edukasi Gejala Mesin Pincang", "Review Servis Mobeng"],
          recentHeadline: "Video transparansi pengerjaan mekanik Mobeng banyak mendapatkan tanggapan positif netizen."
        }
      ],
      viralComplaints: ["Beberapa komentar mengenai lamanya antrean di beberapa cabang favorit saat akhir pekan."],
      successfulCampaigns: ["Kampanye 'Mobeng Transparan & Bergaransi' sukses menarik perhatian pengguna mobil harian."],
      publicPerceptionSummary: "Mobeng dipandang sebagai jaringan bengkel modern yang dapat diandalkan dengan harga bersaing dan mekanik yang ramah."
    },
    strategicRecommendations: [
      {
        id: "rec-mobeng-1",
        priority: "High",
        category: "Operasional",
        title: "Penataan Kuota Booking & Jalur Express Pit",
        description: "Alokasikan 1 pit khusus untuk pengerjaan Express Service (ganti oli & filter < 25 menit) dan optimalkan sistem antrean booking digital via WhatsApp.",
        targetBranches: ["Seluruh Cabang Mobeng"],
        expectedImpact: "Mengurangi durasi waktu tunggu antrean hingga 30 menit di jam sibuk weekend."
      },
      {
        id: "rec-mobeng-2",
        priority: "High",
        category: "Inventaris & Transparansi",
        title: "Sistem Manajemen Stok Otomatis Varian Oli Encer & Part Fast-Moving",
        description: "Integrasikan reorder otomatis pada sistem kasir jika stok oli 0W-20 / 5W-30 dan filter AC berada di bawah batas minimum 10 unit.",
        targetBranches: ["Seluruh Cabang Mobeng"],
        expectedImpact: "Menjamin 100% ketersediaan stok oli mesin dan sparepart fast-moving."
      }
    ]
  },

  "B-Quik": {
    brandName: "B-Quik Indonesia (Jaringan Servis Cepat, Ban, Rem, Aki & Suspension)",
    analysisDate: "Agustus 2026",
    totalBranchesFound: 18,
    avgNetworkRating: 4.72,
    totalReviewsAnalyzed: 21500,
    executiveSummary: "B-Quik menunjukkan pertumbuhan reputasi bisnis yang sangat pesat di Jabodetabek. Konsumen sangat menyukai konsep bengkel modern ber-AC penuh, transparansi pemeriksaan 30 titik gratis, garansi ban 1 tahun, serta promo cicilan 0%. Kritis: keluhan sporadis di cabang Karawaci mengenai saran pergantian kampas rem yang terkesan terlalu dini oleh teknisi.",
    redFlagBranchIds: ["br-bquik-8"],
    branches: [
      {
        id: "br-bquik-1",
        name: "B-Quik BSD City",
        city: "Tangerang Selatan",
        address: "Jl. BSD Grand Boulevard No. 12, BSD City",
        rating: 4.9,
        reviewCount: 3450,
        status: "Top",
        positives: [
          "Peralatan spooring 3D Hunter sangat canggih dan presisi",
          "Ruang tunggu VIP seperti cafe modern, sangat nyaman untuk WFH",
          "Garansi ban 1 tahun ganti baru jika rusak kena paku/lubang"
        ],
        negatives: [
          "Harga ban merk premium impor relatif tinggi"
        ],
        complaintCount: 10,
        trendScore: "improving"
      },
      {
        id: "br-bquik-2",
        name: "B-Quik Kelapa Gading",
        city: "Jakarta Utara",
        address: "Jl. Boulevard Barat Raya Blok LA 1, Kelapa Gading",
        rating: 4.8,
        reviewCount: 2900,
        status: "Top",
        positives: [
          "Buka setiap hari sampai malam pukul 21.00 WIB",
          "Pemeriksaan 30 titik komponen gratis sebelum pengerjaan"
        ],
        negatives: [
          "Antrean spooring di atas jam 5 sore cukup ramai"
        ],
        complaintCount: 14,
        trendScore: "stable"
      },
      {
        id: "br-bquik-8",
        name: "B-Quik Karawaci Tangerang",
        city: "Tangerang",
        address: "Jl. Boulevard Diponegoro No. 88, Lippo Karawaci",
        rating: 4.3,
        reviewCount: 1680,
        status: "Attention Required",
        positives: [
          "Lokasi strategis dekat area kampus dan perumahan"
        ],
        negatives: [
          "Indikasi saran penggantian kampas rem padahal ketebalan masih 60%",
          "Mekanik terkesan buru-buru saat menjelaskan hasil inspeksi",
          "Waktu tunggu penyerahan invoice akhir agak lama"
        ],
        complaintCount: 92,
        trendScore: "declining",
        trendDetails: "Banyak ulasan negatif menyindir rekomendasi ganti part yang prematur."
      }
    ],
    complaintCategories: [
      {
        category: "Indikasi Recommendations Upsell Prematur",
        percentage: 40,
        count: 120,
        severity: "High",
        sampleQuotes: ["Dibilang kampas rem habis, padahal pas dicek bengkel lain masih tebal."]
      },
      {
        category: "Waktu Tunggu Antrean Spooring 3D",
        percentage: 30,
        count: 90,
        severity: "Medium",
        sampleQuotes: ["Spooring butuh waktu 1 jam karena alatnya cuma ada 1 bay."]
      },
      {
        category: "Variasi Stok Ukuran Ban Ring Besar (R18+)",
        percentage: 18,
        count: 54,
        severity: "Low",
        sampleQuotes: ["Ukuran ban SUV 235/55 R19 stoknya pilihan merknya terbatas."]
      },
      {
        category: "Proses Pembayaran & Kasir",
        percentage: 12,
        count: 36,
        severity: "Low",
        sampleQuotes: ["Mesin EDC kadang error saat transaksi cicilan 0%."]
      }
    ],
    trafficPattern: {
      busyDays: ["Sabtu", "Minggu", "Jumat Malam"],
      peakHours: "10.00 - 13.00 WIB & 16.00 - 19.00 WIB",
      quietHours: "Senin & Selasa (11.00 - 14.00 WIB)",
      hourlyDistribution: [
        { hour: "09:00", trafficLevel: 50, label: "Buka Bengkel" },
        { hour: "11:00", trafficLevel: 90, label: "Puncak Siang" },
        { hour: "13:00", trafficLevel: 65, label: "Sedang" },
        { hour: "15:00", trafficLevel: 75, label: "Ramai" },
        { hour: "17:00", trafficLevel: 92, label: "Puncak Pulang Kerja" },
        { hour: "19:00", trafficLevel: 70, label: "Malam Padat" }
      ],
      summary: "Jam operasional B-Quik yang panjang (sampai 21.00 WIB) membuat traffic terdistribusi merata hingga malam hari, sangat disukai pekerja kantoran.",
      recommendations: [
        "Gunakan Sig-Off Digital Pengukuran Jangka Sorong (Vernier Caliper) untuk menunjukkan milimeter pasti tebal kampas rem ke konsumen."
      ]
    },
    socialSentiment: {
      overallPositivePercentage: 86,
      overallNeutralPercentage: 9,
      overallNegativePercentage: 5,
      channels: [
        {
          platform: "Instagram",
          mentionCount: 4800,
          sentimentScore: 90,
          viralTopics: ["Garansi Ban 1 Tahun B-Quik", "Promo Spooring 3D"],
          recentHeadline: "Program garansi ban B-Quik jadi pembicaraan hangat pengguna SUV."
        }
      ],
      viralComplaints: ["Beberapa komentar kritis terkait penawaran piringan cakram baru."],
      successfulCampaigns: ["Kampanye B-Quik Buka Setiap Hari Sampai Malam sangat diminati."],
      publicPerceptionSummary: "B-Quik dipandang sebagai bengkel modern bertaraf internasional dengan standar fasilitas terbaik."
    },
    strategicRecommendations: [
      {
        id: "rec-bq-1",
        priority: "Critical",
        category: "Operasional",
        title: "SOP Transparansi Pengukuran Ketebalan Kampas Rem & Disk Brake",
        description: "Mekanik wajib memfoto alat ukur jangka sorong berangka milimeter presisi dan menyertakannya di lembar inspeksi digital konsumen.",
        targetBranches: ["B-Quik Karawaci Tangerang", "Seluruh Cabang B-Quik"],
        expectedImpact: "Eliminasi 100% isu keraguan kejujuran rekomendasi penggantian suku cadang."
      }
    ]
  },

  "Bengkel BOS": {
    brandName: "Bengkel BOS (Bengkel Open Service - Ban, Velg, Oli & Servis)",
    analysisDate: "Agustus 2026",
    totalBranchesFound: 22,
    avgNetworkRating: 4.58,
    totalReviewsAnalyzed: 28900,
    executiveSummary: "Bengkel BOS (Bengkel Open Service) memegang ceruk pasar yang luas dalam penyediaan ban, velg, oli, dan tune-up dengan jaringan 22 outlet di Jabodetabek & Jawa Barat. Keunggulan utamanya adalah pilihan merek ban terlengkap (Bridgestone, Dunlop, Yokohama, Achilles, Giti) dengan harga bersaing. Titik perhatian utama adalah peremajaan pendingin udara di ruang tunggu dan kerapihan pit area.",
    redFlagBranchIds: ["br-bos-12"],
    branches: [
      {
        id: "br-bos-1",
        name: "Bengkel BOS Kedoya",
        city: "Jakarta Barat",
        address: "Jl. Kedoya Raya No. 18, Kedoya Selatan",
        rating: 4.8,
        reviewCount: 3800,
        status: "Top",
        positives: [
          "Pilihan merk ban sangat lengkap dari ekonomis hingga premium",
          "Proses ganti ban, isi nitrogen, dan balancing sangat cepat",
          "Harga paket promo tune up + oli mesin sangat hemat"
        ],
        negatives: [
          "Ruang tunggu agak sempit di jam sibuk"
        ],
        complaintCount: 15,
        trendScore: "improving"
      },
      {
        id: "br-bos-2",
        name: "Bengkel BOS Bekasi Cibubur",
        city: "Bekasi",
        address: "Jl. Transyogi Km 3, Cibubur",
        rating: 4.7,
        reviewCount: 3100,
        status: "Top",
        positives: [
          "Mekanik ahli dan berpengalaman menangani spooring mobil Eropa/Jepang",
          "Layanan Spooring & Balancing sangat akurat"
        ],
        negatives: [
          "Antrean hari Minggu cukup panjang"
        ],
        complaintCount: 20,
        trendScore: "stable"
      },
      {
        id: "br-bos-12",
        name: "Bengkel BOS Cinere Balai Pustaka",
        city: "Depok",
        address: "Jl. Cinere Raya No. 12, Depok",
        rating: 4.2,
        reviewCount: 1520,
        status: "Attention Required",
        positives: [
          "Stok ban Achilles dan Dunlop lengkap"
        ],
        negatives: [
          "AC ruang tunggu kurang dingin saat siang terik",
          "Lantai area pit servis terlihat banyak ceceran oli bekas",
          "Sikap petugas pendaftaran kurang ramah saat ditanya diskon promo"
        ],
        complaintCount: 98,
        trendScore: "declining"
      }
    ],
    complaintCategories: [
      {
        category: "Suhu & Kebersihan Ruang Tunggu Outlet",
        percentage: 38,
        count: 152,
        severity: "Medium",
        sampleQuotes: ["Ruang tunggu panas karena AC mati dan kurang bersih."]
      },
      {
        category: "Kerapihan & Kebersihan Area Pit Servis",
        percentage: 32,
        count: 128,
        severity: "Medium",
        sampleQuotes: ["Lantai pit banyak bekas ceceran oli, kurang terawat."]
      },
      {
        category: "Waktu Tunggu Antrean Weekend",
        percentage: 18,
        count: 72,
        severity: "Low",
        sampleQuotes: ["Hari Minggu antre spooring sampai 2 jam."]
      },
      {
        category: "Kejelasan Masa Garansi Ban",
        percentage: 12,
        count: 48,
        severity: "Low",
        sampleQuotes: ["Petugas lupa menjelaskan syarat garansi pabrikan ban."]
      }
    ],
    trafficPattern: {
      busyDays: ["Sabtu", "Minggu"],
      peakHours: "09.00 - 12.00 WIB & 13.00 - 15.30 WIB",
      quietHours: "Rabu & Kamis (10.00 - 13.00 WIB)",
      hourlyDistribution: [
        { hour: "08:00", trafficLevel: 40, label: "Buka" },
        { hour: "10:00", trafficLevel: 92, label: "Puncak Padat" },
        { hour: "12:00", trafficLevel: 55, label: "Istirahat" },
        { hour: "14:00", trafficLevel: 85, label: "Ramai" },
        { hour: "16:00", trafficLevel: 45, label: "Penurunan" }
      ],
      summary: "Permintaan puncak terjadi pada akhir pekan untuk pengerjaan ganti ban dan spooring balancing keluarga.",
      recommendations: [
        "Lakukan pembersihan berkala pit lantai menggunakan degreaser pembersih oli."
      ]
    },
    socialSentiment: {
      overallPositivePercentage: 80,
      overallNeutralPercentage: 12,
      overallNegativePercentage: 8,
      channels: [
        {
          platform: "Instagram",
          mentionCount: 3500,
          sentimentScore: 84,
          viralTopics: ["Promo Ganti Ban BOS", "Spooring Balancing Hemat"],
          recentHeadline: "Banyak pengguna merekomendasikan Bengkel BOS untuk tempat beli ban murah."
        }
      ],
      viralComplaints: ["Beberapa saran perbaikan AC ruang tunggu."],
      successfulCampaigns: ["Program 'Beli 3 Ban Gratis 1' terbukti menyedot banyak pengunjung."],
      publicPerceptionSummary: "Bengkel BOS dikenal sebagai tempat terpercaya untuk ganti ban & oli dengan pilihan produk sangat lengkap."
    },
    strategicRecommendations: [
      {
        id: "rec-bos-1",
        priority: "High",
        category: "Customer Experience",
        title: "Peremajaan AC & Standarisasi Kebersihan Lounge & Pit Area",
        description: "Ganti unit AC yang rusak di cabang Cinere dan terapkan SOP kebersihan pit bebas oli tergenang.",
        targetBranches: ["Bengkel BOS Cinere Balai Pustaka"],
        expectedImpact: "Meningkatkan kenyamanan pelanggan dan menaikkan rating cabang ke 4.6+."
      }
    ]
  },

  "Astra Otoservice": {
    brandName: "Bengkel Astra Otoservice",
    analysisDate: "Agustus 2026",
    totalBranchesFound: 12,
    avgNetworkRating: 4.68,
    totalReviewsAnalyzed: 18450,
    executiveSummary: "Secara keseluruhan, jaringan Bengkel Astra Otoservice memiliki reputasi performa di atas rata-rata industri dengan kepuasan pelanggan sebesar 88%. Keunggulan utama terletak pada transparansi standar jaminan Astra, kebersihan ruang tunggu ber-AC, dan garansi sparepart resmi. Namun, terdapat kesenjangan kinerja yang cukup mencolok antara cabang di pusat kota dengan cabang satelit ber-volume tinggi, khususnya terkait antrean panjang pada hari Sabtu-Minggu serta masalah akurasi estimasi pengerjaan di aplikasi booking.",
    redFlagBranchIds: ["br-astra-8", "br-astra-10"],
    branches: [
      {
        id: "br-astra-1",
        name: "Astra Otoservice Kelapa Gading",
        city: "Jakarta Utara",
        address: "Jl. Boulevard Barat Raya No. 12, Kelapa Gading",
        rating: 4.9,
        reviewCount: 2840,
        status: "Top",
        positives: [
          "Ruang tunggu sangat nyaman dengan fasilitas WiFi kencang & gratis kopi gayo",
          "Mekanik sangat jujur menunjukkan komponen oli & kampas rem yang sudah aus",
          "Proses registrasi dan pembayarannya serba digital cepat"
        ],
        negatives: [
          "Slot parkir mobil saat jam makan siang cukup terbatas",
          "Harga wiper original relatif lebih tinggi dari pasaran umum"
        ],
        complaintCount: 12,
        trendScore: "improving",
        trendDetails: "Peningkatan rating 0.2 poin dalam 3 bulan terakhir setelah renovasi area tunggu.",
        recentReviews: [
          {
            id: "r1",
            author: "Hendra Wijaya",
            rating: 5,
            date: "3 hari lalu",
            text: "Servis berkala Innova Zenix lancar jaya, SA Mas Dimas ramah banget jelasin rincian garansi.",
            sentiment: "positive",
            tags: ["Pelayanan SA", "Garansi Astra"]
          },
          {
            id: "r2",
            author: "Silvia Tan",
            rating: 5,
            date: "1 minggu lalu",
            text: "AC dingin, ruang tunggu bersih. Hasil balancing & spooring mobil jadi enteng banget.",
            sentiment: "positive",
            tags: ["Kualitas Pengerjaan"]
          }
        ]
      },
      {
        id: "br-astra-2",
        name: "Astra Otoservice BSD Serpong",
        city: "Tangerang Selatan",
        address: "Jl. Pahlawan Seribu No. 88, BSD City",
        rating: 4.8,
        reviewCount: 2150,
        status: "Top",
        positives: [
          "Penjelasan teknis Service Advisor transparan dan tidak memaksakan ganti part",
          "Peralatan spooring & balancing terbaru berkualifikasi presisi",
          "Layanan Express Maintenance ganti oli selesai kurang dari 30 menit"
        ],
        negatives: [
          "Sering kehabisan slot booking hari Sabtu jika tidak di-reserve H-3",
          "Suara bising dari area pit servis kadang terdengar ke ruang tunggu"
        ],
        complaintCount: 18,
        trendScore: "stable",
        trendDetails: "Performa sangat konsisten dengan retensi pelanggan berkala di atas 80%."
      },
      {
        id: "br-astra-3",
        name: "Astra Otoservice Surabaya Mayjend Sungkono",
        city: "Surabaya",
        address: "Jl. Mayjend Sungkono No. 104, Dukuh Pakis",
        rating: 4.7,
        reviewCount: 1980,
        status: "Top",
        positives: [
          "Fasilitas lengkap, ada tempat bermain anak dan charging station",
          "Hasil tune up dan pembersihan throttle body sangat memuaskan",
          "Diskon oli khusus pemegang kartu member Astra"
        ],
        negatives: [
          "Jalur keluar masuk bengkel sering tersendat kemacetan jalan utama"
        ],
        complaintCount: 24,
        trendScore: "stable"
      },
      {
        id: "br-astra-4",
        name: "Astra Otoservice Pondok Indah",
        city: "Jakarta Selatan",
        address: "Jl. Sultan Iskandar Muda No. 18, Kebayoran Lama",
        rating: 4.7,
        reviewCount: 1620,
        status: "Top",
        positives: [
          "Pelayanan berstandar premium, respon counter pendaftaran sangat santun",
          "Pemberian sertifikat pengecekan 18 poin gratis"
        ],
        negatives: [
          "Biaya jasa pengerjaan sistem kelistrikan agak mahal"
        ],
        complaintCount: 20,
        trendScore: "improving"
      },
      {
        id: "br-astra-5",
        name: "Astra Otoservice Bandung Soekarno Hatta",
        city: "Bandung",
        address: "Jl. Soekarno Hatta No. 432, Bandung",
        rating: 4.6,
        reviewCount: 1450,
        status: "Medium",
        positives: [
          "Ruang pengerjaan luas, teknisi berpengalaman menangani mobil matik",
          "Proses klaim garansi aki GS Astra sangat cepat tanpa berbelit"
        ],
        negatives: [
          "Waktu tunggu pendaftaran walk-in pagi hari bisa mencapai 45 menit",
          "Ketersediaan sparepart filter udara tipe lama kadang kosong"
        ],
        complaintCount: 38,
        trendScore: "stable"
      },
      {
        id: "br-astra-6",
        name: "Astra Otoservice Semarang Majapahit",
        city: "Semarang",
        address: "Jl. Majapahit No. 210, Semarang Timur",
        rating: 4.5,
        reviewCount: 1120,
        status: "Medium",
        positives: [
          "Ruang tunggu bersih, pembayaran QRIS dan kartu kredit lancar",
          "Mekanik teliti mengecek tekanan angin ban dan air radiator"
        ],
        negatives: [
          "AC ruang tunggu kurang dingin saat jam siang terik",
          "Penjelasan rincian estimasi di awal kadang kurang rinci"
        ],
        complaintCount: 42,
        trendScore: "declining"
      },
      {
        id: "br-astra-7",
        name: "Astra Otoservice Medan Gatot Subroto",
        city: "Medan",
        address: "Jl. Gatot Subroto No. 165, Medan",
        rating: 4.5,
        reviewCount: 980,
        status: "Medium",
        positives: [
          "Peralatan modern dan pengerjaan rem sangat rapi",
          "Diskon oli rutin promo bulanan"
        ],
        negatives: [
          "Antrean mobil menumpuk di bahu jalan luar bengkel",
          "Komunikasi Service Advisor terasa agak kaku"
        ],
        complaintCount: 48,
        trendScore: "stable"
      },
      {
        id: "br-astra-8",
        name: "Astra Otoservice Bekasi Barat",
        city: "Bekasi",
        address: "Jl. Ahmad Yani No. 55, Bekasi",
        rating: 4.2,
        reviewCount: 2210,
        status: "Attention Required",
        positives: [
          "Lokasi strategis dekat pintu tol Bekasi Barat",
          "Stok oli dan aki lengkap"
        ],
        negatives: [
          "Waktu pengerjaan molor hingga 2 jam dari estimasi awal yang dijanjikan",
          "Keluhan pelanggan tidak dipanggil tepat waktu walau sudah booking",
          "Mekanik terkesan terburu-buru karena jumlah unit yang berlebihan",
          "Ruang tunggu sering penuh sesak pada Sabtu-Minggu"
        ],
        complaintCount: 142,
        trendScore: "declining",
        trendDetails: "Penurunan rating tajam dalam 6 bulan terakhir akibat overload kapasitas pengerjaan.",
        recentReviews: [
          {
            id: "r3",
            author: "Rian Prasetyo",
            rating: 2,
            date: "2 hari lalu",
            text: "Janji jam 10 selesai jam 13.30. Kasihan pelanggan yang udah booking dari H-2 tapi disamakan dengan walk-in.",
            sentiment: "negative",
            tags: ["Waktu Tunggu", "Ketidaksesuaian Estimasi"]
          },
          {
            id: "r4",
            author: "Dewi Kartika",
            rating: 1,
            date: "1 minggu lalu",
            text: "Staff FO tidak ramah, pas ditanya kepastian urutan malah jawabnya cuek. Tolong manajemen Astra benahi cabang Bekasi!",
            sentiment: "negative",
            tags: ["Pelayanan Staff", "Antrean"]
          }
        ]
      },
      {
        id: "br-astra-9",
        name: "Astra Otoservice Yogyakarta Magelang",
        city: "Yogyakarta",
        address: "Jl. Magelang Km 5.5, Mlati, Sleman",
        rating: 4.6,
        reviewCount: 890,
        status: "Medium",
        positives: [
          "Staff ramah berbudaya jogja yang santun",
          "Pengecekan aki gratis menggunakan akumeter digital"
        ],
        negatives: [
          "Jumlah pit pengerjaan terbatas hanya 4 unit"
        ],
        complaintCount: 28,
        trendScore: "stable"
      },
      {
        id: "br-astra-10",
        name: "Astra Otoservice Depot Makassar Perintis",
        city: "Makassar",
        address: "Jl. Perintis Kemerdekaan Km 10, Tamalanrea",
        rating: 4.1,
        reviewCount: 1350,
        status: "Attention Required",
        positives: [
          "Tempat strategis di jalur utama kota Makassar",
          "Promo ganti kampas rem relatif terjangkau"
        ],
        negatives: [
          "Indikasi mekanik kurang transparan saat menjelaskan penggantian shockbreaker",
          "Penumpukan nota tagihan biaya jasa tambahan tanpa konfirmasi persetujuan di awal",
          "Proses klaim keluhan lambat dan terkesan defensif"
        ],
        complaintCount: 168,
        trendScore: "declining",
        trendDetails: "Banyak sorotan ulasan negatif mengenai biaya tersembunyi dan komunikasi Service Advisor.",
        recentReviews: [
          {
            id: "r5",
            author: "Andi Muhammad",
            rating: 1,
            date: "5 hari lalu",
            text: "Tiba-tiba di nota ada charges pembersihan rem 150rb tanpa ditanya dulu ke saya. Tolong transparansinya!",
            sentiment: "negative",
            tags: ["Transparansi Biaya", "Persetujuan Tambahan"]
          }
        ]
      }
    ],
    complaintCategories: [
      {
        category: "Waktu Tunggu & Antrean Overload",
        percentage: 38,
        count: 245,
        severity: "High",
        sampleQuotes: [
          "Sudah booking via aplikasi jam 09.00 tapi mobil baru masuk pit jam 10.45.",
          "Waktu tunggu hari Sabtu parah banget, pendaftaran walk-in mengular."
        ]
      },
      {
        category: "Transparansi Biaya & Persetujuan Jasa",
        percentage: 26,
        count: 168,
        severity: "High",
        sampleQuotes: [
          "Ada penambahan biaya pengerjaan tanpa konfirmasi persetujuan di awal.",
          "Estimasi di awal 400rb pas bayar jadi 650rb karena ada biaya cairan pembersih ekstra."
        ]
      },
      {
        category: "Kapasitas & Fasilitas Ruang Tunggu",
        percentage: 20,
        count: 129,
        severity: "Medium",
        sampleQuotes: [
          "Ruang tunggu cabang Bekasi penuh sesak sampai terpaksa berdiri di luar.",
          "Koneksi WiFi mati dan AC kurang dingin saat jam terik."
        ]
      },
      {
        category: "Komunikasi Service Advisor (SA)",
        percentage: 16,
        count: 103,
        severity: "Low",
        sampleQuotes: [
          "SA kurang komunikatif menjelaskan kenapa pengerjaan molor dari janji awal.",
          "Staff pendaftaran terkesan cuek saat ditanya urutan antrean."
        ]
      }
    ],
    trafficPattern: {
      busyDays: ["Sabtu (Peak Utama)", "Minggu", "Jumat SORE (15.00 - 18.00 WIB)"],
      peakHours: "08.30 - 11.30 WIB & 13.30 - 15.30 WIB",
      quietHours: "Selasa & Rabu (08.00 - 10.30 WIB)",
      hourlyDistribution: [
        { hour: "08:00", trafficLevel: 45, label: "Mulai Padat" },
        { hour: "09:00", trafficLevel: 92, label: "Puncak Kedatangan" },
        { hour: "10:00", trafficLevel: 98, label: "Kapasitas Maksimal" },
        { hour: "11:00", trafficLevel: 85, label: "Padat" },
        { hour: "12:00", trafficLevel: 60, label: "Istirahat Makan" },
        { hour: "13:00", trafficLevel: 80, label: "Gelombang II" },
        { hour: "14:00", trafficLevel: 88, label: "Padat" },
        { hour: "15:00", trafficLevel: 70, label: "Sedang" },
        { hour: "16:00", trafficLevel: 40, label: "Penurunan" },
        { hour: "17:00", trafficLevel: 25, label: "Lancar" }
      ],
      summary: "Data pola kunjungan menunjukkan lonjakan kedatangan sebesar 210% pada hari Sabtu dibanding rerata hari kerja. Penumpukan unit terjadi antara jam 08.30 hingga 11.00 karena mayoritas pemilik mobil memilih servis sebelum beraktivitas.",
      recommendations: [
        "Lakukan kuota maksimal booking online per jam untuk menghindari kedatangan bersamaan.",
        "Terapkan program insentif 'Early Bird Midweek Discount' (Diskon Jasa 20% Selasa-Kamis).",
        "Buat 'Express Pit' khusus ganti oli & filter tanpa pemeriksaan menyeluruh untuk mempercepat turnover."
      ]
    },
    socialSentiment: {
      overallPositivePercentage: 74,
      overallNeutralPercentage: 16,
      overallNegativePercentage: 10,
      channels: [
        {
          platform: "TikTok",
          mentionCount: 3800,
          sentimentScore: 68,
          viralTopics: ["Pengalaman Servis Berkala", "Video Komplain Waktu Tunggu Bekasi"],
          recentHeadline: "Content creator otomotif menguji ketepatan jaminan 18 poin Astra Otoservice."
        },
        {
          platform: "Instagram",
          mentionCount: 2900,
          sentimentScore: 82,
          viralTopics: ["Promo Kampanye Aki GS Astra", "Tips Perawatan Mobil Musim Hujan"],
          recentHeadline: "Apresiasi tinggi netizen pada transparansi garansi aki resmi."
        },
        {
          platform: "YouTube",
          mentionCount: 850,
          sentimentScore: 86,
          viralTopics: ["Review Varian Oli Shell vs Aspira", "Vlog Servis Mobil Bekas"],
          recentHeadline: "Video review independen memuji kelengkapan alat spooring 3D."
        },
        {
          platform: "News",
          mentionCount: 620,
          sentimentScore: 91,
          viralTopics: ["Ekspansi Cabang Baru", "Program Sertifikasi Teknisi Otomotif"],
          recentHeadline: "Siaran pers resmi mengenai integrasi ekosistem digital Astra."
        }
      ],
      viralComplaints: [
        "Video TikTok viral (180rb views) memperlihatkan antrean mobil yang meluber ke jalan raya di cabang Bekasi Barat pada hari Sabtu pagi."
      ],
      successfulCampaigns: [
        "Program 'Cek Aki & Kampas Rem Gratis' berhasil menarik lebih dari 12.000 prospek servis baru sepanjang kuartal ini."
      ],
      publicPerceptionSummary: "Sentimen publik terhadap Astra Otoservice secara umum sangat positif dan dipercaya sebagai bengkel non-resmi berstandar ATPM terbaik. Tantangan terbesar adalah persepsi negatif terkait kemacetan antrean di TikTok yang bisa menurunkan minat pelanggan baru jika tidak segera dimitigasi."
    },
    strategicRecommendations: [
      {
        id: "rec-astra-1",
        priority: "Critical",
        category: "Operasional",
        title: "Penerapan Digital Approval System (Konfirmasi Nota Sebelum Pengerjaan)",
        description: "Wajibkan seluruh cabang (khususnya Bekasi Barat & Makassar) menggunakan sistem approval via WhatsApp/Aplikasi dengan rincian biaya yang diklik setuju oleh konsumen sebelum mekanik melakukan pengerjaan tambahan.",
        targetBranches: ["Astra Otoservice Bekasi Barat", "Astra Otoservice Depot Makassar Perintis"],
        expectedImpact: "Menghilangkan 95% keluhan biaya tidak transparan dan meningkatkan rasa percaya konsumen."
      },
      {
        id: "rec-astra-2",
        priority: "Critical",
        category: "Operasional",
        title: "Restrukturisasi Alokasi Pit & Buffer Booking Hari Sabtu",
        description: "Batasi kuota walk-in maksimal 30% pada Sabtu-Minggu dan khususkan 2 Pit Express Maintenance untuk pekerjaan bawah 30 menit (ganti oli & aki).",
        targetBranches: ["Seluruh Cabang Kategori Attention Required & Medium"],
        expectedImpact: "Memotong durasi waktu tunggu antrean hingga 45 menit pada jam sibuk."
      },
      {
        id: "rec-astra-3",
        priority: "High",
        category: "Pelatihan Staff",
        title: "Pelatihan Service Advisor & Standard Empathy Handling",
        description: "Sediakan pelatihan komunikasi krisis dan customer service hospitality untuk Service Advisor dan kasir pendaftaran cabang ber-rating rendah.",
        targetBranches: ["Astra Otoservice Bekasi Barat", "Astra Otoservice Depot Makassar Perintis", "Astra Otoservice Semarang Majapahit"],
        expectedImpact: "Meningkatkan rating Google Review cabang berkinerja rendah sebesar +0.4 poin dalam 60 hari."
      },
      {
        id: "rec-astra-4",
        priority: "Medium",
        category: "Customer Experience",
        title: "Upgrade Kapasitas Ruang Tunggu & Fasilitas Pendingin",
        description: "Lakukan ekspansi kapasitas kursi tunggu dan peremajaan sistem AC pada cabang dengan tingkat kepadatan tinggi.",
        targetBranches: ["Astra Otoservice Bekasi Barat", "Astra Otoservice Semarang Majapahit"],
        expectedImpact: "Meningkatkan skor kenyamanan fasilitas dari 3.8 menjadi 4.7."
      }
    ]
  },

  "Nasmoco": {
    brandName: "Nasmoco (Toyota Authorized Network Jawa Tengah & DIY)",
    analysisDate: "Agustus 2026",
    totalBranchesFound: 14,
    avgNetworkRating: 4.62,
    totalReviewsAnalyzed: 24100,
    executiveSummary: "Jaringan Nasmoco di Jawa Tengah dan DIY menampilkan performa bisnis yang kuat dengan kepercayaan tinggi pada layanan resmi Toyota. Cabang utama di Semarang Pemuda dan Solo Slamet Riyadi mencapai skor reputasi bintang 4.8. Poin kritis yang perlu ditindaklanjuti direksi adalah lamanya durasi pengerjaan perbaikan bodi & cat (Body & Paint) serta ketersediaan stok sparepart tertentu untuk unit Toyota lama.",
    redFlagBranchIds: ["br-nasmoco-9", "br-nasmoco-12"],
    branches: [
      {
        id: "br-nasmoco-1",
        name: "Nasmoco Pemuda Semarang",
        city: "Semarang",
        address: "Jl. Pemuda No. 72, Semarang Tengah",
        rating: 4.8,
        reviewCount: 3420,
        status: "Top",
        positives: [
          "Pelayanan berkelas dengan lounge tunggu eksklusif dan hidangan ringan",
          "Proses klaim asuransi & perbaikan mesin sangat rapi dan bergaransi resmi",
          "Service Advisor sangat responsif mengabarkan status mobil via WA"
        ],
        negatives: [
          "Biaya estimasi perbaikan kaki-kaki cenderung tinggi"
        ],
        complaintCount: 15,
        trendScore: "improving"
      },
      {
        id: "br-nasmoco-2",
        name: "Nasmoco Solo Slamet Riyadi",
        city: "Surakarta",
        address: "Jl. Slamet Riyadi No. 438, Surakarta",
        rating: 4.8,
        reviewCount: 2980,
        status: "Top",
        positives: [
          "Teknisi tersertifikasi master Toyota",
          "Ruang tunggu VIP bersih dan tenang untuk bekerja"
        ],
        negatives: [
          "Pilihan jadwal booking hari Jumat sering penuh"
        ],
        complaintCount: 12,
        trendScore: "stable"
      },
      {
        id: "br-nasmoco-3",
        name: "Nasmoco Mlati Yogyakarta",
        city: "Yogyakarta",
        address: "Jl. Magelang Km 7, Sleman, DIY",
        rating: 4.7,
        reviewCount: 2650,
        status: "Top",
        positives: [
          "Pelayanan cepat untuk Express Maintenance 1 Jam",
          "Stok sparepart rutin Toyota Avanza/Innova sangat melimpah"
        ],
        negatives: [
          "Area tunggu luar kadang tercium bau asap knalpot"
        ],
        complaintCount: 22,
        trendScore: "stable"
      },
      {
        id: "br-nasmoco-4",
        name: "Nasmoco Magelang",
        city: "Magelang",
        address: "Jl. Raya Magelang - Jogja Km 5",
        rating: 4.6,
        reviewCount: 1840,
        status: "Medium",
        positives: [
          "Keramahan khas Jawa yang halus dan membimbing",
          "Hasil cuci mobil gratis setelah servis bersih mengkilap"
        ],
        negatives: [
          "Waktu serah terima kunci sore hari agak tersendat"
        ],
        complaintCount: 31,
        trendScore: "stable"
      },
      {
        id: "br-nasmoco-9",
        name: "Nasmoco Kaligawe Body & Paint Semarang",
        city: "Semarang",
        address: "Jl. Raya Kaligawe Km 5, Genuk, Semarang",
        rating: 4.1,
        reviewCount: 1650,
        status: "Attention Required",
        positives: [
          "Hasil pengecatan mulus sesuai warna asli pabrikan Toyota"
        ],
        negatives: [
          "Proses pengerjaan perbaikan bodi molor hingga 3 minggu dari janji awal",
          "Sulit menghubungi pihak customer service untuk mengecek progres mobil",
          "Banyak debu amplas tersisa di dalam interior mobil saat diserahterimakan",
          "Proses konfirmasi persetujuan pihak asuransi lambat"
        ],
        complaintCount: 184,
        trendScore: "declining",
        trendDetails: "Banyak ulasan negatif terkait keterlambatan penyelesaian Body & Paint serta interior kotor.",
        recentReviews: [
          {
            id: "rn1",
            author: "Agus Supriyanto",
            rating: 1,
            date: "4 hari lalu",
            text: "Janjinya 10 hari selesai perbaikan bemper, kenyataan sampai 25 hari baru kelar. Ditanya via WA cuma dibalas 'masih proses'. Parah!",
            sentiment: "negative",
            tags: ["Body & Paint", "Keterlambatan", "Komunikasi CS"]
          }
        ]
      },
      {
        id: "br-nasmoco-12",
        name: "Nasmoco Cilacap",
        city: "Cilacap",
        address: "Jl. Dokter Soetomo No. 12, Cilacap",
        rating: 4.3,
        reviewCount: 1220,
        status: "Attention Required",
        positives: [
          "Lokasi mudah dijangkau di pusat kota Cilacap"
        ],
        negatives: [
          "Indikasi inden sparepart terlampau lama (lebih dari 1 bulan)",
          "Ruang tunggu sempit saat masa puncak servis berkala"
        ],
        complaintCount: 95,
        trendScore: "declining"
      }
    ],
    complaintCategories: [
      {
        category: "Keterlambatan Pengerjaan Body & Paint",
        percentage: 42,
        count: 210,
        severity: "High",
        sampleQuotes: [
          "Mobil ditahan 3 minggu padahal perbaikan cuma penyok ringan di pintu.",
          "Tidak ada kabar progres kecuali ditanya terus menerus."
        ]
      },
      {
        category: "Durasi Inden Sparepart Unit Lama/Langka",
        percentage: 28,
        count: 140,
        severity: "High",
        sampleQuotes: [
          "Inden sensor ABS Toyota Kijang Innova diesel sampai 1.5 bulan belum datang."
        ]
      },
      {
        category: "Kualitas Kebersihan Post-Servis (Interior)",
        percentage: 18,
        count: 90,
        severity: "Medium",
        sampleQuotes: [
          "Noda oli mekanik tertempel di jok kain mobil saya.",
          "Debu pengerjaan bodi masih menempel di dashboard."
        ]
      },
      {
        category: "Transparansi Biaya Jasa & Garansi",
        percentage: 12,
        count: 60,
        severity: "Low",
        sampleQuotes: [
          "Biaya Jasa berkala terasa cukup tinggi dibanding bengkel spesialis."
        ]
      }
    ],
    trafficPattern: {
      busyDays: ["Sabtu", "Senin Pagi", "Jumat"],
      peakHours: "08.00 - 11.00 WIB & 13.00 - 15.00 WIB",
      quietHours: "Rabu & Kamis (13.00 - 16.00 WIB)",
      hourlyDistribution: [
        { hour: "08:00", trafficLevel: 60, label: "Awal Buka Padat" },
        { hour: "09:00", trafficLevel: 95, label: "Puncak Registrasi" },
        { hour: "10:00", trafficLevel: 90, label: "Padat Penuh" },
        { hour: "11:00", trafficLevel: 75, label: "Sedang" },
        { hour: "12:00", trafficLevel: 50, label: "Makan Siang" },
        { hour: "13:00", trafficLevel: 82, label: "Gelombang II" },
        { hour: "14:00", trafficLevel: 78, label: "Sedang" },
        { hour: "15:00", trafficLevel: 55, label: "Pengambilan Mobil" },
        { hour: "16:00", trafficLevel: 30, label: "Penutupan" }
      ],
      summary: "Kepadatan tinggi terjadi pada hari Senin pagi (unit dinas/instansi) dan Sabtu pagi (kendaraan pribadi). Cabang Body & Paint mengalami bottleneck penumpukan unit di area pengerjaan dempul dan oven pengecatan.",
      recommendations: [
        "Implementasikan 'Real-Time Body & Paint Tracker' yang mengirimkan foto progres otomatis ke WA konsumen.",
        "Sediakan proteksi jok & stir transparan (seat/wheel cover) wajib untuk setiap mobil yang masuk pit pengerjaan."
      ]
    },
    socialSentiment: {
      overallPositivePercentage: 78,
      overallNeutralPercentage: 14,
      overallNegativePercentage: 8,
      channels: [
        {
          platform: "Instagram",
          mentionCount: 4200,
          sentimentScore: 85,
          viralTopics: ["Nasmoco World Promo", "Layanan Emergency Roadside Nasmoco"],
          recentHeadline: "Apresiasi tinggi pada kecepatan tim Emergency Nasmoco menolong mogok di jalan tol."
        },
        {
          platform: "TikTok",
          mentionCount: 2800,
          sentimentScore: 72,
          viralTopics: ["Review Fasilitas Nasmoco Pemuda", "Curhat Mobil Inden Part"],
          recentHeadline: "Konten kemewahan lounge Nasmoco Semarang disukai pengguna TikTok."
        },
        {
          platform: "YouTube",
          mentionCount: 1100,
          sentimentScore: 88,
          viralTopics: ["Vlog Penyerahan Mobil Baru", "Ulasan Servis Berkala Hybrid"],
          recentHeadline: "Ulasan kepuasan servis unit Innova Zenix Hybrid di Nasmoco Mlati."
        }
      ],
      viralComplaints: [
        "Postingan forum konsumen Semarang mengeluhkan lamanya waktu pengerjaan di Nasmoco Body & Paint Kaligawe."
      ],
      successfulCampaigns: [
        "Program 'Nasmoco Emergency Assistance 24 Jam' menjadi tolok ukur pelayanan terbaik di Jateng."
      ],
      publicPerceptionSummary: "Nasmoco dipandang sebagai pilihan utama pemeliharaan mobil Toyota berstandar tinggi di Jawa Tengah. Perbaikan mendesak berada pada lini bisnis Body & Paint Kaligawe."
    },
    strategicRecommendations: [
      {
        id: "rec-nas-1",
        priority: "Critical",
        category: "Operasional",
        title: "Implementasi Automated WhatsApp Progress Tracker untuk Body & Paint",
        description: "Bangun sistem pelacakan otomatis yang mengunggah foto progres tahap pengerjaan (Dempul, Oven, Polishing) langsung ke WhatsApp pemilik kendaraan secara berkala.",
        targetBranches: ["Nasmoco Kaligawe Body & Paint Semarang"],
        expectedImpact: "Menurunkan 80% pertanyaan dan komplain mengenai kejelasan durasi pengerjaan bodi."
      },
      {
        id: "rec-nas-2",
        priority: "High",
        category: "Pelatihan Staff",
        title: "SOP Kebersihan Interior & Final Quality Control Inspection",
        description: "Terapkan check-list wajib QC kebersihan interior (bebas minyak & debu amplas) sebelum kunci mobil diserahkan ke pelanggan.",
        targetBranches: ["Nasmoco Kaligawe Body & Paint Semarang", "Nasmoco Cilacap"],
        expectedImpact: "Eliminasi 100% ulasan negatif terkait kondisi mobil kotor pasca perbaikan."
      },
      {
        id: "rec-nas-3",
        priority: "High",
        category: "Inventaris & Transparansi",
        title: "Optimasi Hub Distribusi SparePart Regional Jateng",
        description: "Percepat sistem transfer antar-cabang untuk sparepart inden dan berikan kepastian tanggal estimasi barang tiba di cabang Cilacap & Magelang.",
        targetBranches: ["Nasmoco Cilacap", "Nasmoco Magelang"],
        expectedImpact: "Memotong durasi rata-rata inden sparepart dari 30 hari menjadi maksimal 10 hari kerja."
      }
    ]
  },

  "Shop & Drive": {
    brandName: "Shop & Drive (Astra Otoparts Retail Network)",
    analysisDate: "Agustus 2026",
    totalBranchesFound: 16,
    avgNetworkRating: 4.71,
    totalReviewsAnalyzed: 31200,
    executiveSummary: "Shop & Drive memegang posisi kepemimpinan yang sangat solid dalam segmen fast-service otomotif (penggantian aki, oli, shockbreaker, dan ban). Tingkat kepuasan umum mencapai 91% berkat kekuatan jaringan garansi resmi GS Astra dan layanan 'Home Delivery Battery' 24 jam. Titik kelemahan yang ditemukan berpusat pada keterbatasan area parkir beberapa outlet cabang kecil serta ketidaksesuaian stok tipe ban spesifik.",
    redFlagBranchIds: ["br-sd-11"],
    branches: [
      {
        id: "br-sd-1",
        name: "Shop & Drive Kelapa Gading Boulevard",
        city: "Jakarta Utara",
        rating: 4.9,
        reviewCount: 3820,
        status: "Top",
        positives: [
          "Layanan antar ganti aki ke rumah sangat cepat (kurang dari 30 menit)",
          "Garansi aki GS Astra berlaku di seluruh cabang Indonesia tanpa ribet",
          "Mekanik ramah, sigap, dan paham betul masalah kelistrikan mobil"
        ],
        negatives: [
          "Lahan parkir depan outlet hanya muat 3 mobil"
        ],
        complaintCount: 10,
        trendScore: "improving"
      },
      {
        id: "br-sd-2",
        name: "Super Shop & Drive Tebet",
        city: "Jakarta Selatan",
        rating: 4.8,
        reviewCount: 3100,
        status: "Top",
        positives: [
          "Fasilitas Super Shop & Drive lengkap dengan layanan penggantian ban dan spooring",
          "Ruang tunggu AC bersih dengan kopi gratis",
          "Transparansi harga promo oli Shell Helix sangat terjamin"
        ],
        negatives: [
          "Antrean spooring di jam sore cukup padat"
        ],
        complaintCount: 14,
        trendScore: "stable"
      },
      {
        id: "br-sd-11",
        name: "Shop & Drive Ciledug Tangerang",
        city: "Tangerang",
        rating: 4.3,
        reviewCount: 1420,
        status: "Attention Required",
        positives: [
          "Stok aki GS Astra selalu tersedia"
        ],
        negatives: [
          "Parkir meluber mengganggu lalu lintas jalan Ciledug Raya",
          "Mekanik terkesan tergesa-gesa saat mengencangkan baut roda",
          "Ruang tunggu sangat sempit dan panas saat siang hari",
          "Sikap kasir kurang ramah saat konsumen menanyakan detail garansi"
        ],
        complaintCount: 88,
        trendScore: "declining"
      }
    ],
    complaintCategories: [
      {
        category: "Keterbatasan Lahan Parkir & Akses Outlet",
        percentage: 45,
        count: 180,
        severity: "Medium",
        sampleQuotes: [
          "Parkir depan outlet cuma muat 2 mobil, terpaksa antre di bahu jalan."
        ]
      },
      {
        category: "Kenyamanan Ruang Tunggu Outlet Kecil",
        percentage: 25,
        count: 100,
        severity: "Low",
        sampleQuotes: [
          "Ruang tunggu kecil sekali hanya ada 3 kursi."
        ]
      },
      {
        category: "Ketidaksesuaian Stok Ban/Shockbreaker",
        percentage: 18,
        count: 72,
        severity: "Medium",
        sampleQuotes: [
          "Ukuran ban profil 185/65 R15 tipe tertentu sedang kosong."
        ]
      },
      {
        category: "Sikap Staff Front Office",
        percentage: 12,
        count: 48,
        severity: "Low",
        sampleQuotes: [
          "Kasir kurang responsif saat ditanya syarat klaim garansi aki."
        ]
      }
    ],
    trafficPattern: {
      busyDays: ["Sabtu", "Minggu", "Senin Pagi (Aki Mogok Kerja)"],
      peakHours: "08.00 - 11.00 WIB & 16.00 - 18.30 WIB",
      quietHours: "Rabu & Kamis (11.00 - 14.00 WIB)",
      hourlyDistribution: [
        { hour: "08:00", trafficLevel: 85, label: "Puncak Aki Mogok Pagi" },
        { hour: "10:00", trafficLevel: 70, label: "Sedang" },
        { hour: "12:00", trafficLevel: 40, label: "Lancar" },
        { hour: "14:00", trafficLevel: 55, label: "Sedang" },
        { hour: "16:00", trafficLevel: 88, label: "Puncak Pulang Kantor" },
        { hour: "18:00", trafficLevel: 75, label: "Padat" }
      ],
      summary: "Pola permintaan Shop & Drive memiliki karakter unik: lonjakan panggilan Home Delivery terjadi pada pukul 06.30 - 08.30 WIB (pemilik mobil hendak berangkat kerja namun aki soak). Sedangkan kunjungan fisik ke outlet memuncak pada Sabtu-Minggu.",
      recommendations: [
        "Prioritaskan armada motor kurir aki siap jalan pada jam 06.30 - 09.00 WIB.",
        "Sediakan 'Valet Parking Assistance' untuk outlet-outlet di koridor jalan padat."
      ]
    },
    socialSentiment: {
      overallPositivePercentage: 88,
      overallNeutralPercentage: 8,
      overallNegativePercentage: 4,
      channels: [
        {
          platform: "Instagram",
          mentionCount: 5100,
          sentimentScore: 92,
          viralTopics: ["Layanan Call Center 1500015", "Tukar Tambah Aki Bekas"],
          recentHeadline: "Apresiasi masif netizen atas penyelamatan aki mogok saat hujan deras."
        },
        {
          platform: "TikTok",
          mentionCount: 3400,
          sentimentScore: 84,
          viralTopics: ["Eksperimen Ketahanan Aki GS", "Ganti Oli Express"],
          recentHeadline: "Video edukasi cara membedakan aki asli vs palsu FYP di TikTok."
        }
      ],
      viralComplaints: [
        "Ulasan keluhan keterlambatan armada motor ganti aki saat banjir Jakarta."
      ],
      successfulCampaigns: [
        "Kampanye 'Shop & Drive Mobile App - Antar Aki 30 Menit Selesai' sukses besar memimpin pasar."
      ],
      publicPerceptionSummary: "Shop & Drive merupakan 'Top of Mind' masyarakat Indonesia untuk penggantian aki dan oli kilat. Reputasi merek sangat solid."
    },
    strategicRecommendations: [
      {
        id: "rec-sd-1",
        priority: "High",
        category: "Operasional",
        title: "Standarisasi SOP Keamanan Pengetatan Baut Roda pada Super Shop & Drive",
        description: "Sediakan kunci momen (torque wrench) wajib dan dua kali pengecekan (double check sign-off) oleh kepala mekanik untuk pengerjaan ban & shockbreaker.",
        targetBranches: ["Shop & Drive Ciledug Tangerang", "Seluruh Super Shop & Drive"],
        expectedImpact: "Menjamin 100% keamanan berkendara dan mencegah potensi kecelakaan akibat baut kurang kencang."
      },
      {
        id: "rec-sd-2",
        priority: "Medium",
        category: "Customer Experience",
        title: "Penataan Ulang Layout & Pendingin Udara Outlet Padat",
        description: "Lakukan penyegaran interior dan penambahan daya AC di outlet cabang Ciledug.",
        targetBranches: ["Shop & Drive Ciledug Tangerang"],
        expectedImpact: "Meningkatkan kenyamanan pelanggan di ruang tunggu."
      }
    ]
  }
};
