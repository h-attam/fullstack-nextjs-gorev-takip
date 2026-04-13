"use client";
import React, { useState } from 'react';
import { mockTickets, Ticket } from '@/utils/data';
import KanbanBoard from '@/components/kanban-board';

export default function TicketsPage() {
  const [tickets, setTickets] = useState<Ticket[]>(mockTickets);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full">
      <div className="flex justify-between items-center mb-8 pt-2">
        <h1 className="text-xl font-medium text-[#ededed] tracking-tight">Görevler</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#ededed] text-[#0a0a0a] hover:bg-white px-3 py-1.5 rounded flex items-center gap-2 font-medium transition-colors text-[13px]"
        >
          <span className="text-base font-light leading-none mb-0.5">+</span>
          Yeni Görev
        </button>
      </div>

      <div className="flex-1 overflow-x-auto min-h-[500px]">
        <KanbanBoard tickets={tickets} />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-[#000000]/80 z-50 flex items-center justify-center p-4">
           <div className="bg-[#0a0a0a] border border-[#222] rounded-lg w-full max-w-md p-6 shadow-2xl">
              <h2 className="text-base font-medium mb-5 text-[#ededed]">Yeni İş Kaydı</h2>
              
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs text-[#888888] mb-1.5 font-medium">Başlık</label>
                  <input type="text" className="w-full bg-[#111] border border-[#222] rounded px-3 py-2 text-sm text-[#ededed] focus:outline-none focus:border-[#444] transition-colors" placeholder="Örn: Buton rengi uyuşmazlığı" />
                </div>
                <div>
                  <label className="block text-xs text-[#888888] mb-1.5 font-medium">Açıklama</label>
                  <textarea rows={3} className="w-full bg-[#111] border border-[#222] rounded px-3 py-2 text-sm text-[#ededed] focus:outline-none focus:border-[#444] transition-colors" placeholder="Problemin detayları..."></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#888888] mb-1.5 font-medium">Öncelik</label>
                    <select className="w-full bg-[#111] border border-[#222] rounded px-3 py-2 text-sm text-[#ededed] focus:outline-none focus:border-[#444] appearance-none transition-colors">
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-[#888888] mb-1.5 font-medium">Atanan Kişi</label>
                    <select className="w-full bg-[#111] border border-[#222] rounded px-3 py-2 text-sm text-[#ededed] focus:outline-none focus:border-[#444] appearance-none transition-colors">
                      <option>Hatice</option>
                      <option>Burak</option>
                      <option>Zeynep</option>
                      <option>Can</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-8">
                 <button onClick={() => setIsModalOpen(false)} className="px-4 py-1.5 rounded text-[13px] font-medium text-[#888888] hover:text-[#ededed] transition-colors">İptal</button>
                 <button onClick={() => setIsModalOpen(false)} className="px-4 py-1.5 bg-[#ededed] hover:bg-white text-[#0a0a0a] rounded text-[13px] font-medium transition-colors">Kayıt Oluştur</button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}