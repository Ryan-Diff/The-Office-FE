import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCharacterById } from '../../hooks/UseCharacters';

const CharacterDetails = () => {
    const { id } = useParams();
    const { loading, character } = useGetCharacterById(id);
    if (loading) return <h1>Loading...</h1>;

    return (
        <figure key='character-details' data-testid='character-details'>
            <h2>{character.name}</h2>
            <h3>{character.position}</h3>
            <img src={character.imageUrl} alt={name} />
            <figcaption>{character.quote}</figcaption>
            <figcaption>{character.favoriteDessert}</figcaption>
        </figure>
    )
};

export default CharacterDetails;