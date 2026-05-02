import type { ButtonHTMLAttributes, ElementType } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type HeaderProps = {
  title?: string;
};

export type NavItem = {
  href: string;
  icon: ElementType;
  label: string;
};

export const routeNameMap: Record<string, string> = {
  "/": "Home",
  "/cards": "Cards",
  "/transactions": "Transactions",
  "/settings": "Settings",
};