"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {Navbutton} from "./Nav-button"

const routes = [
  { href: "/", label: "Overview" },
  {
    href: "/transactions",
    label: "Transactions",
  },
  {
    href: "/recent",
    label: "Recent",
  },
];

export const Navigation = () => {
    const pathname =usePathname();
  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
        {routes.map((route)=>(
           <Navbutton 
           key={route.href}
           href={route.href}
           label={route.label}
           isActive= {pathname===route.href}
           />
        ))}
    </nav>
  )
};
