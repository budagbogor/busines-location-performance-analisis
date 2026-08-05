import React from 'react';
import { Building, Star, MessageSquare, AlertTriangle, ShieldCheck, TrendingUp, Calendar, CheckCircle2 } from 'lucide-react';
import { FullIntelligenceReport } from '../types';

interface ExecutiveSummaryBannerProps {
  report: FullIntelligenceReport;
}

export const ExecutiveSummaryBanner: React.FC<ExecutiveSummaryBannerProps> = ({ report }) => {
  const redFlagCount = report.redFlagBranchIds.length;
  const topCount = report.branches.filter(b => b.status === 'Top').length;
  const mediumCount = report.branches.filter(b => b.status === 'Medium').length;

  return (
    <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-6 mb-8 relative overflow-hidden">
      {/* Blue accent top border line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-blue-600"></div>

      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
              Laporan Analisis Performa
            </span>
            <span className="flex items-center text-xs text-slate-500 font-medium gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" /> Periode Laporan: {report.analysisDate}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Entitas: {report.brandName}
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Analisis Performa Komprehensif Pemetaan Jaringan Multi-Lokasi & Reputation Intelligence
          </p>
        </div>

        {/* Network Health Status Badge */}
        <div className="flex items-center gap-3 self-start md:self-auto">
          <div className="bg-blue-600/10 border border-blue-500/30 rounded-lg px-3.5 py-2 text-center">
            <span className="block text-[10px] uppercase font-bold text-blue-600 tracking-wider">Executive Summary</span>
            <span className="text-xs font-black text-slate-900 uppercase">CONFIDENTIAL</span>
          </div>
          
          <div className={`px-4 py-2 rounded-lg border flex items-center gap-2.5 ${
            redFlagCount === 0 
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
              : redFlagCount <= 2 
                ? 'bg-amber-50 border-amber-200 text-amber-800'
                : 'bg-rose-50 border-rose-200 text-rose-800'
          }`}>
            {redFlagCount === 0 ? (
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
            )}
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider">
                Status Operasional
              </div>
              <div className="text-xs font-bold">
                {redFlagCount === 0 
                  ? 'Sangat Baik (Stabil)' 
                  : `${redFlagCount} Flag Cabang`}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        {/* Metric 1 */}
        <div className="bg-white p-4 rounded-lg shadow-2xs border border-slate-200">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">Rata-Rata Rating Google</p>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-black text-slate-900">{report.avgNetworkRating.toFixed(1)}</span>
            <span className="text-emerald-600 text-xs font-bold pb-1 flex items-center">
              ⭐ / 5.0
            </span>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-white p-4 rounded-lg shadow-2xs border border-slate-200">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">Total Ulasan Terdeteksi</p>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-black text-slate-900">{report.totalReviewsAnalyzed.toLocaleString('id-ID')}</span>
            <span className="text-slate-500 text-xs pb-1 font-semibold">{report.totalBranchesFound} Cabang</span>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-white p-4 rounded-lg shadow-2xs border border-slate-200">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">Sentimen Media Sosial</p>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-black text-blue-600">Positif</span>
            <span className="text-slate-500 text-xs pb-1 font-bold">Net {report.socialSentiment?.overallPositivePercentage || 76}%</span>
          </div>
        </div>

        {/* Metric 4 */}
        <div className="bg-white p-4 rounded-lg shadow-2xs border border-slate-200">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">Status Kinerja Cabang</p>
          <div className="flex items-end gap-2">
            <span className={`text-3xl font-black ${redFlagCount > 0 ? 'text-amber-500' : 'text-emerald-600'}`}>
              {redFlagCount > 0 ? 'Perhatian' : 'Stabil'}
            </span>
            <span className="text-slate-400 text-xs pb-1">{redFlagCount} Flag</span>
          </div>
        </div>
      </div>

      {/* Ringkasan Eksekutif */}
      <div className="mt-4 p-4 rounded-lg bg-slate-900 text-slate-200 border border-slate-800">
        <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2 flex items-center gap-1.5">
          <TrendingUp className="w-4 h-4 text-blue-400" /> Ringkasan Eksekutif Management Brief
        </h3>
        <p className="text-xs leading-relaxed text-slate-300 font-normal">
          {report.executiveSummary}
        </p>
      </div>
    </div>
  );
};
