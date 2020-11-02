import { useEffect, useState } from 'react';
import { getCharacterById, getCharacters } from '../services/office-api';

export const useGetCharacters = () => {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters()
            .then(fetchedCharacters => setCharacters(fetchedCharacters))
            .finally(() => setLoading(false));
    }, []);

    return {
        loading,
        characters
    };
};

export const useGetCharacterById = (id) => {
    const [loading, setLoading] = useState(true);
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        getCharacterById(id)
            .then(fetchedCharacter => setCharacter(fetchedCharacter))
            .finally(() => setLoading(false));
    }, []);

    return {
        loading,
        character
    };
};