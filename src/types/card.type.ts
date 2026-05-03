import { ReactNode } from "react";

export type CardType = "Credit" | "Debit";

export interface Card {
  id: string;
  name: string;
  bankName: string;
  cardType: CardType;
  cardNumber: string;
  validTill: string; 
  cvv: string;
  isDefault: boolean;
  addToGPay: boolean;
  isLocked: boolean;
  isArchived: boolean;
  showFullNumber: boolean;
}

export interface CardState {
  cards: Card[];
  activeCardIndex: { Credit: number; Debit: number };
  showCardNumber: { Credit: boolean; Debit: boolean };
}

export interface AddCardFormData {
  name: string;
  bankName: string;
  cardType: CardType | "";
  cardNumber: string;
  validTill: string;
  cvv: string;
  isDefault: boolean;
  addToGPay: boolean;
}
export interface FormErrors {
  name?: string;
  bankName?: string;
  cardType?: string;
  cardNumber?: string;
  validTill?: string;
  cvv?: string;
  isDefault?: string;
}

export interface CardCarouselProps {
  cards: Card[];
  cardType: CardType;
}

export interface CardViewProps {
  card: Card;
  showNumber: boolean;
  isLocked?: boolean;
  isArchived?: boolean;
  isGpay?: boolean;
}
export interface CardActionsProps {
  card: Card;
  isLocked: boolean;
  isArchived: boolean;
  isDefault: boolean;
  isGPayEnabled: boolean;
  isDefaultDisabled: boolean;
  onToggleLock: () => void;
  onToggleArchive: () => void;
  onToggleDefault: () => void;
  onToggleGPay: () => void;
}

export interface ActionItem {
  icon: ReactNode;
  label: string;
  onClick: () => void;
  active?: boolean;
  activeColor?: string;
}