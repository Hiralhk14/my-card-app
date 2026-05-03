"use client";

import React, { useState } from "react";
import { ArrowLeftRight, ChevronRight, LayoutGrid, Plus } from "lucide-react";

import Button from "@/shared/ui/button/index";
import AddCardModal from "./addCard";
import TransactionsList from "./transactions";
import CardCarousel from "./cardCarousel";
import { useReduxSelector } from "@/store/reduxHook";
import { CardType } from "@/types/card.type";

const CardsPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allCards = useReduxSelector((s) => s?.cards?.cards);
  const creditCards = allCards?.filter((c) => c?.cardType === "Credit");
  const debitCards = allCards?.filter((c) => c?.cardType === "Debit");

  return (
    <div className="flex flex-col flex-1">
      <div className="container p-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Home</span>
          <ChevronRight size={14} />
          <span className="text-gray-700 font-medium">Cards</span>
        </div>
      </div>

      <div className="container pb-8 flex-1">
        <div className="bg-white border border-gray-200 shadow-card">
          <div className="px-5 pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex gap-6">
              <button className="pb-2 text-sm font-medium border-b-2 border-primary text-accent">
                Saved Cards
              </button>

              <button className="pb-2 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent">
                GD Cards
              </button>
            </div>

            <Button
              variant="primary"
              className="btn-responsive flex items-center gap-2 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <Plus size={16} />
              Add Card
            </Button>
          </div>

          <div className="border-t border-gray-100 mt-4" />
          <div className="flex flex-col lg:flex-row gap-8 px-5 py-6 overflow-hidden">
            <div className="w-full lg:w-80 shrink-0">
              <div className="bg-background p-4 mb-4 rounded-card">
                <div className="flex items-center gap-2 text-accent text-sm">
                  <LayoutGrid size={16} />
                  Card Details
                </div>
              </div>

              <TransactionsList />
            </div>

            <div className="flex-1 flex flex-col gap-8 min-w-0 overflow-hidden">
              <section>
                <h2 className="text-accent text-lg font-bold mb-4 underline">Credit Cards</h2>
                <CardCarousel
                  cards={creditCards}
                  cardType={"Credit" as CardType}
                />
              </section>

              <section>
                <h2 className="text-accent text-lg font-bold mb-4 underline">Debit Cards</h2>
                <CardCarousel
                  cards={debitCards}
                  cardType={"Debit" as CardType}
                />
              </section>
            </div>
          </div>
        </div>
      </div>
      <AddCardModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>

  );
};

export default CardsPage;