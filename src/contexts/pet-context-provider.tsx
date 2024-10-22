"use client";

import { Children, useState } from "react";
import { createContext } from "react";

export const PetContext = createContext(null);

export default function PetContextProvider({data, children }) {
  const [pets, setPets] = useState(data);
  const [selectedPetId, setSelectedPetId] = useState(null);
  return (
    <PetContext.Provider value={{ pets, selectedPetId }}>
      {children}
    </PetContext.Provider>
  );
}
