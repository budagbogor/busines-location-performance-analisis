import React from 'react';
import { X, Star, ThumbsUp, ThumbsDown, AlertTriangle, TrendingDown, CheckCircle2, MessageSquare, MapPin, Calendar, Tag } from 'lucide-react';
import { BranchData } from '../types';

interface BranchDetailModalProps {
  branch: BranchData | null;
  onClose: () => void;
}

export const BranchDetailModal: React.FC<BranchDetailModalProps> = ({ branch, onClose }) => {
  if (!branch) return null;

  const isRedFlag = branch.status === 'Attention Required';

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full border border-slate-200 overflow-hidden my-8 transform transition-all animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`p-6 border-b flex items-start justify-between ${
          isRedFlag ? 'bg-rose-50/80 border-rose-200' : 'bg-slate-900 text-white border-slate-800'
        }`}>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                isRedFlag 
                  ? 'bg-rose-600 text-white' 
                  : branch.status === 'Top' 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-amber-500 text-slate-950'
              }`}>
                {isRedFlag ? 'RED FLAG BRANCH - PERHATIAN KHUSUS' : `Status Kinerja: ${branch.status}`}
              </span>
              <span className={`text-xs flex items-center gap-1 ${isRedFlag ? 'text-rose-800' : 'text-slate-400'}`}>
                📍 {branch.city}
              </span>
            </div>

            <h3 className={`text-2xl font-bold tracking-tight ${isRedFlag ? 'text-rose-950' : 'text-white'}`}>
              {branch.name}
            </h3>
            {branch.address && (
              <p className={`text-xs mt-1 ${isRedFlag ? 'text-rose-800' : 'text-slate-400'}`}>
                {branch.address}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors ${
              isRedFlag 
                ? 'text-rose-700 hover:bg-rose-200/60' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6 text-slate-800">
          
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div>
              <p className="text-xs text-slate-500 uppercase font-semibold">Rating Google</p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-2xl font-black text-slate-900">{branch.rating.toFixed(1)}</span>
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              </div>
            </div>

            <div>
              <p className="text-xs text-slate-500 uppercase font-semibold">Total Ulasan</p>
              <p className="text-2xl font-black text-slate-900 mt-1">
                {branch.reviewCount.toLocaleString('id-ID')}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-500 uppercase font-semibold">Indikasi Isu Komplain</p>
              <p className={`text-2xl font-black mt-1 ${branch.complaintCount > 50 ? 'text-rose-600' : 'text-slate-900'}`}>
                {branch.complaintCount} <span className="text-xs font-normal text-slate-500">Isu</span>
              </p>
            </div>
          </div>

          {/* Trend details alert if available */}
          {branch.trendDetails && (
            <div className={`p-4 rounded-xl border flex items-start gap-3 ${
              isRedFlag ? 'bg-rose-50 border-rose-200 text-rose-900' : 'bg-amber-50 border-amber-200 text-amber-900'
            }`}>
              <TrendingDown className={`w-5 h-5 shrink-0 mt-0.5 ${isRedFlag ? 'text-rose-600' : 'text-amber-600'}`} />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider">Catatan Tren Performa (3-6 Bulan Terakhir)</p>
                <p className="text-xs font-medium mt-0.5 leading-relaxed">
                  {branch.trendDetails}
                </p>
              </div>
            </div>
          )}

          {/* Breakdown Positif vs Negatif Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Poin Utama Positif */}
            <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200/80">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <ThumbsUp className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-emerald-950 text-sm">
                  Poin-Poin Utama Positif
                </h4>
              </div>

              {branch.positives.length === 0 ? (
                <p className="text-xs text-slate-500">Tidak ada poin positif signifikan terdeteksi.</p>
              ) : (
                <ul className="space-y-2.5">
                  {branch.positives.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-emerald-900">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Poin Utama Negatif / Komplain */}
            <div className="p-4 rounded-xl bg-rose-50/50 border border-rose-200/80">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center">
                  <ThumbsDown className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-rose-950 text-sm">
                  Poin Negatif / Komplain Utama
                </h4>
              </div>

              {branch.negatives.length === 0 ? (
                <p className="text-xs text-slate-500">Tidak ada komplain serius terdeteksi pada cabang ini.</p>
              ) : (
                <ul className="space-y-2.5">
                  {branch.negatives.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-rose-950 font-medium">
                      <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

          </div>

          {/* Ulasan Konsumen Terkini */}
          {branch.recentReviews && branch.recentReviews.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-amber-500" />
                Sampel Ulasan Konsumen Asli Google Review
              </h4>

              <div className="space-y-3">
                {branch.recentReviews.map((rev) => (
                  <div key={rev.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">{rev.author}</span>
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3 h-3 ${i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-slate-400 text-[11px]">{rev.date}</span>
                    </div>

                    <p className="text-slate-700 leading-relaxed italic">
                      "{rev.text}"
                    </p>

                    {rev.tags && rev.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {rev.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-slate-200/70 text-slate-700 text-[10px] font-medium flex items-center gap-1">
                            <Tag className="w-2.5 h-2.5" /> {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
          >
            Tutup Analisis
          </button>
        </div>

      </div>
    </div>
  );
};
