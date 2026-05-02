import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { Card, CardState } from "@/types/card.type";

const initialState: CardState = {
  cards: [],
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<Card>) {
      state.cards.push(action.payload);
    },
  },
});

export const { addCard } = cardSlice.actions;

export default cardSlice.reducer;