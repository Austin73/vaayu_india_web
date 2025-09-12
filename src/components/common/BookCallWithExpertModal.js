"use client";

import React, { createContext, useState } from "react";
import { createPortal } from "react-dom";
import BookCallWithExpert from "./BookCallWithExpert";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {isModalOpen &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="relative w-full max-w-xl rounded-2xl border border-gray-300 bg-white p-4 shadow-lg">
              <BookCallWithExpert showCloseButton />
            </div>
          </div>,
          document.body
        )}
    </ModalContext.Provider>
  );
};
