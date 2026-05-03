"use client";

import { Archive, Lock, Check, CreditCard } from "lucide-react";
import clsx from "clsx";

import { CardViewProps } from "@/types/card.type";
import { maskCardNumber } from "@/shared/utils/validation";

const CardView = ({
  card,
  showNumber,
  isLocked,
  isArchived,
}: CardViewProps) => {

  const displayNumber = showNumber
    ? card?.cardNumber?.replace(/(.{4})/g, "$1 ").trim()
    : maskCardNumber(card?.cardNumber);

  const locked = isLocked ?? card?.isLocked;
  const archived = isArchived ?? card?.isArchived;

  let cardBackground = "bg-card-dark";
  if (card?.addToGPay) {
    cardBackground = "bg-action-gpay";
  }
  if (card?.isDefault) {
    cardBackground = "bg-accent";
  }
  if (archived) {
    cardBackground = "bg-card-disabled";
  }
  if (locked) {
    cardBackground = "bg-card-disabled";
  }

  return (
    <div
      className={clsx("p-6 w-full min-h-[160px] flex flex-col justify-between", cardBackground)}>
      <div className="flex items-start justify-between pb-4">
        <div>
          {card?.isDefault ? (
            <Check className="text-white" size={18} />
          ) : archived ? (
            <Archive className="text-white" size={18} />
          ) : locked ? (
            <Lock className="text-white" size={18} />
          ) : card?.addToGPay ? (
            <CreditCard className="text-white" size={18} />
          ) : null
          }
        </div>

        <div className="flex items-center gap-1">
          <div className="w-5 h-5 bg-red-600" />

          <span className="text-white text-xs font-bold">
            {card?.bankName?.toUpperCase()}
          </span>
        </div>
      </div>

      <div>
        <p className="text-white text-lg font-semibold">{card?.name}</p>
        <p className="text-white text-base mt-1">{displayNumber}</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-4">
          <p className="text-white text-xs">
            <span className="font-semibold">Valid Till :</span> {card?.validTill}
          </p>
          <p className="text-white text-xs">
            <span className="font-semibold">CVV :</span> •••
          </p>
        </div>

        <div className="relative flex items-center">
          <div className="w-8 h-8 bg-red-500 rounded-full" />
          <div className="w-8 h-8 bg-orange-400 rounded-full -ml-2" />
          <span className="absolute left-2 text-white text-[8px]">
            mastercard
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardView;