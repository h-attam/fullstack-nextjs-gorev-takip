import React from 'react';
import StatCard from '@/components/stat-card';
import { FiTrendingUp, FiCheckCircle, FiClock, FiAlertCircle } from 'react-icons/fi';

export default function StatisticsPage() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto pb-10">
      <div>
        <h1 className="text-3xl font-bold mb-2">İstatistikler ve Raporlar</h1>
        <p className="text-zinc-400">Ekibin eforu ve süreç performansı analizi.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Bilet Kapatma Hızı" value="2.4 Saat" icon={<FiClock />} trend="Hızlandı" trendUp={true} />
        <StatCard title="Başarı Oranı" value="%94.2" icon={<FiTrendingUp />} trend="Geçen Aya Göre" trendUp={true} />
        <StatCard title="Bu Ay Çözülen" value="145" icon={<FiCheckCircle />} trend="%12 iyileşme" trendUp={true} />
        <StatCard title="SLA İhlalleri" value="3" icon={<FiAlertCircle />} trend="Dikkat" trendUp={false} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 lg:p-8 flex flex-col min-h-[400px]">
          <h2 className="text-xl font-bold mb-6">Aylık Çözüm Performansı</h2>
          <div className="flex-1 flex items-end justify-between gap-2 border-b border-zinc-800 pb-2 relative font-mono text-xs">
             <div className="absolute top-0 left-0 w-full border-t border-zinc-800/40 text-zinc-600 -mt-2">100</div>
             <div className="absolute top-1/2 left-0 w-full border-t border-zinc-800/40 text-zinc-600 -mt-2">50</div>
             
             {/* Mock Chart Bars */}
             <div className="w-1/12 bg-blue-600/30 hover:bg-blue-600 rounded-t-md h-[45%] relative group"><span className="absolute -top-7 opacity-0 group-hover:opacity-100 font-bold bg-zinc-800 px-2 py-1 rounded w-full text-center">45</span></div>
             <div className="w-1/12 bg-blue-600/30 hover:bg-blue-600 rounded-t-md h-[60%] relative group"><span className="absolute -top-7 opacity-0 group-hover:opacity-100 font-bold bg-zinc-800 px-2 py-1 rounded w-full text-center">60</span></div>
             <div className="w-1/12 bg-blue-600/30 hover:bg-blue-600 rounded-t-md h-[55%] relative group"><span className="absolute -top-7 opacity-0 group-hover:opacity-100 font-bold bg-zinc-800 px-2 py-1 rounded w-full text-center">55</span></div>
             <div className="w-1/12 bg-blue-600/30 hover:bg-blue-600 rounded-t-md h-[80%] relative group"><span className="absolute -top-7 opacity-0 group-hover:opacity-100 font-bold bg-zinc-800 px-2 py-1 rounded w-full text-center">80</span></div>
             <div className="w-1/12 bg-blue-600/80 hover:bg-blue-500 rounded-t-md h-[95%] relative group shadow-[0_0_15px_rgba(37,99,235,0.5)]"><span className="absolute -top-7 opacity-0 group-hover:opacity-100 font-bold bg-zinc-800 px-2 py-1 rounded w-full text-center">95</span></div>
          </div>
          <div className="flex justify-between mt-3 text-sm text-zinc-500 font-medium">
             <span>Ocak</span>
             <span>Şubat</span>
             <span>Mart</span>
             <span>Nisan</span>
             <span>Mayıs</span>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 lg:p-8 flex flex-col">
          <h2 className="text-xl font-bold mb-6">En Çok Katkı Verenler</h2>
          <div className="flex flex-col gap-5 flex-1">
            {[ 
              { name: "Ahmet Yılmaz", score: 48, role: "Developer", color: "bg-emerald-500" },
              { name: "Ayşe Kaya", score: 36, role: "Developer", color: "bg-blue-500" },
              { name: "Hatice Kartal", score: 29, role: "Developer", color: "bg-purple-500" }
            ].map((person, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-sm ${person.color}`}>
                  {person.name.substring(0,2).toUpperCase()}
                </div>
                <div className="flex-1">
                   <p className="font-semibold text-white">{person.name}</p>
                   <div className="w-full bg-zinc-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
                     <div className={`h-full ${person.color}`} style={{ width: `${(person.score / 50) * 100}%` }}></div>
                   </div>
                </div>
                <div className="font-bold font-mono text-zinc-300">{person.score}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
