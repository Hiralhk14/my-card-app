"use client";

import React from "react";

import { AddCardModalProps } from "@/types/type";
import Modal from "@/shared/ui/modal/index";
import Button from "@/shared/ui/button";

const AddCardModal: React.FC<AddCardModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="New Card">
      <div className="flex flex-col gap-4">
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