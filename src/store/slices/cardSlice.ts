import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { Card, CardState } from "@/types/card.type";

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
    },
  },
});

export const {
  addCard,
  initCards
} = cardSlice.actions;

export default cardSlice.reducer;