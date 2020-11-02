import { useEffect, useState } from 'react';
import { postCharacter } from '../services/office-api';

export const usePostCharacter = () => {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        postCharacter()
            .then(fetchedCharacters => setCharacters(fetchedCharacters))
            .finally(() => setLoading(false));
    }, []);

    return {
        loading,
        characters
    };
};