import React from 'react';
import StatCard from '@/components/stat-card';
import { FaTicketAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { mockTickets } from '@/utils/data';

export default function Dashboard() {
  const openTickets = mockTickets.filter(t => t.status !== 'Done').length;
  const inProgressTickets = mockTickets.filter(t => t.status === 'In Progress').length;
  const doneTickets = mockTickets.filter(t => t.status === 'Done').length;
  const highPriority = mockTickets.filter(t => t.priority === 'High').length;

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto pb-10">
      <div>
        <h1 className="text-3xl font-bold mb-2">Genel Bakış</h1>
        <p className="text-zinc-400">Sistemdeki güncel görev durumları ve özet bildirimler.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Açık Görevler" value={openTickets} icon={<FaTicketAlt />} trend="Dünden %12 fazla" trendUp={false} />
        <StatCard title="Çözülenler" value={doneTickets} icon={<FaCheckCircle />} trend="Geçen haftaya göre %5 artış" trendUp={true} />
        <StatCard title="Devam Edenler" value={inProgressTickets} icon={<FiClock />} />
        <StatCard title="Acil Öncelikli" value={highPriority} icon={<FaExclamationCircle />} trend="Dikkat gerektiriyor" trendUp={false} />
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 lg:p-8">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">Son Aktiviteler <span className="bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded-full font-semibold">Yeni</span></h2>
        <div className="flex flex-col gap-4">
          {mockTickets.slice(0, 4).map(ticket => (
            <div key={ticket.id} className="group flex flex-col sm:flex-row justify-between items-start sm:items-center bg-zinc-950 p-5 rounded-xl border border-zinc-800/50 hover:border-zinc-700 transition-colors gap-4">
              <div className="flex flex-col gap-1.5">
                <span className="text-white font-medium text-lg group-hover:text-blue-400 transition-colors">{ticket.title}</span>
                <span className="text-sm text-zinc-500">{ticket.id} • <span className="text-zinc-400">{ticket.assignee}</span> tarafından üstlenildi</span>
              </div>
              <span className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap
                ${ticket.status === 'Done' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 
                  ticket.status === 'In Progress' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 
                  'bg-amber-500/10 text-amber-400 border border-amber-500/20'}
              `}>
                {ticket.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}