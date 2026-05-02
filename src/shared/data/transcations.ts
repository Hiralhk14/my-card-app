import { Transaction } from "@/types/transaction.type";

export const TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    title: "Ordered Food",
    date: "20th May 2022",
    amount: -150.5,
    type: "debit",
    note: "Charges applied on credit card",
  },
  {
    id: "2",
    title: "Ticket Refund",
    date: "20th May 2022",
    amount: 50.5,
    type: "credit",
    note: "Amount credited on debit card",
  },
  {
    id: "3",
    title: "Interest credited",
    date: "20th May 2022",
    amount: 5.5,
    type: "credit",
    note: "Charges applied on credit card",
  },
  {
    id: "4",
    title: "Electricity bill paid",
    date: "20th May 2022",
    amount: -1050.5,
    type: "debit",
    note: "Charges applied on credit card",
  },
  {
    id: "5",
    title: "Interest credited",
    date: "20th May 2022",
    amount: 5.5,
    type: "credit",
    note: "Charges applied on credit card",
  },
];