import React from 'react';
import { FiSearch, FiBell } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="h-[52px] flex items-center justify-between px-6 lg:px-10 bg-[#0a0a0a] border-b border-[#222222] shrink-0">
      <div className="flex items-center gap-3 text-[#888888]">
        <h1 className="text-[#ededed] font-medium text-[13px]">Proje Görünümü</h1>
        <span className="w-1 h-1 rounded-full bg-[#444444]"></span>
        <span className="text-xs">Bütün Görevler</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative group">
          <FiSearch className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#666666] text-xs" />
          <input 
            type="text" 
            placeholder="Ara..." 
            className="w-56 bg-[#111111] border border-[#222222] text-[#ededed] rounded-md pl-8 pr-12 py-1 focus:outline-none focus:border-[#444444] focus:ring-1 focus:ring-[#444] transition-all text-xs"
          />
          <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex gap-0.5">
             <kbd className="bg-[#1a1a1a] border border-[#333] text-[#888] rounded px-1 text-[9px] font-mono">⌘</kbd>
             <kbd className="bg-[#1a1a1a] border border-[#333] text-[#888] rounded px-1 text-[9px] font-mono">K</kbd>
          </div>
        </div>

        <button className="text-[#888888] hover:text-[#ededed] transition-colors relative flex items-center justify-center p-1">
          <FiBell className="text-[14px]" />
          <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-white rounded-full border border-[#0a0a0a]"></span>
        </button>
        
        <div className="w-6 h-6 rounded bg-[#ededed] flex items-center justify-center text-[#0a0a0a] font-bold text-[10px] ml-1">
          HK
        </div>
      </div>
    </header>
  );
};

export default Header;