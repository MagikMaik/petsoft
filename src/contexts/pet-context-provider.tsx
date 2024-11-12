"use client";

import { Pet } from "@/lib/types";
import React, { Children, useState } from "react";
import { createContext } from "react";

type PetContextProviderProps = {
  data: Pet[];
  children: React.ReactNode;
};

type TPetContext = {
  pets: Pet[];
  selectedPetId: string | null;
  handleSelectedPetId: (id: string) => void;
  selectedPet: Pet | undefined;
  numberOfPets: number;
  handleCheckoutPet: (id: string) => void;
  handleAddPet: (newPet: Omit<Pet, "id">) => void;
  handleEditPet: (petId: string, newPetData: Omit<Pet, "id">) => void;
};

export const PetContext = createContext<TPetContext | null>(null);
export default function PetContextProvider({
  data,
  children,
}: PetContextProviderProps) {
  const [pets, setPets] = useState(data);
  const [selectedPetId, setSelectedPetId] = useState<string | null>(null);
  const selectedPet = pets.find((pet) => pet.id === selectedPetId);
  const numberOfPets = pets.length;

  // EVENT HANDLERS//
  const handleSelectedPetId = (id: string) => {
    setSelectedPetId(id);
  };
  const handleAddPet = (newPet: Omit<Pet, "id">) => {
    setPets((prev) => [...prev, { id: Date.now().toString(), ...newPet }]);
  };

  const handleEditPet = (petId: string, newPetData: Omit<Pet, "id">) => {
    setPets((prev) =>
      prev.map((pet) => {
        if (pet.id === petId) {
          return { id: petId, ...newPetData };
        }
        return pet;
      })
    );
  };
  const handleCheckoutPet = (id: string) => {
    setPets((prev) => prev.filter((pet) => pet.id !== id));
    setSelectedPetId(null);
  };

  return (
    <PetContext.Provider
      value={{
        handleEditPet,
        handleAddPet,
        numberOfPets,
        pets,
        selectedPetId,
        handleCheckoutPet,
        handleSelectedPetId,
        selectedPet,
      }}
    >
      {children}
    </PetContext.Provider>
  );
}
