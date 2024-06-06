import React, { useState, createContext } from "react";

interface ModalContextProps {
  modalIsOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextProps | undefined>(
  undefined
);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ModalContext.Provider value={{ modalIsOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
