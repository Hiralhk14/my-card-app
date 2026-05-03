import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { Card, CardState, CardType } from "@/types/card.type";

const STORAGE_KEY = "my_card_management";

const loadFromStorage = (): Card[] => {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveToStorage = (cards: Card[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
};

const initialState: CardState = {
  cards: [],
  activeCardIndex: { Credit: 0, Debit: 0 },
  showCardNumber: { Credit: false, Debit: false },
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    initCards(state) {
      state.cards = loadFromStorage();
    },

    addCard(state, action: PayloadAction<Card>) {
      state.cards.push(action.payload);
      saveToStorage(state.cards);
      const typeCards = state.cards.filter(
        (c) => c.cardType === action.payload.cardType
      );
      state.activeCardIndex[action.payload.cardType] = typeCards.length - 1;
    },

    lockCard(state, action: PayloadAction<string>) {
      const card = state.cards.find((c) => c.id === action.payload);
      if (card) {
        const newVal = !card.isLocked;
        card.isLocked = newVal;
        if (newVal) {
          card.isArchived = false;
          card.isDefault = false;
          card.addToGPay = false;
        }
        saveToStorage(state.cards);
      }
    },

    archiveCard(state, action: PayloadAction<string>) {
      const card = state.cards.find((c) => c.id === action.payload);
      if (card) {
        const newVal = !card.isArchived;
        card.isArchived = newVal;
        if (newVal) {
          card.isLocked = false;
          card.isDefault = false;
          card.addToGPay = false;
        }
        saveToStorage(state.cards);
      }
    },

    setDefaultCard(
      state,
      action: PayloadAction<{ id: string; cardType: CardType }>
    ) {
      state.cards.forEach((c) => {
        if (c.cardType === action.payload.cardType) {
          c.isDefault = c.id === action.payload.id;
        }
      });
      saveToStorage(state.cards);
    },

    toggleDefaultCard(
      state,
      action: PayloadAction<{ id: string; cardType: CardType }>
    ) {
      const isAlreadyDefault = state.cards.some(
        (c) => c.cardType === action.payload.cardType && c.id === action.payload.id && c.isDefault
      );

      state.cards.forEach((c) => {
        if (c.cardType !== action.payload.cardType) return;
        if (c.id === action.payload.id) {
          c.isDefault = !isAlreadyDefault;
          if (!isAlreadyDefault) {
            c.isLocked = false;
            c.isArchived = false;
            c.addToGPay = false;
          }
        } else {
          c.isDefault = false;
        }
      });

      saveToStorage(state.cards);
    },

    toggleGPay(state, action: PayloadAction<string>) {
      const card = state.cards.find((c) => c.id === action.payload);
      if (card) {
        const newVal = !card.addToGPay;
        card.addToGPay = newVal;
        if (newVal) {
          card.isLocked = false;
          card.isArchived = false;
          card.isDefault = false;
        }
        saveToStorage(state.cards);
      }
    },

    setActiveCardIndex(
      state,
      action: PayloadAction<{ cardType: CardType; index: number }>
    ) {
      state.activeCardIndex[action.payload.cardType] = action.payload.index;
      state.showCardNumber[action.payload.cardType] = false;
    },

    toggleShowCardNumber(state, action: PayloadAction<CardType>) {
      state.showCardNumber[action.payload] = !state.showCardNumber[action.payload];
    },
  },
});

export const {
  initCards,
  addCard,
  lockCard,
  archiveCard,
  setDefaultCard,
  toggleDefaultCard,
  toggleGPay,
  setActiveCardIndex,
  toggleShowCardNumber,
} = cardSlice.actions;

export default cardSlice.reducer;