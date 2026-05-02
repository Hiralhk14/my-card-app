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
}

export interface CardState {
  cards: Card[];
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