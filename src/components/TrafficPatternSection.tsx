import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import { Clock, Calendar, AlertCircle, Zap, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { TrafficPattern } from '../types';

interface TrafficPatternSectionProps {
  pattern: TrafficPattern;
}

export const TrafficPatternSection: React.FC<TrafficPatternSectionProps> = ({ pattern }) => {
  return (
    <section className="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl p-6 mb-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
            <h3 className="text-xl font-bold text-white tracking-tight">
              5. Pattern Kedatangan & Tren Keramaian (Footfall Analysis)
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Analisis pola waktu tersibuk (peak hours), hari paling ramai, dan indikasi penumpukan beban kerja operasional jaringan.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Summary Cards & Badges (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Busy Days Card */}
          <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200/80">
            <div className="flex items-center gap-2 text-indigo-900 mb-2">
              <Calendar className="w-4 h-4 text-indigo-600 shrink-0" />
              <h4 className="font-bold text-xs uppercase tracking-wider">
                Hari Paling Ramai (Peak Days)
              </h4>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {pattern.busyDays.map((day, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-indigo-600 text-white font-bold text-xs shadow-2xs">
                  {day}
                </span>
              ))}
            </div>
          </div>

          {/* Peak Hours Card */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80">
            <div className="flex items-center gap-2 text-amber-900 mb-2">
              <Clock className="w-4 h-4 text-amber-600 shrink-0" />
              <h4 className="font-bold text-xs uppercase tracking-wider">
                Jam Tersibuk (Peak Hours)
              </h4>
            </div>
            <p className="text-base font-extrabold text-amber-950">
              {pattern.peakHours}
            </p>
            <p className="text-xs text-amber-800 mt-1">
              Waktu Paling Longgar: <span className="font-semibold">{pattern.quietHours}</span>
            </p>
          </div>

          {/* Traffic Narrative Summary */}
          <div className="p-4 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 text-xs leading-relaxed">
            <p className="font-bold text-amber-400 mb-1 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" /> Temuan Pola Kunjungan:
            </p>
            <p className="text-slate-300">
              {pattern.summary}
            </p>
          </div>

          {/* Quick Recommendations */}
          {pattern.recommendations && pattern.recommendations.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
              <h5 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                Mitigasi Penumpukan Jam Sibuk:
              </h5>
              {pattern.recommendations.map((rec, idx) => (
                <div key={idx} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                  <span>{rec}</span>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Right Side: Hourly Traffic Bar Chart (7 cols) */}
        <div className="lg:col-span-7 bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Grafik Distribusi Kepadatan Unit per Jam (08.00 - 18.00)
              </h4>
              <div className="flex items-center gap-3 text-[11px]">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Normal
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Sedang
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-600"></span> Puncak Padat
                </span>
              </div>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={pattern.hourlyDistribution} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="hour" tick={{ fontSize: 11, fill: '#64748b' }} />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: '#64748b' }} />
                  <Tooltip
                    formatter={(value: any, name: any, item: any) => [
                      `${value}% Kepadatan (${item.payload.label})`,
                      'Tingkat Keramaian'
                    ]}
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                  />
                  <Bar dataKey="trafficLevel" radius={[6, 6, 0, 0]}>
                    {pattern.hourlyDistribution.map((entry, index) => {
                      let fillColor = '#10b981'; // Green
                      if (entry.trafficLevel > 75) fillColor = '#e11d48'; // Red
                      else if (entry.trafficLevel > 50) fillColor = '#f59e0b'; // Yellow
                      return <Cell key={`bar-${index}`} fill={fillColor} />;
                    })}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <p className="text-[11px] text-slate-500 text-center mt-3 pt-2 border-t border-slate-200">
            * Indikator 100% merepresentasikan kapasitas maksimal pit & ruang tunggu cabang secara bersamaan.
          </p>
        </div>

      </div>

    </section>
  );
};
