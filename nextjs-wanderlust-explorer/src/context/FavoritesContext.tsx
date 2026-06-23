"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface FavoritesContextValue {
  favoriteIds: string[];
  favoriteCount: number;
  isFavorite: (experienceId: string) => boolean;
  toggleFavorite: (experienceId: string) => void;
}

const FavoritesContext = createContext<FavoritesContextValue | undefined>(
  undefined,
);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const toggleFavorite = useCallback((experienceId: string) => {
    setFavoriteIds((current) => {
      if (current.includes(experienceId)) {
        return current.filter((id) => id !== experienceId);
      }
      return [...current, experienceId];
    });
  }, []);

  const isFavorite = useCallback(
    (experienceId: string) => favoriteIds.includes(experienceId),
    [favoriteIds],
  );

  const value = useMemo(
    () => ({
      favoriteIds,
      favoriteCount: favoriteIds.length,
      isFavorite,
      toggleFavorite,
    }),
    [favoriteIds, isFavorite, toggleFavorite],
  );

  return (
    <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }

  return context;
}
