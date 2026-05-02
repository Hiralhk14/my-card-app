export type CardType = "Credit" | "Debit";

export interface Card {
  id: string;
  name: string;
  bankName: string;
  cardType: CardType;
  cardNumber: string;
}

export interface CardState {
  cards: Card[];
}