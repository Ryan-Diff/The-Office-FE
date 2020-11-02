import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterDetails from './CharacterDetails'; 
import { getCharacterById } from '../../services/office-api';
import { MemoryRouter, Route } from 'react-router-dom';

jest.mock('../../services/office-api.js');

describe('CharacterDetails component', () => {
    it('Displays a characters details', () => {
      getCharacterById.mockResolvedValue({
        id: 1,
        name: 'Dwight',
        position: 'Assistant to the Regional Manager',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/cd/Dwight_Schrute.jpg',
        quote: 'Identity Theft is not a joke Jim!',
        favoriteDessert: 'Can of Pickled Beets from his survival shelter'
      });
  
      render(<MemoryRouter initialEntries={['/characters/1']}>
      <Route path="/characters/:id" component={CharacterDetails}/>
    </MemoryRouter>);
  
      screen.getByText('Loading...');  
  
      return waitFor(() => {
        screen.getByText('Dwight');
        screen.getByText('Assistant to the Regional Manager');
        screen.getByText('Dwight'); 
        screen.getByText('Identity Theft is not a joke Jim!');
        screen.getByText('Can of Pickled Beets from his survival shelter'); 
      });
    });
  });
