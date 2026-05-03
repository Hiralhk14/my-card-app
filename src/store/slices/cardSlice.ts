import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { Card, CardState, CardType } from "@/types/card.type";
import { clearOtherCardFlags, loadCardsFromStorage, saveCardsToStorage } from "./cardUtils";

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
      state.cards = loadCardsFromStorage();
    },

    addCard(state, action: PayloadAction<Card>) {
      state.cards.push(action.payload);
      saveCardsToStorage(state.cards);
      
      const typeCards = state.cards.filter(
        (c) => c.cardType === action.payload.cardType
      );
      state.activeCardIndex[action.payload.cardType] = typeCards.length - 1;
    },

    lockCard(state, action: PayloadAction<string>) {
      const card = state.cards.find((c) => c.id === action.payload);
      if (card) {
        card.isLocked = !card.isLocked;
        if (card.isLocked) {
          clearOtherCardFlags(card, "isLocked");
        }
        saveCardsToStorage(state.cards);
      }
    },

    archiveCard(state, action: PayloadAction<string>) {
      const card = state.cards.find((c) => c.id === action.payload);
      if (card) {
        card.isArchived = !card.isArchived;
        if (card.isArchived) {
          clearOtherCardFlags(card, "isArchived");
        }
        saveCardsToStorage(state.cards);
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
      saveCardsToStorage(state.cards);
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
          if (c.isDefault) {
            clearOtherCardFlags(c, "isDefault");
          }
        } else {
          c.isDefault = false;
        }
      });

      saveCardsToStorage(state.cards);
    },

    toggleGPay(state, action: PayloadAction<string>) {
      const card = state.cards.find((c) => c.id === action.payload);
      if (card) {
        card.addToGPay = !card.addToGPay;
        if (card.addToGPay) {
          clearOtherCardFlags(card, "addToGPay");
        }
        saveCardsToStorage(state.cards);
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