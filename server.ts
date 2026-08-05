import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client lazily
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not configured in environment variables.");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// API Health Check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Deep Search Analysis Endpoint
app.post("/api/analyze", async (req, res) => {
  try {
    const { query } = req.body;
    if (!query || typeof query !== "string") {
      res.status(400).json({ error: "Nama bisnis/bengkel wajib diisi." });
      return;
    }

    const ai = getGeminiClient();

    const systemPrompt = `
Anda adalah Pakar Intelijen Bisnis & Reputasi Perusahaan tingkat Executive (Enterprise Business & Reputation Intelligence Analyst).
Tugas Anda adalah melakukan deep-search grounding dan analisis performa jaringan cabang/bengkel/retail untuk merek: "${query}".

Anda HARUS melakukan pencarian real-time via Google Search untuk mendeteksi:
1. Lokasi cabang-cabang asli/nyata dari "${query}" di Indonesia (misal cabang di Jakarta, Surabaya, Bandung, Semarang, Medan, Makassar, Bali, dll.).
2. Rating Google Review terbaru dan estimasi jumlah ulasan untuk setiap cabang.
3. Keluhan pelanggan paling dominan (antrean lama, harga sparepart, mekanik kurang jujur, salah diagnosa, transparansi billing) dan poin positif utama (ruang tunggu AC dingin, servis cepat, staff ramah, pengerjaan rapi).
4. Pola keramaian dan jam sibuk (peak hours, hari tersibuk).
5. Sentimen di media sosial (Instagram, TikTok, YouTube, Berita Online, X/Twitter).
6. Rekomendasi strategis operasional konkret untuk manajemen eksekutif.

Keluarkan respon dalam bentuk JSON VALID tanpa markdown wrapper tambahan (atau murni string JSON) sesuai skema berikut:

{
  "brandName": "Nama Merek Resmi",
  "analysisDate": "Agustus 2026",
  "totalBranchesFound": 12,
  "avgNetworkRating": 4.6,
  "totalReviewsAnalyzed": 15400,
  "executiveSummary": "Ringkasan kondisi kesehatan operasional jaringan cabang dalam 2-3 paragraf eksekutif.",
  "branches": [
    {
      "id": "br-1",
      "name": "Nama Cabang Lengkap & Lokasi",
      "city": "Kota",
      "address": "Alamat singkat",
      "rating": 4.8,
      "reviewCount": 1420,
      "status": "Top", // pilihan: "Top", "Medium", "Attention Required"
      "positives": ["Ruang tunggu nyaman & gratis kopi", "Pengerjaan tepat waktu", "Penjelasan mekanik sangat transparan"],
      "negatives": ["Antrean hari Sabtu cukup panjang", "Parkir agak sempit"],
      "complaintCount": 18,
      "trendScore": "stable", // "improving", "stable", "declining"
      "trendDetails": "Performa relatif stabil dengan kepuasan tinggi pada keramahan mekanik.",
      "recentReviews": [
        {
          "id": "rev-1",
          "author": "Budi Santoso",
          "rating": 5,
          "date": "1 minggu lalu",
          "text": "Pelayanan cepat dan mekanik jujur menjelaskan kondisi oli & rem.",
          "sentiment": "positive",
          "tags": ["Keramahan Staff", "Kualitas Pengerjaan"]
        }
      ]
    }
  ],
  "redFlagBranchIds": ["br-id-1"],
  "complaintCategories": [
    {
      "category": "Waktu Tunggu & Antrean",
      "percentage": 35,
      "count": 140,
      "severity": "High",
      "sampleQuotes": ["Menunggu hingga 3 jam padahal sudah booking lewat aplikasi."]
    },
    {
      "category": "Transparansi Harga & Sparepart",
      "percentage": 25,
      "count": 100,
      "severity": "High",
      "sampleQuotes": ["Harga sparepart di kuitansi beda dengan estimasi awal."]
    },
    {
      "category": "Kualitas Pengerjaan & Diagnosa",
      "percentage": 20,
      "count": 80,
      "severity": "Medium",
      "sampleQuotes": ["Suara mesin masih agak bising setelah ditune-up."]
    },
    {
      "category": "Keramahan & Pelayanan Front Office",
      "percentage": 20,
      "count": 80,
      "severity": "Low",
      "sampleQuotes": ["Staff penerima registrasi kurang responsif saat ditanya estimasi."]
    }
  ],
  "trafficPattern": {
    "busyDays": ["Sabtu", "Minggu", "Jumat SORE"],
    "peakHours": "09:00 - 11:30 WIB & 13:30 - 15:30 WIB",
    "quietHours": "Selasa & Rabu (08:00 - 10:00 WIB)",
    "hourlyDistribution": [
      {"hour": "08:00", "trafficLevel": 35, "label": "Rendah"},
      {"hour": "10:00", "trafficLevel": 90, "label": "Sangat Padat"},
      {"hour": "12:00", "trafficLevel": 65, "label": "Sedang"},
      {"hour": "14:00", "trafficLevel": 85, "label": "Padat"},
      {"hour": "16:00", "trafficLevel": 50, "label": "Sedang"},
      {"hour": "18:00", "trafficLevel": 20, "label": "Rendah"}
    ],
    "summary": "Analisis kedatangan menunjukkan lonjakan ekstrem pada akhir pekan dengan waktu tunggu meningkat hingga 120%.",
    "recommendations": ["Terapkan insentif diskon 15% untuk servis hari kerja (Selasa-Kamis).", "Buka slot Express Maintenance khusus ganti oli."]
  },
  "socialSentiment": {
    "overallPositivePercentage": 72,
    "overallNeutralPercentage": 18,
    "overallNegativePercentage": 10,
    "channels": [
      {
        "platform": "Instagram",
        "mentionCount": 1250,
        "sentimentScore": 78,
        "viralTopics": ["Promo Paket Ganti Oli", "Ulasan Influencer Otomotif"],
        "recentHeadline": "Banyak apresiasi netizen terhadap konten tips perawatan berkala."
      },
      {
        "platform": "TikTok",
        "mentionCount": 2400,
        "sentimentScore": 65,
        "viralTopics": ["Video Curhat Antrean Bengkel", "Spill Harga Servis Rutin"],
        "recentHeadline": "Konten keluhan antrean sempat FYP dengan 150rb tayangan."
      },
      {
        "platform": "Google News",
        "mentionCount": 450,
        "sentimentScore": 88,
        "viralTopics": ["Ekspansi Cabang Baru", "Sertifikasi Teknisi"],
        "recentHeadline": "Liputan pers mengenai pembukaan cabang berstandar internasional."
      }
    ],
    "viralComplaints": ["Video TikTok kritik waktu tunggu booking online yang tidak tepat waktu."],
    "successfulCampaigns": ["Kampanye 'Cek Gratis 21 Komponen' sukses mendongkrak reputasi positif."],
    "publicPerceptionSummary": "Merek memiliki reputasi kuat secara umum, namun isu waktu tunggu di TikTok perlu penanganan respon cepat PR."
  },
  "strategicRecommendations": [
    {
      "id": "rec-1",
      "priority": "Critical",
      "category": "Operasional",
      "title": "Restrukturisasi Sistem Queue & Booking Digital",
      "description": "Perbaiki akurasi estimasi pengerjaan di aplikasi booking dan batasi slot walk-in pada hari Sabtu-Minggu.",
      "targetBranches": ["Cabang Red Flag"],
      "expectedImpact": "Penurunan komplain waktu tunggu hingga 40% dalam 30 hari."
    },
    {
      "id": "rec-2",
      "priority": "High",
      "category": "Inventaris & Transparansi",
      "title": "Digital Quotation & Approval Sebelum Pengerjaan",
      "description": "Setiap pengerjaan tambahan wajib dikonfirmasi via approval digital ke HP pelanggan sebelum mekanik mulai membongkar.",
      "targetBranches": ["Semua Cabang"],
      "expectedImpact": "Menghilangkan keluhan transparansi biaya sparepart hingga 90%."
    },
    {
      "id": "rec-3",
      "priority": "High",
      "category": "Pelatihan Staff",
      "title": "SOP Keramahan & Audit Mekanik Berkala",
      "description": "Lakukan audit insognito pada cabang ber-rating di bawah 4.5 dan latih ulang Service Advisor.",
      "targetBranches": ["Cabang Attention Required"],
      "expectedImpact": "Peningkatan rating rata-rata cabang bermasalah menjadi >4.6 dalam 2 bulan."
    }
  ]
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: `Lakukan pencarian Google Search dan buat analisis mendalam untuk bisnis/bengkel: "${query}". Buat setidaknya 6-10 cabang asli jika ada (atau cabang utama lokasi kota-kota besar Indonesia). Urutkan dari rating tertinggi ke terendah.`,
      config: {
        systemInstruction: systemPrompt,
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
      },
    });

    const responseText = response.text || "";
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseErr) {
      // Clean up markdown code blocks if any
      const cleaned = responseText.replace(/```json/g, "").replace(/```/g, "").trim();
      data = JSON.parse(cleaned);
    }

    // Extract grounding chunks if available
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    if (groundingChunks && Array.isArray(groundingChunks)) {
      data.groundingSources = groundingChunks
        .filter((chunk: any) => chunk.web)
        .map((chunk: any) => ({
          title: chunk.web.title || chunk.web.uri,
          uri: chunk.web.uri,
        }));
    }

    res.json(data);
  } catch (err: any) {
    console.error("Error in /api/analyze:", err);
    res.status(500).json({
      error: "Gagal memproses analisis deep search.",
      message: err?.message || String(err),
    });
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server AutoReputation AI running at http://localhost:${PORT}`);
  });
}

startServer();
