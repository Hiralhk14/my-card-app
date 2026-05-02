"use client";

import React from "react";
import { ArrowLeftRight, ChevronRight, LayoutGrid, Plus } from "lucide-react";

import Button from "@/shared/ui/button/index";

const CardsPage: React.FC = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className="px-4 sm:px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Home</span>
          <ChevronRight size={14} />
          <span className="text-gray-700 font-medium">Cards</span>
        </div>
      </div>

      <div className="px-4 sm:px-6 pb-8 flex-1">
        <div className="bg-white border border-gray-200 shadow-sm">
          <div className="px-5 pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex gap-6">
              <button className="pb-2 text-sm font-medium border-b-2 border-primary text-primary">
                Saved Cards
              </button>

              <button className="pb-2 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent">
                GD Cards
              </button>
            </div>

            <Button className="flex items-center gap-2">
              <Plus size={16} />
              Add Card
            </Button>
          </div>

          <div className="border-t border-gray-100 mt-4" />
          <div className="flex flex-col xl:flex-row gap-6 px-5 py-6">
            <div className="w-full xl:w-80 shrink-0">
              <div className="bg-background rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                  <LayoutGrid size={16} />
                  Card Details
                </div>
              </div>

              <div className="bg-background rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                  <ArrowLeftRight size={16} />
                  Transactions List UI
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-8">
              <section>
                <h2 className="text-accent text-lg font-bold mb-4 underline">
                  Credit Cards
                </h2>

                <div className="bg-background rounded-lg min-h-[200px] flex items-center justify-center">
                  <p className="text-sm text-gray-500">Credit Card </p>
                </div>
              </section>

              <section>
                <h2 className="text-accent text-lg font-bold mb-4 underline">
                  Debit Cards
                </h2>

                <div className="bg-background rounded-lg min-h-[200px] flex items-center justify-center">
                  <p className="text-sm text-gray-500">Debit Card </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsPage;