import React from "react";
import Link from "next/link";
import NavLink from "../nav-link";
import { links } from "@/utils/constants";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  return (
    <aside className="bg-zinc-900 p-5 flex flex-col justify-between">
      <div>LOGO</div>

      <nav className="flex flex-col ">
        {links.map((item) => (
          <NavLink href={item.href} key={item.href}>
            <div className="flex items-center gap-2">
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </div>
          </NavLink>
        ))}
      </nav>

      <div className="justify-start flex flex-col text-gray-500 ">
        <button className="flex items-center gap-2">
          <IoMdHelpCircleOutline />
          Yardım Merkezi
        </button>
        <button className="flex items-center gap-2">
          <MdLogout />
          Çıkış Yap
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
