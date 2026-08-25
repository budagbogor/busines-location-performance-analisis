import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function test() {
  console.log('Testing targeted search query on Gemini...');

  const query = 'Cari di web: Berapa rating (skor bintang dari 5) dan jumlah ulasan (review count) Google Maps untuk bengkel mobil "Mobeng BSD" (Tangerang Selatan) dan "Mobeng Harapan Indah" (Bekasi)? Sebutkan angka rating desimal dan jumlah ulasannya dari data profil direktori seperti moservice/waze/google maps.';

  const searchRes = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: query,
    config: {
      tools: [{ googleSearch: {} }],
    },
  });

  console.log('\n--- HASIL PENCARIAN TERTARGET ---');
  console.log(searchRes.text);
}

test().catch(console.error);
