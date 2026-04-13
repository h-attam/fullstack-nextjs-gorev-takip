import React from 'react';
import { FiBell } from 'react-icons/fi';

const AdminHeader = () => {
  return (
    <header className="h-[52px] flex items-center justify-between px-6 lg:px-10 bg-[#0a0a0a] border-b border-[#222222] shrink-0 sticky top-0 z-10">
      <div className="flex items-center gap-3 text-[#888888]">
        <h1 className="text-[#ededed] font-medium text-[13px]">Yönetim Merkezi</h1>
        <span className="w-1 h-1 rounded-full bg-[#444444]"></span>
        <span className="text-xs">Sistem Durumu</span>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="text-[#888888] hover:text-[#ededed] transition-colors relative flex items-center justify-center p-1">
          <FiBell className="text-[14px]" />
          <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-white rounded-full border border-[#0a0a0a]"></span>
        </button>
        
        <div className="flex items-center gap-2 pl-3 border-l border-[#222222]">
          <div className="w-6 h-6 rounded bg-[#ededed] flex items-center justify-center text-[#0a0a0a] font-bold text-[10px] ml-1">
            HK
          </div>
          <div className="hidden md:block">
            <p className="text-[#ededed] font-medium text-[12px] leading-none mb-0.5 flex items-center gap-1.5">Hatice Kartal <span className="bg-[#111] border border-[#222] text-[#888] px-1 py-0.5 rounded text-[9px] uppercase">Admin</span></p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
