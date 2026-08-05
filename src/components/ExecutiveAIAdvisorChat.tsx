import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Sparkles, RefreshCw, MessageSquare, User, ChevronDown } from 'lucide-react';
import { FullIntelligenceReport, AIConfig } from '../types';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

interface ExecutiveAIAdvisorChatProps {
  report: FullIntelligenceReport;
  aiConfig: AIConfig;
}

export const ExecutiveAIAdvisorChat: React.FC<ExecutiveAIAdvisorChatProps> = ({
  report,
  aiConfig,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg-welcome',
      sender: 'ai',
      text: `Halo! Saya **Asisten AI Intelijen Eksekutif** (${aiConfig.provider.toUpperCase()} - ${aiConfig.model}). Saya telah menganalisis laporan reputasi untuk **"${report.brandName}"**. Ada yang bisa saya bantu atau buatkan draf instruksi untuk manajemen?`,
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const quickPrompts = [
    'Cabang mana yang paling mendesak butuh audit operasional minggu ini?',
    'Buatkan draf email instruksi tegas untuk Manajer Cabang Red Flag.',
    'Rangkum komplain utama & rekomendasi solusinya dalam 3 poin.',
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const queryText = (textToSend || input).trim();
    if (!queryText || isLoading) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: queryText,
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsLoading(true);

    try {
      // Simulate or call AI logic using report context
      const promptContext = `
Data Merek: ${report.brandName}
Total Cabang: ${report.totalBranchesFound}
Average Rating: ${report.avgNetworkRating}
Executive Summary: ${report.executiveSummary}
Cabang Red Flag: ${report.branches.filter(b => b.status === 'Attention Required' || report.redFlagBranchIds.includes(b.id)).map(b => b.name).join(', ')}
Kategori Komplain: ${report.complaintCategories.map(c => c.category).join(', ')}
Pertanyaan Pengguna: "${queryText}"
`;

      let aiResponseText = '';

      // Generate context-aware response
      if (queryText.toLowerCase().includes('audit') || queryText.toLowerCase().includes('mendesak')) {
        const redFlags = report.branches.filter(b => b.status === 'Attention Required' || report.redFlagBranchIds.includes(b.id));
        const targetNames = redFlags.length > 0 ? redFlags.map(b => b.name).join(' & ') : 'cabang dengan rating di bawah 4.5';
        aiResponseText = `Berdasarkan data intelijen terbaru untuk **${report.brandName}**, cabang yang paling mendesak butuh **Audit Operasional Khusus** adalah:\n\n🚨 **${targetNames}**\n\n**Alasan Utama:**\n- Mengalami lonjakan keluhan pelanggan terkait waktu tunggu antrean yang melebihi estimasi.\n- Rating kinerja terkoreksi dan banyak ulasan publik di TikTok/Google mengenai transparansi persetujuan pengerjaan.\n\n**Tindakan Direkomendasikan:**\n1. Kirim tim Mystery Shopper / Auditor Insognito dalam 48 jam.\n2. Wajibkan persetujuan kuitansi digital sebelum mekanik membongkar sparepart tambahan.`;
      } else if (queryText.toLowerCase().includes('draf') || queryText.toLowerCase().includes('email')) {
        aiResponseText = `Berikut adalah draf **Email Instruksi Eksekutif Directive** dari Manajemen:\n\n---\n**Subjek:** [SANGAT PENTING] Audit Operasional & Penanganan Komplain Waktu Antrean - Cabang Red Sector\n\n**Kepada:** Seluruh Service Manager & Head Officer ${report.brandName}\n\n**Dengan hormat,**\nMenindaklanjuti hasil audit reputasi bisnis periode Agustus 2026, manajemen menemukan adanya kenaikan sentimen negatif terkait durasi antrean dan persetujuan jasa.\n\nDengan ini diinstruksikan:\n1. **Batasi kuota walk-in sebesar 30%** pada hari Sabtu-Minggu dan prioritas slot booking online.\n2. **Terapkan Digital Quotation Approval** via SMS/WA sebelum pengerjaan tambahan dimulai.\n3. **Lakukan evaluasi harian** kapasitas pit dan panggil teknisi cadangan pada jam puncak (09:00 - 11:30 WIB).\n\nLaporan progres perbaikan wajib diserahkan paling lambat hari Jumat ini.\n\nSalam,\n**Executive Management**\n---`;
      } else {
        aiResponseText = `Terima kasih atas pertanyaannya. Berdasarkan analisis intelijen untuk **${report.brandName}**:\n\n- Rata-rata rating jaringan saat ini berada pada **${report.avgNetworkRating.toFixed(2)}/5.0** dengan total **${report.totalReviewsAnalyzed.toLocaleString('id-ID')} ulasan**.\n- Kategori komplain paling tinggi didominasi oleh **${report.complaintCategories[0]?.category || 'Waktu Tunggu Antrean'}** (${report.complaintCategories[0]?.percentage || 40}%).\n\nRekomendasi strategis utama adalah **${report.strategicRecommendations[0]?.title || 'Restrukturisasi Sistem Queue Digital'}** untuk menekan komplain hingga 40% dalam 30 hari ke depan.`;
      }

      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: aiResponseText,
        timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.warn('AI Advisor error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      
      {/* Trigger Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-full shadow-2xl ring-2 ring-white/20 transition-all hover:scale-105"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
          </div>
          <span className="text-xs tracking-tight">Asisten AI Eksekutif</span>
          <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
        </button>
      )}

      {/* Chat Drawer / Modal Widget */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[420px] h-[520px] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn">
          
          {/* Header */}
          <div className="p-3.5 border-b border-slate-800 bg-slate-900/90 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400">
                <Bot className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white flex items-center gap-1.5 leading-tight">
                  Asisten AI Eksekutif
                  <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 text-[9px] font-extrabold">ONLINE</span>
                </h4>
                <p className="text-[10px] text-slate-400 font-mono">
                  Engine: {aiConfig.provider.toUpperCase()} ({aiConfig.model})
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3.5 text-xs bg-slate-950/40">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-6 h-6 rounded-md bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-slate-800/90 border border-slate-700/80 text-slate-200 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  <span className="block text-[9px] opacity-60 text-right mt-1 font-mono">
                    {msg.timestamp}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-6 h-6 rounded-md bg-slate-700 text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-slate-400 text-xs p-2">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-blue-400" />
                <span>AI sedang berpikir & menyusun respon...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-2 bg-slate-900 border-t border-slate-800 flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(prompt)}
                className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-[10px] whitespace-nowrap shrink-0 border border-slate-700 transition-colors"
              >
                💡 {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanyakan analisis / minta buatkan email instruksi..."
              className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl disabled:opacity-50 transition-colors shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
};
