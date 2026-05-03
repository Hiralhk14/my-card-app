"use client";

import { Lock, Archive, Check, Wallet } from "lucide-react";
import clsx from "clsx";
import { ActionItem, CardActionsProps } from "@/types/card.type";


const CardActions = ({
  isLocked,
  isArchived,
  isDefault,
  isGPayEnabled,
  isDefaultDisabled,
  onToggleLock,
  onToggleArchive,
  onToggleDefault,
  onToggleGPay,
}: CardActionsProps) => {
  const actions: ActionItem[] = [
    {
      icon: <Lock size={18} />,
      label: "Lock Card",
      onClick: onToggleLock,
      active: isLocked,
      activeColor: "bg-primary",
    },
    {
      icon: <Archive size={18} />,
      label: "Archive",
      onClick: onToggleArchive,
      active: isArchived,
      activeColor: "bg-primary",
    },
    {
      icon: <Check size={18} />,
      label: "Set As Default",
      onClick: onToggleDefault,
      active: isDefault,
      activeColor: "bg-primary",
    },
    {
      icon: <Wallet size={18} />,
      label: "Add to GPay",
      onClick: onToggleGPay,
      active: isGPayEnabled,
      activeColor: "bg-primary",
    },
  ];

  return (
    <div className="bg-secondary-light p-4 grid grid-cols-2 gap-4">
      {actions?.map((action) => (
        <button
          key={action?.label}
          type="button"
          onClick={action?.onClick}
          disabled={
            action.label === "Set As Default"
              ? isDefaultDisabled
              : false
          }
          className={clsx(
            "flex flex-col items-center gap-2",
            action?.label === "Set As Default" &&
            isDefaultDisabled &&
            "opacity-50"
          )}
        >
          <div
            className={clsx(
              "w-10 h-10 rounded-full flex items-center justify-center",
              action?.active
                ? action?.activeColor
                : "bg-accent"
            )}
          >
            <span className="text-white">
              {action?.icon}
            </span>
          </div>

          <span className="text-xs text-center text-gray-600">
            {action.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CardActions;