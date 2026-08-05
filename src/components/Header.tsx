import React, { useState } from 'react';
import { Search, Sparkles, Building2, Download, Printer, RefreshCw, AlertCircle, ExternalLink } from 'lucide-react';

interface HeaderProps {
  currentBrand: string;
  onSearch: (brandName: string) => void;
  isLoading: boolean;
  onExportMarkdown: () => void;
  onExportJSON: () => void;
  onPrint: () => void;
  presetBrands: string[];
}

export const Header: React.FC<HeaderProps> = ({
  currentBrand,
  onSearch,
  isLoading,
  onExportMarkdown,
  onExportJSON,
  onPrint,
  presetBrands
}) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput.trim());
    }
  };

  return (
    <header className="bg-slate-900 border-b-4 border-blue-600 text-white sticky top-0 z-40 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          
          {/* Logo & Identity */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-slate-900 flex items-center justify-center shadow-lg shadow-blue-500/20 ring-1 ring-white/20">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                  ANALISIS PERFORMA KOMPREHENSIF
                </h1>
                <div className="hidden sm:flex items-center gap-1 bg-blue-600/20 border border-blue-500/40 rounded px-2 py-0.5 text-[10px] font-bold text-blue-300 uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-blue-400 animate-pulse" /> CONFIDENTIAL
                </div>
              </div>
              <p className="text-xs text-slate-400 font-medium">
                AutoReputation AI • Multi-Location Business & Reputation Intelligence
              </p>
            </div>
          </div>

          {/* Search Bar Input */}
          <form onSubmit={handleSubmit} className="flex-1 max-w-xl">
            <div className="relative group">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-400 transition-colors" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Ketik nama bisnis / bengkel (contoh: Mobeng, B-Quik, Bengkel BOS, Astra Otoservice)..."
                className="w-full pl-10 pr-28 py-2 bg-slate-800/90 border border-slate-700/80 rounded-lg text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-inner"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !searchInput.trim()}
                className="absolute right-1 top-1/2 -translate-y-1/2 px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded text-xs transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1 shadow"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-3 h-3 animate-spin" />
                    <span>Mencari...</span>
                  </>
                ) : (
                  <>
                    <span>Deep Search</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Action Export Buttons */}
          <div className="flex items-center space-x-2 justify-end">
            <button
              onClick={onPrint}
              title="Cetak Laporan PDF Eksekutif"
              className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700 transition-colors gap-1.5"
            >
              <Printer className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline">Cetak PDF</span>
            </button>

            <button
              onClick={onExportMarkdown}
              title="Ekspor Ringkasan Laporan Markdown"
              className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700 transition-colors gap-1.5"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Ekspor Markdown</span>
            </button>

            <button
              onClick={onExportJSON}
              title="Download Raw Data JSON"
              className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700 transition-colors gap-1.5"
            >
              <Download className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">JSON</span>
            </button>
          </div>
        </div>

        {/* Preset Brand Pills */}
        <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
          <span className="text-slate-400 font-medium shrink-0 flex items-center gap-1">
            <Building2 className="w-3 h-3 text-slate-400" /> Merek Preset Fast-Load:
          </span>
          {presetBrands.map((brand) => (
            <button
              key={brand}
              onClick={() => onSearch(brand)}
              disabled={isLoading}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all shrink-0 border ${
                currentBrand.toLowerCase().includes(brand.toLowerCase())
                  ? 'bg-blue-600/30 text-blue-300 border-blue-500/50 font-bold ring-1 ring-blue-500/40'
                  : 'bg-slate-800/60 text-slate-300 border-slate-700/60 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

      </div>
    </header>
  );
};
