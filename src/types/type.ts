import type { ButtonHTMLAttributes, ElementType, InputHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

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

export type AddCardModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  rightIcon?: ReactNode;
};
