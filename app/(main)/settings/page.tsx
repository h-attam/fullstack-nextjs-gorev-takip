import React from 'react';
import { FiUser, FiBell, FiShield, FiMonitor } from 'react-icons/fi';

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto w-full pb-10 flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Ayarlar</h1>
        <p className="text-zinc-400">Hesap tercihlerinizi ve sistem ayarlarınızı yapılandırın.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Settings Navigation */}
        <div className="col-span-1">
          <ul className="flex flex-col gap-1.5 font-medium text-sm">
            <li>
              <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl bg-blue-600/10 text-blue-500 text-left">
                <FiUser className="text-lg" /> Profil
              </button>
            </li>
            <li>
              <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-zinc-400 hover:bg-zinc-900 hover:text-white text-left transition-colors">
                <FiBell className="text-lg" /> Bildirimler
              </button>
            </li>
            <li>
              <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-zinc-400 hover:bg-zinc-900 hover:text-white text-left transition-colors">
                <FiMonitor className="text-lg" /> Görünüm
              </button>
            </li>
            <li>
              <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-zinc-400 hover:bg-zinc-900 hover:text-white text-left transition-colors">
                <FiShield className="text-lg" /> Güvenlik
              </button>
            </li>
          </ul>
        </div>

        {/* Settings Content */}
        <div className="col-span-1 md:col-span-3 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 lg:p-8">
          <h2 className="text-xl font-bold mb-6 pb-4 border-b border-zinc-800 text-white">Profil Bilgileri</h2>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center text-3xl font-bold border-4 border-zinc-950 shadow-lg">
                HK
              </div>
              <div className="flex flex-col gap-2">
                <button className="px-5 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-medium transition-colors text-sm">Resmi Değiştir</button>
                <button className="px-5 py-2 text-rose-500 hover:bg-rose-500/10 rounded-lg font-medium transition-colors text-sm">Kaldır</button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Ad Soyad</label>
                <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" defaultValue="Hatice Kartal" />
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-2">E-Posta Adresi</label>
                <input type="email" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" defaultValue="hatice.kartal@example.com" />
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Unvan / Görev</label>
                <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-slate-500 focus:outline-none" defaultValue="Geliştirici" disabled />
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Saat Dilimi</label>
                <select className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 appearance-none">
                  <option>(GMT+03:00) Istanbul</option>
                  <option>(GMT+00:00) London</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-zinc-800">
               <button className="px-6 py-2.5 rounded-xl text-zinc-400 hover:text-white font-medium">Değişiklikleri Geri Al</button>
               <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium shadow-lg shadow-blue-600/20">Kaydet</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
