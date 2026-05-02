"use client";

import React from "react";

import { AddCardModalProps } from "@/types/type";
import Modal from "@/shared/ui/modal/index";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import Select from "@/shared/ui/select";

const AddCardModal: React.FC<AddCardModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="New Card">
      <div className="flex flex-col gap-4">
        <Input
          id="card-name"
          label="Name:"
          placeholder="i.e. James Carlon"
          maxLength={35}
        />

        <Input
          id="bank-name"
          label="Bank Name:"
          placeholder="i.e. HDFC BANK"
        />

        <Select
          id="card-type"
          label="Card Type:"
          placeholder="Select Card Type"
          options={[
            { value: "Credit", label: "Credit" },
            { value: "Debit", label: "Debit" },
          ]}
        />

        <Input
          id="card-number"
          label="Card Number:"
          placeholder="i.e. 7754 1542 6584 4875"
          inputMode="numeric"
          maxLength={19}
        />
        <div className="flex gap-3">
          <Input
            id="valid-till"
            label="Valid Till:"
            placeholder="MM/YYYY"
            inputMode="numeric"
            maxLength={7}
          />
          <Input
            id="cvv"
            label="CVV:"
            placeholder="•••"
            inputMode="numeric"
            maxLength={4}
          />
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>

          <Button variant="primary">
            Submit
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AddCardModal;