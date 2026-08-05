import React from 'react';
import { X, Star, AlertTriangle, CheckCircle, TrendingUp, TrendingDown, Minus, ArrowRightLeft, ShieldAlert, Sparkles, Building2 } from 'lucide-react';
import { BranchData } from '../types';

interface BranchComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBranches: BranchData[];
  onRemoveBranch: (branchId: string) => void;
}

export const BranchComparisonModal: React.FC<BranchComparisonModalProps> = ({
  isOpen,
  onClose,
  selectedBranches,
  onRemoveBranch,
}) => {
  if (!isOpen || selectedBranches.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-5xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 bg-slate-900/90 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-amber-500/20">
              <ArrowRightLeft className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                Komparasi Head-to-Head Cabang ({selectedBranches.length}/3)
              </h2>
              <p className="text-xs text-slate-400">
                Analisis perbandingan langsung performa, rating, komplain, dan tren antar lokasi cabang.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content - Side by Side Grid */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
          
          <div className={`grid grid-cols-1 ${selectedBranches.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-4`}>
            {selectedBranches.map((branch) => {
              const isRedFlag = branch.status === 'Attention Required' || branch.complaintCount > 50;

              return (
                <div
                  key={branch.id}
                  className={`rounded-2xl border p-5 flex flex-col justify-between transition-all ${
                    isRedFlag
                      ? 'bg-rose-950/30 border-rose-500/50 shadow-lg shadow-rose-950/20'
                      : branch.status === 'Top'
                      ? 'bg-emerald-950/20 border-emerald-500/40'
                      : 'bg-slate-800/60 border-slate-700/80'
                  }`}
                >
                  {/* Top Info & Remove Button */}
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono text-[10px] font-bold">
                          📍 {branch.city}
                        </span>
                        <h3 className="text-sm font-extrabold text-white mt-1.5 leading-snug">
                          {branch.name}
                        </h3>
                        {branch.address && (
                          <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{branch.address}</p>
                        )}
                      </div>
                      <button
                        onClick={() => onRemoveBranch(branch.id)}
                        className="p-1 rounded text-slate-400 hover:text-rose-400 hover:bg-slate-800"
                        title="Hapus dari komparasi"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    {/* KPI Badge Comparison */}
                    <div className="grid grid-cols-2 gap-2 my-4">
                      <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-800 text-center">
                        <div className="text-[10px] font-bold text-slate-400 uppercase">RATING GOOGLE</div>
                        <div className="text-lg font-black text-amber-400 flex items-center justify-center gap-1 mt-0.5">
                          {branch.rating.toFixed(1)} <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{branch.reviewCount.toLocaleString('id-ID')} ulasan</div>
                      </div>

                      <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-800 text-center">
                        <div className="text-[10px] font-bold text-slate-400 uppercase">ISU KOMPLAIN</div>
                        <div className={`text-lg font-black mt-0.5 ${branch.complaintCount > 50 ? 'text-rose-400' : 'text-slate-200'}`}>
                          {branch.complaintCount} Isu
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5 flex items-center justify-center gap-1">
                          {branch.trendScore === 'improving' && <span className="text-emerald-400 font-bold flex items-center"><TrendingUp className="w-3 h-3 mr-0.5" />Membaik</span>}
                          {branch.trendScore === 'declining' && <span className="text-rose-400 font-bold flex items-center"><TrendingDown className="w-3 h-3 mr-0.5" />Menurun</span>}
                          {branch.trendScore === 'stable' && <span className="text-slate-400 flex items-center"><Minus className="w-3 h-3 mr-0.5" />Stabil</span>}
                        </div>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="mb-4">
                      {isRedFlag ? (
                        <div className="p-2 rounded-lg bg-rose-500/20 border border-rose-500/40 text-rose-300 font-bold text-center text-[11px] flex items-center justify-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-rose-400" /> PERLU PERHATIAN EKSEKUTIF (RED FLAG)
                        </div>
                      ) : branch.status === 'Top' ? (
                        <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-center text-[11px] flex items-center justify-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> PERFORMA UNGGULAN (TOP)
                        </div>
                      ) : (
                        <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/40 text-blue-300 font-bold text-center text-[11px]">
                          PERFORMA STABIL (MEDIUM)
                        </div>
                      )}
                    </div>

                    {/* Positive Highlights */}
                    <div className="mb-3">
                      <div className="text-[11px] font-bold text-emerald-400 mb-1 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> Poin Positif Utama:
                      </div>
                      <ul className="space-y-1 pl-2">
                        {branch.positives.slice(0, 3).map((pos, idx) => (
                          <li key={idx} className="text-slate-300 text-[11px] flex items-start gap-1.5">
                            <span className="text-emerald-400 font-bold">•</span>
                            <span className="leading-snug">{pos}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Negative Highlights */}
                    <div>
                      <div className="text-[11px] font-bold text-rose-400 mb-1 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> Keluhan Pelanggan:
                      </div>
                      <ul className="space-y-1 pl-2">
                        {branch.negatives.slice(0, 3).map((neg, idx) => (
                          <li key={idx} className="text-slate-300 text-[11px] flex items-start gap-1.5">
                            <span className="text-rose-400 font-bold">•</span>
                            <span className="leading-snug">{neg}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Summary Comparison Footer */}
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] text-slate-400 italic">
                    {branch.trendDetails || 'Kinerja berdasarkan agregasi ulasan Google Maps real-time.'}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-slate-800 bg-slate-900 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Dua hingga tiga cabang dapat dibandingkan secara berurutan.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs transition-colors"
          >
            Tutup Pembanding
          </button>
        </div>

      </div>
    </div>
  );
};
