import React from 'react';
import { FiMail, FiStar, FiClock, FiCheck, FiMoreVertical } from 'react-icons/fi';

const mockMessages = [
  { id: 1, sender: "Sistem Bildirimi", subject: "Yeni Ticket Atandı: T-1005", time: "10:42", read: false, starred: false },
  { id: 2, sender: "Ayşe Kaya", subject: "Proje raporu hakkında", time: "Dün", read: true, starred: true },
  { id: 3, sender: "Ahmet Yılmaz", subject: "Acil: Sunucu Hatası (#400)", time: "11 Nisan", read: true, starred: false },
  { id: 4, sender: "Jira Entegrasyonu", subject: "Sync tamamlandı", time: "10 Nisan", read: true, starred: false },
];

export default function InboxPage() {
  return (
    <div className="flex flex-col h-full bg-zinc-950 pb-10">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Gelen Kutusu</h1>
        <p className="text-zinc-400">Bildirimleriniz ve tarafınıza gönderilen takım mesajları.</p>
      </div>

      <div className="flex flex-1 gap-6 h-full max-lg:flex-col">
        {/* Sidebar for Inbox */}
        <div className="w-full lg:w-64 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4 h-fit">
          <ul className="flex flex-col gap-2 text-zinc-300 font-medium">
            <li className="flex items-center justify-between p-3 bg-blue-600 rounded-xl text-white">
              <span className="flex items-center gap-3"><FiMail /> Gelen Kutusu</span>
              <span className="bg-white/20 px-2 py-0.5 rounded-md text-xs">1</span>
            </li>
            <li className="flex items-center justify-between p-3 hover:bg-zinc-800/50 rounded-xl cursor-pointer transition-colors">
              <span className="flex items-center gap-3"><FiStar /> Yıldızlılar</span>
            </li>
            <li className="flex items-center justify-between p-3 hover:bg-zinc-800/50 rounded-xl cursor-pointer transition-colors">
              <span className="flex items-center gap-3"><FiClock /> Ertelenenler</span>
            </li>
            <li className="flex items-center justify-between p-3 hover:bg-zinc-800/50 rounded-xl cursor-pointer transition-colors mt-auto pt-6 border-t border-zinc-800">
              <span className="flex items-center gap-3"><FiCheck /> Arşivlenenler</span>
            </li>
          </ul>
        </div>

        {/* Inbox Content */}
        <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-2xl flex flex-col overflow-hidden">
          <div className="p-4 border-b border-zinc-800 flex justify-between items-center bg-zinc-950">
            <div className="flex items-center gap-4 text-zinc-400">
              <input type="checkbox" className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 accent-blue-600" />
              <button className="hover:text-white"><FiCheck className="text-lg" /></button>
            </div>
            <span className="text-xs text-zinc-500">1 - 4 arası gösteriliyor</span>
          </div>

          <div className="flex flex-col flex-1 overflow-y-auto">
            {mockMessages.map((msg) => (
              <div key={msg.id} className={`flex items-center justify-between p-4 border-b border-zinc-800/50 hover:bg-zinc-800/20 cursor-pointer transition-colors group ${!msg.read ? 'bg-blue-500/5' : ''}`}>
                <div className="flex items-center gap-4 flex-1">
                  <input type="checkbox" className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 accent-blue-600" />
                  <button className={`${msg.starred ? 'text-amber-500' : 'text-zinc-600 group-hover:text-zinc-400'}`}>
                     <FiStar className={msg.starred ? 'fill-amber-500' : ''} />
                  </button>
                  <span className={`w-32 truncate ${!msg.read ? 'font-bold text-white' : 'text-zinc-300'}`}>{msg.sender}</span>
                  <span className={`flex-1 truncate ${!msg.read ? 'font-bold text-slate-200' : 'text-zinc-400'}`}>{msg.subject}</span>
                </div>
                <div className="flex items-center gap-6 ml-4">
                  <span className={`text-sm ${!msg.read ? 'font-bold text-blue-400' : 'text-zinc-500'}`}>{msg.time}</span>
                  <button className="text-zinc-600 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"><FiMoreVertical /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
