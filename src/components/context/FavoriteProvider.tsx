'use client';
import { checkForCookiesAsArray } from '@/actions/checkForCookiesArray';
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface FavoriteContextType {
    favorites: string[];
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export const useFavorites = () => {
    const context = useContext(FavoriteContext);
    if (context === undefined) {
        throw new Error('useFavorites deve ser usado dentro de um FavoriteProvider');
    }
    return context;
};

interface FavoriteProviderProps {
    children: ReactNode;
}

export const FavoriteProvider: React.FC<FavoriteProviderProps> = ({ children }) => {
    const [favorites, setFavorites] = useState<string[]>([]);

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        const loadFavorites = async () => {
            const initialFavorites = await checkForCookiesAsArray('favorites');
            setFavorites(initialFavorites);
        };

        loadFavorites();

        console.log('Favorites loaded:', favorites)
    }, []);

    const addFavorite = (id: string) => {
        setFavorites((prevFavorites) => [...prevFavorites, id]);
    };

    const removeFavorite = (id: string) => {
        setFavorites((prevFavorites) => prevFavorites.filter(fav => fav !== id));
    };

    return (
        <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
};