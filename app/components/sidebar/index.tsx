import React from "react";
import NavLink from "../nav-link";
import { links } from "@/utils/constants";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <aside className="w-[240px] bg-[#000000] border-r border-[#222222] p-4 flex flex-col justify-between shrink-0">
      <div className="flex items-center gap-2 px-2 mt-1 mb-8">
        <div className="w-5 h-5 bg-white rounded-[4px] shadow-sm flex items-center justify-center">
            <div className="w-2 h-2 bg-black rounded-sm"></div>
        </div>
        <span className="text-[13px] font-semibold text-[#ededed] tracking-tight">Acme Corp.</span>
      </div>

      <nav className="flex flex-col gap-0.5 flex-1">
        <div className="text-[10px] uppercase font-bold text-[#444444] px-2 mb-2 tracking-wider mt-2">Çalışma Alanı</div>
        {links.map((item) => (
          <NavLink href={item.href} key={item.href}>
            <div className="flex items-center gap-3 px-2 py-1.5 rounded-md transition-colors hover:bg-[#1a1a1a] text-[#888888] hover:text-[#ededed] group cursor-pointer">
              <span className="text-[15px] transition-colors">{item.icon}</span>
              <span className="text-[13px] font-medium">{item.title}</span>
            </div>
          </NavLink>
        ))}
      </nav>

      <div className="pt-4 border-t border-[#222222]">
        <button className="w-full flex items-center gap-3 px-2 py-1.5 rounded-md hover:bg-[#1a1a1a] text-[#888888] hover:text-[#ededed] transition-colors">
          <IoSettingsOutline className="text-[15px]" />
          <span className="text-[13px] font-medium">Tercihler</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
