import React from 'react';
import { FiUsers, FiActivity, FiServer, FiAlertTriangle } from 'react-icons/fi';
import { mockUsers, mockTickets } from '@/utils/data';

const AdminStatCard = ({ title, value, icon, trend, trendUp }: any) => (
  <div className="bg-[#111111] border border-[#222222] p-5 rounded-lg flex flex-col justify-between hover:border-[#444444] transition-colors shadow-sm">
    <div className="flex justify-between items-start mb-3">
      <h3 className="text-[#888888] font-medium text-xs">{title}</h3>
      <div className="text-[#666666] text-sm">{icon}</div>
    </div>
    <div>
      <p className="text-2xl font-medium text-[#ededed] mb-1">{value}</p>
      {trend && (
        <p className={`text-[11px] ${trendUp ? "text-white" : "text-[#888]"} font-medium flex items-center gap-1`}>
          <span className={trendUp ? "text-emerald-500" : "text-rose-500"}>{trendUp ? "↑" : "↓"}</span> {trend}
        </p>
      )}
    </div>
  </div>
);

export default function AdminDashboard() {
  const activeUsers = mockUsers.filter(u => u.status === 'Active').length;
  const totalTickets = mockTickets.length;
  
  return (
    <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto">
      <div className="mb-2">
        <h1 className="text-xl font-medium text-[#ededed] tracking-tight">Sistem Özeti</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <AdminStatCard title="Kayıtlı Profil" value={mockUsers.length} icon={<FiUsers />} trend="2 yeni onaylandı" trendUp={true} />
        <AdminStatCard title="Aktif Oturum" value={activeUsers} icon={<FiActivity />} />
        <AdminStatCard title="Görev Hacmi" value={totalTickets} icon={<FiServer />} trend="Stabil akış" trendUp={true} />
        <AdminStatCard title="API Hataları" value="1" icon={<FiAlertTriangle />} trend="SMTP Timeout" trendUp={false} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2">
        <div className="bg-[#111111] border border-[#222222] rounded-lg p-6 shadow-sm">
          <h2 className="text-sm font-medium mb-4 text-[#ededed]">Sistem Logları</h2>
          <div className="flex flex-col gap-2.5 font-mono text-[11px]">
            <div className="bg-[#0a0a0a] p-3 rounded border border-[#222] text-[#888]">
              <span className="text-emerald-500 mr-2">[INFO]</span> 14:02 : Account provisioned (can.s@acme.inc)
            </div>
            <div className="bg-[#0a0a0a] p-3 rounded border border-[#222] text-[#888]">
              <span className="text-rose-500 mr-2">[FAIL]</span> 11:45 : SMTP Econnrefused (Connection Timeout)
            </div>
            <div className="bg-[#0a0a0a] p-3 rounded border border-[#222] text-[#888]">
              <span className="text-emerald-500 mr-2">[INFO]</span> 09:30 : PostgreSQL snapshot synced to S3
            </div>
          </div>
        </div>

        <div className="bg-[#111111] border border-[#222222] rounded-lg p-6 shadow-sm">
          <h2 className="text-sm font-medium mb-4 text-[#ededed]">Son Açılan Kayıtlar</h2>
          <div className="flex flex-col gap-3">
             {mockTickets.slice(-3).reverse().map(ticket => (
               <div key={ticket.id} className="flex flex-col gap-1.5 pb-3 py-1 border-b border-[#222] last:border-0 last:pb-0">
                  <span className="text-[13px] font-medium text-[#ededed]">{ticket.title}</span>
                  <div className="flex justify-between items-center text-[11px] text-[#666666]">
                    <span>Atanan: <span className="text-[#888] font-medium">{ticket.assignee}</span></span>
                    <span className="font-mono text-[10px]">{ticket.createdAt}</span>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
