import React from 'react';
import { Link } from 'react-router-dom';
import { useGetCharacters } from '../../hooks/UseCharacters';
import CharacterItem from './CharacterItem';

const CharacterList = () => {
    const { loading, characters } = useGetCharacters();
    if(loading) return <h1>Loading...</h1>;

    const characterElements = characters.map(character => (
        <li key={character.id}>
            <Link to={`/characters/${character.id}`}>
                <CharacterItem {...character} />
            </Link>
        </li>
    ));

    return (
        <ul data-testid='character-list'>
            {characterElements}
        </ul>
    )
};

export default CharacterList;