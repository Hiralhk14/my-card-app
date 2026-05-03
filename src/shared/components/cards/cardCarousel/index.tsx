"use client";
import React from "react";
import { Eye, EyeOff } from "lucide-react";

import {
  toggleDefaultCard,
  toggleGPay,
  toggleShowCardNumber,
  lockCard,
  archiveCard
} from "@/store/slices/cardSlice";
import { CardCarouselProps } from "@/types/card.type";
import { useReduxDispatch, useReduxSelector } from "@/store/reduxHook";
import CardView from "../cardView";
import CardActions from "../cardActions";


const CardCarousel: React.FC<CardCarouselProps> = ({ cards, cardType }) => {
  const dispatch = useReduxDispatch();
  const activeIndex = useReduxSelector(
    (s) => s?.cards?.activeCardIndex[cardType]
  );
  const showNumber = useReduxSelector(
    (s) => s?.cards?.showCardNumber[cardType]
  );

  const hasCards = cards?.length > 0;
  const index = hasCards ? Math?.min(activeIndex, cards?.length - 1) : 0;

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

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-center">
        <button
          type="button"
          className="flex justify-center items-center bg-secondary-light text-sm"
          onClick={() => dispatch(toggleShowCardNumber(cardType))}
        >
          {showNumber ? <EyeOff size={18} /> : <Eye size={18} />}
          {showNumber ? "Hide Card Number" : "Show Card Number"}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <CardView
            card={card}
            showNumber={showNumber}
          />
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
            }}
            onToggleArchive={() => {
              dispatch(archiveCard(card.id));
            }}
            onToggleDefault={() => {
              dispatch(toggleDefaultCard({ id: card?.id, cardType }));
            }}
            onToggleGPay={() => {
              dispatch(toggleGPay(card.id));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;