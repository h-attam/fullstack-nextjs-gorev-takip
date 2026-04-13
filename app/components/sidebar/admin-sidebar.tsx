import React from "react";
import NavLink from "../nav-link";
import { RxDashboard } from "react-icons/rx";
import { FiUsers } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import Link from "next/link";

const adminLinks = [
  { href: "/admin", title: "Sistem Özeti", icon: <RxDashboard /> },
  { href: "/admin/users", title: "Erişim Yönetimi", icon: <FiUsers /> },
  { href: "/admin/settings", title: "Konfigürasyon", icon: <IoSettingsOutline /> },
];

const AdminSidebar = () => {
  return (
    <aside className="w-[240px] bg-[#000000] border-r border-[#222222] p-4 flex flex-col justify-between shrink-0 h-full">
      <div className="flex items-center gap-2 px-2 mt-1 mb-8">
        <div className="w-5 h-5 bg-white rounded-[4px] shadow-sm flex items-center justify-center">
            <div className="w-2 h-2 bg-black rounded-sm relative"><span className="absolute -inset-0.5 border border-black/20 rounded-sm"></span></div>
        </div>
        <Link href="/admin" className="text-[13px] font-semibold text-[#ededed] tracking-tight">ACME YÖNETİM</Link>
      </div>

      <nav className="flex flex-col gap-0.5 flex-1">
        <div className="text-[10px] uppercase font-bold text-[#444444] px-2 mb-2 tracking-wider mt-2">Sistem Paneli</div>
        {adminLinks.map((item) => (
          <NavLink href={item.href} key={item.href}>
            <div className="flex items-center gap-3 px-2 py-1.5 rounded-md transition-colors hover:bg-[#1a1a1a] text-[#888888] hover:text-[#ededed] group cursor-pointer">
              <span className="text-[15px] transition-colors">{item.icon}</span>
              <span className="text-[13px] font-medium">{item.title}</span>
            </div>
          </NavLink>
        ))}
      </nav>

      <div className="pt-4 border-t border-[#222222]">
        <Link href="/" className="w-full flex items-center gap-3 px-2 py-1.5 rounded-md hover:bg-[#1a1a1a] text-[#888888] hover:text-[#ededed] transition-colors">
          <MdLogout className="text-[15px]" />
          <span className="text-[13px] font-medium">Uygulamaya Dön</span>
        </Link>
      </div>
    </aside>
  );
};

export default AdminSidebar;
