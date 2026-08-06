import React from 'react';
import { Share2, Video, Globe, MessageSquare, ThumbsUp, ThumbsDown, Flame, Award, ArrowUpRight } from 'lucide-react';
import { SocialSentimentData } from '../types';

interface SocialSentimentSectionProps {
  data: SocialSentimentData;
}

export const SocialSentimentSection: React.FC<SocialSentimentSectionProps> = ({ data }) => {
  return (
    <section className="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl p-6 mb-8">
      
      {/* Section Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
            <h3 className="text-xl font-bold text-white tracking-tight">
              6. Analisis Media Sosial & Persepsi Publik (Brand Reputation Monitoring)
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Pemantauan lintas platform (TikTok, Instagram, YouTube, Berita Online, X/Twitter) mengenai isu viral dan keberhasilan kampanye publik.
          </p>
        </div>
      </div>

      {/* Sentiment Overview Gauge Bar */}
      <div className="bg-slate-900 text-white p-5 rounded-2xl mb-6 shadow-inner">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Distribusi Sentiment Publik Keseluruhan
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Rerata sentimen dihitung dari mentions media sosial & pemberitaan digital 30 hari terakhir.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-bold">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <ThumbsUp className="w-4 h-4" /> Positif {data.overallPositivePercentage}%
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              Netral {data.overallNeutralPercentage}%
            </span>
            <span className="flex items-center gap-1.5 text-rose-400">
              <ThumbsDown className="w-4 h-4" /> Negatif {data.overallNegativePercentage}%
            </span>
          </div>
        </div>

        {/* Stacked Sentiment Progress Bar */}
        <div className="w-full h-3 rounded-full overflow-hidden flex bg-slate-800">
          <div 
            style={{ width: `${data.overallPositivePercentage}%` }} 
            className="bg-emerald-500 h-full transition-all duration-500" 
            title={`Positif ${data.overallPositivePercentage}%`}
          />
          <div 
            style={{ width: `${data.overallNeutralPercentage}%` }} 
            className="bg-slate-500 h-full transition-all duration-500" 
            title={`Netral ${data.overallNeutralPercentage}%`}
          />
          <div 
            style={{ width: `${data.overallNegativePercentage}%` }} 
            className="bg-rose-500 h-full transition-all duration-500" 
            title={`Negatif ${data.overallNegativePercentage}%`}
          />
        </div>
      </div>

      {/* Social Media Channels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {data.channels.map((channel, idx) => {
          const getPlatformBadge = (platform: string) => {
            const p = platform.toLowerCase();
            if (p.includes('facebook')) return 'bg-blue-600 text-white';
            if (p.includes('instagram')) return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white';
            if (p.includes('tiktok')) return 'bg-slate-950 text-cyan-400 border border-slate-700';
            if (p.includes('youtube')) return 'bg-red-600 text-white';
            return 'bg-slate-800 text-white';
          };

          return (
            <div key={idx} className="p-4 rounded-xl border border-slate-800 bg-slate-950/70 hover:bg-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold shadow-xs ${getPlatformBadge(channel.platform)}`}>
                    {channel.platform}
                  </span>
                  <span className={`text-xs font-bold ${
                    channel.sentimentScore >= 80 ? 'text-emerald-400' : channel.sentimentScore >= 65 ? 'text-amber-400' : 'text-rose-400'
                  }`}>
                    Skor {channel.sentimentScore}/100
                  </span>
                </div>

                <p className="text-xs font-bold text-slate-200 mt-2 line-clamp-2 leading-snug">
                  {channel.recentHeadline}
                </p>
              </div>

              <div className="text-[11px] text-slate-400 mt-3 pt-2 border-t border-slate-800/60 space-y-1">
                <p>Mentions: <span className="font-semibold text-white">{channel.mentionCount.toLocaleString('id-ID')}</span></p>
                {channel.viralTopics && channel.viralTopics.length > 0 && (
                  <p className="text-[10px] text-slate-400 font-medium truncate">
                    🔥 Topik: {channel.viralTopics.join(', ')}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Viral Complaints vs Successful Campaigns Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Viral Complaints */}
        <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-800/60">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg bg-rose-900/60 text-rose-400 flex items-center justify-center">
              <Flame className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-rose-300 text-sm">
              Isu / Komplain Viral yang Perlu Atensi PR
            </h4>
          </div>

          <ul className="space-y-2 text-xs text-rose-200">
            {data.viralComplaints.map((item, i) => (
              <li key={i} className="flex items-start gap-2 bg-slate-950/70 p-2.5 rounded-lg border border-rose-900/50">
                <span className="text-rose-500 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Successful Campaigns */}
        <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/60">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg bg-emerald-900/60 text-emerald-400 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-emerald-300 text-sm">
              Kampanye & Respon Positif Publik Berhasil
            </h4>
          </div>

          <ul className="space-y-2 text-xs text-emerald-200">
            {data.successfulCampaigns.map((item, i) => (
              <li key={i} className="flex items-start gap-2 bg-slate-950/70 p-2.5 rounded-lg border border-emerald-900/50">
                <span className="text-emerald-500 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Executive Public Perception Note */}
      <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 leading-relaxed">
        <span className="font-bold text-amber-400 uppercase tracking-wider block mb-1">
          Kesimpulan Persepsi Brand di Mata Publik:
        </span>
        {data.publicPerceptionSummary}
      </div>

    </section>
  );
};
