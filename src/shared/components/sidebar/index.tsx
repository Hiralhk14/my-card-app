"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, CreditCard, ArrowLeftRight, Settings, LogOut, ArrowRight } from "lucide-react";

import type { NavItem } from "@/types/type";

const navItems: NavItem[] = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/cards", icon: CreditCard, label: "Cards" },
  { href: "/transactions", icon: ArrowLeftRight, label: "Transactions" },
  { href: "/settings", icon: Settings, label: "Settings" },
];

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar h-screen bg-sidebar flex flex-col px-8 py-10 font-sans">
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 bg-secondary flex items-center justify-center">
            <span className="text-white font-bold text-lg">GD</span>
          </div>

          <div>
            <h1 className="text-white text-xl font-semibold leading-tight">
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
        {navItems?.map((item) => {
          const Icon = item?.icon;
          const isActive = pathname === item?.href;

          return (
            <div key={item?.href} className="border-b border-white/20">
              <Link
                href={item?.href}
                className={`flex items-center py-4 text-sm font-medium 
                          ${isActive ? "text-accent" : "text-white"}`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} />
                  <span>{item?.label}</span>
                </div>

                {isActive && (
                  <span className="ml-auto text-accent">
                    <ArrowRight size={18} />
                  </span>
                )}
              </Link>
            </div>
          );
        })}
      </nav>

      <div className="pt-8">
        <button className="flex items-center gap-3 text-white text-md font-medium hover:text-secondary">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;