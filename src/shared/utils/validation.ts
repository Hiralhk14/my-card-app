import { AddCardFormData, Card, FormErrors } from "@/types/card.type";

// card number validation
export const isValidCardNumber = (cardNumber: string) => {
  const cleanNumber = cardNumber.replace(/\s/g, "");
  if (!/^\d{16}$/.test(cleanNumber)) return false;

  let sum = 0;
  let double = false;

  for (let i = cleanNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanNumber[i]);
    
    if (double) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    
    sum += digit;
    double = !double;
  }

  return sum % 10 === 0;
};

// valid till date validation
export const isValidFutureDate = (validTill: string) => {
  const datePattern = /^(0[1-9]|1[0-2])\/\d{4}$/;
  if (!datePattern.test(validTill)) return false;
  
  const [month, year] = validTill.split("/").map(Number);
  const expiryDate = new Date(year, month - 1);
  
  const today = new Date();
  const currentMonth = new Date(today.getFullYear(), today.getMonth());

  return expiryDate >= currentMonth;
};

// form validation function for add card form
export const validateCardForm = (formData: AddCardFormData, existingCards: Card[]) => {
  const errors: FormErrors = {};
  
  if (!formData.name.trim()) errors.name = "Name is required";
  if (!formData.bankName.trim()) errors.bankName = "Bank name is required";
  if (!formData.cardType) errors.cardType = "Card type is required";
  
  if (!formData.cardNumber.trim()) {
    errors.cardNumber = "Card number is required";
  } else if (!isValidCardNumber(formData.cardNumber)) {
    errors.cardNumber = "Enter a valid card number"; // card number validation
  }
  if (!formData.validTill.trim()) {
    errors.validTill = "Valid till date is required";
  } else if (!isValidFutureDate(formData.validTill)) {
    errors.validTill = "Enter a valid future date";
  }
  if (!formData.cvv.trim()) {
    errors.cvv = "CVV is required";
  } else if (!/^\d{3}$/.test(formData.cvv)) {
    errors.cvv = "CVV must be 3 digits"; // CVV validation
  }
  // default card validation
  if (formData.isDefault && formData.cardType) {
    const hasDefaultCard = existingCards.some(
      card => card.cardType === formData.cardType && card.isDefault
    );
    if (hasDefaultCard) {
      errors.isDefault = "This card type already has a default card";
    }
  }
  return errors;
};

export const formatCardNumber = (value: string): string => {
  return value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim();
};

// function to format valid till input
export const formatValidTill = (value: string): string => {
  const cleaned = value.replace(/\D/g, "").slice(0, 6);
  return cleaned.length >= 3 ? `${cleaned.slice(0, 2)}/${cleaned.slice(2)}` : cleaned;
};

// function to generate unique id for card created
export const generateId = (): string => {
  return `card_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
};

// function to mask card number except last 4 digits
export const maskCardNumber = (cardNumber: string): string => {
  const last4 = cardNumber.replace(/\s/g, "").slice(-4);
  return `•••• •••• •••• ${last4}`;
};
