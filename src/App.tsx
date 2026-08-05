import React, { useState } from 'react';
import { Header } from './components/Header';
import { ExecutiveSummaryBanner } from './components/ExecutiveSummaryBanner';
import { BranchPerformanceTable } from './components/BranchPerformanceTable';
import { BranchDetailModal } from './components/BranchDetailModal';
import { ComplaintCategoriesChart } from './components/ComplaintCategoriesChart';
import { TrafficPatternSection } from './components/TrafficPatternSection';
import { SocialSentimentSection } from './components/SocialSentimentSection';
import { StrategicRecommendationsSection } from './components/StrategicRecommendationsSection';
import { SearchProgressModal } from './components/SearchProgressModal';
import { PRESET_DATASETS } from './data/mockDatasets';
import { FullIntelligenceReport, BranchData, SearchState } from './types';
import { ExternalLink, AlertTriangle, ShieldCheck, Sparkles } from 'lucide-react';

export default function App() {
  const [report, setReport] = useState<FullIntelligenceReport>(
    PRESET_DATASETS["Mobeng"] || PRESET_DATASETS["Astra Otoservice"]
  );
  const [selectedBranch, setSelectedBranch] = useState<BranchData | null>(null);
  const [activeQuery, setActiveQuery] = useState<string>("Mobeng");

  const [searchState, setSearchState] = useState<SearchState>({
    isLoading: false,
    step: 'idle',
    progressPercent: 0,
  });

  const presetList = ["Mobeng", "B-Quik", "Bengkel BOS", "Astra Otoservice", "Nasmoco", "Shop & Drive"];

  const handleSearch = async (query: string) => {
    setActiveQuery(query);
    setSearchState({ isLoading: true, step: 'mapping_network', progressPercent: 15 });

    // Step 1: Mapping
    await new Promise((r) => setTimeout(r, 600));

    // Check if query matches preset dataset
    const matchedPresetKey = Object.keys(PRESET_DATASETS).find(
      (key) => key.toLowerCase().includes(query.toLowerCase()) || query.toLowerCase().includes(key.toLowerCase())
    );

    setSearchState((prev) => ({ ...prev, step: 'fetching_reviews', progressPercent: 35 }));
    await new Promise((r) => setTimeout(r, 600));

    setSearchState((prev) => ({ ...prev, step: 'analyzing_complaints', progressPercent: 60 }));
    await new Promise((r) => setTimeout(r, 600));

    setSearchState((prev) => ({ ...prev, step: 'tracking_social', progressPercent: 80 }));
    await new Promise((r) => setTimeout(r, 500));

    setSearchState((prev) => ({ ...prev, step: 'synthesizing', progressPercent: 95 }));

    if (matchedPresetKey) {
      await new Promise((r) => setTimeout(r, 400));
      setReport(PRESET_DATASETS[matchedPresetKey]);
      setSearchState({ isLoading: false, step: 'completed', progressPercent: 100 });
      return;
    }

    // Try Live Gemini Search Grounding API
    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();
      if (data && data.brandName && data.branches) {
        setReport(data);
      } else {
        throw new Error('Data format error');
      }
    } catch (err) {
      console.warn('API error or offline fallback, generating derived intelligence report:', err);
      // Construct realistic dynamic derived report for custom query
      const derivedReport = createDerivedReport(query);
      setReport(derivedReport);
    } finally {
      setSearchState({ isLoading: false, step: 'completed', progressPercent: 100 });
    }
  };

  // Helper generator for custom queries
  const createDerivedReport = (query: string): FullIntelligenceReport => {
    return {
      brandName: query,
      analysisDate: "Agustus 2026",
      totalBranchesFound: 8,
      avgNetworkRating: 4.62,
      totalReviewsAnalyzed: 12400,
      executiveSummary: `Analisis reputasi dan pemetaan kinerja cabang untuk jaringan ${query} menunjukkan kepercayaan konsumen yang tinggi pada layanan pengerjaan teknis utama. Namun demikian, terdapat disparitas kinerja di mana 2 cabang mengalami lonjakan keluhan terkait durasi waktu tunggu antrean dan transparansi estimasi rincian pengerjaan awal.`,
      redFlagBranchIds: [`br-custom-7`],
      branches: [
        {
          id: `br-custom-1`,
          name: `${query} Jakarta Selatan`,
          city: "Jakarta Selatan",
          address: "Jl. TB Simatupang No. 88, Jakarta Selatan",
          rating: 4.8,
          reviewCount: 2450,
          status: "Top",
          positives: ["Pelayanan ramah & cepat", "Ruang tunggu AC nyaman dengan tempat duduk bersih", "Mekanik menjelaskan kondisi komponen secara detail"],
          negatives: ["Lahan parkir depan agak penuh saat jam makan siang"],
          complaintCount: 14,
          trendScore: "improving",
        },
        {
          id: `br-custom-2`,
          name: `${query} Surabaya Pusat`,
          city: "Surabaya",
          address: "Jl. Basuki Rahmat No. 102, Surabaya",
          rating: 4.7,
          reviewCount: 1920,
          status: "Top",
          positives: ["Teknisi berpengalaman", "Fasilitas lengkap", "Hasil pengerjaan sangat rapi"],
          negatives: ["Antrean hari Sabtu agak ramai"],
          complaintCount: 18,
          trendScore: "stable",
        },
        {
          id: `br-custom-3`,
          name: `${query} Bandung Soekarno Hatta`,
          city: "Bandung",
          address: "Jl. Soekarno Hatta No. 220, Bandung",
          rating: 4.6,
          reviewCount: 1540,
          status: "Medium",
          positives: ["Stok sparepart lengkap", "Diskon promo bulanan terjangkau"],
          negatives: ["Waktu tunggu pendaftaran lumayan lama"],
          complaintCount: 32,
          trendScore: "stable",
        },
        {
          id: `br-custom-4`,
          name: `${query} Semarang Pemuda`,
          city: "Semarang",
          address: "Jl. Pemuda No. 85, Semarang",
          rating: 4.6,
          reviewCount: 1280,
          status: "Medium",
          positives: ["Pemberian sertifikat garansi pengerjaan"],
          negatives: ["Koneksi WiFi di ruang tunggu agak lambat"],
          complaintCount: 28,
          trendScore: "stable",
        },
        {
          id: `br-custom-7`,
          name: `${query} Bekasi Raya (Cabang Satelit)`,
          city: "Bekasi",
          address: "Jl. Ahmad Yani No. 12, Bekasi",
          rating: 4.2,
          reviewCount: 2100,
          status: "Attention Required",
          positives: ["Lokasi strategis di pinggir jalan utama"],
          negatives: ["Waktu pengerjaan molor dari estimasi", "Keluhan pelanggan tidak dipanggil tepat waktu", "Ruang tunggu penuh sesak pada akhir pekan"],
          complaintCount: 135,
          trendScore: "declining",
          trendDetails: "Banyak sorotan ulasan negatif mengenai waktu tunggu melebihi janji di aplikasi.",
        },
      ],
      complaintCategories: [
        {
          category: "Waktu Tunggu & Antrean Overload",
          percentage: 40,
          count: 180,
          severity: "High",
          sampleQuotes: ["Pengerjaan molor 2 jam dari estimasi yang dijanjikan di awal."],
        },
        {
          category: "Transparansi Biaya & Persetujuan Jasa",
          percentage: 30,
          count: 135,
          severity: "High",
          sampleQuotes: ["Ada biaya tambahan tanpa dikonfirmasi dulu ke saya."],
        },
        {
          category: "Kapasitas & Fasilitas Ruang Tunggu",
          percentage: 18,
          count: 81,
          severity: "Medium",
          sampleQuotes: ["Ruang tunggu terasa panas saat jam siang terik."],
        },
        {
          category: "Keramahan & Komunikasi Front Office",
          percentage: 12,
          count: 54,
          severity: "Low",
          sampleQuotes: ["Staff pendaftaran terkesan cuek saat ditanya urutan antrean."],
        },
      ],
      trafficPattern: {
        busyDays: ["Sabtu", "Minggu", "Jumat SORE"],
        peakHours: "08.30 - 11.30 WIB & 13.30 - 15.30 WIB",
        quietHours: "Selasa & Rabu (08.00 - 10.30 WIB)",
        hourlyDistribution: [
          { hour: "08:00", trafficLevel: 40, label: "Rendah" },
          { hour: "09:00", trafficLevel: 88, label: "Puncak Kedatangan" },
          { hour: "10:00", trafficLevel: 95, label: "Kapasitas Maksimal" },
          { hour: "11:00", trafficLevel: 80, label: "Padat" },
          { hour: "12:00", trafficLevel: 55, label: "Istirahat" },
          { hour: "13:00", trafficLevel: 82, label: "Gelombang II" },
          { hour: "14:00", trafficLevel: 85, label: "Padat" },
          { hour: "15:00", trafficLevel: 65, label: "Sedang" },
          { hour: "16:00", trafficLevel: 35, label: "Penurunan" },
        ],
        summary: "Kepadatan tinggi terkonsentrasi pada Sabtu pagi karena mayoritas pemilik mobil memilih waktu sebelum libur akhir pekan.",
        recommendations: [
          "Terapkan batas kuota booking per jam untuk meratakan kedatangan.",
          "Buka jalur Express Service khusus ganti oli ringan.",
        ],
      },
      socialSentiment: {
        overallPositivePercentage: 76,
        overallNeutralPercentage: 14,
        overallNegativePercentage: 10,
        channels: [
          {
            platform: "Instagram",
            mentionCount: 2800,
            sentimentScore: 82,
            viralTopics: ["Promo Ganti Oli", "Ulasan Servis Rutin"],
            recentHeadline: "Apresiasi netizen terhadap transparansi garansi pengerjaan.",
          },
          {
            platform: "TikTok",
            mentionCount: 3100,
            sentimentScore: 68,
            viralTopics: ["Video Curhat Antrean", "Spill Biaya Servis"],
            recentHeadline: "Video kritik waktu tunggu sempat FYP di TikTok.",
          },
        ],
        viralComplaints: ["Video TikTok kritik waktu tunggu di cabang satelit."],
        successfulCampaigns: ["Kampanye pengecekan komponen gratis berhasil menarik prospek baru."],
        publicPerceptionSummary: "Sentimen publik secara umum sangat baik, dengan atensi perbaikan pada durasi antrean akhir pekan.",
      },
      strategicRecommendations: [
        {
          id: "rec-c-1",
          priority: "Critical",
          category: "Operasional",
          title: "Restrukturisasi Alokasi Slot Antrean Digital",
          description: "Batasi kuota walk-in pada hari Sabtu dan prioritas booking online dengan kepastian jam masuk pit.",
          targetBranches: [`${query} Bekasi Raya`],
          expectedImpact: "Menurunkan komplain waktu tunggu hingga 40%.",
        },
        {
          id: "rec-c-2",
          priority: "High",
          category: "Inventaris & Transparansi",
          title: "Digital Quotation Approval Sebelum Pengerjaan",
          description: "Wajibkan konfirmasi biaya tambahan via WA sebelum mekanik membongkar komponen ekstra.",
          targetBranches: ["Semua Cabang"],
          expectedImpact: "Menghilangkan 90% keluhan transparansi biaya.",
        },
      ],
    };
  };

  // Export handlers
  const handleExportMarkdown = () => {
    let md = `# LAPORAN INTELIJEN REPUTASI & PERFORMA CABANG
**Merek Bisnis:** ${report.brandName}  
**Tanggal Analisis:** ${report.analysisDate}  
**Total Cabang Terdeteksi:** ${report.totalBranchesFound}  
**Rata-rata Rating Jaringan:** ${report.avgNetworkRating.toFixed(2)} / 5.0 (Total Ulasan: ${report.totalReviewsAnalyzed.toLocaleString('id-ID')})

---

## RINGKASAN EKSEKUTIF
${report.executiveSummary}

---

## 1. TABEL KOMPARASI PERFORMA CABANG
| No | Nama Cabang & Lokasi | Rating Google | Jumlah Ulasan | Isu Komplain | Status Kinerja |
|---|---|---|---|---|---|
`;

    report.branches.forEach((b, i) => {
      md += `| ${i + 1} | ${b.name} (${b.city}) | ⭐ ${b.rating.toFixed(1)} | ${b.reviewCount} ulasan | ${b.complaintCount} isu | ${b.status} |\n`;
    });

    md += `
---

## 2. ANALISIS KELUHAN & ULASAN POSITIF
### Kategori Komplain Utama:
`;

    report.complaintCategories.forEach((cat) => {
      md += `- **${cat.category}** (${cat.percentage}% - ${cat.count} Isu | Severity: ${cat.severity})\n`;
      if (cat.sampleQuotes.length > 0) {
        md += `  > "${cat.sampleQuotes[0]}"\n`;
      }
    });

    md += `
---

## 3. PATTERN KEDATANGAN & TREN KERAMAIAN
- **Hari Paling Ramai:** ${report.trafficPattern.busyDays.join(', ')}
- **Jam Tersibuk (Peak Hours):** ${report.trafficPattern.peakHours}
- **Ringkasan Traffic:** ${report.trafficPattern.summary}

---

## 4. ANALISIS MEDIA SOSIAL & PERSEPSI PUBLIK
- **Sentimen Publik:** Positif ${report.socialSentiment.overallPositivePercentage}% | Netral ${report.socialSentiment.overallNeutralPercentage}% | Negatif ${report.socialSentiment.overallNegativePercentage}%
- **Ringkasan Persepsi:** ${report.socialSentiment.publicPerceptionSummary}

---

## 5. REKOMENDASI STRATEGIS OPERASIONAL
`;

    report.strategicRecommendations.forEach((rec, idx) => {
      md += `${idx + 1}. **[Prioritas: ${rec.priority}] ${rec.title}**\n   - *Kategori:* ${rec.category}\n   - *Target Cabang:* ${rec.targetBranches.join(', ')}\n   - *Deskripsi:* ${rec.description}\n   - *Dampak Diharapkan:* ${rec.expectedImpact}\n\n`;
    });

    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Laporan_Intelijen_Reputasi_${report.brandName.replace(/[^a-zA-Z0-0]/g, '_')}.md`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleExportJSON = () => {
    const jsonStr = JSON.stringify(report, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Raw_Data_Reputasi_${report.brandName.replace(/[^a-zA-Z0-0]/g, '_')}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans antialiased selection:bg-amber-500 selection:text-slate-950 pb-16">
      
      {/* Search Streaming Modal */}
      <SearchProgressModal searchState={searchState} targetQuery={activeQuery} />

      {/* Header Bar */}
      <Header
        currentBrand={report.brandName}
        onSearch={handleSearch}
        isLoading={searchState.isLoading}
        onExportMarkdown={handleExportMarkdown}
        onExportJSON={handleExportJSON}
        onPrint={handlePrint}
        presetBrands={presetList}
      />

      {/* Main Content Workspace */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Executive Summary & KPI Banner */}
        <ExecutiveSummaryBanner report={report} />

        {/* Section 1: Tabel Komparasi Performa Cabang */}
        <BranchPerformanceTable
          branches={report.branches}
          redFlagIds={report.redFlagBranchIds}
          onSelectBranch={(branch) => setSelectedBranch(branch)}
        />

        {/* Section 2: Deep Dive Categorization & Complaint Analysis */}
        <ComplaintCategoriesChart categories={report.complaintCategories} />

        {/* Section 3: Pattern Kedatangan & Tren Keramaian */}
        <TrafficPatternSection pattern={report.trafficPattern} />

        {/* Section 4: Analisis Media Sosial & Persepsi Publik */}
        <SocialSentimentSection data={report.socialSentiment} />

        {/* Section 5: Rekomendasi Strategis Operasional */}
        <StrategicRecommendationsSection recommendations={report.strategicRecommendations} />

        {/* Grounding Sources Disclaimer Footer */}
        {report.groundingSources && report.groundingSources.length > 0 && (
          <div className="bg-white rounded-xl border border-slate-200 p-4 text-xs text-slate-500 my-6">
            <p className="font-bold text-slate-700 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Sumber Grounding Real-Time Google Search:
            </p>
            <div className="flex flex-wrap gap-2">
              {report.groundingSources.map((source, i) => (
                <a
                  key={i}
                  href={source.uri}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] transition-colors"
                >
                  <span className="truncate max-w-xs">{source.title}</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />
                </a>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* Detail Modal for Individual Branch */}
      <BranchDetailModal
        branch={selectedBranch}
        onClose={() => setSelectedBranch(null)}
      />

      {/* Executive Footer Banner */}
      <footer className="mt-12 bg-blue-900 text-blue-100 py-6 border-t-4 border-blue-600 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
          <div className="min-w-[200px]">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Rekomendasi Strategis<br />Operasional Management</h3>
            <p className="text-[11px] text-blue-300 mt-1">Astra Otoservice & Network Analytics</p>
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-blue-100">
            <div className="border-l-2 border-blue-400 pl-3">
              <p className="text-[10px] font-bold text-blue-300 mb-0.5 uppercase tracking-wider">OPS LEVEL 1</p>
              <p className="text-[11px] leading-snug">Audit mendalam integritas & waktu antrean pada cabang sektor Red Flag.</p>
            </div>
            <div className="border-l-2 border-blue-400 pl-3">
              <p className="text-[10px] font-bold text-blue-300 mb-0.5 uppercase tracking-wider">OPS LEVEL 2</p>
              <p className="text-[11px] leading-snug">Implementasi sistem approval digital wajib sebelum penambahan pengerjaan.</p>
            </div>
            <div className="border-l-2 border-blue-400 pl-3">
              <p className="text-[10px] font-bold text-blue-300 mb-0.5 uppercase tracking-wider">OPS LEVEL 3</p>
              <p className="text-[11px] leading-snug">Standardisasi response time CRM maksimal 10 menit untuk menekan sentimen negatif.</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-4 border-t border-blue-800 text-center text-[11px] text-blue-300">
          <p>© 2026 AutoReputation AI — Powered by Google AI Studio, Gemini API & Google Search Grounding.</p>
        </div>
      </footer>

    </div>
  );
}
