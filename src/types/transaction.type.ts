export type TransactionType = "debit" | "credit";

export interface Transaction {
  id: string;
  title: string;
  date: string;
  amount: number;
  type: TransactionType;
  note: string;
}