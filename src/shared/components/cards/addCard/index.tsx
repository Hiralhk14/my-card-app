"use client";

import React, { useCallback, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";

import { AddCardModalProps } from "@/types/type";
import { AddCardFormData, CardType, FormErrors } from "@/types/card.type";

import Modal from "@/shared/ui/modal/index";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import Select from "@/shared/ui/select";
import Checkbox from "@/shared/ui/checkbox";

import { formatCardNumber, formatValidTill, generateId, validateCardForm } from "@/shared/utils/validation";
import { addCard } from "@/store/slices/cardSlice";
import { useReduxDispatch, useReduxSelector } from "@/store/reduxHook";

const INITIAL_FORM: AddCardFormData = {
  name: "",
  bankName: "",
  cardType: "",
  cardNumber: "",
  validTill: "",
  cvv: "",
  isDefault: false,
  addToGPay: false,
};

const AddCardModal: React.FC<AddCardModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useReduxDispatch();
  const existingCards = useReduxSelector((s) => s.cards.cards);

  const [form, setForm] = useState<AddCardFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showCVV, setShowCVV] = useState(false);

  const handleChange = useCallback(
    (field: keyof AddCardFormData, value: string | boolean) => {
      setForm((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    },
    []
  );

  // function to format card number
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e?.target?.value);
    handleChange("cardNumber", formatted);
  };

  // function to format valid till date in MM/YYYY format
  const handleValidTillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatValidTill(e?.target?.value);
    handleChange("validTill", formatted);
  };

  // function to validate form and submit data to redux store
  const handleSubmit = async () => {
    const validationErrors = validateCardForm(form, existingCards);
    if (Object?.keys(validationErrors)?.length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors in the form.");
      return;
    }
    try {
      dispatch(
        addCard({
          id: generateId(),
          name: form?.name.trim(),
          bankName: form?.bankName.trim(),
          cardType: form?.cardType as CardType,
          cardNumber: form?.cardNumber.replace(/\s/g, ""),
          validTill: form?.validTill,
          cvv: form?.cvv,
          isDefault: form?.isDefault,
          addToGPay: form?.addToGPay,
          isLocked: false,
          isArchived: false,
        })
      );
      toast.success("Card added successfully!");
      handleClose();
    } catch {
      toast.error("Failed to add card. Please try again.");
    }
  };

  const handleClose = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setShowCVV(false);
    onClose();
  };


  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="New Card">
      <div className="flex flex-col gap-4">
        <Input
          id="card-name"
          label="Name:"
          placeholder="i.e. James Carlon"
          maxLength={35}
          value={form?.name}
          onChange={(e) => handleChange("name", e?.target?.value)}
          error={errors?.name}
        />

        <Input
          id="bank-name"
          label="Bank Name:"
          placeholder="i.e. HDFC BANK"
          value={form?.bankName}
          onChange={(e) => handleChange("bankName", e?.target?.value)}
          error={errors?.bankName}
        />

        <Select
          id="card-type"
          label="Card Type:"
          placeholder="Select Card Type"
          options={[
            { value: "Credit", label: "Credit" },
            { value: "Debit", label: "Debit" },
          ]}
          value={form?.cardType}
          onChange={(e) => handleChange("cardType", e?.target?.value)}
          error={errors?.cardType}
        />

        <Input
          id="card-number"
          label="Card Number:"
          placeholder="i.e. 7754 1542 6584 4875"
          inputMode="numeric"
          maxLength={19}
          value={form?.cardNumber}
          onChange={handleCardNumberChange}
          error={errors?.cardNumber}
        />
        <div className="flex gap-3">
          <Input
            id="valid-till"
            label="Valid Till:"
            placeholder="MM/YYYY"
            inputMode="numeric"
            maxLength={7}
            value={form?.validTill}
            onChange={handleValidTillChange}
            error={errors?.validTill}
          />
          <Input
            id="cvv"
            label="CVV:"
            placeholder="•••"
            inputMode="numeric"
            maxLength={4}
            value={form?.cvv}
            onChange={(e) => handleChange("cvv", e?.target?.value?.replace(/\D/g, "")?.slice(0, 4))}
            error={errors?.cvv}
            type={showCVV ? "text" : "password"}
            rightIcon={
              <button
                type="button"
                onClick={() => setShowCVV((i) => !i)}
                className="text-gray-400 hover:text-gray-600"
              >
                {showCVV ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            }
          />
        </div>
        <Checkbox
          id="set-default"
          label="Set this card as Default"
          checked={form?.isDefault}
          onChange={(e) => handleChange("isDefault", e?.target?.checked)}
          error={errors?.isDefault}
        />
        <Checkbox
          id="add-gpay"
          label="Add this card to GPay?"
          checked={form?.addToGPay}
          onChange={(e) => handleChange("addToGPay", e?.target?.checked)}
        />

        <div className="flex justify-end gap-3 pt-4 border-t">
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>

          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AddCardModal;