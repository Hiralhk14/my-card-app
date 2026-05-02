"use client";

import React from "react";
import { Menu, User, ChevronDown } from "lucide-react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="p-2 rounded-md hover:bg-gray-100 text-gray-600 transition-all duration-150"
          aria-label="Menu"
        >
          <Menu size={20} />
        </button>

        <h1 className="text-lg font-semibold text-gray-700">{title}</h1>
      </div>

      <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-all duration-150">
        <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center">
          <User size={18} />
        </div>

        <ChevronDown size={16} />
      </button>
    </header>
  );
};

export default Header;