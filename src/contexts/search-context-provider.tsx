"use client";

import { Pet } from "@/lib/types";
import React, { Children, useState } from "react";
import { createContext } from "react";

type SearchContextProviderProps = {
  children: React.ReactNode;
};

type TSearchContext = {
  searchQuery: string;
  handleSearchQuery: (newValue: string) => void;
};

export const SearchContext = createContext<TSearchContext | null>(null);

export default function SearchContextProvider({
  children,
}: SearchContextProviderProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchQuery = (newValue: string) => {
    setSearchQuery(newValue);
  };
  return (
    <SearchContext.Provider value={{ searchQuery, handleSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
}
