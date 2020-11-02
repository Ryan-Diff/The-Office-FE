import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterForm from './Character-Form';

describe('Character form component', () => {
    afterEach(() => cleanup());
    it('renders CharacterForm', () => {
        const { asFragment } = render(
            <CharacterForm
              name= 'Dwight'
              position= 'Assistant to the Regional Manager'
              quote= 'Identity theft is not a joke Jim!'
              imageUrl= 'https://upload.wikimedia.org/wikipedia/en/c/cd/Dwight_Schrute.jpg'
              favoriteDessert= 'Can of Pickled Beets from his survivor shelter'
              onChange={() =>{}}
              onSubmit={() =>{}}
              />);
              expect(asFragment()).toMatchSnapshot();
    });
});