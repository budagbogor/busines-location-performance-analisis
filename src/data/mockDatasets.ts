import { FullIntelligenceReport } from "../types";

export const PRESET_DATASETS: Record<string, FullIntelligenceReport> = {
  "Mobeng": {
    brandName: "Mobeng (PT Surga Mobil Indonesia - Service, Tune-Up, Ban & Maintenance Specialist)",
    analysisDate: "Agustus 2026",
    totalBranchesFound: 31,
    avgNetworkRating: 4.72,
    totalReviewsAnalyzed: 9064,
    executiveSummary: "Berdasarkan pemetaan lokasi terverifikasi resmi (31 cabang aktif Mobeng - PT Surga Mobil Indonesia) di Jabodetabek, Bandung, Karawang, Malang, Surabaya, dan Sidoarjo (termasuk 11 cabang resmi Jawa Timur dari mobeng.id/lokasi-toko), Mobeng mengoperasikan 31 outlet resmi dengan reputasi pelanggan yang sangat tinggi (Rata-Rata Rating 4.83/5.0 dari 49.850+ ulasan Google Maps). Konsumen mengapresiasi transparansi estimasi biaya pendaftaran, kualitas Tune-Up Injection & Gurit Carbon Clean, serta fasilitas lounge ber-AC.",
    redFlagBranchIds: [],
    branches: [
      {
        id: "br-mobeng-bsd",
        name: "Mobeng BSD",
        city: "Tangerang Selatan",
        address: "Blok E 8 No. 12, Lengkong Gudang Tim., Jl. Letnan Sutopo, Kec. Serpong, Kota Tangerang Selatan, Banten 15310",
        rating: 4.6,
        reviewCount: 585,
        status: "Medium",
        positives: [
          "Peralatan Spooring & Balancing digital sangat akurat",
          "Pelayanan pendaftaran kasir cepat dan ramah"
        ],
        negatives: [
          "Waktu tunggu pengerjaan spooring balancing agak panjang di akhir pekan",
          "Kapasitas ruang tunggu terbatas saat jam sibuk siang hari"
        ],
        complaintCount: 2,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-karawaci",
        name: "Mobeng Karawaci",
        city: "Tangerang",
        address: "Jl. Imam Bonjol No.2, Karawaci, Kec. Karawaci, Kota Tangerang, Banten 15112",
        rating: 4.5,
        reviewCount: 249,
        status: "Medium",
        positives: [
          "Pilihan oli mesin sangat lengkap (Fully Synthetic & Semi-Synth)",
          "Ruang tunggu sangat nyaman dan bersih"
        ],
        negatives: [
          "Akses jalan Imam Bonjol padat saat jam pulang kantor",
          "Perlu tambahan bangku di area tunggu luar"
        ],
        complaintCount: 2,
        trendScore: "improving"
      },
      {
        id: "br-mobeng-cipondoh",
        name: "Mobeng Cipondoh",
        city: "Tangerang",
        address: "Jl. KH. Hasyim Ashari, RT.4/RW.009, Cipondoh, Kec. Tangerang, Kota Tangerang, Banten 15122",
        rating: 4.4,
        reviewCount: 312,
        status: "Medium",
        positives: [
          "Lokasi pinggir jalan strategis, pengerjaan cepat",
          "Mekanik ramah dan transparan menjelaskan kondisi komponen"
        ],
        negatives: [
          "Lalu lintas depan outlet Hasyim Ashari padat saat sore",
          "Area parkir depan agak rapat"
        ],
        complaintCount: 2,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-pondok-betung",
        name: "Mobeng Pondok Betung",
        city: "Tangerang Selatan",
        address: "Jl. Pd. Betung Raya, RT.01/RW.05, Pd. Betung, Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15221",
        rating: 4.7,
        reviewCount: 298,
        status: "Top",
        positives: [
          "Layanan tune up dan gurit mesin sangat memuaskan",
          "Ruang tunggu ber-AC dengan free coffee"
        ],
        negatives: [
          "Stok filter AC mobil tertentu kadang perlu inden 1-2 hari"
        ],
        complaintCount: 1,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-gading-serpong",
        name: "Mobeng Gading Serpong",
        city: "Tangerang",
        address: "Jl. Scientia Blvd No.12 Blok T, Medang, Kec. Pagedangan, Kabupaten Tangerang, Banten 15334",
        rating: 4.6,
        reviewCount: 380,
        status: "Medium",
        positives: [
          "Fasilitas pit modern, pengerjaan presisi",
          "Service advisor sangat informatif dan tidak memaksa penggantian part"
        ],
        negatives: [
          "Antrean hari Sabtu pagi cukup ramai",
          "Harga jasa servis kaki-kaki di atas rata-rata bengkel umum"
        ],
        complaintCount: 2,
        trendScore: "improving"
      },
      {
        id: "br-mobeng-harapan-indah",
        name: "Mobeng Harapan Indah",
        city: "Bekasi",
        address: "Sentra Bisnis, Jl Harapan Indah Raya, Pejuang, Medan Satria, Kota Bekasi, 17131",
        rating: 4.6,
        reviewCount: 427,
        status: "Medium",
        positives: [
          "Area bengkel luas dengan banyak pit servis paralel",
          "Service Advisor informatif memberikan saran perawatan berkala"
        ],
        negatives: [
          "Waktu pengerjaan saat jam makan siang agak lama",
          "Pilihan merk ban ukuran ring 17 terbatas"
        ],
        complaintCount: 2,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-jemursari",
        name: "Mobeng Jemursari",
        city: "Surabaya",
        address: "Jl. Raya Jemursari No.190, Kendangsari, Kec. Tenggilis Mejoyo, Surabaya, Jawa Timur 60239",
        latitude: -7.3212,
        longitude: 112.7412,
        rating: 4.7,
        reviewCount: 295,
        status: "Top",
        positives: [
          "Pusat perawatan langganan warga Surabaya Selatan",
          "Paket Tune-Up Carbon Clean transparan"
        ],
        negatives: [
          "Area parkir depan terbatas saat banyak mobil masuk bersamaan"
        ],
        complaintCount: 1,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-citraland",
        name: "Mobeng Citraland",
        city: "Surabaya",
        address: "Jl. Citra Raya Unesa, Lidah Kulon, Kec. Lakarsantri, Surabaya, Jawa Timur 60213",
        latitude: -7.3012,
        longitude: 112.6712,
        rating: 4.7,
        reviewCount: 365,
        status: "Top",
        positives: [
          "Lokasi strategis kawasan Citraland Surabaya Barat",
          "Peralatan servis ban lengkap"
        ],
        negatives: [
          "Biaya spooring balancing lebih tinggi dibanding bengkel biasa"
        ],
        complaintCount: 1,
        trendScore: "declining"
      },
      {
        id: "br-mobeng-cinere",
        name: "Mobeng Cinere",
        city: "Depok",
        address: "Jl Cinere Raya No 11A, Kecamatan Cinere, Kota Depok 16514",
        rating: 4.6,
        reviewCount: 410,
        status: "Medium",
        positives: [
          "Sangat membantu untuk pengerjaan ganti aki & cek kelistrikan cepat",
          "Harga paket promo oli mesin transparan tanpa biaya tersembunyi"
        ],
        negatives: [
          "Jalur Cinere Raya sering padat di jam pulang kerja",
          "Area tunggu outdoor perlu peneduh kanopi tambahan"
        ],
        complaintCount: 2,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-kupang",
        name: "Mobeng Kupang",
        city: "Surabaya",
        address: "Jl Raya Kupang Baru No 16, Sonokwijenan, Sukomanunggal, Surabaya 60198",
        rating: 4.7,
        reviewCount: 350,
        status: "Top",
        positives: [
          "Penanganan masalah mesin responsif dan tuntas",
          "Bengkel bersih dan tertata rapi"
        ],
        negatives: [
          "Antrean ganti aki dan tune up di hari Minggu cukup padat"
        ],
        complaintCount: 1,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-galuhmas",
        name: "Mobeng Galuhmas",
        city: "Karawang",
        address: "Jl Arteri Galuh Mas Blok XIB-2 No 5, RT 7/8, Paseurjaya, Telukjambe Timur, Kab. Karawang 41361",
        rating: 4.6,
        reviewCount: 310,
        status: "Medium",
        positives: [
          "Pilihan utama service & tune up area Karawang",
          "Paket oli murah dan pengerjaan mekanik teliti"
        ],
        negatives: [
          "Stok oli diesel tertentu kadang kosong"
        ],
        complaintCount: 1,
        trendScore: "improving"
      },
      {
        id: "br-mobeng-jababeka",
        name: "Mobeng Jababeka",
        city: "Bekasi",
        address: "Jl Dr. Cipto Mangunkusumo, Simpangan, Cikarang Utara, Kab. Bekasi 17530",
        rating: 4.7,
        reviewCount: 340,
        status: "Top",
        positives: [
          "Sangat membantu karyawan & profesional kawasan Cikarang",
          "Proses penggantian aki dan oli kilat"
        ],
        negatives: [
          "Akses jalan industri Cikarang berdebu saat siang hari"
        ],
        complaintCount: 1,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-kopo",
        name: "Mobeng Kopo",
        city: "Bandung",
        address: "Jl Terusan Kopo No 262 RT 06/06, Margahayu Selatan, Margahayu, Bandung 40921",
        rating: 4.5,
        reviewCount: 365,
        status: "Medium",
        positives: [
          "Layanan perawatan ramah dan profesional di Bandung",
          "Hasil spooring balancing presisi"
        ],
        negatives: [
          "Lalu lintas jalan Terusan Kopo sering macet",
          "Kapasitas stall servis penuh di akhir pekan"
        ],
        complaintCount: 2,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-sunter",
        name: "Mobeng Sunter",
        city: "Jakarta Utara",
        address: "Jl. Sunter Indah XV Blok KA 1 No 25 RT 002/012, Kelurahan Sunter Jaya, DKI Jakarta 14360",
        rating: 4.6,
        reviewCount: 520,
        status: "Medium",
        positives: [
          "Lokasi bersih dan ruang tunggu AC sangat nyaman",
          "Pemeriksaan 20 titik kendaraan detail"
        ],
        negatives: [
          "Waktu pengerjaan overhaul rem cukup memakan waktu"
        ],
        complaintCount: 1,
        trendScore: "improving"
      },
      {
        id: "br-mobeng-tole-iskandar",
        name: "Mobeng Tole Iskandar",
        city: "Depok",
        address: "Jl Tole Iskandar, Sukamaju, Cilodong, Kota Depok 16415",
        rating: 4.7,
        reviewCount: 490,
        status: "Top",
        positives: [
          "Pusat servis handal kawasan Tole Iskandar Depok",
          "Proses penggantian oli dan filter cepat"
        ],
        negatives: [
          "Parkir depan agak sempit saat hari Sabtu"
        ],
        complaintCount: 1,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-lenteng-agung",
        name: "Mobeng Lenteng Agung",
        city: "Jakarta Selatan",
        address: "Jl. Raya Lenteng Agung No 2, RT 02/03, Lenteng Agung, Jagakarsa, Jakarta Selatan 12610",
        rating: 4.6,
        reviewCount: 340,
        status: "Medium",
        positives: [
          "Akses gampang di jalur Lenteng Agung arah Depok/Jaksel",
          "Mekanik sigap & pengecekan komprehensif"
        ],
        negatives: [
          "Akses jalur lambat Lenteng Agung butuh kehati-hatian saat belok masuk"
        ],
        complaintCount: 1,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-mustika-jaya",
        name: "Mobeng Mustika Jaya",
        city: "Bekasi",
        address: "Jl Mustika Jaya No 13-54, RT 01/07, Mustika Jaya, Kota Bekasi 17158",
        rating: 4.7,
        reviewCount: 215,
        status: "Top",
        positives: [
          "Solusi praktis warga Mustika Jaya Bekasi",
          "Pelayanan pendaftaran kasir cepat"
        ],
        negatives: [
          "Penerangan plang nama bengkel malam hari perlu lebih terang"
        ],
        complaintCount: 1,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-jati-asih",
        name: "Mobeng Jati Asih",
        city: "Bekasi",
        address: "Jl Wibawa Mukti II No 2, RT 06/006, Jatiasih, Kota Bekasi 17422",
        rating: 4.6,
        reviewCount: 380,
        status: "Medium",
        positives: [
          "Penanganan perbaikan efisien dan estimasi biaya jelas",
          "Mekanik berpengalaman"
        ],
        negatives: [
          "Jalan Jatiasih padat saat sore hari"
        ],
        complaintCount: 1,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-merr",
        name: "Mobeng MERR",
        city: "Surabaya",
        address: "Jl. Dr. Ir. H. Soekarno, Semolowaru, Kec. Sukolilo, Surabaya, 60117",
        rating: 4.8,
        reviewCount: 260,
        status: "Top",
        positives: [
          "Lokasi sangat strategis di jalur MERR Surabaya Timur",
          "Peralatan gurit carbon clean & tune up tercanggih"
        ],
        negatives: [
          "Parkir mobil depan outlet padat pas jam makan siang"
        ],
        complaintCount: 1,
        trendScore: "improving"
      },
      {
        id: "br-mobeng-hankam",
        name: "Mobeng Hankam",
        city: "Bekasi",
        address: "Jl. Raya Hankam No.400, RT.004/RW.005, Jatimurni, Kec. Pd. Melati, Kota Bekasi, Jawa Barat 17341",
        rating: 4.8,
        reviewCount: 430,
        status: "Top",
        positives: [
          "Sangat strategis untuk warga Pondok Melati & Jatiwarna",
          "Pekerjaan rapi dan transparan"
        ],
        negatives: [
          "Antrean hari Sabtu sore cukup panjang"
        ],
        complaintCount: 1,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-cileungsi",
        name: "Mobeng Cileungsi",
        city: "Bogor",
        address: "Cileungsi Kidul, Cileungsi, Kab. Bogor, Jawa Barat 16820",
        rating: 4.5,
        reviewCount: 290,
        status: "Medium",
        positives: [
          "Pilihan utama service berkala area Cileungsi & Cibubur Selatan",
          "Mekanik cepat dan edukatif"
        ],
        negatives: [
          "Jalur Cileungsi kerap dilewati truk muatan berat"
        ],
        complaintCount: 1,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-duren-sawit",
        name: "Mobeng Duren Sawit",
        city: "Jakarta Timur",
        address: "Jl. Raya Kol. Sugiono No. 33, RT 003/012, Kel. Duren Sawit, Kec. Duren Sawit, Jakarta Timur, DKI Jakarta",
        rating: 4.9,
        reviewCount: 110,
        status: "Top",
        positives: [
          "Fasilitas gedung baru, sangat modern & bersih",
          "Promo pembukaan ganti oli + gurit mesin sangat menguntungkan"
        ],
        negatives: [
          "Waktu tunggu pendaftaran saat akhir pekan agak ramai"
        ],
        complaintCount: 1,
        trendScore: "improving"
      },
      {
        id: "br-mobeng-brigjen-katamso",
        name: "Mobeng Brigjen Katamso",
        city: "Sidoarjo",
        address: "Jl. Brigjend Katamso No.169, Wedoro, Kec. Waru, Kabupaten Sidoarjo, Jawa Timur 61256",
        latitude: -7.3512,
        longitude: 112.7543,
        rating: 5.0,
        reviewCount: 93,
        status: "Top",
        positives: [
          "Rating sempurna 5.0 di area Waru Sidoarjo",
          "Service Advisor sangat informatif dan profesional"
        ],
        negatives: [],
        complaintCount: 0,
        trendScore: "improving"
      },
      {
        id: "br-mobeng-mulyosari",
        name: "Mobeng Mulyosari",
        city: "Surabaya",
        address: "Jl. Raya Tempurejo No.63, Dukuh Sutorejo, Kec. Mulyorejo, Surabaya, Jawa Timur 60113",
        latitude: -7.2612,
        longitude: 112.7912,
        rating: 5.0,
        reviewCount: 85,
        status: "Top",
        positives: [
          "Rating sempurna 5.0 dari 119+ ulasan konsumen",
          "Mekanik teliti dan pendaftaran cepat"
        ],
        negatives: [],
        complaintCount: 0,
        trendScore: "improving"
      },
      {
        id: "br-mobeng-ahmad-yani-malang",
        name: "Mobeng Ahmad Yani",
        city: "Malang",
        address: "Jl. Ahmad Yani No.131, Purwodadi, Kec. Blimbing, Kota Malang, Jawa Timur 65126",
        latitude: -7.9432,
        longitude: 112.6512,
        rating: 4.7,
        reviewCount: 280,
        status: "Top",
        positives: [
          "Pelayanan ramah di area Malang",
          "Peralatan Spooring & Balancing presisi"
        ],
        negatives: [
          "Antrean ganti oli sore hari cukup padat"
        ],
        complaintCount: 1,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-cemengkalang",
        name: "Mobeng Cemengkalang",
        city: "Sidoarjo",
        address: "Jl. Raya Cemeng Kalang No.11A, RT.001/RW.001, Cemengkalang, Cemeng Kalang, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61234",
        latitude: -7.4512,
        longitude: 112.7012,
        rating: 5.0,
        reviewCount: 25,
        status: "Top",
        positives: [
          "Outlet baru fasilitas sangat bersih & modern",
          "Proses Tune-Up Injection cepat"
        ],
        negatives: [],
        complaintCount: 0,
        trendScore: "improving"
      },
      {
        id: "br-mobeng-kupang-surabaya",
        name: "Mobeng Kupang Surabaya",
        city: "Surabaya",
        address: "Jl. Raya Kupang Baru No.16, Sonokwijenan, Kec. Sukomanunggal, Surabaya, Jawa Timur 60196",
        latitude: -7.2812,
        longitude: 112.7112,
        rating: 4.7,
        reviewCount: 350,
        status: "Top",
        positives: [
          "Lokasi Surabaya Barat mudah dijangkau",
          "Hasil penggantian aki & oli memuaskan"
        ],
        negatives: [
          "Kapasitas tempat duduk ruang tunggu sedang"
        ],
        complaintCount: 1,
        trendScore: "stable"
      },
      {
        id: "br-mobeng-manukan",
        name: "Mobeng Manukan",
        city: "Surabaya",
        address: "Jl. Raya Sememi Jaya, RT.011/RW.001, Sememi, Kec. Benowo, Surabaya, Jawa Timur 60198",
        latitude: -7.2512,
        longitude: 112.6412,
        rating: 5.0,
        reviewCount: 45,
        status: "Top",
        positives: [
          "Servis sangat cepat dan mekanik informatif",
          "Ganti oli dan cek 20 titik gratis"
        ],
        negatives: [],
        complaintCount: 0,
        trendScore: "improving"
      },
      {
        id: "br-mobeng-merr-surabaya",
        name: "Mobeng Merr Surabaya",
        city: "Surabaya",
        address: "Jl. Dr. Ir. H. Soekarno, Semolowaru, Kec. Sukolilo, Surabaya, Jawa Timur 60117",
        latitude: -7.3012,
        longitude: 112.7812,
        rating: 4.8,
        reviewCount: 260,
        status: "Top",
        positives: [
          "Akses MERR Surabaya Timur sangat strategis",
          "Fasilitas lounge bersih dan nyaman",
          "Mekanik sangat teliti dan transparan menjelaskan kondisi oli & rem"
        ],
        negatives: [
          "Area parkir depan outlet penuh saat jam makan siang"
        ],
        recentReviews: [
          {
            id: "rev-merr-1",
            author: "Ahmad Rizky",
            rating: 5,
            date: "3 hari lalu",
            text: "Lokasi strategis di MERR Surabaya. Pelayanan ramah, mekanik jujur jelaskan kondisi sparepart.",
            sentiment: "positive",
            tags: ["Lokasi Strategis", "Mekanik Jujur"]
          },
          {
            id: "rev-merr-2",
            author: "Dewi Lestari",
            rating: 3,
            date: "1 minggu lalu",
            text: "Tempat parkir depan agak sempit saat datang jam makan siang, tapi pelayanan pendaftaran lumayan cepat.",
            sentiment: "negative",
            tags: ["Kapasitas Parkir", "Layanan Kasir"]
          },
          {
            id: "rev-merr-3",
            author: "Budi Santoso",
            rating: 3,
            date: "2 minggu lalu",
            text: "Antrean hari Sabtu cukup panjang untuk spooring balancing, sebaiknya booking pendaftaran dari pagi.",
            sentiment: "negative",
            tags: ["Waktu Tunggu", "Spooring Balancing"]
          },
          {
            id: "rev-merr-4",
            author: "Hendra Wijaya",
            rating: 4,
            date: "1 bulan lalu",
            text: "Respon WA pendaftaran saat jam sibuk sore agak lambat, tapi hasil pengerjaan tune up memuaskan.",
            sentiment: "neutral",
            tags: ["Respon WA", "Hasil Tune Up"]
          }
        ],
        complaintCount: 1,
        trendScore: "improving"
      },
      {
        id: "br-mobeng-pandegiling",
        name: "Mobeng Pandegiling",
        city: "Surabaya",
        address: "Jl. Pandegiling No.139, DR. Soetomo, Kec. Tegalsari, Surabaya, Jawa Timur 60264",
        latitude: -7.2754,
        longitude: 112.7381,
        rating: 4.9,
        reviewCount: 140,
        status: "Top",
        positives: [
          "Lokasi Surabaya Pusat strategis",
          "Pengerjaan ganti ban & balancing cepat"
        ],
        negatives: [
          "Jalur Pandegiling Surabaya padat saat jam sibuk sore"
        ],
        complaintCount: 1,
        trendScore: "improving"
      },
      {
        id: "br-mobeng-taman-waru",
        name: "Mobeng Taman Waru",
        city: "Sidoarjo",
        address: "Jl. Raya Taman No.29, Taman, Sepanjang, Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 60291",
        latitude: -7.3612,
        longitude: 112.6912,
        rating: 5.0,
        reviewCount: 65,
        status: "Top",
        positives: [
          "Sangat membantu warga Sepanjang & Taman Sidoarjo",
          "Estimasi nota jelas sebelum pengerjaan"
        ],
        negatives: [],
        complaintCount: 0,
        trendScore: "improving"
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
      peakHours: "10.00 - 13.00 WIB & 17.00 - 19.30 WIB",
      quietHours: "Selasa & Rabu (13.00 - 15.00 WIB)",
      hourlyDistribution: [
        { hour: "09:00", trafficLevel: 45, label: "Buka Toko" },
        { hour: "10:00", trafficLevel: 88, label: "Puncak Pagi" },
        { hour: "11:00", trafficLevel: 98, label: "Kapasitas Maksimal" },
        { hour: "12:00", trafficLevel: 55, label: "Istirahat Siang" },
        { hour: "13:00", trafficLevel: 85, label: "Gelombang Siang" },
        { hour: "14:00", trafficLevel: 92, label: "Padat Siang" },
        { hour: "15:00", trafficLevel: 65, label: "Sedang" },
        { hour: "16:00", trafficLevel: 72, label: "Persiapan Pulang Kantor" },
        { hour: "17:00", trafficLevel: 94, label: "Puncak Pulang Kantor" },
        { hour: "18:00", trafficLevel: 90, label: "Padat Malam" },
        { hour: "19:00", trafficLevel: 78, label: "Servis Malam Express" },
        { hour: "20:00", trafficLevel: 50, label: "Penutupan Pendaftaran" },
        { hour: "21:00", trafficLevel: 25, label: "Tutup Operasional" }
      ],
      summary: "Trafik pengunjung beroperasi penuh dari pukul 09.00 hingga 21.00 WIB, dengan lonjakan utama pada akhir pekan (pagi-siang) serta jam sepulang kerja (17.00 - 19.30 WIB) di mana pelanggan memanfaatkan waktu malam untuk perawatan mesin & ganti oli.",
      recommendations: [
        "Terapkan kuota booking digital jam presisi untuk menekan antrean di cabang dengan trafik tinggi saat weekend & malam hari.",
        "Buka Jalur Express Pit khusus pengerjaan ganti oli mesin di bawah 25 menit pada jam sibuk malam (17.00 - 20.00 WIB)."
      ]
    },
    socialSentiment: {
      overallPositivePercentage: 88,
      overallNeutralPercentage: 9,
      overallNegativePercentage: 3,
      channels: [
        {
          platform: "Threads",
          mentionCount: 3100,
          sentimentScore: 86,
          viralTopics: ["Threads Curhatan Servis Mobeng", "Rekomendasi Bengkel Transparan"],
          recentHeadline: "Threads perbincangan warganet memuji kecepatan servis ganti oli dan kebersihan lounge Mobeng."
        },
        {
          platform: "Facebook",
          mentionCount: 3850,
          sentimentScore: 87,
          viralTopics: ["Facebook Fanpage @mobeng.id", "Promo Paket Tune-Up & Oli", "Testimoni Pelanggan"],
          recentHeadline: "Halaman resmi Facebook Mobeng (@mobeng.id) aktif membagikan jadwal promo bulanan, tips perawatan aki, dan lokasi outlet terbaru."
        },
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
        },
        {
          platform: "YouTube",
          mentionCount: 1950,
          sentimentScore: 88,
          viralTopics: ["Vlog Pengerjaan Carbon Clean", "Review Layanan Mobeng"],
          recentHeadline: "Ulasan video pengerjaan gurit mesin dan penggantian ban di cabang Mobeng mendapat apresiasi konsumen."
        }
      ],
      viralComplaints: ["Beberapa komentar mengenai lamanya antrean di beberapa cabang favorit saat akhir pekan."],
      successfulCampaigns: ["Kampanye 'Mobeng Transparan & Bergaransi' di Facebook & IG sukses menarik perhatian pengguna mobil harian."],
      publicPerceptionSummary: "Mobeng dipandang sebagai jaringan bengkel modern yang dapat diandalkan dengan transparansi pengerjaan tinggi di media sosial (Facebook, Instagram, TikTok) serta harga bersaing dan mekanik yang ramah.",
      customerInquiries: [
        {
          id: "inq-mobeng-1",
          platform: "Threads",
          author: "RianHidayat_88",
          authorHandle: "@rian_mobengfan",
          targetBranch: "Mobeng BSD",
          date: "1 jam lalu",
          questionText: "Halo kak, kalau mau servis Tune-Up Injection + Gurit Carbon Clean di Mobeng BSD Sabtu besok perlu booking dari sekarang atau bisa langsung datang walk-in pagi jam 8?",
          category: "Booking & Slot",
          status: "Unanswered",
          suggestedAIResponse: "Halo Kak Rian! 👋 Di Mobeng BSD sangat disarankan booking via WhatsApp H-1 agar langsung mendapat kuota pit prioritas tanpa mengantre. Namun kami juga melayani walk-in mulai pukul 08:00 WIB dengan garansi transparansi pengerjaan. Ditunggu kedatangannya kak!"
        },
        {
          id: "inq-mobeng-2",
          platform: "Instagram",
          author: "Siti_Aisyah_Car",
          authorHandle: "@siti.carcare",
          targetBranch: "Mobeng Karawaci",
          date: "2 jam lalu",
          questionText: "Min, estimasi paket ganti oli mesin fully synthetic 4L + filter oli original untuk Avanza di Mobeng Karawaci kena berapa ya? Apakah masih ada promo gurit carbon clean gratis pengecekan?",
          category: "Harga & Promo",
          status: "Unanswered",
          suggestedAIResponse: "Halo Kak Siti! 🚗 Di Mobeng Karawaci, paket ganti oli Fully Synthetic (4L) + Filter Oli Original + Gratis 23 Titik Pengecekan Komponen berkisar Rp 380.000 - Rp 420.000. Tersedia diskon tambahan 10% jika booking hari ini via CS!"
        },
        {
          id: "inq-mobeng-3",
          platform: "TikTok",
          author: "BagasAutoFan",
          authorHandle: "@bagas_mobeng_vlog",
          targetBranch: "Mobeng Gading Serpong",
          date: "4 jam lalu",
          questionText: "Apakah pit Spooring 3D Digital di Mobeng Gading Serpong bisa untuk mobil velg ring 18 dan perendaman carbon clean injection?",
          category: "Stok Sparepart",
          status: "Responded",
          suggestedAIResponse: "Halo Kak Bagas! Ya betul, Mobeng Gading Serpong dilengkapi pit Spooring 3D Digital presisi tinggi untuk velg ring 14 hingga 20, serta perlengkapan Gurit Carbon Clean modern. Silakan mampir kak!"
        },
        {
          id: "inq-mobeng-4",
          platform: "Google Reviews",
          author: "Dedi Kurniawan",
          targetBranch: "Mobeng Cipondoh",
          date: "6 jam lalu",
          questionText: "Jam operasional Mobeng Cipondoh pas tanggal merah / libur nasional tetap buka jam berapa ya?",
          category: "Lokasi & Jam Buka",
          status: "Responded",
          suggestedAIResponse: "Halo Pak Dedi Kurniawan! Mobeng Cipondoh tetap buka penuh saat libur nasional mulai pukul 08:30 - 17:00 WIB. Ditunggu kedatangannya pak!"
        },
        {
          id: "inq-mobeng-5",
          platform: "Threads",
          author: "Fenny_Driver",
          authorHandle: "@fenny_driver",
          targetBranch: "Mobeng Pondok Betung",
          date: "1 hari lalu",
          questionText: "Kalo mau klaim garansi aki atau ganti oli di Mobeng Pondok Betung syaratnya apa aja ya min? Nota berapa bulan lalu hilang apakah tetep terdata di sistem?",
          category: "Layanan General",
          status: "Unanswered",
          suggestedAIResponse: "Halo Kak Fenny! Tidak perlu khawatir, seluruh riwayat servis di Mobeng Pondok Betung tersimpan secara digital berdasarkan nomor plat kendaraan / nomor HP. Kakak cukup sebutkan no plat saat pendaftaran di kasir!"
        }
      ]
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
    totalBranchesFound: 32,
    avgNetworkRating: 4.77,
    totalReviewsAnalyzed: 72890,
    executiveSummary: "B-Quik menunjukkan ekspansi & pertumbuhan reputasi bisnis yang sangat pesat di seluruh Indonesia dengan 32 cabang aktif terverifikasi yang tersebar di Jabodetabek, Jawa Barat, Jawa Tengah & DIY, Jawa Timur, Sumatra (Medan), Sulawesi (Makassar), dan Bali. Konsumen sangat menyukai konsep bengkel modern ber-AC penuh, transparansi pemeriksaan 30 titik gratis, garansi ban 1 tahun, serta promo cicilan 0%. Kritis: keluhan di cabang Karawaci mengenai saran pergantian kampas rem yang terkesan terlalu dini oleh teknisi.",
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
        id: "br-bquik-3",
        name: "B-Quik Cinere",
        city: "Depok",
        address: "Jl. Cinere Raya No. 45, Cinere, Kota Depok",
        rating: 4.8,
        reviewCount: 2650,
        status: "Top",
        positives: [
          "Pengerjaan penggantian aki cepat kurang dari 15 menit",
          "Lounge ber-AC sangat bersih dan ramah keluarga"
        ],
        negatives: [
          "Area parkir masuk agak sempit saat akhir pekan"
        ],
        complaintCount: 12,
        trendScore: "improving"
      },
      {
        id: "br-bquik-4",
        name: "B-Quik Bintaro Jaya",
        city: "Tangerang Selatan",
        address: "Jl. Bintaro Utama 9 Blok HB1 No. 8, Bintaro Sektor 9",
        rating: 4.9,
        reviewCount: 3100,
        status: "Top",
        positives: [
          "Mekanik sangat menguasai masalah suspensi & rem",
          "Transparansi rincian estimasi biaya sebelum servis"
        ],
        negatives: [
          "Jam sibuk siang hari tempat duduk ruang tunggu penuh"
        ],
        complaintCount: 11,
        trendScore: "improving"
      },
      {
        id: "br-bquik-5",
        name: "B-Quik Harapan Indah",
        city: "Bekasi",
        address: "Jl. Harapan Indah Boulevard No. 28, Pejuang, Medan Satria",
        rating: 4.8,
        reviewCount: 2420,
        status: "Top",
        positives: [
          "Pilihan merek ban lengkap dari Michelin, Bridgestone hingga Dunlop",
          "Garansi ban berlaku nasional di seluruh outlet B-Quik"
        ],
        negatives: [
          "Koneksi WiFi pengunjung sempat tidak stabil"
        ],
        complaintCount: 15,
        trendScore: "stable"
      },
      {
        id: "br-bquik-6",
        name: "B-Quik Gading Serpong",
        city: "Tangerang",
        address: "Jl. Gading Serpong Boulevard Blok AA3 No. 15",
        rating: 4.8,
        reviewCount: 2800,
        status: "Top",
        positives: [
          "Peralatan pit modern dengan lift hidrolik terbaru",
          "Service advisor ramah dan komunikatif"
        ],
        negatives: [
          "Antrean spooring weekend cukup panjang"
        ],
        complaintCount: 13,
        trendScore: "stable"
      },
      {
        id: "br-bquik-7",
        name: "B-Quik Cibubur Transyogi",
        city: "Bekasi",
        address: "Jl. Alternatif Cibubur Km 4 No. 88, Jatisampurna",
        rating: 4.7,
        reviewCount: 2150,
        status: "Top",
        positives: [
          "Buka setiap hari libur nasional",
          "Pemeriksaan rem dan shock absorber teliti"
        ],
        negatives: [
          "Akses keluar ke jalan utama padat pada jam pulang kerja"
        ],
        complaintCount: 18,
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
      },
      {
        id: "br-bquik-9",
        name: "B-Quik Sunter Raya",
        city: "Jakarta Utara",
        address: "Jl. Danau Sunter Utara Blok J12 No. 6",
        rating: 4.8,
        reviewCount: 2250,
        status: "Top",
        positives: [
          "Layanan cepat ganti oli & filter",
          "Ruang tunggu dingin dan nyaman"
        ],
        negatives: [
          "Stok oli spesifikasi khusus kadang habis"
        ],
        complaintCount: 14,
        trendScore: "stable"
      },
      {
        id: "br-bquik-10",
        name: "B-Quik Pluit",
        city: "Jakarta Utara",
        address: "Jl. Pluit Selatan Raya No. 10, Penjaringan",
        rating: 4.7,
        reviewCount: 1980,
        status: "Medium",
        positives: [
          "Teknisi paham penanganan mobil SUV & Crossover",
          "Diskon promo oli berkala"
        ],
        negatives: [
          "Waktu konfirmasi antrean kasir agak lama"
        ],
        complaintCount: 22,
        trendScore: "stable"
      },
      {
        id: "br-bquik-11",
        name: "B-Quik Puri Indah",
        city: "Jakarta Barat",
        address: "Jl. Puri Lingkar Luar No. 8, Kembangan Selatan",
        rating: 4.8,
        reviewCount: 2540,
        status: "Top",
        positives: [
          "Ruang tunggu luas dua lantai dengan view pit servis",
          "Teknisi transparan menunjukkan suku cadang lama"
        ],
        negatives: [
          "Parkiran depan terbatas saat weekend"
        ],
        complaintCount: 16,
        trendScore: "improving"
      },
      {
        id: "br-bquik-12",
        name: "B-Quik Kebon Jeruk",
        city: "Jakarta Barat",
        address: "Jl. Raya Pejuangan No. 3, Kebon Jeruk",
        rating: 4.7,
        reviewCount: 1890,
        status: "Medium",
        positives: [
          "Peralatan ganti ban otomatis bebas lecet velg",
          "Pemeriksaan aki gratis"
        ],
        negatives: [
          "Waktu tunggu pencucian ban setelah dipasang agak lama"
        ],
        complaintCount: 24,
        trendScore: "stable"
      },
      {
        id: "br-bquik-13",
        name: "B-Quik Rawamangun",
        city: "Jakarta Timur",
        address: "Jl. Pemuda No. 66, Rawamangun",
        rating: 4.8,
        reviewCount: 2050,
        status: "Top",
        positives: [
          "Pelayanan staf front office ramah dan sigap",
          "Persetujuan pengerjaan transparan via tablet digital"
        ],
        negatives: [
          "Layanan Spooring jam 12 siang mengantre"
        ],
        complaintCount: 15,
        trendScore: "stable"
      },
      {
        id: "br-bquik-14",
        name: "B-Quik Duren Sawit",
        city: "Jakarta Timur",
        address: "Jl. Raden Inten II No. 18, Duren Sawit",
        rating: 4.7,
        reviewCount: 1760,
        status: "Medium",
        positives: [
          "Bengkel terang dan bersih",
          "Pilihan ban lengkap bergaransi resmi"
        ],
        negatives: [
          "AC ruang tunggu kurang dingin saat cuaca terik"
        ],
        complaintCount: 20,
        trendScore: "stable"
      },
      {
        id: "br-bquik-15",
        name: "B-Quik Tebet Raya",
        city: "Jakarta Selatan",
        address: "Jl. Tebet Raya No. 82, Tebet Timur",
        rating: 4.8,
        reviewCount: 2380,
        status: "Top",
        positives: [
          "Lokasi strategis di pusat kota",
          "Pengerjaan tune-up injection halus dan bertenaga"
        ],
        negatives: [
          "Antrean pagi jam 09.00 sudah mulai mengular"
        ],
        complaintCount: 17,
        trendScore: "improving"
      },
      {
        id: "br-bquik-16",
        name: "B-Quik Cilandak Fatmawati",
        city: "Jakarta Selatan",
        address: "Jl. RS Fatmawati No. 15, Cilandak Barat",
        rating: 4.7,
        reviewCount: 2120,
        status: "Top",
        positives: [
          "Fasilitas lengkap dan mekanik bersertifikat",
          "Garansi pengerjaan 14 hari"
        ],
        negatives: [
          "Pintu keluar langsung ke jalur macet Fatmawati"
        ],
        complaintCount: 19,
        trendScore: "stable"
      },
      {
        id: "br-bquik-17",
        name: "B-Quik Margonda Depok",
        city: "Depok",
        address: "Jl. Margonda Raya No. 350, Kemirimuka, Beji",
        rating: 4.8,
        reviewCount: 1950,
        status: "Top",
        positives: [
          "Sangat cocok untuk servis rutin mahasiswa & warga Depok",
          "Pemeriksaan 30 titik menyeluruh"
        ],
        negatives: [
          "Area parkir lumayan ketat"
        ],
        complaintCount: 16,
        trendScore: "stable"
      },
      {
        id: "br-bquik-18",
        name: "B-Quik Pajajaran Bogor",
        city: "Bogor",
        address: "Jl. Raya Pajajaran No. 78, Baranangsiang, Bogor Timur",
        rating: 4.7,
        reviewCount: 1820,
        status: "Medium",
        positives: [
          "Bengkel terluas di area Bogor",
          "Petugas ramah dan penjelasan nota lengkap"
        ],
        negatives: [
          "Antrean hari Minggu cukup ramai oleh wisatawan"
        ],
        complaintCount: 21,
        trendScore: "stable"
      },
      {
        id: "br-bquik-19",
        name: "B-Quik Bandung Buah Batu",
        city: "Bandung",
        address: "Jl. Buah Batu No. 198, Cijagra, Lengkong",
        rating: 4.8,
        reviewCount: 2100,
        status: "Top",
        positives: [
          "Pusat layanan ban & spooring favorit warga Bandung Selatan",
          "Ruang tunggu dingin ber-AC dengan free coffee"
        ],
        negatives: [
          "Jalur Buah Batu cukup padat di jam pulang kantor"
        ],
        complaintCount: 13,
        trendScore: "improving"
      },
      {
        id: "br-bquik-20",
        name: "B-Quik Bandung Pasteur",
        city: "Bandung",
        address: "Jl. Dr. Djunjunan No. 115, Pajajaran, Cicendo",
        rating: 4.7,
        reviewCount: 1950,
        status: "Top",
        positives: [
          "Sangat dekat pintu tol Pasteur, cocok untuk pengerjaan mendadak",
          "Pemeriksaan 30 titik cepat dan detail"
        ],
        negatives: [
          "Area parkir agak terbatas saat akhir pekan"
        ],
        complaintCount: 16,
        trendScore: "stable"
      },
      {
        id: "br-bquik-21",
        name: "B-Quik Cirebon Sunyaragi",
        city: "Cirebon",
        address: "Jl. Brigjend Dharsono No. 45, Sunyaragi, Kesambi",
        rating: 4.7,
        reviewCount: 1450,
        status: "Medium",
        positives: [
          "Fasilitas pit servis paling modern di Cirebon",
          "Peralatan ganti ban otomatis bebas lecet velg"
        ],
        negatives: [
          "Stok ukuran ban mobil impor langka perlu inden 1 hari"
        ],
        complaintCount: 19,
        trendScore: "stable"
      },
      {
        id: "br-bquik-22",
        name: "B-Quik Semarang Pemuda",
        city: "Semarang",
        address: "Jl. Pemuda No. 128, Sekayu, Semarang Tengah",
        rating: 4.8,
        reviewCount: 2300,
        status: "Top",
        positives: [
          "Pusat ganti ban & tune up terpercaya pusat kota Semarang",
          "Service advisor jujur dan tidak maksa upsell"
        ],
        negatives: [
          "Antrean spooring hari Sabtu lumayan lama"
        ],
        complaintCount: 14,
        trendScore: "improving"
      },
      {
        id: "br-bquik-23",
        name: "B-Quik Semarang Majapahit",
        city: "Semarang",
        address: "Jl. Majapahit No. 280, Palebon, Pedurungan",
        rating: 4.7,
        reviewCount: 1780,
        status: "Medium",
        positives: [
          "Akses jalur arteri utama, pengerjaan ganti aki kilat",
          "Garansi pengerjaan 14 hari resmi"
        ],
        negatives: [
          "Ruang tunggu saat jam 12 siang terasa agak panas"
        ],
        complaintCount: 22,
        trendScore: "stable"
      },
      {
        id: "br-bquik-24",
        name: "B-Quik Solo Slamet Riyadi",
        city: "Solo",
        address: "Jl. Slamet Riyadi No. 340, Sriwedari, Laweyan",
        rating: 4.8,
        reviewCount: 1920,
        status: "Top",
        positives: [
          "Pelayanan sangat ramah khas Solo",
          "Hasil spooring 3D presisi tinggi"
        ],
        negatives: [
          "Ruang tunggu penuh saat jam istirahat siang"
        ],
        complaintCount: 12,
        trendScore: "stable"
      },
      {
        id: "br-bquik-25",
        name: "B-Quik Yogyakarta Magelang",
        city: "Yogyakarta",
        address: "Jl. Magelang Km 5.5 No. 88, Sinduadi, Mlati, Sleman",
        rating: 4.8,
        reviewCount: 2400,
        status: "Top",
        positives: [
          "Favorit mahasiswa & warga Jogja untuk cek 30 titik gratis",
          "Garansi ban ganti baru 1 tahun"
        ],
        negatives: [
          "Antrean weekend cukup panjang"
        ],
        complaintCount: 15,
        trendScore: "improving"
      },
      {
        id: "br-bquik-26",
        name: "B-Quik Surabaya MERR",
        city: "Surabaya",
        address: "Jl. Dr. Ir. H. Soekarno No. 88, Semolowaru, Sukolilo",
        rating: 4.9,
        reviewCount: 3150,
        status: "Top",
        positives: [
          "Fasilitas terbanyak dan terluas di Surabaya Timur",
          "Lounge tunggu VIP tingkat 2 sangat nyaman untuk kerja"
        ],
        negatives: [
          "Harga beberapa varian ban premium impor lumayan tinggi"
        ],
        complaintCount: 10,
        trendScore: "improving"
      },
      {
        id: "br-bquik-27",
        name: "B-Quik Surabaya HR Muhammad",
        city: "Surabaya",
        address: "Jl. HR. Muhammad No. 102, Pradahkalikidal, Dukuh Pakis",
        rating: 4.8,
        reviewCount: 2680,
        status: "Top",
        positives: [
          "Lokasi premium Surabaya Barat, pengerjaan sangat presisi",
          "Transparansi rincian estimasi di tablet digital"
        ],
        negatives: [
          "Lahan parkir depan agak padat jam makan siang"
        ],
        complaintCount: 14,
        trendScore: "stable"
      },
      {
        id: "br-bquik-28",
        name: "B-Quik Sidoarjo Ahmad Yani",
        city: "Sidoarjo",
        address: "Jl. Jend. Ahmad Yani No. 54, Sidokumpul, Sidoarjo",
        rating: 4.7,
        reviewCount: 1850,
        status: "Medium",
        positives: [
          "Teknisi terampil dan proses pergantian oli cepat",
          "Pemeriksaan kaki-kaki teliti"
        ],
        negatives: [
          "Waktu pemanggilan kasir agak lama"
        ],
        complaintCount: 20,
        trendScore: "stable"
      },
      {
        id: "br-bquik-29",
        name: "B-Quik Malang Soekarno Hatta",
        city: "Malang",
        address: "Jl. Soekarno Hatta No. 45, Jatimulyo, Lowokwaru",
        rating: 4.8,
        reviewCount: 2050,
        status: "Top",
        positives: [
          "Sangat diminati warga Kota Malang & wisatawan",
          "Pilihan merek ban lengkap untuk medan berbukit"
        ],
        negatives: [
          "Hari Minggu sore antrean servis lumayan mengular"
        ],
        complaintCount: 13,
        trendScore: "improving"
      },
      {
        id: "br-bquik-30",
        name: "B-Quik Medan Gatot Subroto",
        city: "Medan",
        address: "Jl. Gatot Subroto No. 180, Sei Sikambing D, Medan Petisah",
        rating: 4.8,
        reviewCount: 2500,
        status: "Top",
        positives: [
          "Cabang flagship B-Quik Sumatra dengan 8 pit servis paralel",
          "Layanan Spooring 3D Hunter presisi tinggi"
        ],
        negatives: [
          "Jalur Gatot Subroto kerap padat lalu lintas"
        ],
        complaintCount: 17,
        trendScore: "stable"
      },
      {
        id: "br-bquik-31",
        name: "B-Quik Makassar Pettarani",
        city: "Makassar",
        address: "Jl. AP. Pettarani No. 90, Buakana, Rappocini",
        rating: 4.7,
        reviewCount: 1920,
        status: "Medium",
        positives: [
          "Cabang utama Sulawesi, teknisi berpengalaman",
          "Pemeriksaan 30 titik gratis tanpa syarat"
        ],
        negatives: [
          "Pendingin udara lounge agak kurang dingin saat panas terik"
        ],
        complaintCount: 23,
        trendScore: "stable"
      },
      {
        id: "br-bquik-32",
        name: "B-Quik Bali Sunset Road",
        city: "Denpasar",
        address: "Jl. Sunset Road No. 108, Kuta, Badung, Bali",
        rating: 4.8,
        reviewCount: 2850,
        status: "Top",
        positives: [
          "Pelayanan standar internasional sangat disukai turis & ekspratriat",
          "Buka setiap hari sampai pukul 21.00 WITA"
        ],
        negatives: [
          "Waktu tunggu akhir pekan cukup ramai"
        ],
        complaintCount: 15,
        trendScore: "improving"
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
      busyDays: ["Sabtu", "Minggu", "Jumat SORE"],
      peakHours: "09.30 - 12.00 WIB & 16.30 - 19.30 WIB (Setiap Hari 08.00 - 21.00 WIB)",
      quietHours: "Senin & Selasa (13.00 - 15.00 WIB)",
      hourlyDistribution: [
        { hour: "08:00", trafficLevel: 48, label: "Buka Toko B-Quik (08.00 WIB)" },
        { hour: "09:00", trafficLevel: 72, label: "Gelombang Pagi B-Quik" },
        { hour: "10:00", trafficLevel: 94, label: "Puncak Pagi 30-Titik Pengecekan" },
        { hour: "11:00", trafficLevel: 88, label: "Kapasitas Maksimal" },
        { hour: "12:00", trafficLevel: 45, label: "Istirahat Siang" },
        { hour: "13:00", trafficLevel: 60, label: "Gelombang Siang" },
        { hour: "14:00", trafficLevel: 68, label: "Sedang" },
        { hour: "15:00", trafficLevel: 75, label: "Persiapan Sore" },
        { hour: "16:00", trafficLevel: 86, label: "Awal Sepulang Kerja" },
        { hour: "17:00", trafficLevel: 98, label: "Puncak Pulang Kerja & Garansi Ban" },
        { hour: "18:00", trafficLevel: 92, label: "Kapasitas Maksimal B-Quik" },
        { hour: "19:00", trafficLevel: 72, label: "Servis Malam Express" },
        { hour: "20:00", trafficLevel: 42, label: "Penutupan Kasir" },
        { hour: "21:00", trafficLevel: 18, label: "Tutup Operasional B-Quik" }
      ],
      summary: "Jam operasional B-Quik di seluruh cabang buka setiap hari pukul 08.00 hingga 21.00 WIB, memberikan fleksibilitas tinggi bagi pekerja kantoran & keluarga untuk perawatan kendaraan.",
      recommendations: [
        "Gunakan Sign-Off Digital Pengukuran Jangka Sorong (Vernier Caliper) untuk menunjukkan milimeter pasti tebal kampas rem ke konsumen.",
        "Optimalkan Jalur Express Pit khusus ganti ban & 30-titik pengecekan gratis pada jam sibuk 08.00 - 11.00 WIB."
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
    avgNetworkRating: 4.67,
    totalReviewsAnalyzed: 47470,
    executiveSummary: "Bengkel BOS (Bengkel Open Service) memegang ceruk pasar yang luas dalam penyediaan ban, velg, oli, dan tune-up dengan jaringan 22 outlet resmi di Jabodetabek, Jawa Barat, Jawa Tengah, dan Jawa Timur. Keunggulan utamanya adalah pilihan merek ban terlengkap (Bridgestone, Dunlop, Yokohama, Achilles, Giti) dengan harga bersaing. Titik perhatian utama berpusat pada peremajaan pendingin udara di ruang tunggu dan kerapihan pit area di beberapa cabang.",
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
        id: "br-bos-3",
        name: "Bengkel BOS Bintaro",
        city: "Tangerang Selatan",
        address: "Jl. Bintaro Utama 3 Blok AP No. 15",
        rating: 4.8,
        reviewCount: 2900,
        status: "Top",
        positives: [
          "Layanan cepat ganti oli & filter",
          "Mekanik informatif memberikan rekomendasi perawatan"
        ],
        negatives: [
          "Lahan parkir depan agak muat sedikit mobil"
        ],
        complaintCount: 12,
        trendScore: "improving"
      },
      {
        id: "br-bos-4",
        name: "Bengkel BOS BSD Serpong",
        city: "Tangerang Selatan",
        address: "Jl. Letnan Sutopo Blok C2 No. 8, BSD",
        rating: 4.8,
        reviewCount: 2750,
        status: "Top",
        positives: [
          "Peralatan balancing & spooring presisi",
          "Ruang tunggu bersih ber-AC"
        ],
        negatives: [
          "Harga wiper original sedikit lebih mahal"
        ],
        complaintCount: 14,
        trendScore: "stable"
      },
      {
        id: "br-bos-5",
        name: "Bengkel BOS Kelapa Gading",
        city: "Jakarta Utara",
        address: "Jl. Boulevard Raya Blok QJ No. 12",
        rating: 4.7,
        reviewCount: 2450,
        status: "Top",
        positives: [
          "Promo ganti ban bergaransi resmi",
          "Service advisor ramah dan cekatan"
        ],
        negatives: [
          "Antrean spooring weekend lumayan rame"
        ],
        complaintCount: 16,
        trendScore: "stable"
      },
      {
        id: "br-bos-6",
        name: "Bengkel BOS Larangan Ciledug",
        city: "Tangerang",
        address: "Jl. Ciledug Raya No. 88, Larangan",
        rating: 4.7,
        reviewCount: 2100,
        status: "Top",
        positives: [
          "Pengerjaan ganti aki & oli kilat",
          "Teknisi paham penanganan mobil matik"
        ],
        negatives: [
          "Akses jalan depan sering macet"
        ],
        complaintCount: 18,
        trendScore: "stable"
      },
      {
        id: "br-bos-7",
        name: "Bengkel BOS Pasar Minggu",
        city: "Jakarta Selatan",
        address: "Jl. Raya Pasar Minggu No. 45",
        rating: 4.8,
        reviewCount: 2600,
        status: "Top",
        positives: [
          "Bengkel terang dan bersih",
          "Pilihan oli terlengkap"
        ],
        negatives: [
          "Waktu pencucian ban agak lama"
        ],
        complaintCount: 13,
        trendScore: "improving"
      },
      {
        id: "br-bos-8",
        name: "Bengkel BOS Sawangan Depok",
        city: "Depok",
        address: "Jl. Raya Sawangan No. 102",
        rating: 4.6,
        reviewCount: 1850,
        status: "Medium",
        positives: [
          "Harga paket Tune-up terjangkau",
          "Garansi pengerjaan 14 hari"
        ],
        negatives: [
          "AC ruang tunggu kadang kurang dingin"
        ],
        complaintCount: 24,
        trendScore: "stable"
      },
      {
        id: "br-bos-9",
        name: "Bengkel BOS Narogong Bekasi",
        city: "Bekasi",
        address: "Jl. Raya Narogong Km 7 No. 18",
        rating: 4.7,
        reviewCount: 1980,
        status: "Medium",
        positives: [
          "Cocok untuk kendaraan niaga & pribadi",
          "Stok ban ukuran besar komplit"
        ],
        negatives: [
          "Debu luar jalanan Narogong lumayan masuk ke pit"
        ],
        complaintCount: 22,
        trendScore: "stable"
      },
      {
        id: "br-bos-10",
        name: "Bengkel BOS Cimanggis Depok",
        city: "Depok",
        address: "Jl. Raya Bogor Km 30, Cimanggis",
        rating: 4.6,
        reviewCount: 1720,
        status: "Medium",
        positives: [
          "Pemeriksaan kaki-kaki gratis",
          "Kasir & pendaftaran ramah"
        ],
        negatives: [
          "Slot pit hanya ada 4 bay"
        ],
        complaintCount: 25,
        trendScore: "stable"
      },
      {
        id: "br-bos-11",
        name: "Bengkel BOS Pondok Gede",
        city: "Bekasi",
        address: "Jl. Raya Jatiwaringin No. 56",
        rating: 4.7,
        reviewCount: 2050,
        status: "Medium",
        positives: [
          "Servis rutin terpercaya di Pondok Gede",
          "Pengecekan aki presisi"
        ],
        negatives: [
          "Antrean pagi mengular jam 9"
        ],
        complaintCount: 21,
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
          "Stok ban Bridgestone selalu ada"
        ],
        negatives: [
          "AC ruang tunggu rusak dan belum diganti",
          "Waktu pengerjaan molor 1 jam dari janji mekanik",
          "Kerataan hasil balancing kurang presisi pada kecepatan tinggi"
        ],
        complaintCount: 85,
        trendScore: "declining"
      },
      {
        id: "br-bos-13",
        name: "Bengkel BOS Cikarang",
        city: "Bekasi",
        address: "Jl. Cikarang Barat No. 88",
        rating: 4.7,
        reviewCount: 1890,
        status: "Medium",
        positives: [
          "Bantuan kilat masalah oli & aki karyawan kawasan",
          "Diskon oli member"
        ],
        negatives: [
          "Parkiran lumayan ramai siang"
        ],
        complaintCount: 19,
        trendScore: "stable"
      },
      {
        id: "br-bos-14",
        name: "Bengkel BOS Bandung Soekarno Hatta",
        city: "Bandung",
        address: "Jl. Soekarno Hatta No. 350, Bandung",
        rating: 4.7,
        reviewCount: 2150,
        status: "Top",
        positives: [
          "Bengkel terluas di Bandung",
          "Spooring 3D presisi tinggi"
        ],
        negatives: [
          "Akses tol jalur utama kerap padat"
        ],
        complaintCount: 17,
        trendScore: "improving"
      },
      {
        id: "br-bos-15",
        name: "Bengkel BOS Bandung Kopo",
        city: "Bandung",
        address: "Jl. Raya Kopo No. 210, Bandung",
        rating: 4.6,
        reviewCount: 1680,
        status: "Medium",
        positives: [
          "Layanan tune-up murah dan bergaransi",
          "Mekanik bersertifikat"
        ],
        negatives: [
          "Ruang tunggu agak terbatas"
        ],
        complaintCount: 26,
        trendScore: "stable"
      },
      {
        id: "br-bos-16",
        name: "Bengkel BOS Cirebon",
        city: "Cirebon",
        address: "Jl. Tuparev No. 88, Cirebon",
        rating: 4.6,
        reviewCount: 1420,
        status: "Medium",
        positives: [
          "Paket promo ban terlengkap di Cirebon",
          "Pengecekan 15 titik gratis"
        ],
        negatives: [
          "Inden ban impor khusus butuh 1-2 hari"
        ],
        complaintCount: 23,
        trendScore: "stable"
      },
      {
        id: "br-bos-17",
        name: "Bengkel BOS Semarang Majapahit",
        city: "Semarang",
        address: "Jl. Majapahit No. 180, Semarang",
        rating: 4.7,
        reviewCount: 1950,
        status: "Top",
        positives: [
          "Pelayanan cepat & mekanik jujur",
          "Ruang tunggu nyaman ber-AC"
        ],
        negatives: [
          "Antrean akhir pekan cukup tinggi"
        ],
        complaintCount: 18,
        trendScore: "improving"
      },
      {
        id: "br-bos-18",
        name: "Bengkel BOS Yogyakarta Magelang",
        city: "Yogyakarta",
        address: "Jl. Magelang Km 6 No. 45, Sleman",
        rating: 4.7,
        reviewCount: 2100,
        status: "Top",
        positives: [
          "Favorit warga & mahasiswa Jogja",
          "Promo ganti oli murah berkala"
        ],
        negatives: [
          "Waktu antrean siang lumayan"
        ],
        complaintCount: 15,
        trendScore: "stable"
      },
      {
        id: "br-bos-19",
        name: "Bengkel BOS Surabaya MERR",
        city: "Surabaya",
        address: "Jl. Dr. Ir. H. Soekarno No. 102, Surabaya",
        rating: 4.8,
        reviewCount: 2650,
        status: "Top",
        positives: [
          "Fasilitas lengkap dengan 6 bay servis",
          "Mekanik terampil menangani spooring 3D"
        ],
        negatives: [
          "Tempat duduk ruang tunggu penuh jam 11"
        ],
        complaintCount: 14,
        trendScore: "improving"
      },
      {
        id: "br-bos-20",
        name: "Bengkel BOS Surabaya Wiyung",
        city: "Surabaya",
        address: "Jl. Raya Menganti Wiyung No. 48",
        rating: 4.7,
        reviewCount: 1890,
        status: "Medium",
        positives: [
          "Pusat ganti ban Surabaya Barat",
          "Penggantian aki kilat bergaransi"
        ],
        negatives: [
          "Parkiran depan agak sempit"
        ],
        complaintCount: 20,
        trendScore: "stable"
      },
      {
        id: "br-bos-21",
        name: "Bengkel BOS Sidoarjo",
        city: "Sidoarjo",
        address: "Jl. Jend. Sudirman No. 78, Sidoarjo",
        rating: 4.6,
        reviewCount: 1540,
        status: "Medium",
        positives: [
          "Stok ban lokal ekonomis terlengkap",
          "Pemeriksaan kaki-kaki gratis"
        ],
        negatives: [
          "AC ruang tunggu perlu perawatan"
        ],
        complaintCount: 27,
        trendScore: "stable"
      },
      {
        id: "br-bos-22",
        name: "Bengkel BOS Malang",
        city: "Malang",
        address: "Jl. Letjend Sutoyo No. 88, Malang",
        rating: 4.7,
        reviewCount: 1780,
        status: "Medium",
        positives: [
          "Layanan ramah dan penjelasan transparan",
          "Hasil spooring balancing memuaskan"
        ],
        negatives: [
          "Antrean hari Minggu sore padat"
        ],
        complaintCount: 19,
        trendScore: "stable"
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
      },
      {
        id: "br-astra-11",
        name: "Astra Otoservice Sunter Utara",
        city: "Jakarta Utara",
        address: "Jl. Danau Sunter Utara Blok O2 No. 12",
        rating: 4.8,
        reviewCount: 2100,
        status: "Top",
        positives: [
          "Fasilitas ruang tunggu eksekutif ber-AC",
          "Pemeriksaan 18 titik komponen standar Astra presisi"
        ],
        negatives: [
          "Parkir depan outlet penuh jam 12 siang"
        ],
        complaintCount: 14,
        trendScore: "improving"
      },
      {
        id: "br-astra-12",
        name: "Astra Otoservice Cilandak Fatmawati",
        city: "Jakarta Selatan",
        address: "Jl. RS Fatmawati No. 88, Cilandak",
        rating: 4.7,
        reviewCount: 1950,
        status: "Top",
        positives: [
          "Servis cepat Express Maintenance",
          "Pelayanan SA ramah dan garansi resmi Astra"
        ],
        negatives: [
          "Keluar bengkel harus hati-hati karena macet Fatmawati"
        ],
        complaintCount: 16,
        trendScore: "stable"
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



  "Shop & Drive": {
    brandName: "Shop & Drive (Astra Otoparts Retail Network)",
    analysisDate: "Agustus 2026",
    totalBranchesFound: 30,
    avgNetworkRating: 4.81,
    totalReviewsAnalyzed: 78500,
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
        id: "br-sd-3",
        name: "Super Shop & Drive BSD City",
        city: "Tangerang Selatan",
        address: "Jl. BSD Grand Boulevard No. 15",
        rating: 4.9,
        reviewCount: 3450,
        status: "Top",
        positives: [
          "Layanan cepat ganti aki GS Astra & garansi nasional 18 bulan",
          "Pilihan ban Michelin & Bridgestone terlengkap",
          "Spooring 3D presisi tinggi"
        ],
        negatives: [
          "Harga aki premium relatif tinggi dibanding toko umum"
        ],
        complaintCount: 11,
        trendScore: "improving"
      },
      {
        id: "br-sd-4",
        name: "Shop & Drive Bintaro Utama",
        city: "Tangerang Selatan",
        address: "Jl. Bintaro Utama 9 Blok HB2 No. 6",
        rating: 4.8,
        reviewCount: 2890,
        status: "Top",
        positives: [
          "Layanan Home Delivery penggantian aki kilat 24 jam",
          "Mekanik jujur dan komunikatif"
        ],
        negatives: [
          "Parkiran depan muat 3 mobil"
        ],
        complaintCount: 12,
        trendScore: "stable"
      },
      {
        id: "br-sd-5",
        name: "Super Shop & Drive Harapan Indah",
        city: "Bekasi",
        address: "Jl. Harapan Indah Boulevard No. 30",
        rating: 4.8,
        reviewCount: 2650,
        status: "Top",
        positives: [
          "Pit servis luas dan alat ganti ban canggih",
          "Ruang tunggu AC dingin dengan free snack"
        ],
        negatives: [
          "Jam sibuk weekend cukup antre"
        ],
        complaintCount: 15,
        trendScore: "improving"
      },
      {
        id: "br-sd-6",
        name: "Shop & Drive Cinere Raya",
        city: "Depok",
        address: "Jl. Cinere Raya No. 88, Depok",
        rating: 4.8,
        reviewCount: 2420,
        status: "Top",
        positives: [
          "Pengecekan kelistrikan & aki gratis",
          "Proses penggantian oli cepat"
        ],
        negatives: [
          "Akses masuk dari jalan raya ramai"
        ],
        complaintCount: 13,
        trendScore: "stable"
      },
      {
        id: "br-sd-7",
        name: "Shop & Drive Sunter Danau",
        city: "Jakarta Utara",
        address: "Jl. Danau Sunter Utara Blok F2 No. 8",
        rating: 4.7,
        reviewCount: 2150,
        status: "Top",
        positives: [
          "Pelayanan staf ramah",
          "Garansi aki berlaku nasional"
        ],
        negatives: [
          "Ruang tunggu agak terbatas"
        ],
        complaintCount: 17,
        trendScore: "stable"
      },
      {
        id: "br-sd-8",
        name: "Super Shop & Drive Bandung Dago",
        city: "Bandung",
        address: "Jl. Ir. H. Juanda No. 185, Dago, Bandung",
        rating: 4.8,
        reviewCount: 2780,
        status: "Top",
        positives: [
          "Pusat layanan penggantian aki & ban favorit di Bandung",
          "Lounge eksekutif ber-AC"
        ],
        negatives: [
          "Jalur Dago ramai pada akhir pekan"
        ],
        complaintCount: 14,
        trendScore: "improving"
      },
      {
        id: "br-sd-9",
        name: "Shop & Drive Semarang Pemuda",
        city: "Semarang",
        address: "Jl. Pemuda No. 102, Semarang",
        rating: 4.7,
        reviewCount: 1980,
        status: "Medium",
        positives: [
          "Pengerjaan rapi dan mekanik bersertifikat",
          "Garansi resmi Astra Otoparts"
        ],
        negatives: [
          "Koneksi WiFi ruang tunggu kadang lambat"
        ],
        complaintCount: 19,
        trendScore: "stable"
      },
      {
        id: "br-sd-10",
        name: "Super Shop & Drive Yogyakarta Gejayan",
        city: "Yogyakarta",
        address: "Jl. Gejayan No. 45, Sleman, DIY",
        rating: 4.8,
        reviewCount: 2540,
        status: "Top",
        positives: [
          "Layanan ramah dan transparan",
          "Spooring 3D Hunter sangat presisi"
        ],
        negatives: [
          "Antrean sore jam 4 ramai"
        ],
        complaintCount: 13,
        trendScore: "improving"
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
      },
      {
        id: "br-sd-12",
        name: "Super Shop & Drive Surabaya Gubeng",
        city: "Surabaya",
        address: "Jl. Gubeng Raya No. 66, Surabaya",
        rating: 4.9,
        reviewCount: 3250,
        status: "Top",
        positives: [
          "Flagship outlet Jawa Timur, fasilitas paling lengkap",
          "Layanan ganti aki kilat 15 menit & garansi langsung aktif"
        ],
        negatives: [
          "Parkiran depan padat jam makan siang"
        ],
        complaintCount: 10,
        trendScore: "improving"
      },
      {
        id: "br-sd-13",
        name: "Shop & Drive Surabaya HR Muhammad",
        city: "Surabaya",
        address: "Jl. HR. Muhammad No. 88, Surabaya Barat",
        rating: 4.8,
        reviewCount: 2680,
        status: "Top",
        positives: [
          "Penanganan aki & oli presisi",
          "Kasir & pendaftaran serba digital"
        ],
        negatives: [
          "Harga promo ban cepat habis stoknya"
        ],
        complaintCount: 15,
        trendScore: "stable"
      },
      {
        id: "br-sd-14",
        name: "Shop & Drive Malang Ijen",
        city: "Malang",
        address: "Jl. Besar Ijen No. 42, Malang",
        rating: 4.8,
        reviewCount: 1950,
        status: "Top",
        positives: [
          "Bengkel bersih di kawasan ijen",
          "Mekanik ramah dan cekatan"
        ],
        negatives: [
          "Jam operasional Sabtu sore penuh"
        ],
        complaintCount: 14,
        trendScore: "stable"
      },
      {
        id: "br-sd-15",
        name: "Super Shop & Drive Medan Amir Hamzah",
        city: "Medan",
        address: "Jl. Tengku Amir Hamzah No. 55, Medan",
        rating: 4.8,
        reviewCount: 2400,
        status: "Top",
        positives: [
          "Outlet Super terbesar di Sumatra",
          "Pilihan aki & shockbreaker Kayaba terlengkap"
        ],
        negatives: [
          "Jalur depan ramai kendaraan"
        ],
        complaintCount: 16,
        trendScore: "improving"
      },
      {
        id: "br-sd-16",
        name: "Super Shop & Drive Bali Sunset Road",
        city: "Denpasar",
        address: "Jl. Sunset Road No. 88, Kuta, Bali",
        rating: 4.8,
        reviewCount: 2750,
        status: "Top",
        positives: [
          "Standar pelayanan internasional disukai turis & ekspratriat",
          "Layanan ganti aki antar 24 jam di Bali"
        ],
        negatives: [
          "Waktu tunggu weekend lumayan ramai"
        ],
        complaintCount: 13,
        trendScore: "improving"
      },
      {
        id: "br-sd-17",
        name: "Shop & Drive Kemang Raya",
        city: "Jakarta Selatan",
        address: "Jl. Kemang Raya No. 45, Jakarta Selatan",
        rating: 4.9,
        reviewCount: 3200,
        status: "Top",
        positives: [
          "Layanan Home Delivery penggantian aki super cepat",
          "Mekanik sangat berpengalaman & ramah"
        ],
        negatives: [
          "Jalur Kemang ramai saat sore hari"
        ],
        complaintCount: 8,
        trendScore: "improving"
      },
      {
        id: "br-sd-18",
        name: "Shop & Drive Rawamangun",
        city: "Jakarta Timur",
        address: "Jl. Pemuda No. 66, Rawamangun, Jakarta Timur",
        rating: 4.8,
        reviewCount: 2950,
        status: "Top",
        positives: [
          "Pemeriksaan kelistrikan & aki gratis 18 titik",
          "Stok aki GS Astra Hybrid & Maintenance Free lengkap"
        ],
        negatives: [
          "Kapasitas parkir depan sedang"
        ],
        complaintCount: 11,
        trendScore: "stable"
      },
      {
        id: "br-sd-19",
        name: "Super Shop & Drive Puri Indah",
        city: "Jakarta Barat",
        address: "Jl. Puri Indah Raya Blok A3 No. 12, Jakarta Barat",
        rating: 4.9,
        reviewCount: 3500,
        status: "Top",
        positives: [
          "Fasilitas Super lengkap dengan spooring 3D Hunter presisi",
          "Lounge tunggu eksklusif ber-AC dingin"
        ],
        negatives: [
          "Antrean spooring weekend cukup padat"
        ],
        complaintCount: 9,
        trendScore: "improving"
      },
      {
        id: "br-sd-20",
        name: "Shop & Drive Bogor Pajajaran",
        city: "Bogor",
        address: "Jl. Raya Pajajaran No. 88, Bogor Timur",
        rating: 4.8,
        reviewCount: 2780,
        status: "Top",
        positives: [
          "Respon cepat panggilan penggantian aki antar daerah Bogor",
          "Garansi resmi Astra Otoparts valid nasional"
        ],
        negatives: [
          "Parkir depan meluber jika hujan lebat"
        ],
        complaintCount: 12,
        trendScore: "stable"
      },
      {
        id: "br-sd-21",
        name: "Shop & Drive Bandung Soekarno Hatta",
        city: "Bandung",
        address: "Jl. Soekarno Hatta No. 420, Bandung",
        rating: 4.7,
        reviewCount: 2450,
        status: "Top",
        positives: [
          "Akses jalur utama Bandung Selatan sangat strategis",
          "Proses ganti oli Shell & Mobil1 presisi"
        ],
        negatives: [
          "Lalu lintas depan outlet cukup padat jam kerja"
        ],
        complaintCount: 15,
        trendScore: "stable"
      },
      {
        id: "br-sd-22",
        name: "Shop & Drive Solo Slamet Riyadi",
        city: "Surakarta",
        address: "Jl. Slamet Riyadi No. 210, Surakarta",
        rating: 4.8,
        reviewCount: 2100,
        status: "Top",
        positives: [
          "Pelayanan ramah khas Solo",
          "Cek kesehatan aki & alternator gratis"
        ],
        negatives: [
          "Area tunggu agak terbatas"
        ],
        complaintCount: 10,
        trendScore: "improving"
      },
      {
        id: "br-sd-23",
        name: "Shop & Drive Surabaya Mayjend Sungkono",
        city: "Surabaya",
        address: "Jl. Mayjend Sungkono No. 102, Surabaya",
        rating: 4.9,
        reviewCount: 3100,
        status: "Top",
        positives: [
          "Layanan fast track penggantian aki 15 menit",
          "Mekanik bersertifikat Astra"
        ],
        negatives: [
          "Jam makan siang antrean cukup ramai"
        ],
        complaintCount: 8,
        trendScore: "improving"
      },
      {
        id: "br-sd-24",
        name: "Shop & Drive Sidoarjo Ahmad Yani",
        city: "Sidoarjo",
        address: "Jl. A. Yani No. 55, Sidoarjo",
        rating: 4.8,
        reviewCount: 1980,
        status: "Top",
        positives: [
          "Lokasi strategis di pusat kota Sidoarjo",
          "Garansi aki GS Astra tanpa kendala"
        ],
        negatives: [
          "Lahan parkir muat 4 mobil"
        ],
        complaintCount: 13,
        trendScore: "stable"
      },
      {
        id: "br-sd-25",
        name: "Shop & Drive Palembang R. Sukamto",
        city: "Palembang",
        address: "Jl. R. Sukamto No. 88, Palembang",
        rating: 4.8,
        reviewCount: 2300,
        status: "Top",
        positives: [
          "Pusat layanan aki & oli terfavorit di Palembang",
          "Layanan antar aki 24 jam responsif"
        ],
        negatives: [
          "Cuaca panas siang hari di ruang tunggu luar"
        ],
        complaintCount: 11,
        trendScore: "improving"
      },
      {
        id: "br-sd-26",
        name: "Shop & Drive Makassar Pettarani",
        city: "Makassar",
        address: "Jl. AP Pettarani No. 45, Makassar",
        rating: 4.8,
        reviewCount: 2600,
        status: "Top",
        positives: [
          "Flagship outlet Sulawesi dengan pilihan ban Dunlop & Bridgestone",
          "Mekanik sigap & informatif"
        ],
        negatives: [
          "Akses U-turn jalan Pettarani lumayan jauh"
        ],
        complaintCount: 14,
        trendScore: "stable"
      },
      {
        id: "br-sd-27",
        name: "Super Shop & Drive Balikpapan Sudirman",
        city: "Balikpapan",
        address: "Jl. Jendral Sudirman No. 120, Balikpapan",
        rating: 4.9,
        reviewCount: 2850,
        status: "Top",
        positives: [
          "Outlet Super terlengkap di Kalimantan Timur",
          "Peralatan spooring & balancing canggih"
        ],
        negatives: [
          "Harga aki kualifikasi heavy duty sesuai standar industri"
        ],
        complaintCount: 9,
        trendScore: "improving"
      },
      {
        id: "br-sd-28",
        name: "Shop & Drive Denpasar Teuku Umar",
        city: "Denpasar",
        address: "Jl. Teuku Umar No. 150, Denpasar, Bali",
        rating: 4.8,
        reviewCount: 2400,
        status: "Top",
        positives: [
          "Layanan panggilan aki cepat untuk area Denpasar",
          "Ruang tunggu bersih dan ber-AC"
        ],
        negatives: [
          "Lalu lintas Teuku Umar ramai"
        ],
        complaintCount: 12,
        trendScore: "stable"
      },
      {
        id: "br-sd-29",
        name: "Shop & Drive Karawang Galuh Mas",
        city: "Karawang",
        address: "Jl. Galuh Mas Raya No. 18, Karawang",
        rating: 4.7,
        reviewCount: 1850,
        status: "Top",
        positives: [
          "Sangat membantu pekerja kawasan industri Karawang",
          "Garansi aki nasional Astra valid"
        ],
        negatives: [
          "Jam pulang pabrik antrean servis meningkat"
        ],
        complaintCount: 16,
        trendScore: "stable"
      },
      {
        id: "br-sd-30",
        name: "Super Shop & Drive Serpong Raya",
        city: "Tangerang",
        address: "Jl. Raya Serpong Km 7 No. 88, Tangerang",
        rating: 4.9,
        reviewCount: 3300,
        status: "Top",
        positives: [
          "Layanan Super Shop & Drive dengan 6 pit pengerjaan",
          "Spooring 3D presisi & penggantian shockbreaker Kayaba"
        ],
        negatives: [
          "Weekend sore antrean cukup panjang"
        ],
        complaintCount: 10,
        trendScore: "improving"
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
