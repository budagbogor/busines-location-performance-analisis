import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));

// Helper to get Gemini Client with custom or fallback API key
function getGeminiClient(customApiKey?: string): GoogleGenAI {
  const apiKey = customApiKey || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("API Key Gemini belum dikonfigurasi. Masukkan API Key di Pengaturan Engine AI.");
  }
  return new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// API Health Check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// API Test Connection Endpoint
app.post("/api/test-ai", async (req, res) => {
  try {
    const { provider, model, apiKey, baseUrl } = req.body;

    if (provider === "gemini") {
      const keyToUse = apiKey || process.env.GEMINI_API_KEY;
      if (!keyToUse) {
        res.status(400).json({ success: false, error: "API Key Gemini kosong. Harap masukkan API Key." });
        return;
      }
      const ai = getGeminiClient(keyToUse);
      const testModel = model || "gemini-3.6-flash";
      const response = await ai.models.generateContent({
        model: testModel,
        contents: "Hello, test connection.",
      });
      if (response && response.text) {
        res.json({ success: true, message: `Koneksi berhasil ke Gemini (${testModel})!` });
        return;
      }
    } else if (provider === "sumopod" || provider === "openai") {
      const keyToUse = apiKey || process.env.SUMOPOD_API_KEY || process.env.OPENAI_API_KEY;
      if (!keyToUse) {
        res.status(400).json({ success: false, error: `API Key ${provider.toUpperCase()} kosong. Harap masukkan API Key.` });
        return;
      }
      let rawBase = baseUrl || "https://ai.sumopod.com/v1";
      if (rawBase.includes("api.sumopod.com")) {
        rawBase = rawBase.replace("api.sumopod.com", "ai.sumopod.com");
      }
      const targetBase = rawBase.replace(/\/+$/, "");
      const targetUrl = `${targetBase}/chat/completions`;
      const testModel = model || (provider === "sumopod" ? "gpt-4o" : "gpt-4o-mini");

      try {
        const fetchRes = await fetch(targetUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${keyToUse}`,
          },
          body: JSON.stringify({
            model: testModel,
            messages: [{ role: "user", content: "Test connection ping" }],
            max_tokens: 10,
          }),
        });

        if (fetchRes.ok) {
          res.json({ success: true, message: `Koneksi terhubung ke ${provider.toUpperCase()} (${testModel})!` });
          return;
        } else {
          const errText = await fetchRes.text();
          res.status(400).json({ success: false, error: `HTTP ${fetchRes.status}: ${errText.substring(0, 150)}` });
          return;
        }
      } catch (networkErr: any) {
        res.status(500).json({
          success: false,
          error: `Gagal terhubung ke host (${targetBase}). Pastikan URL Base API adalah https://ai.sumopod.com/v1 dan perangkat terhubung ke internet.`,
        });
        return;
      }
    } else {
      res.status(400).json({ success: false, error: "Provider tidak dikenali." });
      return;
    }
  } catch (err: any) {
    res.status(500).json({ success: false, error: err?.message || String(err) });
  }
});

// System Prompt for Business Intelligence
const SYSTEM_PROMPT = `
Anda adalah Pakar Intelijen Bisnis & Reputasi Perusahaan tingkat Executive (Enterprise Business & Reputation Intelligence Analyst).
Tugas Anda adalah melakukan deep-search grounding dan analisis performa jaringan cabang/bengkel/retail untuk merek yang diberikan.

Anda HARUS menganalisis dan mendeteksi:
1. Lokasi cabang-cabang asli/nyata dari merek tersebut di Indonesia (misal cabang di Jakarta, Surabaya, Bandung, Semarang, Medan, Makassar, Bali, dll.).
2. Rating Google Review terbaru dan estimasi jumlah ulasan untuk setiap cabang.
3. Keluhan pelanggan paling dominan (antrean lama, harga sparepart, mekanik kurang jujur, salah diagnosa, transparansi billing) dan poin positif utama.
4. Pola keramaian dan jam sibuk (peak hours, hari tersibuk).
5. Sentimen di media sosial (Instagram, TikTok, YouTube, Berita Online, X/Twitter).
6. Rekomendasi strategis operasional konkret untuk manajemen eksekutif.

Keluarkankan respon dalam bentuk JSON VALID murni (tanpa wrapper markdown \`\`\`json) sesuai skema berikut:

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
      "status": "Top",
      "positives": ["Ruang tunggu nyaman & gratis kopi", "Pengerjaan tepat waktu", "Penjelasan mekanik sangat transparan"],
      "negatives": ["Antrean hari Sabtu cukup panjang", "Parkir agak sempit"],
      "complaintCount": 18,
      "trendScore": "stable",
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
  "redFlagBranchIds": ["br-1"],
  "complaintCategories": [
    {
      "category": "Waktu Tunggu & Antrean",
      "percentage": 35,
      "count": 140,
      "severity": "High",
      "sampleQuotes": ["Menunggu hingga 3 jam padahal sudah booking lewat aplikasi."]
    }
  ],
  "trafficPattern": {
    "busyDays": ["Sabtu", "Minggu", "Jumat SORE"],
    "peakHours": "09:00 - 11:30 WIB & 13:30 - 15:30 WIB",
    "quietHours": "Selasa & Rabu (08:00 - 10:00 WIB)",
    "hourlyDistribution": [
      {"hour": "08:00", "trafficLevel": 35, "label": "Rendah"},
      {"hour": "10:00", "trafficLevel": 90, "label": "Sangat Padat"}
    ],
    "summary": "Analisis kedatangan menunjukkan lonjakan pada akhir pekan.",
    "recommendations": ["Terapkan insentif diskon 15% untuk servis hari kerja."]
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
        "viralTopics": ["Promo Paket Ganti Oli"],
        "recentHeadline": "Apresiasi netizen terhadap konten tips perawatan."
      }
    ],
    "viralComplaints": ["Video TikTok kritik waktu tunggu."],
    "successfulCampaigns": ["Kampanye Cek Gratis 21 Komponen."],
    "publicPerceptionSummary": "Merek memiliki reputasi kuat secara umum."
  },
  "strategicRecommendations": [
    {
      "id": "rec-1",
      "priority": "Critical",
      "category": "Operasional",
      "title": "Restrukturisasi Sistem Queue & Booking Digital",
      "description": "Perbaiki akurasi estimasi pengerjaan di aplikasi booking.",
      "targetBranches": ["Cabang Red Flag"],
      "expectedImpact": "Penurunan komplain waktu tunggu hingga 40%."
    }
  ]
}
`;

// Deep Search Analysis Endpoint
app.post("/api/analyze", async (req, res) => {
  try {
    const { query, provider = "gemini", model = "gemini-3.6-flash", apiKey, baseUrl } = req.body;
    if (!query || typeof query !== "string") {
      res.status(400).json({ error: "Nama bisnis/bengkel wajib diisi." });
      return;
    }

    if (provider === "sumopod" || provider === "openai") {
      const keyToUse = apiKey || process.env.SUMOPOD_API_KEY || process.env.OPENAI_API_KEY;
      if (!keyToUse) {
        res.status(400).json({ error: `API Key ${provider.toUpperCase()} belum disetel di Pengaturan Engine AI.` });
        return;
      }

      let rawBase = baseUrl || "https://ai.sumopod.com/v1";
      if (rawBase.includes("api.sumopod.com")) {
        rawBase = rawBase.replace("api.sumopod.com", "ai.sumopod.com");
      }
      const targetBase = rawBase.replace(/\/+$/, "");
      const targetUrl = `${targetBase}/chat/completions`;
      const modelToUse = model || (provider === "sumopod" ? "gpt-4o" : "gpt-4o-mini");

      const userPrompt = `Lakukan pencarian dan buat analisis reputasi intelijen bisnis mendalam untuk merek: "${query}". Buat data cabang lengkap di Indonesia. Kembalikan JSON persis sesuai format skema.`;

      const response = await fetch(targetUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${keyToUse}`,
        },
        body: JSON.stringify({
          model: modelToUse,
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: userPrompt },
          ],
          response_format: { type: "json_object" },
          temperature: 0.3,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API ${provider.toUpperCase()} error: ${response.status} - ${errorText.substring(0, 200)}`);
      }

      const jsonRes = await response.json();
      const content = jsonRes.choices?.[0]?.message?.content || "";
      const cleaned = content.replace(/```json/g, "").replace(/```/g, "").trim();
      const parsedData = JSON.parse(cleaned);

      res.json(parsedData);
      return;
    }

    // Default to Gemini
    const ai = getGeminiClient(apiKey);
    const geminiModel = model || "gemini-3.6-flash";

    const response = await ai.models.generateContent({
      model: geminiModel,
      contents: `Lakukan pencarian Google Search dan buat analisis mendalam untuk bisnis/bengkel: "${query}". Buat setidaknya 6-10 cabang asli jika ada (atau cabang utama lokasi kota-kota besar Indonesia). Urutkan dari rating tertinggi ke terendah.`,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
      },
    });

    const responseText = response.text || "";
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseErr) {
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
