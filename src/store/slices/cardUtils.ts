import { Card } from "@/types/card.type";

// helper function to clear mutually exclusive flags
export const clearOtherCardFlags = (card: Card, activeFlag: keyof Card) => {
  if (activeFlag !== "isLocked") card.isLocked = false;
  if (activeFlag !== "isArchived") card.isArchived = false;
  if (activeFlag !== "isDefault") card.isDefault = false;
  if (activeFlag !== "addToGPay") card.addToGPay = false;
};

const STORAGE_KEY = "my_card_management"; // key for localStorage

// function to load cards from localStorage
export const loadCardsFromStorage = (): Card[] => {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

// function to save cards to localStorage
export const saveCardsToStorage = (cards: Card[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
};
