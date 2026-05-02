"use client";

import React from "react";
import Link from "next/link";
import { Home, CreditCard, ArrowLeftRight, Settings, LogOut } from "lucide-react";

const navItems = [
  { href: "/", icon: <Home size={18} />, label: "Home" },
  { href: "/cards", icon: <CreditCard size={18} />, label: "Cards" },
  { href: "/transactions", icon: <ArrowLeftRight size={18} />, label: "Transactions" },
  { href: "/settings", icon: <Settings size={18} />, label: "Settings" },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="w-80 h-screen bg-primary flex flex-col px-8 py-10 font-sans">
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-14 h-14 bg-secondary flex items-center justify-center">
            <span className="text-white font-bold text-lg">GD</span>
          </div>

          <div>
            <h1 className="text-white text-2xl font-semibold leading-tight">
              GIRIRAJ <span className="font-light">DIGITAL</span>
            </h1>
          </div>
        </div>

        <div className="text-center text-white text-sm leading-5 font-medium">
          <p>Software & Web Development</p>
          <p>Company - Umbraco Gold Partner</p>
        </div>
      </div>

      <nav className="flex-1">
        {navItems?.map((item) => (
          <div key={item?.href} className="border-b border-white/20">
            <Link
              href={item?.href}
              className="flex items-center gap-3 py-4 text-white text-md font-medium hover:text-secondary transition-all duration-150"
            >
              {item?.icon}
              <span>{item?.label}</span>
            </Link>
          </div>
        ))}
      </nav>

      <div className="pt-8">
        <button className="flex items-center gap-3 text-white text-md font-medium hover:text-secondary transition-all duration-150">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;