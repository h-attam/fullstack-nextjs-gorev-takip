import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: string;
  trendUp?: boolean;
}

const StatCard = ({ title, value, icon, trend, trendUp }: StatCardProps) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex flex-col justify-between hover:border-zinc-700 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-zinc-400 font-medium">{title}</h3>
        <div className="text-zinc-500 text-xl bg-zinc-800/50 p-2 rounded-lg">{icon}</div>
      </div>
      <div>
        <p className="text-4xl font-bold text-white mb-2">{value}</p>
        {trend && (
          <p className={`text-sm ${trendUp ? "text-emerald-400" : "text-rose-400"} flex items-center gap-1 font-medium`}>
            <span>{trendUp ? "↑" : "↓"}</span> {trend}
          </p>
        )}
      </div>
    </div>
  );
};

export default StatCard;
