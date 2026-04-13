import React from 'react';
import { mockUsers } from '@/utils/data';
import { FiMail, FiMessageCircle } from 'react-icons/fi';

export default function TeamsPage() {
  const teamMembers = mockUsers.filter(u => u.status === 'Active');

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto pb-10">
      <div>
        <h1 className="text-3xl font-bold mb-2">Takımlar & Üyeler</h1>
        <p className="text-zinc-400">Projedeki aktif çalışma arkadaşlarınızı görüntüleyin ve iletişime geçin.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 hover:bg-zinc-900 transition-all group flex flex-col items-center text-center">
             <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 flex items-center justify-center text-2xl font-bold border-4 border-zinc-950 shadow-lg text-white mb-4 group-hover:scale-105 transition-transform">
                {member.name.substring(0,2).toUpperCase()}
             </div>
             <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
             <span className="text-sm px-3 py-1 bg-zinc-800 rounded-full font-medium text-zinc-300 mb-4">{member.role}</span>
             <p className="text-zinc-500 text-sm mb-6 w-full truncate px-4">{member.email}</p>
             
             <div className="flex items-center gap-3 w-full mt-auto">
               <button className="flex-1 py-2.5 bg-blue-600/10 hover:bg-blue-600/20 text-blue-500 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors">
                  <FiMessageCircle /> Mesaj
               </button>
               <button className="flex-1 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors">
                  <FiMail /> E-posta
               </button>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
