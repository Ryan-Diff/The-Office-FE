import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterList from './CharacterList';
import { getCharacters } from '../../services/office-api';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../services/office-api.js');

describe('CharacterList component', () => {
    it('Displays a list of characters', async() => {
      getCharacters.mockResolvedValue([
        {  
            name: 'Dwight',
            position: 'Assistant to the Regional Manager',
            quote: 'Identity Theft is not a joke Jim!',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/cd/Dwight_Schrute.jpg',
            favoriteDessert: 'Can of Pickled Beets from his survival shelter'
        }
      ])
      
      render(<MemoryRouter>
          <CharacterList />
        </MemoryRouter> 
      );
  
      screen.getByText('Loading...');
  
      const characterList = await screen.findByTestId('character-list');
  
      return waitFor(() => {
        expect(characterList).not.toBeEmptyDOMElement();
      });
    });
  });