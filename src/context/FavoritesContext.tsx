import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react';

type FavoritesContextValue = {
  favoriteIds: string[];
  isFavorite: (placeId: string) => boolean;
  toggleFavorite: (placeId: string) => void;
};

const FavoritesContext =
  createContext<FavoritesContextValue | null>(null);

type FavoritesProviderProps = {
  children: ReactNode;
};

export function FavoritesProvider({
  children,
}: FavoritesProviderProps) {
  const [favoriteIds, setFavoriteIds] =
    useState<string[]>([]);

  function isFavorite(placeId: string) {
    return favoriteIds.includes(placeId);
  }

  function toggleFavorite(placeId: string) {
    setFavoriteIds((currentIds) =>
      currentIds.includes(placeId)
        ? currentIds.filter(
            (currentId) => currentId !== placeId,
          )
        : [...currentIds, placeId],
    );
  }

  return (
    <FavoritesContext.Provider
      value={{
        favoriteIds,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error(
      'useFavorites must be used inside FavoritesProvider',
    );
  }

  return context;
}
