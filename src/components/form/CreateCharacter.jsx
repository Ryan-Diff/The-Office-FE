import React, { useState } from 'react';
import CharacterForm from '../controls/Character-Form';
import { postCharacter } from '../../services/office-api';

export const CreateCharacter = () => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [quote, setQuote] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [favoriteDessert, setFavoriteDessert] = useState('');

    const handleChange = ({ target }) => {
        if(target.name === 'name') setName(target.value);
        if(target.name === 'position') setPosition(target.value);
        if(target.name === 'quote') setQuote(target.value);
        if(target.name === 'imageUrl') setImageUrl(target.value);
        if(target.name === 'favoriteDessert') setFavoriteDessert(target.value);
        console.log(name);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postCharacter(name, position, quote, imageUrl, favoriteDessert)
        .then(console.log);
    };

    return (
        <>
            <CharacterForm
              onChange={handleChange}
              onSubmit={handleSubmit}
              />
        </>
    );
};

