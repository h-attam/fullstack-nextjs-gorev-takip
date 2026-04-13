import React from 'react';

export default function AdminSettingsPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-xl font-medium text-[#ededed] tracking-tight">Konfigürasyon</h1>
        <button className="bg-[#ededed] hover:bg-white text-[#0a0a0a] px-4 py-1.5 rounded font-medium transition-colors text-[13px]">
          Kaydet
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Nav Tabs */}
        <div className="w-full md:w-56 shrink-0 flex flex-col gap-1">
          <button className="w-full text-left px-3 py-2 text-[13px] font-medium rounded-md bg-[#111111] border border-[#222222] text-[#ededed] cursor-default shadow-sm">
            Genel Preferanslar
          </button>
          <button className="w-full text-left px-3 py-2 text-[13px] font-medium rounded-md hover:bg-[#111111] text-[#888888] hover:text-[#ededed] transition-colors">
            SMTP & Mail
          </button>
          <button className="w-full text-left px-3 py-2 text-[13px] font-medium rounded-md hover:bg-[#111111] text-[#888888] hover:text-[#ededed] transition-colors">
            Yedekleme Stratejisi
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 bg-[#111111] border border-[#222222] rounded-lg p-6 w-full shadow-sm">
          <h2 className="text-sm font-medium mb-6 text-[#ededed] border-b border-[#222] pb-3">Sistem Görünümü</h2>
          
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] font-medium text-[#888888] mb-1.5 uppercase tracking-wide">Organizasyon Adı</label>
                <input type="text" className="w-full bg-[#0a0a0a] border border-[#222] rounded px-3 py-2 text-sm text-[#ededed] focus:outline-none focus:border-[#444] transition-colors" defaultValue="Acme Corp." />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-[#888888] mb-1.5 uppercase tracking-wide">Lokalizasyon</label>
                <select className="w-full bg-[#0a0a0a] border border-[#222] rounded px-3 py-2 text-sm text-[#ededed] focus:outline-none focus:border-[#444] appearance-none transition-colors">
                  <option>TR (Türkiye)</option>
                  <option>EN (Global)</option>
                </select>
              </div>
            </div>

            <h2 className="text-sm font-medium mt-4 mb-4 text-[#ededed] border-b border-[#222] pb-3">Erişim Yönetimi</h2>

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between p-4 rounded-md bg-[#0a0a0a] border border-[#222]">
                <div>
                  <p className="text-[13px] text-[#ededed] font-medium mb-1">Maintanence Modu</p>
                  <p className="text-[11px] text-[#666666]">Admin yetkisi olmayan tüm personelin sisteme erişimini <span className="text-[#888]">503 Offline</span> vererek keser.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-8 h-4 bg-[#222] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-[#0a0a0a] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#888] peer-checked:after:bg-[#0a0a0a] after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#ededed]"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-md bg-[#0a0a0a] border border-[#222]">
                <div>
                  <p className="text-[13px] text-[#ededed] font-medium mb-1">Kendi Kendine Kayıt</p>
                  <p className="text-[11px] text-[#666666]">Davetiye gerekmeksizin dışarıdan açık personellerin üye olmasını aktifleştirir.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-8 h-4 bg-[#222] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-[#0a0a0a] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#888] peer-checked:after:bg-[#0a0a0a] after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#ededed]"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
