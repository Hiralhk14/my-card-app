"use client";

import React from "react";
import { Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";

import { toggleDefaultCard, toggleGPay, toggleShowCardNumber, lockCard, archiveCard, setActiveCardIndex } from "@/store/slices/cardSlice";
import { CardCarouselProps } from "@/types/card.type";
import { useReduxDispatch, useReduxSelector } from "@/store/reduxHook";

import CardView from "../cardView";
import CardActions from "../cardActions";

const CardCarousel: React.FC<CardCarouselProps> = ({ cards, cardType }) => {
  const dispatch = useReduxDispatch();
  const activeIndex = useReduxSelector((s) => s?.cards?.activeCardIndex[cardType]);
  const showNumber = useReduxSelector((s) => s?.cards?.showCardNumber[cardType]);

  const hasCards = cards?.length > 0;
  const index = hasCards ? Math?.min(activeIndex, cards?.length - 1) : 0;

  // If there are no cards, show a placeholder message 
  if (!hasCards) {
    return (
      <div className="flex items-center justify-center h-40 rounded-card bg-gray-100 text-gray-400 text-sm">
        No {cardType} cards added.
      </div>
    );
  }

  const card = cards?.[index];
  const hasDefaultForType = cards?.some((c) => c?.isDefault);
  const isDefaultDisabled = hasDefaultForType && !card?.isDefault;

  const handleSlideChange = (newIndex: number) => {
    dispatch(setActiveCardIndex({ cardType, index: newIndex }));
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-center">
        <button
          type="button"
          className="flex justify-center items-center bg-secondary-light text-sm"
          onClick={() => {
              dispatch(toggleShowCardNumber(cardType));
              toast.success(showNumber ? "Card number hidden" : "Card number shown");
            }}
        >
          {showNumber ? <EyeOff size={18} /> : <Eye size={18} />}
          {showNumber ? "Hide Card Number" : "Show Card Number"}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {cards?.map((currentCard, cardIndex) => (
              <div 
                key={currentCard?.id}
                className="w-full flex-shrink-0"
              >
                <CardView
                  card={currentCard}
                  showNumber={showNumber && cardIndex === index}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-48">
          <CardActions
            card={card}
            isLocked={card?.isLocked}
            isArchived={card?.isArchived}
            isDefault={card?.isDefault}
            isGPayEnabled={card?.addToGPay}
            isDefaultDisabled={isDefaultDisabled}
            onToggleLock={() => {
              dispatch(lockCard(card?.id));
              toast.success(card?.isLocked ? "Card unlocked successfully" : "Card locked successfully");
            }}
            onToggleArchive={() => {
              dispatch(archiveCard(card?.id));
              toast.success(card?.isArchived ? "Card unarchived successfully" : "Card archived successfully");
            }}
            onToggleDefault={() => {
              dispatch(toggleDefaultCard({ id: card?.id, cardType }));
              toast.success(card?.isDefault ? "Card removed as default" : "Card set as default successfully");
            }}
            onToggleGPay={() => {
              dispatch(toggleGPay(card?.id));
              toast.success(card?.addToGPay ? "Card removed from GPay" : "Card added to GPay successfully");
            }}
          />
        </div>
      </div>

      {cards.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-4">
          {cards.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              onClick={() => handleSlideChange(dotIndex)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ease-in-out ${
                index === dotIndex
                  ? "bg-accent w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to card ${dotIndex + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardCarousel;