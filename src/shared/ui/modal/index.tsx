"use client";

import React from "react";
import { X } from "lucide-react";

import type { ModalProps } from "@/types/type";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white w-full max-w-md mx-4">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-lg font-bold text-gray-800">
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="text-gray-500"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-6 py-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;