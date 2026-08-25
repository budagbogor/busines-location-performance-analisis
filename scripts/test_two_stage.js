import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function test() {
  console.log('Testing Two-Stage Grounding for Mobeng BSD & Harapan Indah...');

  const query = 'Cari informasi Google Maps terkini untuk: "Mobeng BSD" di Jl Letnan Sutopo Serpong Tangerang Selatan. Berapa skor rating bintang rata-rata Google Maps saat ini dan berapa jumlah total ulasan (reviews)? Tuliskan juga jika ada keluhan atau ulasan komplain dari pelanggan.';

  const searchRes = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: query,
    config: {
      tools: [{ googleSearch: {} }],
    },
  });

  console.log('\n--- TAHAP 1: TEKS SEARCH GOOGLE MAPS ---');
  console.log(searchRes.text);

  const parsePrompt = `Berdasarkan teks berikut, ekstrak data Google Maps ke dalam format JSON:
{
  "rating": (angka desimal rating bintang, contoh: 4.6),
  "totalReviews": (angka integer jumlah total ulasan, contoh: 585),
  "negatives": [poin-poin keluhan/isu jika ada],
  "reviews": [
    {
      "author": "Nama",
      "rating": (angka bintang 1-5),
      "text": "Teks ulasan asli",
      "date": "waktu"
    }
  ]
}

Teks data:
${searchRes.text}`;

  const jsonRes = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: parsePrompt,
    config: {
      responseMimeType: 'application/json',
    },
  });

  console.log('\n--- TAHAP 2: HASIL JSON TERSTRUKTUR ---');
  console.log(jsonRes.text);
}

test().catch(console.error);
