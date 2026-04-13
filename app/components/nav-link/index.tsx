"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  style?: string;
  children: string | JSX.Element;
};

const NavLink = ({ href, style, children }: Props) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`${href === path ? style || "bg-zinc-800 text-white" : "text-gray-500"}  `}
    >
      {children}
    </Link>
  );
};

export default NavLink;
