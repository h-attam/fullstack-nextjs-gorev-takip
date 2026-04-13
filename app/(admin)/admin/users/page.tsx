import React from 'react';
import { mockUsers } from '@/utils/data';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

export default function UsersPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-xl font-medium text-[#ededed] tracking-tight">Erişim Yönetimi</h1>
        <button className="bg-[#ededed] hover:bg-white text-[#0a0a0a] px-3 py-1.5 rounded flex items-center gap-2 font-medium transition-colors text-[13px]">
          <span className="text-base font-light leading-none mb-0.5">+</span> Yeni Kullanıcı
        </button>
      </div>

      <div className="bg-[#111111] border border-[#222222] rounded-lg overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px] text-[#888888]">
            <thead className="bg-[#0a0a0a] text-[#666666] text-xs border-b border-[#222222]">
              <tr>
                <th className="px-5 py-3 font-medium">Hesap Adı</th>
                <th className="px-5 py-3 font-medium">E-posta</th>
                <th className="px-5 py-3 font-medium">Bölüm / Rol</th>
                <th className="px-5 py-3 font-medium">Bağlantı</th>
                <th className="px-5 py-3 font-medium text-right">Düzenle</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#222222]">
              {mockUsers.map(user => (
                <tr key={user.id} className="hover:bg-[#1a1a1a] transition-colors group">
                  <td className="px-5 py-3.5 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded border border-[#333] bg-[#222] flex items-center justify-center font-bold text-[#ededed] text-[10px]">
                        {user.name.substring(0, 1)}
                      </div>
                      <span className="font-medium text-[#ededed]">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 whitespace-nowrap font-mono text-xs">{user.email}</td>
                  <td className="px-5 py-3.5 whitespace-nowrap">
                    <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-[#222] border border-[#333] text-[#ededed]">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 whitespace-nowrap">
                    <div className="flex items-center gap-1.5 font-medium text-xs">
                      <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : 'bg-[#444]'}`}></span>
                      {user.status === 'Active' ? 'Aktif' : 'Askıda'}
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-right whitespace-nowrap">
                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-[#666] hover:text-[#ededed] rounded transition-colors" title="Düzenle">
                        <FiEdit2 />
                      </button>
                      <button className="p-1.5 text-[#666] hover:text-rose-500 rounded transition-colors" title="Sil">
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
