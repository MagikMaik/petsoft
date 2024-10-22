import React, { useContext } from "react";
import { PetContext } from "../contexts/pet-context-provider";
export default function usePetContext() {
  const context = useContext(PetContext);
  if (!context) {
    throw new Error("usePetContext must be used within a PetContextProvider");
  }
  return context;
}
