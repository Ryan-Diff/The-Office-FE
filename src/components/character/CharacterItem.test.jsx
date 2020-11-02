import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterItem from './CharacterItem';

describe('CharacterItem component', () => {
    afterEach(() => cleanup());

    it('renders a single character', () => {
        const { asFragment } = render(
            <CharacterItem
                name='Dwight Schrute'
                imageUrl='https://upload.wikimedia.org/wikipedia/en/c/cd/Dwight_Schrute.jpg'
            />);
        expect(asFragment()).toMatchSnapshot();
    });
});