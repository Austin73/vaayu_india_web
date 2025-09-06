"use client";

import { useContext } from "react";
import { ModalContext } from "@/components/common/BookCallWithExpertModal";

export const useModal = () => {
  return useContext(ModalContext);
};
